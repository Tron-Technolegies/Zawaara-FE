import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api"; // Change the path if needed
import { toast } from "react-toastify";

function JustArrived() {
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

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const response = await api.get("api/user/latest-products/?limit=4");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching latest products:", error);
    }
  };

  return (
    <section className="bg-[#f7f5f2] py-12 md:py-16">
      <div className="max-w-[1500px] m-9 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="font-serif  py-6 text-3xl md:text-5xl tracking-[2px] uppercase">
            Just Arrived
          </h2>

          <Link
            to="/new-arrivals"
            className="uppercase text-[10px] md:text-xs tracking-[3px] text-[#444] hover:text-black transition"
          >
            Shop All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group block text-decoration-none"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
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

              {/* Content */}
              <div className="text-center mt-4">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[1px] font-semibold text-[#1a1a1a]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[10px] md:text-xs text-[#8a8a8a]">
                  ₹ {Number(product.price).toLocaleString("en-IN")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JustArrived;