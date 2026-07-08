import { Link } from "react-router-dom"

function HeritageBloom() {
  return (
    <section className="bg-[#EBE9E4]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

          {/* Left Content */}
          <div className="flex items-center justify-center px-6 md:px-12 lg:px-20 py-16">
            <div className="max-w-md text-center">
              <h2 className="font-serif text-[#1d1d1d] text-5xl md:text-6xl lg:text-[72px] leading-none mb-6">
                The Heritage
                <br />
                Bloom
              </h2>

              <p className="text-[#7a7a7a] text-base md:text-lg leading-relaxed mb-10">
                Expressive prints and effortless <br />
                silhouettes redefining tradition
              </p>

              <Link to="/new-arrivals?sections=heritage_blooms">
                <button className="bg-black text-white uppercase tracking-[3px] text-xs px-10 py-4 hover:bg-[#222] transition duration-300">
                  Discover
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="home/heritagebloom/heritage_bloom.jpg"
              alt="The Heritage Bloom"
              className="w-full h-[450px] md:h-[650px] lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeritageBloom
