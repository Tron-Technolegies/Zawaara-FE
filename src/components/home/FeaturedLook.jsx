import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function FeaturedLook() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await api.get(
          "api/user/latest-featured-products/?limit=1"
        );
        const products = response.data.products;
        if (products && products.length > 0) {
          setProduct(products[0]);
        }
      } catch (error) {
        console.error("Failed to fetch featured product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f5f4f1] py-16">
        <div className="max-w-[1100px] mx-auto flex justify-center items-center min-h-[300px]">
          <div className="w-8 h-8 border-2 border-[#d8b98a] border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  if (!product) return null;

  return (
    <section className="bg-[#f5f4f1] py-16 lg:py-28 overflow-x-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT column: image ── */}
          <div className="flex justify-center lg:justify-end w-full lg:px-8">
            <img
              src={product.image || "/home/featuredlooks/home_featured.png"}
              alt={product.name}
              className="w-full lg:max-w-[400px] h-[500px] sm:h-[700px] lg:h-[550px] object-cover object-top shadow-none lg:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* ── RIGHT column: text content ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center w-full px-6 lg:px-0 lg:pl-8 mt-2 lg:mt-0">

            {/* Label */}
            <p className="uppercase tracking-[4px] text-[11px] text-[#5a1f24] font-semibold mb-6">
              Featured Look
            </p>

            {/* Product Name */}
            <h2 className="font-serif text-[#1d1d1d] text-5xl sm:text-6xl lg:text-[64px] leading-[1.15] uppercase tracking-wide">
              {product.name}
            </h2>

            {/* Description */}
            <p className="mt-8 text-[#7a7a7a] text-[15px] leading-[1.8] max-w-[460px] line-clamp-4">
              {product.description ||
                "A masterpiece that takes over 400 hours to create. Our master artisans employ centuries-old techniques to bring this regal vision to life."}
            </p>

            {/* Fabric / Craft */}
            <div className="flex gap-16 lg:gap-20 mt-10 justify-center lg:justify-start w-full">
              {product.material && (
                <div>
                  <h4 className="font-serif uppercase text-[#2b2b2b] tracking-[2px] text-[17px] mb-2">
                    Fabric
                  </h4>
                  <p className="text-[#8a8a8a] text-[15px]">{product.material}</p>
                </div>
              )}
              {product.category?.name && (
                <div>
                  <h4 className="font-serif uppercase text-[#2b2b2b] tracking-[2px] text-[17px] mb-2">
                    Craft
                  </h4>
                  <p className="text-[#8a8a8a] text-[15px]">{product.category.name}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="mt-10 lg:mt-12 w-fit bg-[#4a1c1c] hover:bg-[#3a1515] text-white uppercase tracking-[3px] text-[11px] px-10 py-4 transition duration-300 cursor-pointer"
            >
              View Details
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedLook;
