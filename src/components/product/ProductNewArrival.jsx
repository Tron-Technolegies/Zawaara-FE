
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../api/api"; // Adjust the path if needed
import { Link } from "react-router-dom";

function ProductNewArrival() {
    const sliderRef = useRef(null);
    const [products, setProducts] = useState([]);

  
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
                className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px]"
>
                <div className="overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-[280px]
                      sm:h-[340px]
                      md:h-[420px]
                      object-cover
                    "
                  />
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