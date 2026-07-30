import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


  import {
    FiHeart,
    FiShare2,
    FiTruck,
    FiRefreshCcw,
    FiCreditCard,
    // FiPlus,
    // FiMinus,
  } from "react-icons/fi";

  
  function Product() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);


    const {id} = useParams();
    console.log(id)
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleAddToCart = async () => {
      try {
        await api.post("api/user/add_to_cart/", {
          product_id: product.id,
          size: selectedSize,
          quantity: selectedQuantity,
        });

        toast.success("Product added to cart");

      } catch (error) {

        if (error.response?.status === 401) {
          toast.error("Please login to add items to your cart.");

          setTimeout(() => {
            navigate("/login");
          }, 1500);

          return;
        }

        toast.error(error.response?.data?.error || "Something went wrong");
      }
    };


    const handleAddToWishlist = async () => {
      try {
        await api.post("api/user/add_to_wishlist/", {
          product_id: product.id,
        });

        toast.success("Added to wishlist");

      } catch (error) {

        if (error.response?.status === 401) {
          toast.error("Please login first");

          setTimeout(() => {
            navigate("/login");
          }, 1500);

          return;
        }

        toast.error(error.response?.data?.error || "Something went wrong");
      }
    };


    const handleShare = async () => {
      if (!product) return;

      const shareUrl = window.location.href;

      const shareData = {
        title: product.name,
        text: `Check out this product on Zawara`,
        url: shareUrl,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          toast.success("Product shared successfully!");
        } else {
          await navigator.clipboard.writeText(shareUrl);
          toast.success("Product link copied!");
        }
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(()=>{
  const fetchProduct = async () => {
    try {
      const response = await api.get(
        `api/user/view_single_product/${id}/`
      );

    const data = response.data;

    setProduct(data);
    setSelectedSize(data.size || "");

    const productImages = [];

    if (data.image) {
      productImages.push(data.image);
    }

    if (data.gallery) {
      productImages.push(...data.gallery);
    }

    setImages(productImages);

    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }

};
    fetchProduct();
  }, [id]);


if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}

    return (
      <section className="bg-[#f8f7f4]   min-h-screen">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6 py-6">

          

          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-20">

            {/* LEFT SIDE */}
            <div className="lg:ml-[-99px]">

              
              {/* Back Button Container */}
            <div className="mb-6">
              <button
                onClick={() => navigate("/new-arrivals")}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-[#555] hover:text-black transition cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>

              {/* Main Image */}
              <div className="bg-white overflow-hidden aspect-[3/4] w-full">
                <img
                  src={selectedImage || "/placeholder.png"}
                  // src="/product/product_image1.png"
                  alt="Product"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2 w-full">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`border shrink-0 ${
                      selectedImage === img
                        ? "border-black"
                        : "border-[#ddd]"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-20 h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl md:text-4xl text-[#222]">
                {product?.name}
              </h1>

              <p className="mt-4 uppercase text-sm tracking-[1px]">
                MRP : INR {product?.price}
              </p>

              {Number(product?.stock) <= 0 && (
                <p className="mt-2 text-red-600 font-bold uppercase tracking-[2px] text-[13px]">
                  Out of Stock
                </p>
              )}

              {/* Size */}
              <div className="mt-10">
                {/* Header row: SELECT SIZE + SIZE CHART */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[2px] text-[#555]">
                    Select Size
                  </span>
                  <Link
                    to="/sizeguide"
                    className="flex items-center gap-1 text-[11px] uppercase tracking-[2px] text-[#555] hover:text-[#222] transition"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Size Chart
                  </Link>
                </div>

                {/* Size pill buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => {
                    const availableSizes = product?.size ? product.size.split(',').map(s => s.trim()) : [];
                    const isAvailable = availableSizes.includes(size) && Number(product?.stock) > 0;
                    return (
                      <button
                        key={size}
                        disabled={!isAvailable}
                        onClick={() => setSelectedSize(size)}
                        className={`relative overflow-hidden min-w-[42px] h-[42px] px-3 text-[12px] font-medium tracking-wide border transition-all duration-200 ${
                          !isAvailable
                            ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                            : selectedSize === size
                            ? "bg-[#222] text-white border-[#222] cursor-pointer"
                            : "bg-white text-[#222] border-[#ccc] hover:border-[#222] cursor-pointer"
                        }`}
                      >
                        <span className={!isAvailable ? "opacity-50" : ""}>{size}</span>
                        {!isAvailable && (
                          <svg className="absolute inset-0 w-full h-full text-gray-300 stroke-[1.5] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" />
                            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="block text-[11px] uppercase tracking-[2px] mb-2 text-[#555]">
                  Quantity
                </label>

                <div className="relative inline-flex items-center border border-[#ccc] bg-white">
                  <select
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                    disabled={Number(product?.stock) <= 0}
                    className="appearance-none bg-transparent pl-4 pr-8 py-2 text-sm text-[#222] cursor-pointer outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {Number(product?.stock) > 0 ? (
                      Array.from({ length: Number(product?.stock) }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))
                    ) : (
                      <option value={0}>0</option>
                    )}
                  </select>
                  {/* Chevron */}
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#555]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Add To Bag */}
              <div className="flex items-center gap-3 sm:gap-4 mt-8 w-full">
                {Number(product?.stock) <= 0 ? (
                  <button
                    disabled
                    className="flex-1 min-w-0 bg-gray-400 text-gray-700 cursor-not-allowed py-4 px-2 uppercase tracking-[2px] text-[11px] text-center">
                    Out of Stock
                  </button>
                ) : (
                  <button
                   onClick={handleAddToCart}
                   className="flex-1 min-w-0 bg-[#d8b98a] hover:bg-[#a77a33] cursor-pointer transition py-4 px-2 uppercase tracking-[2px] text-[11px] text-center text-white">
                    Add To Bag
                  </button>
                )}

                <button 
                  onClick={handleAddToWishlist}
                  className="text-xl cursor-pointer shrink-0 ml-1 sm:ml-2">
                  <FiHeart />
                </button>

                <button
                  onClick={handleShare}
                  className="text-xl cursor-pointer hover:text-[#d8b98a] transition shrink-0 ml-1 sm:ml-2"
                >
                  <FiShare2 />
                </button>
              </div>

              <p className="text-xs text-[#777] mt-3">
                Estimated Dispatch Time: 2 Days
              </p>

              {/* Service Icons */}
              <div className="border border-[#e5e5e5] mt-8 w-full">
                <div className="p-3 sm:p-4 flex items-center gap-2 text-sm">
                  <FiTruck className="shrink-0 text-lg" />
                  <span>Free Shipping</span>
                </div>

                <div className="grid grid-cols-2">
                  <div className="border-t border-r p-3 sm:p-4 flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-2 text-[10px] sm:text-xs uppercase text-center">
                    <FiRefreshCcw className="shrink-0 text-base" />
                    <span>Easy Returns</span>
                  </div>

                  <div className="border-t p-3 sm:p-4 flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-2 text-[10px] sm:text-xs uppercase text-center">
                    <FiCreditCard className="shrink-0 text-base" />
                    <span>COD Available</span>
                  </div>
                </div>
              </div>

              {/* Pincode */}
              <div className="mt-8 w-full">
                <h3 className="font-medium mb-3 text-sm sm:text-base">
                  Check Delivery Pincode
                </h3>

                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="110022"
                    className="flex-1 min-w-0 border border-[#ddd] px-3 sm:px-4 py-3 text-sm"
                  />

                  <button className="bg-[#d8b98a] px-4 sm:px-6 shrink-0 text-sm">
                    Check
                  </button>
                </div>

                <p className="text-xs text-[#888] mt-2">
                  Your pin code is serviceable
                </p>
              </div>

              {/* Product Details */}
              <div className="mt-10 border-t">

                <details open className="border-b">
                  <summary className="cursor-pointer py-5 uppercase tracking-[2px] text-[11px]">
                    Product Details
                  </summary>

                  <div className="pb-5 text-sm text-[#666] space-y-2">
                    {product?.description}
                  </div>
                </details>

                <details className="border-b">
                  <summary className="cursor-pointer py-5 uppercase tracking-[2px] text-[11px]">
                    Additional Details
                  </summary>

                  <div className="pb-5 text-sm text-[#666]">
                    Additional information here...
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer py-5 uppercase tracking-[2px] text-[11px]">
                    Shipping
                  </summary>

                  <div className="pb-5 text-sm text-[#666] space-y-3">
                    <p>
                      We provide shipping and delivery of our Products all across India and most of the countries across the world. Ready products will be dispatched within 24 hours.
                    </p>
                    <p>
                      For our customers in Kerala, delivery will be within 5-10 working days. Shipping time depends on the delivery address you provide.
                    </p>
                    <p>
                      For any alteration / customisation you can communicate with our designer: <strong>9047810000</strong>.
                    </p>
                    <p>
                      Our team will get in touch with you as soon as the order is placed. All India shipping is available.
                    </p>
                  </div>
                </details>

              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Product