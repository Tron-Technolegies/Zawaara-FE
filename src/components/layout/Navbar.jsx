import { useState, useEffect } from "react";
import { FiSearch, FiUser, FiHeart,FiMenu, FiX } from "react-icons/fi";
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
    setScrolled(window.scrollY > window.innerHeight - 70);
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
  isHeroPage && !scrolled
    ? "text-white"
    : "text-black";
    

  const mobileTextColor =
  isHeroPage && !scrolled
    ? "text-white"
    : "text-black";




  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
  isHeroPage && !scrolled
    ? "bg-transparent"
    : "bg-white"
}`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-[70px]  flex items-center justify-between relative">
        
        {/* Left Menu */}
        <nav className={` hidden lg:flex items-center gap-10 font-regular  `}>
          <NavLink
            to="/new-arrivals"
            className={
              `text-[15px] uppercase tracking-[2px] hover:text-neutral-600 ${textColor} `
            }
          >
            Collections
          </NavLink>

          {/* <NavLink
            to="/clothing"
            className={
              `text-[15px] uppercase tracking-[2px]  hover:text-neutral-600 ${textColor} `
            }
          >
            Clothing
          </NavLink> */}

          <NavLink
            to="/bridal"
            className={
              `text-[15px] uppercase tracking-[2px]  hover:text-neutral-600 ${textColor}`
            }
          >
            Bridal
          </NavLink>

          <NavLink
            to="/"
            end
            className={
              `text-[15px] uppercase tracking-[2px]  hover:text-neutral-600 ${textColor}`
            }
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
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>


        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo/Zawara-logo.png"
            alt="ZAWARA"
            className="h-4 lg:h-8 w-auto"
            />
        </div>

        {/* Right Section */}
        <div className="ml-auto hidden lg:flex items-center gap-3 lg:gap-6">
          {/* Search */}
          <div className="hidden xl:flex items-center border-b border-neutral-600 pb-1 min-w-[240px]">
            <FiSearch className={`${textColor} text-[20px]`} />
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent outline-none px-3 hover:text-neutral-600 ${textColor} ${
                        isHeroPage && !scrolled
                          ? "placeholder:text-white/80"
                          : "placeholder:text-gray-700"
                      } w-full`}
            />
          </div>

          {/* User */}
          <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-neutral-600 text-black cursor-pointer"
              >
                <FiUser className={`text-[24px] ${textColor}`} />
              </button>

              {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                {!token ? (
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/myaccount"
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                    >
                      My Account
                    </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
        </div>

          {/* Wishlist */}
          <Link to="/wishlist" >
          <button className=" hover:text-neutral-600 text-black cursor-pointer">
            <FiHeart className={`text-[24px] ${textColor}`}  />
          </button>
          </Link>

          {/* Cart */}
          <Link to='/cart'>
          <button className="relative  hover:text-neutral-600 text-black cursor-pointer">
            <HiOutlineShoppingBag className={`text-[26px] ${textColor}`}  />
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
{menuOpen && (
  <div
    className={`lg:hidden absolute top-[70px] left-0 w-full ${
      location.pathname === "/" ||
      location.pathname === "/bridal"
        ? "bg-black/90"
        : "bg-[#f5f4f2]"
    } shadow-lg`}
  >

    {/* Search */}
    <div className="px-6 pt-6">
      <div className="flex items-center border-b border-gray-500 pb-2">
        <FiSearch className={`text-[20px] ${textColor}`} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-3 w-full text-white placeholder:text-gray-300"
        />
      </div>
    </div>

    {/* Mobile Icons */}
    <div className="flex items-center justify-center gap-8 py-6">

      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
      >
        <FiUser className={`text-2xl ${mobileTextColor}`} />
      </Link>

      <Link
        to="/wishlist"
        onClick={() => setMenuOpen(false)}
      >
        <FiHeart className={`text-2xl ${mobileTextColor}`} />
      </Link>

      <Link
        to="/cart"
        onClick={() => setMenuOpen(false)}
      >
        <HiOutlineShoppingBag className={`text-2xl ${mobileTextColor}`}/>
      </Link>

    </div>

    {/* Navigation Links */}
    <nav className="flex flex-col pb-6">
      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`px-6 py-4 uppercase tracking-[2px] text-sm ${mobileTextColor}`}
      >
        Home
      </NavLink>

      <NavLink
        to="/new-arrivals"
        onClick={() => setMenuOpen(false)}
        className={`px-6 py-4 uppercase tracking-[2px] text-sm ${mobileTextColor}`}
      >
        New In
      </NavLink>

      {/* <NavLink
        to="/clothing"
        onClick={() => setMenuOpen(false)}
        className={`px-6 py-4 uppercase tracking-[2px] text-sm ${mobileTextColor}`}
      >
        Clothing
      </NavLink> */}

      <NavLink
        to="/bridal"
        onClick={() => setMenuOpen(false)}
        className={`px-6 py-4 uppercase tracking-[2px] text-sm ${mobileTextColor}`}
      >
        Bridal
      </NavLink>
    </nav>
  </div>
)}
    </header>
  );
};

export default Navbar;