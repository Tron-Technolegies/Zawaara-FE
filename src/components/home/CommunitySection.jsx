

function CommunitySection() {
    const galleryImages = [
    {
      id: 1,
      image: "/home/communitysection/community_image1.png",
      alt: "Community Look 1",
    },
    {
      id: 2,
      image: "/home/communitysection/community_image2.png",
      alt: "Embroidery Detail",
    },
    {
      id: 3,
      image: "/home/communitysection/community_image3.png",
      alt: "Fashion Look",
    },
    {
      id: 4,
      image: "/home/communitysection/community_image4.png",
      alt: "Accessories",
    },
    {
      id: 5,
      image: "/home/communitysection/community_image5.jpg",
      alt: "Bridal Collection",
    },
  ];
  return (
    <section className="bg-[#f8f7f4] py-12 md:py-16">
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-[#1d1d1d] text-3xl md:text-5xl tracking-[3px] uppercase">
            Join The Community
          </h2>

          <p className="mt-3 text-[#7d7d7d] text-sm">
            @zawara
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2px]">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default CommunitySection