import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderReview from "../components/checkout/OrderReview";
import PaymentForm from "../components/checkout/PaymentForm";
import api from "../api/api";

function CheckoutPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

  const [order, setOrder] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
    items: [],
    currency: "INR",
  });

  // Always fetch checkout summary directly from the backend to ensure freshness
  useEffect(() => {
    fetchCheckoutSummary();
  }, []);

  const fetchCheckoutSummary = async () => {
    try {
      setLoading(true);
      const response = await api.get("api/user/checkout-summary/");
      const { items, subtotal, shipping, total, currency } = response.data;

      if (!items || items.length === 0) {
        navigate("/cart");
        return;
      }

      setOrder({
        subtotal: subtotal || 0,
        shipping: shipping || 0,
        total: total || 0,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          quantity: item.quantity,
          price: item.price,
          size: item.size || null,
          total: Number(item.price) * item.quantity,
        })),
        currency: currency || "INR",
      });
    } catch (error) {
      console.error("Failed to fetch checkout summary:", error);
      navigate("/cart");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const getCurrencySymbol = (currencyCode) => {
    if (!currencyCode || currencyCode === "INR") return "₹";
    return currencyCode + " ";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f8f7f4]">
        <p className="text-gray-500 uppercase tracking-[3px] text-sm">
          Loading checkout...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#f8f7f4] min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-[6px] uppercase">
            Checkout
          </h1>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center items-center mb-12">

          <div className="flex items-center">

            {/* Shipping */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                ${
                  step >= 1
                    ? "bg-[#d8b98a] text-white"
                    : "bg-gray-200"
                }`}
              >
                1
              </div>

              <p className="mt-2 text-xs uppercase tracking-[2px]">
                Shipping
              </p>
            </div>

            <div className="w-20 md:w-40 h-[1px] bg-gray-300"></div>

            {/* Review */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                ${
                  step >= 2
                    ? "bg-[#d8b98a] text-white"
                    : "bg-gray-200"
                }`}
              >
                2
              </div>

              <p className="mt-2 text-xs uppercase tracking-[2px]">
                Review
              </p>
            </div>

            <div className="w-20 md:w-40 h-[1px] bg-gray-300"></div>

            {/* Payment */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                ${
                  step >= 3
                    ? "bg-[#d8b98a] text-white"
                    : "bg-gray-200"
                }`}
              >
                3
              </div>

              <p className="mt-2 text-xs uppercase tracking-[2px]">
                Payment
              </p>
            </div>

          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* Left Side */}
          <div className="bg-white p-8 border border-gray-200">

            {step === 1 && (
              <ShippingForm
                form={form}
                setForm={setForm}
                onContinue={nextStep}
              />
            )}

            {step === 2 && (
              <OrderReview
                form={form}
                order={order}
                onBack={prevStep}
                onContinue={nextStep}
              />
            )}

            {step === 3 && (
              <PaymentForm onBack={prevStep}/>
            )}

          </div>

          {/* Right Side – Order Summary */}
          <div>

            <div className="bg-white border border-gray-200 p-6 sticky top-24">

              <h2 className="uppercase tracking-[3px] text-xs mb-6">
                Order Summary ({order.items.length}{" "}
                {order.items.length === 1 ? "Item" : "Items"})
              </h2>

              {/* Products */}
              <div className="space-y-5">

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-serif text-sm">
                        {item.name}
                      </h3>

                      {item.size && (
                        <p className="text-xs text-gray-500 mt-1">
                          Size : {item.size}
                        </p>
                      )}

                      <p className="text-xs text-gray-500 mt-1">
                        Qty : {item.quantity}
                      </p>

                      <p className="mt-2 font-medium">
                        {getCurrencySymbol(order.currency)} {Number(item.price).toLocaleString()}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

              <hr className="my-6" />

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    {getCurrencySymbol(order.currency)} {Number(order.subtotal).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {Number(order.shipping) === 0
                      ? "Free"
                      : `${getCurrencySymbol(order.currency)} ${Number(order.shipping).toLocaleString()}`}
                  </span>
                </div>

              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-xl font-serif">

                <span>Total</span>

                <span>
                  {getCurrencySymbol(order.currency)} {Number(order.total).toLocaleString()}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CheckoutPage;