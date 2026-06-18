

function BridalAtelier() {
  return (
   <section className="bg-[#f8f7f4] py-12 md:py-20">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f7f4]">

          {/* Left Image */}
          <div className="overflow-hidden">
            <img
              src="/bridal/bidal_atelier.png"
              alt="The Bridal Atelier"
              className="w-full h-[500px] md:h-[700px] lg:h-[850px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex items-center bg-[#EBE9E4] justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0">
            <div className="max-w-lg">

              {/* Label */}
              <p className="uppercase tracking-[4px] text-[10px] md:text-xs text-[#8c8c8c] mb-8">
                Bespoke Services
              </p>

              {/* Heading */}
              <h2 className="font-serif text-[#1d1d1d] text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[2px] uppercase">
                The Bridal
                <br />
                Atelier
              </h2>

              {/* Description */}
              <p className="mt-10 text-[#7c7c7c] text-base md:text-lg leading-relaxed">
                Experience a journey of personalized luxury. Book an
                exclusive appointment with our stylists to customize your
                dream bridal trousseau, tailored to your exact measurements
                and aesthetic desires.
              </p>

              {/* Button */}
              <button className="mt-12 border border-[#777] px-8 md:px-12 py-4 uppercase tracking-[3px] text-[11px] text-[#333] hover:bg-black hover:text-white transition duration-300">
                Book An Appointment
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BridalAtelier