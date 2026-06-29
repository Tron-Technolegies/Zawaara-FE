import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function FeaturedLook() {
  const navigate = useNavigate();

  const handleViewDetails = async () => {
    try {
      const response = await api.get(
        "/api/user/view_products/?name=The Royal Zardosi Ensemble&limit=1"
      );

      if (response.data.products.length > 0) {
        const product = response.data.products[0];

        navigate(`/product/${product.id}`);
      } else {
        alert("Product not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-[#f8f7f4]  py-16 md:py-20 ">
      <div className="max-w-[1300px]  px-6 lg:px-10">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden ">
              <img
                src="/home/featuredlooks/home_featured.png"
                alt="Royal Zardosi Ensemble"
                className="w-full max-w-[450px] h-[500px] md:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl">
            <p className="uppercase tracking-[4px] text-[10px] text-[#6e6e6e] mb-5">
              Featured Look
            </p>

            <h2 className="font-serif text-[#1d1d1d] text-5xl md:text-6xl lg:text-[72px] leading-[1] uppercase">
              The Royal
              <br />
              Zardosi
              <br />
              Ensemble
            </h2>

            <p className="mt-8 text-[#7a7a7a] text-base md:text-lg leading-relaxed max-w-lg">
              A masterpiece that takes over 400 hours to create. Our master
              artisans employ centuries-old techniques to bring this regal
              vision to life.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-10 mt-10">
              <div>
                <h4 className="uppercase text-[#2b2b2b] tracking-[2px] text-sm mb-2">
                  Fabric
                </h4>

                <p className="text-[#8a8a8a] text-sm">
                  Pure Silk Velvet
                </p>
              </div>

              <div>
                <h4 className="uppercase text-[#2b2b2b] tracking-[2px] text-sm mb-2">
                  Craft
                </h4>

                <p className="text-[#8a8a8a] text-sm">
                  Hand-embroidered Zardosi
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleViewDetails}
              className="mt-12 bg-[#5a1f24] hover:bg-[#4a181c] text-white uppercase tracking-[2px] text-xs px-10 py-4 transition duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedLook
