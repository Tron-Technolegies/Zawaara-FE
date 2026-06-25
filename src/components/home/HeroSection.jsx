import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="home\homecollections\hero_banner.jpg"
        alt="Royal Reverie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 md:px-6">
        <h1
          className="
            text-white
            text-3xl
            sm:text-5xl
            md:text-7xl
            lg:text-[95px]
            font-serif
            font-regular
            tracking-wide
            leading-none
            mb-6 md:mb-8
          "
        >
          ROYAL REVERIE
        </h1>

        <p
          className="
           font-light text-xs sm:text-lg md:text-xl lg:text-[25px] text-white leading-relaxed md:leading-[32px] tracking-[0px] text-center max-w-3xl mb-8 md:mb-10
          "
        >
          Discover our newest collection of handcrafted heritage garments,<br className="hidden md:inline" />
          reimagined for the modern muse.
        </p>

      <Link to="/new-arrivals">
        <button
          className="
            bg-white
            text-[#222]
            uppercase
            tracking-[2px] md:tracking-[4px]
            px-8 md:px-12
            py-3 md:py-5
            hover:bg-[#f3f3f3]
            transition-all
            duration-300
            cursor-pointer
            hover:scale-105
          "
        >
          <p className="text-[11px] md:text-[15px] font-[500]">Explore Collection</p>
        </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection
