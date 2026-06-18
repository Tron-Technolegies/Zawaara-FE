import { useState } from "react";
import { FiX } from "react-icons/fi";

function WishlistPage() {
    const products = [
        {
          id: 1,
          category: "Dresses",
          name: "Oasis Printed Maxi",
          price: "₹ 18,000",
          image: "/wishlist/wishlist_image1.jpg",
        },
        {
          id: 2,
          category: "Tunics",
          name: "Rose Zari Tunic",
          price: "₹ 14,400",
          image: "/wishlist/wishlist_image2.jpg",
        },
        {
          id: 3,
          category: "Suits",
          name: "Emerald Velvet Suit",
          price: "₹ 24,000",
          image: "/wishlist/wishlist_image3.jpg",
        },
        {
          id: 4,
          category: "Sarees",
          name: "Ivory Chanderi Saree",
          price: "₹ 32,500",
          image: "/wishlist/wishlist_image4.jpg",
        },
        {
          id: 5,
          category: "Lehengas",
          name: "Crimson Bridal Lehenga",
          price: "₹ 85,000",
          image: "/wishlist/wishlist_image5.jpg",
        },
        {
          id: 6,
          category: "Dresses",
          name: "Oasis Printed Maxi",
          price: "₹ 18,000",
          image: "/wishlist/wishlist_image6.jpg",
        },
      ];
    
      const [wishlist, setWishlist] = useState(products);
    
      const removeItem = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
      };
  return (
    <section className="bg-[#f8f7f4] py-10 md:py-14 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-[5px] uppercase text-[#222]">
            Your Wishlist
          </h1>

          <p className="mt-3 text-[11px] tracking-[2px] uppercase text-[#888]">
            Saved Items • {wishlist.length} Items
          </p>

          <div className="w-12 h-[1px] bg-[#d8d8d8] mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {wishlist.map((product) => (
            <div key={product.id} className="group">

              {/* Image */}
              <div className="relative overflow-hidden bg-white">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover"
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(product.id)}
                  className="
                    absolute top-3 right-3
                    w-7 h-7
                    rounded-full
                    bg-white
                    shadow
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <FiX className="text-[#555]" />
                </button>

                {/* Move To Bag */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    opacity-0
                    group-hover:opacity-100
                    transition duration-300
                  "
                >
                  <button
                    className="
                      w-full
                      bg-white
                      text-[#222]
                      uppercase
                      tracking-[2px]
                      text-[10px]
                      py-3
                      border-t
                    "
                  >
                    Move To Bag
                  </button>
                </div>

              </div>

              {/* Product Info */}
              <div className="mt-3">

                <p className="uppercase text-[10px] tracking-[1.5px] text-[#9a9a9a]">
                  {product.category}
                </p>

                <div className="flex justify-between gap-3 mt-1">
                  <h3 className="font-serif text-sm md:text-base text-[#222]">
                    {product.name}
                  </h3>

                  <span className="text-sm whitespace-nowrap text-[#222]">
                    {product.price}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WishlistPage