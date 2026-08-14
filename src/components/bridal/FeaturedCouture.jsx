import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/api";

function FeaturedCouture() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleBuyNow = (product) => {
    navigate("/checkout", {
      state: {
        checkoutType: "direct",
        items: [
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: Number(product.price),
            quantity: 1,
            size: product.size || "",
          },
        ],
        subtotal: Number(product.price),
        shipping: 0,
        discount: 0,
        couponCode: "",
        total: Number(product.price),
      },
    });
  };

  return (
    <section className="bg-[#f8f7f4] py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#c78a2d] text-3xl mb-6">✧</div>

          <h2 className="font-serif text-[#1d1d1d] text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[3px] uppercase">
            A Legacy Woven In
            <br />
            Threads
          </h2>

          <p className="mt-8 text-[#8b8b8b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every bridal ensemble is a masterpiece of slow fashion,
            taking over 600 hours to create.
          </p>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="overflow-hidden bg-white cursor-pointer"
                onClick={() => handleBuyNow(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 cursor-pointer" onClick={() => handleBuyNow(product)}>
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

              <button
                onClick={() => handleBuyNow(product)}
                className="mt-4 w-full bg-[#4a4a4a] text-white py-3 uppercase tracking-[3px] text-[11px]"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCouture;