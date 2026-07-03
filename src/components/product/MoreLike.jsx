import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../api/api";

function MoreLike() {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getRandomProducts();
  }, []);

  const getRandomProducts = async () => {
    try {
      const res = await api.get("api/user/view_products/?page=1&limit=100");

      // Shuffle array
      const shuffled = [...res.data.products].sort(() => Math.random() - 0.5);

      // Take first 5 products
      setProducts(shuffled.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
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

  return (
    <section className="bg-[#f8f7f4] py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="uppercase tracking-[4px] text-[#666] text-sm md:text-base">
            MORE LIKE THIS
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-sm w-10 h-10 flex items-center justify-center border"
          >
            <FiChevronLeft size={22} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px]"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[280px] sm:h-[340px] md:h-[420px] object-cover"
                  />
                </div>

                <div className="text-center mt-3">
                  <h3 className="text-[12px] md:text-[13px]">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[12px]">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-sm w-10 h-10 flex items-center justify-center border"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MoreLike;