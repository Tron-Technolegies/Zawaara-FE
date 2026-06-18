

const LoginScreen = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f4] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[16px] md:text-[18px] tracking-[4px] uppercase text-[#111] leading-10">
            Enter Contact Detail And Accept T&C
            <br />
            To Proceed
          </h2>
        </div>

        {/* Mobile Input */}
        <div className="border border-[#dedede] bg-white flex h-[68px] mb-10">
          {/* Country Selector */}
          <div className="w-[110px] border-r border-[#dedede] flex items-center justify-center gap-3 relative">
            <div className="absolute -top-4 left-4 bg-[#f7f6f4] px-2 text-[14px] text-[#777]">
              Mobile <span className="text-red-500">*</span>
            </div>

            <span className="text-xl">🇮🇳</span>
            <span className="text-gray-500">⌄</span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center px-5 text-[32px] text-[#111]">
            +91
          </div>

          <input
            type="tel"
            className="flex-1 outline-none bg-transparent px-2 text-lg"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-4 mb-10">
          <input
            type="checkbox"
            className="w-5 h-5 mt-1 accent-black"
          />

          <p className="text-[#555] text-lg">
            By continuing, I agree to the{" "}
            <span className="font-semibold text-black">
              Terms of Service
            </span>{" "}
            &{" "}
            <span className="font-semibold text-black">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* Button */}
        <button
          className="w-full h-[72px] bg-[#8b8b8b] text-white text-[20px] tracking-[3px] uppercase hover:bg-[#7e7e7e] transition"
        >
          Get OTP
        </button>

        {/* Message */}
        <p className="text-center text-[#8a8a8a] mt-8 text-lg">
          Please accept the T&C by selecting the above checkbox
        </p>
      </div>
    </div>
  )
}

export default LoginScreen
