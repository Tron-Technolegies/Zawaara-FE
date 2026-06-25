
function BridalHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/bridal/bridal_hero.jpg"
        alt="Bridal Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12 md:py-24">
        <div className="text-center px-4 md:px-6 max-w-5xl">
          
          {/* Collection Label */}
          <p className="text-white uppercase tracking-[4px] md:tracking-[6px] text-[9px] md:text-xs mb-4 md:mb-6">
            The Couture Collection
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] leading-none tracking-[4px] mb-6 md:mb-8">
            BRIDAL
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xs sm:text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
            An ode to timeless heritage, intricate craftsmanship,
            and the poetry of your most beautiful day.
          </p>

          {/* Button */}
          <button className="bg-white text-[#222] uppercase tracking-[2px] md:tracking-[4px] text-[9px] md:text-xs px-6 sm:px-10 md:px-16 py-3 md:py-5 hover:bg-[#f4f4f4] transition duration-300">
            Explore The Collection
          </button>

        </div>
      </div>
    </section>
    
  )
}

export default BridalHero