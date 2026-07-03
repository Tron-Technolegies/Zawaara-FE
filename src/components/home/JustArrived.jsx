import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api"; // Change the path if needed

function JustArrived() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const response = await api.get("api/user/latest-products/?limit=3");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching latest products:", error);
    }
  };

  return (
    <section className="bg-[#f7f5f2] py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="font-serif text-[#2b2b2b] text-3xl md:text-5xl tracking-[2px] uppercase">
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
            <div key={product.id} className="group">

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[520px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-4">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[1px] text-[#3d3d3d]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[10px] md:text-xs text-[#8a8a8a]">
                  ₹ {Number(product.price).toLocaleString("en-IN")}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JustArrived;