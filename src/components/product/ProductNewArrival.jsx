
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../api/api"; // Adjust the path if needed
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProductNewArrival() {
    const sliderRef = useRef(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleBuyNow = (e, product) => {
      e.preventDefault();
      e.stopPropagation();

      if (Number(product.stock) <= 0) {
        toast.error("This product is out of stock.");
        return;
      }

      const token = localStorage.getItem("access");
      if (!token) {
        toast.error("Please login to purchase products.");
        navigate("/login");
        return;
      }

      navigate("/checkout", {
        state: {
          buyNowProduct: product
        }
      });
    };

  
    const scrollLeft = () => {
      sliderRef.current?.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    };

    const scrollRight = () => {
      sliderRef.current?.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    };


      useEffect(() => {
      fetchLatestProducts();
    }, []);

    const fetchLatestProducts = async () => {
      try {
        const response = await api.get("api/user/latest-products/?limit=10");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching latest products:", error);
      }
    };

  return (
    <section className="bg-[#f8f7f4] py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="uppercase tracking-[4px] text-[#666] text-sm md:text-base">
            New Arrivals
          </h2>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-sm w-10 h-10 flex items-center justify-center border border-[#e5e5e5] hover:bg-gray-50"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Products Slider */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-4
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
              px-10
            "
          >
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] group"
              >
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full aspect-[3/4] object-cover transition duration-500 group-hover:scale-105 ${Number(product.stock) <= 0 ? "opacity-60" : ""}`}
                  />
                  {Number(product.stock) <= 0 && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 text-[10px] uppercase tracking-[2px] font-semibold z-10">
                      Out of Stock
                    </div>
                  )}
                  
                  {/* Buy Now Button Overlay */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 z-10">
                    {Number(product.stock) <= 0 ? (
                      <button
                        disabled
                        className="bg-gray-400/90 text-gray-700 px-6 py-3 text-[11px] uppercase tracking-[2px] font-medium shadow-md w-[80%] cursor-not-allowed"
                      >
                        Out of Stock
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleBuyNow(e, product)}
                        className="bg-white/90 backdrop-blur-sm hover:bg-black hover:text-white text-black px-6 py-3 text-[11px] uppercase tracking-[2px] transition duration-300 font-medium shadow-md w-[80%]"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h3 className="text-[12px] md:text-[13px] text-[#333] leading-5">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#555]">
                    ₹ {Number(product.price).toLocaleString("en-IN")}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-sm w-10 h-10 flex items-center justify-center border border-[#e5e5e5] hover:bg-gray-50"
          >
            <FiChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  )
}

export default ProductNewArrival