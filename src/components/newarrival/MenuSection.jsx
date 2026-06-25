import { useState, useEffect, useRef } from "react";

const filters = [
  {
    title: "Category",
    options: ["Casual Wear", "Party Wear", "Bridal", "Kids Wear","Mens Wear","Accessories"],
  },
  {
    title: "Colour",
    options: ["Red", "Black", "White", "Blue"],
  },
  {
    title: "Material",
    options: ["Cotton", "Silk", "Linen", "Rayon"],
  },
  {
    title: "Size",
    options: ["XS", "S", "M", "L", "XL"],
  },
  {
    title: "Price",
    options: [
      "₹0 - ₹5000",
      "₹5000 - ₹10000",
      "₹10000 - ₹20000",
      "₹20000+",
    ],
  },
];




function MenuSection() {
  const [selectedFilter, setSelectedFilter] = useState("")
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
}, []);

  
  return (
    <section className="bg-[#f8f7f4] border-t border-b border-[#e5e2dd]">
      {/* Title Section */}
      <div className="py-12 md:py-16 text-center">
        <h1 className="font-serif text-[#1d1d1d] text-3xl md:text-5xl tracking-[4px] uppercase">
          Collections
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="border-t border-[#e5e2dd]">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-4">
            
            {/* Filters */}
           <div
              ref={dropdownRef}
              className="flex flex-wrap items-center gap-6 md:gap-8 text-[11px] uppercase tracking-[1px] text-[#444]"
            >
              {filters.map((filter, index) => (
                <div
                  key={filter.title}
                  className="relative"
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === index ? null : index
                      )
                    }
                    className="flex items-center gap-2 hover:text-black transition"
                  >
                    {filter.title}

                    <svg
                      className={`w-3 h-3 transition-transform ${
                        openDropdown === index
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openDropdown === index && (
                    <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-[#ddd] shadow-lg z-50">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedFilter(option);
                            setOpenDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-3 hover:bg-[#f5f5f5] text-[11px] uppercase tracking-[1px]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>


            {/* Sort & View */}
            <div className="flex items-center justify-between lg:justify-end gap-4 md:gap-6">
              
              <span className="text-[10px] uppercase tracking-[2px] text-[#777]">
                {selectedFilter || "Sort By"}
              </span>

              <button className="flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[11px] uppercase tracking-[1px] text-[#333] hover:bg-[#f1f1f1] transition">
                Latest Products

                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Divider */}
              {/* <div className="hidden md:block w-px h-8 bg-[#ddd]" /> */}

              {/* Grid Icons */}
              {/* <div className="flex items-center gap-3">
                <button className="text-[#777] hover:text-black">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                  </svg>
                </button>

                <button className="text-[#777] hover:text-black">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z" />
                  </svg>
                </button>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection