const collections = [
    {
      id: 1,
      title: "The Velvet Edit",
      image: "home/curatededits/velvet_edits.jpg",
      overlay: "from-black/50 via-black/10 to-transparent",
    },
    {
      id: 2,
      title: "Chanderi Silks",
      image: "home/curatededits/chanderisilks.jpg",
      overlay: "from-black/40 via-black/5 to-transparent",
    },
  ];

const CuratedEdits = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif tracking-[4px] uppercase">
            Curated Edits
          </h2>

          <p className="mt-3 text-[#7b7b7b] text-sm md:text-base">
            Explore our most coveted collections
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {collections.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] sm:h-[650px] lg:h-[900px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.overlay}`}
              />

              <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white font-serif text-3xl md:text-4xl tracking-[2px] uppercase mb-4">
                  {item.title}
                </h3>

                <button className="border border-white text-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[2px] hover:bg-white hover:text-black transition duration-300">
                  Shop Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuratedEdits
