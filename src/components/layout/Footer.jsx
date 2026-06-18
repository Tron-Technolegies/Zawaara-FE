

const Footer = () => {
  return (
    <footer className="bg-[#151110] text-[#b8b0ab]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-6">
              ZAWARA
            </h2>

            <p className="text-base leading-9 max-w-sm">
              Crafting timeless elegance through traditional craftsmanship and
              modern design since 1980.
            </p>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white text-2xl font-light mb-8">
              Customer Care
            </h3>

            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping & Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Size Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-light mb-8">
              Quick links
            </h3>

            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  New In
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Bridal
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Cart
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-2xl font-light mb-8">
              Newsletter
            </h3>

            <p className="leading-8 mb-10">
              Subscribe to receive updates, access to exclusive deals, and
              more.
            </p>

            <form>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-[#6b625c] pb-3 outline-none text-white placeholder:text-[#9d948e]"
                />

                <button
                  type="submit"
                  className="text-white uppercase tracking-[2px] border-b border-[#6b625c] pb-3 whitespace-nowrap hover:text-gray-300 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2d2724] mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-sm text-[#948a84]">
              © 2026 Zawara. All rights reserved.
            </p>

            <div className="flex gap-8 text-sm text-[#948a84]">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;