const products = [
    {
      id: 1,
      image: "/newarrival/productgrid/newarrival_image1.png",
      name: "Black Turq Keya Suit Set",
      price: "INR 30900",
    },
    {
      id: 2,
      image: "/newarrival/productgrid/newarrival_image2.png",
      name: "Red Beige Nazia Kurti",
      price: "INR 12500",
    },
    {
      id: 3,
      image: "/newarrival/productgrid/newarrival_image3.png",
      name: "Blue Achhara Shirt",
      price: "INR 5500",
    },
    {
      id: 4,
      image: "/newarrival/productgrid/newarrival_image4.png",
      name: "Black Pattachitra Long Dress",
      price: "INR 9500",
    },
    {
      id: 5,
      image: "/newarrival/productgrid/newarrival_image5.png",
      name: "Ivory Gold Zari Suit",
      price: "INR 28000",
    },
    {
      id: 6,
      image: "/newarrival/productgrid/newarrival_image6.png",
      name: "Emerald Green Silk Kurta",
      price: "INR 18500",
    },
    {
      id: 7,
      image: "/newarrival/productgrid/newarrival_image7.png",
      name: "Mustard Printed Tunic",
      price: "INR 8500",
    },
    {
      id: 8,
      image: "/newarrival/productgrid/newarrival_image7.png",
      name: "Maroon Velvet Lehenga",
      price: "INR 45000",
    },
  ];


function ProductGrid() {
  return (
    <section className="bg-[#f8f7f4] py-8 md:py-12">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group">
              
              {/* Image */}
              <div className="overflow-hidden bg-[#f2f2f2]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <h3 className="text-[#2d2d2d] text-sm md:text-[15px] leading-relaxed">
                  {product.name}
                </h3>

                <p className="mt-1 text-[#8a8a8a] text-xs uppercase tracking-[1px]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="border border-[#888] px-10 md:px-14 py-4 text-[11px] uppercase tracking-[3px] text-[#333] hover:bg-black hover:text-white transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid