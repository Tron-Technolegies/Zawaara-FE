import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function PaymentForm({ onBack, order, form }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    setStatusMsg("");
    setStatusType("");

    try {
      const fullName = `${form?.first_name || ""} ${form?.last_name || ""}`.trim();

      const shippingAddress = `${fullName}
${form?.address_line_1 || ""}${form?.address_line_2 ? ", " + form.address_line_2 : ""}
${form?.city || ""}, ${form?.state || ""} - ${form?.postal_code || ""}
${form?.country || ""}`;

      // Create Razorpay order
      const { data } = await api.post("api/user/create-order/", {
        email: form?.email || "",
        phone: form?.phone || "",
        shipping_address: shippingAddress,
        coupon_code: order?.couponCode || "",
      });

      if (!window.Razorpay) {
        setLoading(false);
        setStatusMsg("Payment gateway failed to load. Please refresh and try again.");
        setStatusType("error");
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Zawara",
        description: "Order Payment",
        order_id: data.order_id,

        modal: {
          ondismiss: function () {
            setLoading(false);
            setStatusMsg("Payment was cancelled.");
            setStatusType("error");
          },
        },

        handler: async function (response) {
          try {
            const verify = await api.post("api/user/verify-payment/", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: form?.email || "",
              phone: form?.phone || "",
              shipping_address: shippingAddress,
              coupon_code: data.coupon_code || "",
              discount_amount: data.discount_amount || 0,
            });

            if (verify.data.success) {
              setLoading(false);
              setStatusMsg("Payment successful! Redirecting...");
              setStatusType("success");

              setTimeout(() => {
                navigate("/");
              }, 1500);
            } else {
              setLoading(false);
              setStatusMsg("Payment verification failed.");
              setStatusType("error");
            }
          } catch (error) {
            setLoading(false);
            setStatusMsg("Payment verification failed. Please contact support.");
            setStatusType("error");
            console.error(error);
          }
        },

        prefill: {
          name: fullName,
          email: form?.email || "",
          contact: form?.phone || "",
        },

        theme: {
          color: "#d8b98a",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        setLoading(false);
        setStatusMsg("Payment failed. Please try again.");
        setStatusType("error");
        console.error(response.error);
      });

      razorpay.open();
    } catch (error) {
      setLoading(false);
      setStatusMsg("Could not initiate payment. Please try again.");
      setStatusType("error");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <FiCreditCard className="text-[#d8b98a]" size={18} />
        <h2 className="uppercase tracking-[3px] text-sm font-medium">
          Payment
        </h2>
      </div>

      <hr className="mb-6 border-gray-200" />

      {statusMsg && (
        <div
          className={`mb-6 px-4 py-3 rounded-sm text-sm ${statusType === "success"
            ? "bg-green-50 text-green-700 border border-green-200"
            : "bg-red-50 text-red-600 border border-red-200"
            }`}
        >
          {statusMsg}
        </div>
      )}

      <div className="space-y-4">
        <label
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${paymentMethod === "card"
            ? "border-[#d8b98a] bg-[#fcfaf7]"
            : "border-gray-200 hover:border-[#d8b98a]"
            }`}
        >
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="accent-[#d8b98a]"
          />
          <span className="text-sm">Credit / Debit Card</span>
        </label>

        <label
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${paymentMethod === "upi"
            ? "border-[#d8b98a] bg-[#fcfaf7]"
            : "border-gray-200 hover:border-[#d8b98a]"
            }`}
        >
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
            className="accent-[#d8b98a]"
          />
          <span className="text-sm">UPI</span>
        </label>

        <label
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${paymentMethod === "cod"
            ? "border-[#d8b98a] bg-[#fcfaf7]"
            : "border-gray-200 hover:border-[#d8b98a]"
            }`}
        >
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
            className="accent-[#d8b98a]"
          />
          <span className="text-sm">Cash on Delivery</span>
        </label>
      </div>

      {paymentMethod === "cod" && (
        <div className="mt-8 border border-gray-200 rounded-sm p-5 bg-white space-y-3">
          <p className="text-sm text-[#333]">
            Pay in cash upon delivery of your order.
          </p>
          <p className="text-xs text-gray-500">
            An additional COD handling charge of ₹50 may apply.
          </p>
        </div>
      )}

      <p className="mt-5 text-xs text-gray-500">
        Your payment information will be securely processed during checkout.
      </p>

      <div className="flex flex-col-reverse sm:flex-row gap-4 mt-8">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 text-black py-4 px-8 uppercase tracking-[3px] text-xs transition cursor-pointer"
          >
            Back
          </button>
        )}

        <button
          type="button"
          disabled={loading}
          onClick={() => {
            if (paymentMethod === "cod") {
              // COD logic later
            } else {
              handlePayment();
            }
          }}
          className="flex-1 bg-[#d8b98a] hover:bg-[#a77a33] text-black py-4 uppercase tracking-[3px] text-xs transition cursor-pointer"
        >
          {loading
            ? "Processing..."
            : paymentMethod === "cod"
              ? "Place Order"
              : "Pay Now"}
        </button>
      </div>
    </>
  );
}