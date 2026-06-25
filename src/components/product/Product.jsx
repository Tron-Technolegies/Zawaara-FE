import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
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
      const [product, setProduct] = useState(null);
      const [images, setImages] = useState([]);
      const [loading, setLoading] = useState(true);


    const {id} = useParams();
    console.log(id)
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("XS");

    const sizes =
        product?.sizes?.map(
          (item) => item.size
        ) || [];

    const handleAddToCart = async () => {
        try {
          await api.post(
            "api/user/add_to_cart/",
            {
              product_id: product.id,
              size: selectedSize,
              quantity: 1,
            }
          );

          alert("Added to cart");
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
      <section className="bg-[#f8f7f4] min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6">

          {/* Breadcrumb */}
          <div className="text-[11px] uppercase tracking-[2px] text-[#777] mb-6">
            Home / Apparel / Dress / Long Dresses /
            <span className="text-[#333]">
              {" "}{product?.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-[55%_45%] gap-10">

            {/* LEFT SIDE */}
            <div>

              {/* Main Image */}
              <div className="bg-white overflow-hidden">
                <img
                  src={selectedImage || "/placeholder.png"}
                  // src="/product/product_image1.png"
                  alt="Product"
                  className="w-full object-cover"
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
                <div className="flex gap-6 text-[11px] uppercase tracking-[2px]">
                  <span>Select Size</span>
                  <button className="underline">
                    Size Chart
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-sm
                      ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "border-[#ddd]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="block text-[11px] uppercase tracking-[2px] mb-2">
                  Quantity
                </label>

                <select className="border border-[#ddd] px-4 py-2 bg-white">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              {/* Add To Bag */}
              <div className="flex items-center gap-4 mt-8">
                <button
                 onClick={handleAddToCart}
                 className="bg-[#d8b98a] hover:bg-[#c9a872] transition px-10 py-4 uppercase tracking-[2px] text-[11px]">
                  Add To Bag
                </button>

                <button className="text-xl">
                  <FiHeart />
                </button>

                <button className="text-xl">
                  <FiShare2 />
                </button>
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

                  <div className="pb-5 text-sm text-[#666]">
                    Free shipping on all prepaid orders.
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