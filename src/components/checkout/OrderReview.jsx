import { FiCheckCircle } from "react-icons/fi";
import { useEffect,useState } from "react";
import api from "../../api/api"


export default function OrderReview({ form, order, onBack, onContinue }) {
  const [address,setAddress]=useState(null);
  useEffect(()=>{
    fetchAddress();
  },[]);

  const fetchAddress = async () => {
    try{
      const response = await api.get("api/user/address/default/");
      setAddress(response.data);
    }catch(error){
      console.log(error);
    }
  };




  return (
    <>
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <FiCheckCircle className="text-[#d8b98a]" size={18} />

        <h2 className="uppercase tracking-[3px] text-sm font-medium">
          Review & Place Order
        </h2>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* Shipping Address */}
      <div className="bg-[#fafafa] border border-gray-200 rounded-sm p-5 space-y-2 text-sm">
        <h3 className="font-semibold text-[#222]">Shipping Address</h3>

        {address ? (
          <>
            <p className="font-medium">{address.full_name}</p>
            {address.email && <p className="text-gray-500">{address.email}</p>}
            <p>{address.address_line_1}</p>
            {address.address_line_2 && <p>{address.address_line_2}</p>}
            <p>{address.city}, {address.state} - {address.postal_code}</p>
            <p>{address.country}</p>
            <p>{address.phone}</p>
          </>
        ) : form && form.address_line_1 ? (
          <>
            <p className="font-medium">
              {[form.first_name, form.last_name].filter(Boolean).join(" ")}
            </p>
            {form.email && <p className="text-gray-500">{form.email}</p>}
            <p>{form.address_line_1}</p>
            {form.address_line_2 && <p>{form.address_line_2}</p>}
            <p>{form.city}, {form.state} - {form.postal_code}</p>
            <p>{form.country}</p>
            <p>{form.phone}</p>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-sm px-3 py-2 text-xs">
              No saved address found. Please add a shipping address to continue.
            </p>
            <a
              href="/profile"
              className="text-[#d8b98a] underline text-xs"
            >
              + Add a shipping address in your profile
            </a>
          </div>
        )}
      </div>

      {/* Order Items */}
      {order && order.items && order.items.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-[#222] text-sm mb-4">
            Order Items ({order.items.length})
          </h3>

          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-[#fafafa] border border-gray-200 rounded-sm p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded-sm"
                />

                <div className="flex-1">
                  <p className="font-serif text-sm">{item.name}</p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                    {item.size && <span>Size: {item.size}</span>}
                    <span>Qty: {item.quantity}</span>
                  </div>

                  <p className="mt-2 font-medium text-sm">
                    ₹ {Number(item.price).toLocaleString()}
                    {item.quantity > 1 && (
                      <span className="text-xs text-gray-500 ml-2">
                        (₹ {Number(item.price * item.quantity).toLocaleString()} total)
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="mt-4 bg-[#fafafa] border border-gray-200 rounded-sm p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹ {Number(order.subtotal).toLocaleString()}</span>
            </div>

            {order.discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>
                  Discount
                  {order.couponCode && (
                    <span className="ml-1 text-xs text-gray-400">({order.couponCode})</span>
                  )}
                </span>
                <span>- ₹ {Number(order.discount).toLocaleString()}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>{order.shipping === 0 ? "Free" : `₹ ${order.shipping}`}</span>
            </div>

            <hr className="my-3 border-gray-200" />

            <div className="flex justify-between font-serif text-lg">
              <span>Total</span>
              <span>₹ {Number(order.total).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Message */}
      <div className="mt-6">
        <p className="text-sm text-[#777] leading-7">
          Please review your shipping information and order details before placing
          your order.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={onBack}
          className="
            flex-1
            border
            border-gray-300
            py-4
            uppercase
            tracking-[3px]
            text-xs
            hover:bg-gray-100
            transition
            cursor-pointer
          "
        >
          Back
        </button>

        <button
          onClick={onContinue}
          className="
            flex-1
            bg-[#d8b98a]
            hover:bg-[#a77a33]
            text-black
            py-4
            uppercase
            tracking-[3px]
            text-xs
            transition
            cursor-pointer
          "
        >
          Place Order
        </button>
      </div>
    </>
  );
}