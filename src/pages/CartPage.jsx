import { useState } from "react";
import { FiX, FiShare2 } from "react-icons/fi";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Red Beige Nazia Kurti",
      brand: "Ritu Kumar",
      image: "/products/product-1.jpg",
      size: "S",
      quantity: 1,
      price: 12500,
    },
    {
      id: 2,
      name: "Emerald Silk Suit",
      brand: "Ritu Kumar",
      image: "/products/product-2.jpg",
      size: "M",
      quantity: 1,
      price: 18500,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
                  <div className="flex flex-col md:flex-row gap-5">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-[140px] h-[190px] object-cover"
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            {item.brand}
                          </h3>

                          <p className="text-[#777] mt-1">
                            {item.name}
                          </p>
                        </div>

                        <button>
                          <FiX />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-6">

                        <select className="border px-3 py-2">
                          <option>Size: {item.size}</option>
                        </select>

                        <div className="flex border">
                          <button className="px-3 py-2">-</button>
                          <span className="px-4 py-2 border-x">
                            {item.quantity}
                          </span>
                          <button className="px-3 py-2">+</button>
                        </div>

                      </div>

                      <div className="flex justify-between mt-12">
                        <p>
                          Unit Price: ₹
                          {item.price.toLocaleString()}
                        </p>

                        <p className="font-medium">
                          Total Price: ₹
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
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

            {/* Coupon */}
            <div className="bg-white border p-5">
              <p className="uppercase text-[11px] tracking-[2px] mb-4">
                Coupons
              </p>

              <div className="bg-[#edf7f1] p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">Apply Coupons</p>
                  <p className="text-xs text-green-700">
                    View all offers
                  </p>
                </div>

                <span>›</span>
              </div>
            </div>

            {/* Offer */}
            <div className="bg-white border p-4 flex justify-between">
              <div>
                <p className="font-medium">WELCOME10</p>
                <p className="text-xs">
                  Get Flat 10% Off On Your 1st Order
                </p>
              </div>

              <button>📋</button>
            </div>

            {/* Summary */}
            <div className="bg-white border p-5 sticky top-28">
              <h3 className="uppercase text-[11px] tracking-[2px] mb-6">
                Price Summary ({cartItems.length} Item)
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-xl font-serif">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <button className="w-full bg-[#4a4a4a] text-white py-4 mt-6 uppercase tracking-[3px] text-[11px]">
                Checkout
              </button>
            </div>

            {/* Share Cart */}
            <div className="bg-white border p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiShare2 />
                <span className="uppercase text-[11px] tracking-[2px]">
                  Share Shopping Cart
                </span>
              </div>

              <button className="uppercase text-[11px] tracking-[2px]">
                Share
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CartPage;