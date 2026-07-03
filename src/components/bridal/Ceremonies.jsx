

function Ceremonies() {
    const ceremonies = [
    {
      id: 1,
      title: "THE HALDI EDIT",
      image: "/bridal/bridal_ceremonies/bridal_ceremonies_image1.jpg",
    },
    {
      id: 2,
      title: "SANGEET SOIRÉE",
      image: "/bridal/bridal_ceremonies/bridal_ceremonies_image2.jpg",
    },
    {
      id: 3,
      title: "THE VOWS",
      image: "/bridal/bridal_ceremonies/bridal_ceremonies_image3.jpg",
    },
  ];
  return (
    <section className="bg-[#f8f7f4] py-20 md:py-28">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="uppercase tracking-[4px] text-[10px] text-[#8d8d8d] mb-4">
            Curate Your Trousseau
          </p>

          <h2 className="font-serif text-[#1d1d1d] text-4xl md:text-6xl lg:text-[72px] tracking-[4px] uppercase">
            The Ceremonies
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {ceremonies.map((item) => (
            <div
              key={item.id}
              className="group text-center"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[450px] md:h-[550px] lg:h-[700px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="font-serif text-[#222] text-2xl md:text-4xl tracking-[2px] uppercase">
                  {item.title}
                </h3>

                {/* <button className="mt-4 uppercase tracking-[3px] text-[10px] text-[#8a8a8a] hover:text-black transition">
                  Discover
                </button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    
  )
}

export default Ceremonies