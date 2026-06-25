import { useEffect, useState } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const fetchProducts = async (pageNumber) => {
  try {
    setLoading(true);

    let url = `api/user/view_products/?page=${pageNumber}&limit=8`;

    if (categoryId) {
      url += `&category=${categoryId}`;
    }

    const response = await api.get(url);

    const newProducts = response.data.products;

    setProducts((prev) => [
      ...prev,
      ...newProducts,
    ]);

    if (pageNumber >= response.data.total_pages) {
      setHasMore(false);
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
      setProducts([]);
      setPage(1);
      setHasMore(true);

      fetchProducts(1);
    }, [categoryId]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  return (
    <section className="bg-[#f8f7f4] py-8 md:py-12">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {products.map((product) => (
            <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group"
              >

              <div className="overflow-hidden bg-[#f2f2f2]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover transition duration-500 group-hover:scale-105"
                />
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

        {hasMore && (
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

export default ProductGrid;