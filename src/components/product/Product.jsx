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

          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-20">

            {/* LEFT SIDE */}
            <div className="lg:ml-[-99px]">

              {/* Main Image */}
              <div className="bg-white overflow-hidden aspect-[3/4]">
                <img
                  src={selectedImage || "/placeholder.png"}
                  // src="/product/product_image1.png"
                  alt="Product"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`border ${
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
              <h1 className="font-serif text-4xl text-[#222]">
                {product?.name}
              </h1>

              <p className="mt-4 uppercase text-sm tracking-[1px]">
                MRP : INR {product?.price}
              </p>

              {/* Size */}
              <div className="mt-10">
                {/* Header row: SELECT SIZE + SIZE CHART */}
                <div className="flex items-center gap-6">
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
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[42px] h-[42px] px-3 text-[12px] font-medium tracking-wide border transition-all duration-200 cursor-pointer ${
                        selectedSize === size
                          ? "bg-[#222] text-white border-[#222]"
                          : "bg-white text-[#222] border-[#ccc] hover:border-[#222]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
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
                    className="appearance-none bg-transparent pl-4 pr-8 py-2 text-sm text-[#222] cursor-pointer outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
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
              <div className="flex items-center gap-4 mt-8">
                <button
                 onClick={handleAddToCart}
                 className="bg-[#d8b98a] hover:bg-[#a77a33] cursor-pointer transition px-10 py-4 uppercase tracking-[2px] text-[11px]">
                  Add To Bag
                </button>

                <button 
                  onClick={handleAddToWishlist}
                  className="text-xl cursor-pointer">
                  <FiHeart />
                </button>

                {/* <button className="text-xl">
                  <FiShare2 />
                </button> */}
              </div>

              <p className="text-xs text-[#777] mt-3">
                Estimated Dispatch Time: 2 Days
              </p>

              {/* Service Icons */}
              <div className="border border-[#e5e5e5] mt-8">
                <div className="p-4 flex items-center gap-2 text-sm">
                  <FiTruck />
                  Free Shipping
                </div>

                <div className="grid grid-cols-2">
                  <div className="border-t border-r p-4 flex items-center justify-center gap-2 text-xs uppercase">
                    <FiRefreshCcw />
                    Easy Returns
                  </div>

                  <div className="border-t p-4 flex items-center justify-center gap-2 text-xs uppercase">
                    <FiCreditCard />
                    COD Available
                  </div>
                </div>
              </div>

              {/* Pincode */}
              <div className="mt-8">
                <h3 className="font-medium mb-3">
                  Check Delivery Pincode
                </h3>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="110022"
                    className="flex-1 border border-[#ddd] px-4 py-3"
                  />

                  <button className="bg-[#d8b98a] px-6">
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