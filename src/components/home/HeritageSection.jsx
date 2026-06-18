

function HeritageSection() {
  return (
    <section className="bg-[#f7f5f2] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[3px] text-[#6d2f2f] text-sm mb-8">
              The Heritage Series
            </p>

            <h2 className="text-[#1d1d1d] font-serif text-5xl md:text-6xl lg:text-[72px] leading-tight mb-8">
              Crafted for the
              <br />
              Modern Muse
            </h2>

            <p className="text-[#7a7a7a] text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Discover pieces that blend century-old weaving techniques with
              contemporary silhouettes, designed for the woman who values both
              tradition and innovation.
            </p>

            <button className="uppercase tracking-[3px] text-sm text-[#1d1d1d] border-b border-[#1d1d1d] pb-1 hover:opacity-70 transition">
              Read The Journal
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="home/heritagesession/heritage_session_image.png"
              alt="Crafted for the Modern Muse"
              className="w-full h-[500px] md:h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeritageSection
