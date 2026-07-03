import {Link} from "react-router-dom"
const categories = [
  {
    name: "CASUAL",
    image: "/home/homecollections/home_casual_product.png",
  },
  {
    name: "PARTY",
    image: "/home/homecollections/home_party_product.png",
  },
  {
    name: "BRIDAL",
    image: "/home/homecollections/home_bridal_image.png",
  },
  {
    name: "KIDS",
    image: "/home/homecollections/home_kids_image.png",
  },
  {
    name: "MENS",
    image: "/home/homecollections/home_mens_image.png",
  },
  {
    name: "ACCESSORIES",
    image: "/home/homecollections/home_accessories_image.png",
  },
];
const HomeCollection = () => {
  return (
    <section>
      {/* Category Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-center text-[#2f2a26] text-2xl md:text-4xl font-serif tracking-[2px] mb-12">
          SHOP BY CATEGORY
        </h2>
      
      <Link to="/new-arrivals">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 place-items-center">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <p className="text-[11px] md:text-xs tracking-[2px] text-[#2f2a26]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        </Link>
      </div>

      {/* Collection Banner */}
      <div className="relative">
        <img
          src="home\homecollections\collection-banner.webp"
          alt="Harmony Collection"
          className="w-full h-[350px] md:h-[500px] lg:h-[700px] object-cover"
        />

        <div className="absolute inset-0 bg-black/10"></div>

    <div className="absolute inset-0 flex items-center justify-center pt-[180px]">
          <div className="text-center text-white">
            <div className="font-serif font-nomal text-sm md:text-6xl lg:text-5xl leading-none mb-8 tracking-[7px]">
              THE HARMONY
              <br />
              COLLECTION
            </div>
            <Link to="/new-arrivals">
            <button className="bg-white cursor-pointer  text-[#2f2a26] px-8 py-3 uppercase tracking-[3px] text-xs font-[500] hover:bg-[#f4f4f4] hover:scale-105">
              Discover
            </button>
            </Link>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default HomeCollection
