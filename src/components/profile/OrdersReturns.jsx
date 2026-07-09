import { useState, useEffect, useRef } from "react";
import api from "../../api/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import OrderInvoice from "./OrderInvoice";

function OrdersReturns() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 1;
  const invoiceRefs = useRef({});

  const lastIndex = currentPage * ordersPerPage;
  const firstIndex = lastIndex - ordersPerPage;
  const currentOrders = orders.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("api/user/orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(response.data.orders || []);
    } catch (error) {
      console.log("Orders fetch error:", error);
      setError("Failed to load orders");
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDownloadInvoice = async (order) => {
    try {
      console.log("Download clicked:", order);

      const invoiceElement = invoiceRefs.current[order.id];
      console.log("Invoice element:", invoiceElement);

      if (!invoiceElement) {
        alert("Invoice element not found");
        return;
      }

      const canvas = await html2canvas(invoiceElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      console.log("Canvas created");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`invoice-${order.orderNumber || order.id}.pdf`);
      console.log("PDF saved");
    } catch (err) {
      console.error("Invoice download failed:", err);
      alert("Invoice download failed. Check console.");
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No orders found.
      </div>
    );
  }

  return (
    <div className="w-full">
      {currentOrders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-[#e5e5e5] mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b p-4 md:p-6">
            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                Order Number
              </p>
              <p className="mt-1 text-sm">{order.orderNumber}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                Order Date
              </p>
              <p className="mt-1 text-sm">{order.orderDate}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                Total Amount
              </p>
              <p className="mt-1 text-sm">₹ {order.totalAmount}</p>
            </div>

            <div className="text-left md:text-right">
              <button
                onClick={() => handleDownloadInvoice(order)}
                className="uppercase text-[11px] tracking-[2px]"
              >
                Download Invoice
              </button>
            </div>
          </div>

          {(order.products || []).map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-4 p-4 md:p-6 border-b"
            >
              <div className="flex gap-4">
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="w-20 h-24 object-cover"
                />

                <div>
                  <h3 className="text-base text-[#222]">{product.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Size: {product.size || "-"} | Qty: {product.qty}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <p className="text-[11px] uppercase tracking-[2px]">
                      {product.status}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-medium text-right">₹ {product.price}</p>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-end gap-3 p-4 md:p-6">
            <button className="border px-6 py-3 text-[11px] uppercase tracking-[2px]">
              Return / Exchange
            </button>

            <button className="bg-[#4a4a4a] text-white px-6 py-3 text-[11px] uppercase tracking-[2px]">
              Track Order
            </button>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="text-lg disabled:opacity-30"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 text-sm border ${currentPage === index + 1 ? "bg-black text-white" : "bg-white"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="text-lg disabled:opacity-30"
          >
            ›
          </button>
        </div>
      )}

      <div className="fixed -left-[9999px] top-0">
        {orders.map((order) => (
          <div
            key={order.id}
            ref={(el) => {
              if (el) invoiceRefs.current[order.id] = el;
            }}
          >
            <OrderInvoice order={order} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersReturns;
