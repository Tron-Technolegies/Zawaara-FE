import { useState } from "react";
function OrdersReturns() {
    const orders = [
    {
      id: 1,
      orderNumber: "#RK-984532",
      orderDate: "Oct 24, 2023",
      totalAmount: "₹ 36,950",
      products: [
        {
          image: "/orders/order-1.jpg",
          name: "Midnight Silk Kurta Set",
          size: "M",
          qty: 1,
          price: "₹ 12,950",
          status: "IN TRANSIT - ARRIVING OCT 28",
          color: "bg-blue-500",
        },
        {
          image: "/orders/order-2.jpg",
          name: "Emerald Velvet Suit",
          size: "S",
          qty: 1,
          price: "₹ 24,000",
          status: "IN TRANSIT - ARRIVING OCT 28",
          color: "bg-blue-500",
        },
      ],
    },
    {
      id: 2,
      orderNumber: "#RK-971104",
      orderDate: "Sep 12, 2023",
      totalAmount: "₹ 14,400",
      products: [
        {
          image: "/orders/order-3.jpg",
          name: "Rose Zari Tunic",
          size: "M",
          qty: 1,
          price: "₹ 14,400",
          status: "DELIVERED",
          color: "bg-green-500",
        },
      ],
    },
    {
      id: 3,
      orderNumber: "#RK-958221",
      orderDate: "Aug 05, 2023",
      totalAmount: "₹ 18,000",
      products: [
        {
          image: "/orders/order-4.jpg",
          name: "Oasis Printed Maxi",
          size: "L",
          qty: 1,
          price: "₹ 18,000",
          status: "RETURNED & REFUNDED",
          color: "bg-gray-400",
        },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 1;

  const lastIndex = currentPage * ordersPerPage;
  const firstIndex = lastIndex - ordersPerPage;

  const currentOrders = orders.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    <div className="w-full">
      {currentOrders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-[#e5e5e5] mb-6"
        >
          {/* Header */}
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
              <p className="mt-1 text-sm">{order.totalAmount}</p>
            </div>

            <div className="text-left md:text-right">
              <button className="uppercase text-[11px] tracking-[2px]">
                View Invoice
              </button>
            </div>
          </div>

          {/* Products */}
          {order.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-4 p-4 md:p-6 border-b"
            >
              <div className="flex gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover"
                />

                <div>
                  <h3 className="text-base text-[#222]">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Size: {product.size} | Qty: {product.qty}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <span
                      className={`w-2 h-2 rounded-full ${product.color}`}
                    />

                    <p className="text-[11px] uppercase tracking-[2px]">
                      {product.status}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-medium text-right">
                {product.price}
              </p>
            </div>
          ))}

          {/* Buttons */}
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

      {/* Pagination */}
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
            className={`w-8 h-8 text-sm border ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "bg-white"
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
    </div>
  )
}

export default OrdersReturns