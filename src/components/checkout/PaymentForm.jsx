import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import api from "../../api/api";

export default function PaymentForm({ onBack }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  
  const handlePayment = async () => {
    setLoading(true);
  try {
    // Create Razorpay Order
    const { data } = await api.post("api/user/create-order/");

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
        },
      },

      handler: async function (response) {
        
        try {
          const verify = await api.post(
            "api/user/verify-payment/",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verify.data.success) {
            setLoading(false);
            alert("Payment Successful");
            // navigate("/payment-success");
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
          alert("Payment verification failed");
        }
        },

      prefill: {
        name: "",
        email: "",
        contact: "",
      },

      theme: {
        color: "#d8b98a",
      },
    };

    if (!window.Razorpay) {
      setLoading(false);
      alert("Razorpay SDK failed to load.");
      return;
    }

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
        setLoading(false);
        console.log(response.error);
        alert("Payment Failed");
    });

    razorpay.open();

  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};




  return (
    <>
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <FiCreditCard className="text-[#d8b98a]" size={18} />
        <h2 className="uppercase tracking-[3px] text-sm font-medium">
          Payment
        </h2>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* Payment Methods */}
      <div className="space-y-4">
        <label
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${
            paymentMethod === "card"
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
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${
            paymentMethod === "upi"
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
          className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition ${
            paymentMethod === "cod"
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


      {/* UPI Form
      {paymentMethod === "upi" && (
        <div className="mt-8 border border-gray-200 rounded-sm p-5 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="ENTER UPI ID (E.G. MOBILE@YBL)"
              className="flex-1 border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#d8b98a] text-xs uppercase tracking-[0.5px]"
            />
            <button className="bg-black hover:bg-neutral-800 text-white text-[11px] tracking-[1.5px] uppercase px-6 py-3 transition cursor-pointer">
              Verify
            </button>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[1px]">
            Please enter your registered UPI ID to verify and request payment.
          </p>
        </div>
      )} */}

      {/* Cash on Delivery details */}
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

      {/* Info */}
      <p className="mt-5 text-xs text-gray-500">
        Your payment information will be securely processed during checkout.
      </p>

      {/* Action Buttons Container (Responsive: stack on mobile, row on tablet+) */}
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
              // Call your COD API here
            } else {
              handlePayment();
            }
          }}
          className="flex-1 bg-[#d8b98a] hover:bg-[#a77a33] text-black py-4 uppercase tracking-[3px] text-xs transition cursor-pointer"
        >
          {
            loading
              ? "Processing..."
              : paymentMethod === "cod"
                ? "Place Order"
                : "Pay Now"
          }
        </button>
      </div>
    </>
  );
}