import { useEffect, useState } from "react";
import api from "../../api/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FeaturedProductGrid({ searchQuery, selectedFilters }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
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

  const fetchProducts = async (pageNumber) => {
    try {
      setLoading(true);

      // Construct base query parameters
      const params = new URLSearchParams();
      params.append("page", pageNumber);
      params.append("limit", 8);

      // Prioritize path categoryId, fall back to filter dropdown selection
      if (categoryId) {
        params.append("category", categoryId);
      } else if (selectedFilters?.category) {
        params.append("category", selectedFilters.category);
      }

      if (searchQuery) {
        params.append("search", searchQuery);
      }

      if (selectedFilters?.color) {
        params.append("color", selectedFilters.color);
      }

      if (selectedFilters?.size) {
        params.append("size", selectedFilters.size);
      }

      if (selectedFilters?.material) {
        params.append("material", selectedFilters.material);
      }

      // Parse price filter (e.g. "₹5000 - ₹10000" or "₹20000+")
      if (selectedFilters?.price) {
        const priceStr = selectedFilters.price;
        if (priceStr.includes("-")) {
          const parts = priceStr.replace(/₹/g, "").split("-");
          const minPrice = parts[0].trim();
          const maxPrice = parts[1].trim();
          if (minPrice) params.append("min_price", minPrice);
          if (maxPrice) params.append("max_price", maxPrice);
        } else if (priceStr.includes("+")) {
          const minPrice = priceStr.replace(/[₹+]/g, "").trim();
          if (minPrice) params.append("min_price", minPrice);
        }
      }

      const url = `api/user/view_products/?${params.toString()}`;
      const response = await api.get(url);

      const newProducts = response.data.products || [];

      setProducts((prev) => {
        if (pageNumber === 1) {
          return newProducts;
        }
        return [...prev, ...newProducts];
      });

      if (pageNumber >= response.data.total_pages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch products when route categoryId, searchQuery, or filter values change
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    fetchProducts(1);
  }, [categoryId, searchQuery, selectedFilters]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  // Perform client-side sorting on the loaded products list
  const sortedProducts = [...products].sort((a, b) => {
    if (selectedFilters?.sort === "price_asc") {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    if (selectedFilters?.sort === "price_desc") {
      return parseFloat(b.price) - parseFloat(a.price);
    }
    if (selectedFilters?.sort === "name_asc") {
      return a.name.localeCompare(b.name);
    }
    return 0; // Default latest/natural backend order
  });

  return (
    <section className="bg-[#f8f7f4] py-8 md:py-12">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
        
        {sortedProducts.length === 0 && !loading ? (
          <div className="text-center py-20">
            <p className="text-sm uppercase tracking-[2px] text-[#777]">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
            {sortedProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group"
              >
                <div className="relative overflow-hidden bg-[#f2f2f2]">
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

                <div className="mt-4">
                  <h3 className="text-[#2d2d2d] text-sm md:text-[15px] leading-relaxed">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[#8a8a8a] text-xs uppercase tracking-[1px]">
                    INR {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {hasMore && sortedProducts.length > 0 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMore}
              disabled={loading}
              className="border border-[#888] px-10 md:px-14 py-4 text-[11px] uppercase tracking-[3px] text-[#333] hover:bg-black hover:text-white transition duration-300"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProductGrid;