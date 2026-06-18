

const HeroSection = () => {
  return (
    <section className=" h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="home\homecollections\hero_banner.jpg"
        alt="Royal Reverie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1
          className="
            text-white
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[95px]
            font-serif
            font-regular
            tracking-wide
            leading-none
            mb-8
          "
        >
          ROYAL REVERIE
        </h1>

        <p
          className="
           font-light text-[25px] text-white leading-[28px] tracking-[0px] text-center mb-10
          "
        >
          Discover our newest collection of handcrafted heritage garments,<br />
          reimagined for the modern muse.
        </p>

        <button
          className="
            bg-white
            text-[#222]
            uppercase
            tracking-[4px]
            text-sm
            px-12
            py-5
            hover:bg-[#f3f3f3]
            transition-all
            duration-300
          "
        >
          <p className="text-[15px] font-[500]">Explore Collection</p>
        </button>
      </div>
    </section>
  );
}

export default HeroSection
