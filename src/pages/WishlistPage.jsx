import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function WishlistPage() {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    if (Number(product.stock) <= 0) {
      toast.error("This product is out of stock.");
      return;
    }
    navigate("/checkout", {
      state: {
        buyNowProduct: {
          id: product.product_id,
          name: product.name,
          image: product.image,
          price: product.price,
          size: product.size || "",
        },
      },
    });
  };

  useEffect(()=>{
      window.scrollTo(0, 0)
    }, [])

      const [wishlist, setWishlist] = useState([]);
      const [loading, setLoading] = useState(true);
    


      useEffect(() => {
        
          fetchWishlist();
      }, []);

      const fetchWishlist = async () => {

          try{

              const response = await api.get(
                  "api/user/view_wishlist/"
              );

              setWishlist(response.data.items);

          }
          catch(error){
              console.log(error);
          }
          finally{
              setLoading(false);
          }
      };
      if(loading){
          return(
              <div className="min-h-screen flex justify-center items-center">
                  Loading...
              </div>
          );
      }


      const removeItem = async (id) => {

            try{

                await api.delete(
                    `api/user/remove_wishlist_item/${id}/`
                );

                setWishlist((prev)=>
                    prev.filter(item=>item.id!==id)
                );

                toast.success("Removed from wishlist");

            }
            catch(error){
                console.log(error);
            }

        };
        const moveToBag = async (product) => {

          try {
            await api.post("api/user/add_to_cart/", {
              product_id: product.product_id,
              quantity: 1,
              size: product.size,
            });

            fetchWishlist();

            toast.success("Moved to Bag");
          } catch (error) {
            console.log(error);
            toast.error("Unable to move item");
          }
        };



      
  return (
    <section className="bg-[#f8f7f4] py-10 md:py-14 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-[5px] uppercase text-[#222]">
            Your Wishlist
          </h1>

          <p className="mt-3 text-[11px] tracking-[2px] uppercase text-[#888]">
            Saved Items • {wishlist.length} Items
          </p>

          <div className="w-12 h-[1px] bg-[#d8d8d8] mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        {/* Products Grid */}
{wishlist.length === 0 ? (
    <div className="text-center py-20">
      <h2 className="text-2xl font-serif">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 mt-2">
        Save your favourite products here.
      </p>
    </div>
) : (
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {wishlist.map((product) => (
      <div key={product.id} className="group">

        {/* Image */}
        <div className="relative overflow-hidden bg-white">

          <img
            src={product.image}
            alt={product.name}
            className={`w-full aspect-[3/4] object-cover ${Number(product.stock) <= 0 ? "opacity-60" : ""}`}
          />
          {Number(product.stock) <= 0 && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 text-[10px] uppercase tracking-[2px] font-semibold z-10">
              Out of Stock
            </div>
          )}

          {/* Remove Button */}
          <button
            onClick={() => removeItem(product.id)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <FiX className="text-[#555]" />
          </button>

          {/* Hover Actions: Move To Bag + Buy Now */}
          <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col">
            {Number(product.stock) <= 0 ? (
              <button
                disabled
                className="w-full bg-gray-400 text-gray-700 uppercase tracking-[2px] text-[10px] py-3 cursor-not-allowed"
              >
                Out of Stock
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="w-full bg-black text-white uppercase tracking-[2px] text-[10px] py-3"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => moveToBag(product)}
                  className="w-full bg-white text-[#222] uppercase tracking-[2px] text-[10px] py-3 border-t"
                >
                  Move To Bag
                </button>
              </>
            )}
          </div>

        </div>

        {/* Product Info */}
        <div className="mt-3">
          <p className="uppercase text-[10px] tracking-[1.5px] text-[#9a9a9a]">
            {product.category}
          </p>

          <div className="flex justify-between gap-3 mt-1">
            <h3 className="font-serif text-sm md:text-base text-[#222]">
              {product.name}
            </h3>

            <span className="text-sm whitespace-nowrap text-[#222]">
              ₹{Number(product.price).toLocaleString()}
            </span>
          </div>

        </div>

      </div>
    ))}
  </div>
)}

      </div>
    </section>
  )
}

export default WishlistPage