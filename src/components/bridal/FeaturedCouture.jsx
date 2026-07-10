import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";

function FeaturedCouture() {
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
      state: { buyNowProduct: product },
    });
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await api.get(
        "api/user/latest-featured-products/?limit=4"
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  return (
    <section className="bg-[#f8f7f4] py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-10">

        {/* Top Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#c78a2d] text-3xl mb-6">✧</div>

          <h2 className="font-serif text-[#1d1d1d] text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[3px] uppercase">
            A Legacy Woven In
            <br />
            Threads
          </h2>

          <p className="mt-8 text-[#8b8b8b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every bridal ensemble is a masterpiece of slow fashion,
            taking over 600 hours to create. Our master artisans
            employ centuries-old zardosi and aari techniques to
            bring your regal vision to life, creating heirlooms
            meant to be passed down through generations.
          </p>
        </div>

        {/* Section Header */}
        <div className="mt-20 mb-10">
          <div className="flex items-center justify-between border-b border-[#e8e3dc] pb-4">
            <h3 className="font-serif pt-9 text-[#1d1d1d] text-3xl md:text-5xl tracking-[3px] uppercase">
              Featured Couture
            </h3>
            <Link to="/new-arrivals?featured=true">
              <button className="uppercase text-[11px] tracking-[3px] text-[#555] hover:text-black transition">
                View All
              </button>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              {/* Product Image */}
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

              {/* Product Info */}
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[2px] text-[#9c9c9c]">
                  {product.category?.name}
                </p>

                <div className="flex justify-between items-start mt-2 gap-3">
                  <h4 className="text-[#1d1d1d] text-sm md:text-base">
                    {product.name}
                  </h4>

                  <span className="text-[#1d1d1d] text-sm whitespace-nowrap">
                    ₹ {Number(product.price).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCouture;