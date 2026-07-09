import { Link } from "react-router-dom"

function SummerChronicles() {
  return (
    <section className="bg-[#f7f5f2]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_35%_20%]">

          {/* Left Content */}
          <div className="flex items-center justify-center bg-[#EBE9E4] px-6 py-16 md:px-12 lg:px-20">
            <div className="text-center max-w-md">
              <h2 className="font-serif text-[#1c1c1c] text-5xl md:text-6xl lg:text-[72px] leading-[0.95]">
                Summer
                <br />
                Chronicles
              </h2>

              <p className="mt-5 text-[#7c7c7c] text-base md:text-lg leading-relaxed">
                Breezy silhouettes for sun-drenched
                <br />
                escapes
              </p>

              <Link to="/new-arrivals?sections=summer_chronicles">
                <button className="mt-10 bg-black text-white uppercase tracking-[3px] text-[11px] px-10 py-4 hover:bg-[#222] transition duration-300">
                  Discover
                </button>
              </Link>
            </div>
          </div>

          {/* Center Image */}
          <div className="overflow-hidden">
            <img
              src="/home/summerchronicles/summer_chronicles_image1.png"
              alt="Summer Chronicles"
              className="w-full h-[550px] md:h-[700px] lg:h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="overflow-hidden">
            <img
              src="/home/summerchronicles/summer_chronicles_image2.png"
              alt="Summer Fashion"
              className="w-full h-[450px] md:h-[700px] lg:h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default SummerChronicles
