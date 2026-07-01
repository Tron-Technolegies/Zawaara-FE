import { useState, useEffect } from "react";
import { FiUser, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const token = localStorage.getItem("access");
    console.log(token);

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
      };

    
   useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight - 60);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



    const isHeroPage =
  location.pathname === "/" ||
  location.pathname === "/bridal";

    const textColor =
  isHeroPage
    ? scrolled
      ? "text-white lg:text-black"
      : "text-white"
    : "text-black";
    

  const mobileTextColor =
  isHeroPage
    ? "text-white"
    : "text-black";




  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
  isHeroPage
    ? scrolled
      ? "bg-transparent lg:bg-white"
      : "bg-transparent"
    : "bg-white"
}`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 h-[50px] md:h-[60px] flex items-center justify-between relative">
        
        {/* Left Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-regular">

          <NavLink
            to="/new-arrivals"
            className={`text-[13px] uppercase tracking-[1.5px] hover:text-neutral-600 ${textColor}`}
          >
            Collections
          </NavLink>

          {/* <NavLink
            to="/clothing"
            className={`text-[13px] uppercase tracking-[1.5px] hover:text-neutral-600 ${textColor}`}
          >
            Clothing
          </NavLink> */}

          <NavLink
            to="/bridal"
            className={`text-[13px] uppercase tracking-[1.5px] hover:text-neutral-600 ${textColor}`}
          >
            Bridal
          </NavLink>

          <NavLink
            to="/"
            end
            className={`text-[13px] uppercase tracking-[1.5px] hover:text-neutral-600 ${textColor}`}
          >
            Home
          </NavLink>
        </nav>


        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={textColor}
          >
            {menuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>


        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo/Zawara-logo.png"
            alt="ZAWARA"
            className="h-4 sm:h-5 lg:h-6 w-auto"
            />
        </div>

        {/* Right Section */}
        <div className="ml-auto hidden lg:flex items-center gap-3 xl:gap-5">


          {/* User */}
          <div
  className="relative"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <button className="hover:text-neutral-600 cursor-pointer">
    <FiUser className={`text-[20px] xl:text-[22px] ${textColor}`} />
  </button>

  {isOpen && (
    <div className="absolute right-0 top-full pt-2 z-50">
      <div className="w-40 bg-white  rounded-lg shadow-lg">
        {!token ? (
          <Link
            to="/login"
            className="block px-4 py-3 text-xs hover:bg-gray-100"
          >
            Login
          </Link>
        ) : (
          <>
            <Link
              to="/myaccount"
              className="block px-4 py-3 text-xs hover:bg-gray-100"
            >
              My Account
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-xs hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  )}
</div>

          {/* Wishlist */}
          <Link to="/wishlist" >
          <button className=" hover:text-neutral-600 text-black cursor-pointer">
            <FiHeart className={`text-[20px] xl:text-[22px] ${textColor}`}  />
          </button>
          </Link>

          {/* Cart */}
          <Link to='/cart'>
          <button className="relative  hover:text-neutral-600 text-black cursor-pointer">
            <HiOutlineShoppingBag className={`text-[22px] xl:text-[24px] ${textColor}`}  />
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
{menuOpen && (
  <div
    className={`lg:hidden absolute top-[50px] md:top-[60px] left-0 w-full ${
      location.pathname === "/" ||
      location.pathname === "/bridal"
        ? "bg-black/90"
        : "bg-[#f5f4f2]"
    } shadow-lg`}
  >



    {/* Mobile Menu Content */}
    <div className="px-6 py-6 border-t border-neutral-500/20 mt-2 flex flex-col gap-6">
      {/* Navigation Links */}
      <nav className="flex flex-col gap-5">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={`uppercase tracking-[2px] text-xs font-medium ${mobileTextColor} hover:opacity-85 transition`}
        >
          Home
        </NavLink>
        <NavLink
          to="/new-arrivals"
          onClick={() => setMenuOpen(false)}
          className={`uppercase tracking-[2px] text-xs font-medium ${mobileTextColor} hover:opacity-85 transition`}
        >
          Collections
        </NavLink>
        <NavLink
          to="/bridal"
          onClick={() => setMenuOpen(false)}
          className={`uppercase tracking-[2px] text-xs font-medium ${mobileTextColor} hover:opacity-85 transition`}
        >
          Bridal
        </NavLink>
      </nav>

      {/* Divider */}
      <div className="h-px bg-neutral-500/10 w-full" />

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="hover:opacity-80 transition"
        >
          <FiUser className={`text-[20px] ${mobileTextColor}`} />
        </Link>
        <Link
          to="/wishlist"
          onClick={() => setMenuOpen(false)}
          className="hover:opacity-80 transition"
        >
          <FiHeart className={`text-[20px] ${mobileTextColor}`} />
        </Link>
        <Link
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="hover:opacity-80 transition"
        >
          <HiOutlineShoppingBag className={`text-[20px] ${mobileTextColor}`} />
        </Link>
      </div>
    </div>
  </div>
)}
    </header>
  );
};

export default Navbar;