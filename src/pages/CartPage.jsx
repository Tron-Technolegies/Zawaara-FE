import { useState,useEffect } from "react";
import { FiX, FiShare2 } from "react-icons/fi";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showCoupons, setShowCoupons] = useState(false);
  const [coupons, setCoupons] = useState([]);


  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.get("api/user/view_cart/");

      setCartItems(response.data.items);
      setSubtotal(response.data.subtotal);
      setTotal(response.data.total);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}

const removeItem = async (itemId) => {
  try {
    await api.delete(
      `api/user/remove_cart_item/${itemId}/`
    );

    fetchCart();

  } catch (error) {
    console.error(error);
  }
};

   
 const updateQuantity = async (itemId,quantity)=>{
  try{
    await api.patch(`api/user/update_cart_quantity/${itemId}/`,
      {
        quantity
      }
    );

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );

    fetchCart();
      }catch(error){
        console.log(error);
      }
    };


  const applyCoupon = async (code = couponCode) => {
  try {
    const response = await api.post(
      "api/user/apply-coupon/",
      {
        code,
        subtotal,
      }
    );

    setDiscount(response.data.discount);
    setTotal(response.data.total);

  } catch (error) {
    alert(error.response?.data?.error);
  }
};
const fetchCoupons = async () => {

    try{

        const response = await api.get(
            "api/user/available-coupons/"
        );

        setCoupons(response.data);

        setShowCoupons(true);

    }

    catch(error){

        console.log(error);

    }

}

const selectCoupon = (coupon) => {
  setCouponCode(coupon.code);

  setShowCoupons(false);

  applyCoupon(coupon.code);
};

  return (
    <section className="bg-[#f8f7f4] py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">

          {/* LEFT SIDE */}
          <div>

            {/* Cart Header */}
            <div className="bg-white border border-[#e5e5e5] p-6 mb-6">
              <h2 className="font-serif text-4xl">
                Your Bag
                <span className="text-sm text-gray-500 ml-2">
                  ({cartItems.length} item)
                </span>
              </h2>
            </div>

            {/* Products */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5e5e5] p-5"
                >
                  <div className="flex gap-4 md:gap-5">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[90px] sm:w-[120px] md:w-[140px] h-[120px] sm:h-[160px] md:h-[190px] shrink-0 object-cover"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="text-[#777] mt-1 text-sm md:text-base">
                            {item.name}
                          </p>
                        </div>

                        <button onClick={() => removeItem(item.id)} className="cursor-pointer shrink-0">
                          <FiX />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 md:mt-6">

                        <select className="border px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm">
                          <option>Size: {item.size}</option>
                        </select>

                        <div className="flex border text-xs sm:text-sm">
                          <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-2 sm:px-3 py-1 sm:py-2"
                                disabled={item.quantity === 1}
                              >
                                -
                              </button>
                          <span className="px-3 sm:px-4 py-1 sm:py-2 border-x">
                            {item.quantity}
                          </span>
                          <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-2 sm:px-3 py-1 sm:py-2"
                              >
                                +
                              </button>
                        </div>

                      </div>

                      <div className="flex justify-between mt-6 md:mt-12 text-xs sm:text-sm md:text-base">
                        <p>
                          Unit Price: ₹
                          {item.price}
                        </p>

                        <p className="font-medium">
                          Total Price: ₹
                          {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">

            <div className="bg-white border p-5">

            <p className="uppercase text-[11px] tracking-[2px] mb-4">
              Coupons
            </p>

            <div className="bg-[#edf7f1] p-4">

              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon"
                className="border w-full px-3 py-2 mb-3"
              />
              {couponCode && (
                <p className="text-green-600 text-sm mt-2">
                  Applied Coupon: {couponCode}
                </p>
              )}

              <div className="flex justify-between items-center">

                <button
                  onClick={applyCoupon}
                  disabled={!couponCode.trim()}
                  className="bg-black text-white px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Apply
                </button>

                <button
                  onClick={fetchCoupons}
                  className="text-green-700 text-sm"
                >
                  View all offers
                </button>

              </div>

            </div>

          </div>

            {/* Coupon */}
            {
            showCoupons && (

                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

                    <div className="bg-white w-[450px] rounded-lg p-6">

                    <h2 className="text-xl font-bold mb-4">
                    Available Coupons
                    </h2>

                    {
                    coupons.map((coupon)=>(

                    <div
                    key={coupon.id}
                    className="border rounded p-4 mb-3"
                    >

                    <h3 className="font-semibold">
                    {coupon.code}
                    </h3>

                    <p className="text-sm">
                    {coupon.description}
                    </p>

                    <button
                    onClick={()=>selectCoupon(coupon)}
                    className="bg-black text-white px-4 py-2 mt-3"
                    >
                    Apply
                    </button>

                    </div>

                    ))
                    }

                    <button
                    onClick={()=>setShowCoupons(false)}
                    className="mt-3"
                    >
                    Close
                    </button>

                    </div>

                    </div>

                    )
                    }

            {/* Sticky Container for Summary & Share Cart */}
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Summary */}
              <div className="bg-white border p-5">
                <h3 className="uppercase text-[11px] tracking-[2px] mb-6">
                  Price Summary ({cartItems.length} Item)
                </h3>

                <div className="flex justify-between">
                    <span>Subtotal</span>

                    <span>
                        ₹{subtotal}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Discount</span>

                    <span className="text-green-600">
                        -₹{discount}
                    </span>
                </div>

                <hr/>

                <div className="flex justify-between text-xl">
                    <span>Total</span>

                    <span>
                        ₹{total}
                    </span>
                </div>
                <button
                  onClick={() =>
                    navigate("/checkout", {
                      state: {
                        items: cartItems,
                        subtotal,
                        discount,
                        couponCode,
                        total,
                      },
                    })
                  }
                  className="w-full bg-[#4a4a4a] text-white py-4 mt-6 uppercase tracking-[3px] text-[11px] cursor-pointer"
                >
                  Checkout
                </button>
              </div>

              {/* Share Cart */}
              {/* <div className="bg-white border p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FiShare2 />
                  <span className="uppercase text-[11px] tracking-[2px]">
                    Share Shopping Cart
                  </span>
                </div>

                <button className="uppercase text-[11px] tracking-[2px]">
                  Share
                </button>
              </div> */}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CartPage;