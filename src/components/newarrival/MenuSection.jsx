import { useState, useEffect, useRef } from "react";
import api from "../../api/api";

function MenuSection({ searchQuery, setSearchQuery, selectedFilters, setSelectedFilters }) {
  const [categories, setCategories] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSort, setOpenSort] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef(null);

  // Fetch categories from the database
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("api/user/view_categories/");
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Sync state search input value with search query prop if changed from outside
  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
      setSearchActive(true);
    } else {
      setSearchValue("");
    }
  }, [searchQuery]);

  // Debounce search query update to avoid spamming the backend API
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(searchValue);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchValue, setSearchQuery]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setOpenSort(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categoryOptions = categories.length > 0
    ? categories.map(c => ({ label: c.name, value: c.id }))
    : [
        { label: "Casual Wear", value: "Casual Wear" },
        { label: "Party Wear", value: "Party Wear" },
        { label: "Bridal", value: "Bridal" },
        { label: "Kids Wear", value: "Kids Wear" },
        { label: "Mens Wear", value: "Mens Wear" },
        { label: "Accessories", value: "Accessories" }
      ];

  const filters = [
    {
      title: "Category",
      key: "category",
      options: categoryOptions
    },
    {
      title: "Colour",
      key: "color",
      options: [
        { label: "Red", value: "Red" },
        { label: "Black", value: "Black" },
        { label: "White", value: "White" },
        { label: "Blue", value: "Blue" }
      ],
    },
    {
      title: "Material",
      key: "material",
      options: [
        { label: "Cotton", value: "Cotton" },
        { label: "Silk", value: "Silk" },
        { label: "Linen", value: "Linen" },
        { label: "Rayon", value: "Rayon" }
      ],
    },
    {
      title: "Size",
      key: "size",
      options: [
        { label: "XS", value: "XS" },
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" }
      ],
    },
    {
      title: "Price",
      key: "price",
      options: [
        { label: "₹0 - ₹5000", value: "₹0 - ₹5000" },
        { label: "₹5000 - ₹10000", value: "₹5000 - ₹10000" },
        { label: "₹10000 - ₹20000", value: "₹10000 - ₹20000" },
        { label: "₹20000+", value: "₹20000+" },
      ],
    },
  ];

  const sortOptions = [
    { label: "Latest Products", value: "latest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Name: A to Z", value: "name_asc" }
  ];

  const handleClearAll = () => {
    setSelectedFilters({
      category: "",
      color: "",
      material: "",
      size: "",
      price: "",
      sort: "latest"
    });
    setSearchValue("");
    setSearchQuery("");
    setSearchActive(false);
  };

  const hasActiveFilters = Object.entries(selectedFilters).some(([key, val]) => {
    if (key === "sort") return val !== "latest" && val !== "";
    return val !== "";
  }) || !!searchQuery;

  return (
    <section className="bg-[#f8f7f4] border-t border-b border-[#e5e2dd]">
      {/* Title Section */}
      <div className="py-12 md:py-16 text-center">
        <h1 className="font-serif text-[#1d1d1d] text-3xl md:text-5xl tracking-[4px] uppercase">
          Collections
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="border-t border-[#e5e2dd]" ref={dropdownRef}>
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-4">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 text-[11px] uppercase tracking-[1px] text-[#444]">
              {filters.map((filter, index) => {
                const selectedValue = selectedFilters[filter.key];
                const selectedOption = filter.options.find(o => o.value === selectedValue);
                const displayLabel = selectedOption ? selectedOption.label : "";

                return (
                  <div key={filter.title} className="relative">
                    <button
                      onClick={() => {
                        setOpenSort(false);
                        setOpenDropdown(openDropdown === index ? null : index);
                      }}
                      className={`flex items-center gap-2 hover:text-black transition ${
                        selectedValue ? "text-black font-semibold" : ""
                      }`}
                    >
                      <span>
                        {filter.title}
                        {selectedValue && (
                          <span className="text-[#888] font-normal lowercase tracking-normal ml-1">
                            ({displayLabel})
                          </span>
                        )}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
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
                            key={option.value}
                            onClick={() => {
                              setSelectedFilters((prev) => ({
                                ...prev,
                                [filter.key]: prev[filter.key] === option.value ? "" : option.value,
                              }));
                              setOpenDropdown(null);
                            }}
                            className={`block w-full text-left px-4 py-3 hover:bg-[#f5f5f5] text-[11px] uppercase tracking-[1px] ${
                              selectedValue === option.value ? "bg-[#faf9f6] font-semibold text-black" : "text-[#555]"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sort & Search */}
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4 md:gap-6">
              
              {/* Search Bar */}
              <div className="relative flex items-center">
                {searchActive ? (
                  <div className="flex items-center border border-[#ddd] bg-white px-3 py-1.5 transition-all duration-300 w-[180px] sm:w-[240px]">
                    <input
                      type="text"
                      placeholder="SEARCH..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="w-full bg-transparent text-[11px] tracking-[1px] uppercase outline-none text-[#333]"
                      autoFocus
                    />
                    <button 
                      onClick={() => {
                        setSearchValue("");
                        setSearchQuery("");
                        setSearchActive(false);
                      }}
                      className="text-[#777] hover:text-black ml-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setOpenDropdown(null);
                      setOpenSort(false);
                      setSearchActive(true);
                    }}
                    className="flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[11px] uppercase tracking-[1px] text-[#333] hover:bg-[#f1f1f1] transition bg-white"
                  >
                    <span>Search</span>
                    <svg className="w-3.5 h-3.5 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-[#e5e2dd]" />

              {/* Sort By Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setOpenDropdown(null);
                    setOpenSort(!openSort);
                  }}
                  className="flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[11px] uppercase tracking-[1px] text-[#333] hover:bg-[#f1f1f1] transition bg-white"
                >
                  <span>
                    {sortOptions.find(o => o.value === selectedFilters.sort)?.label || "Sort By"}
                  </span>

                  <svg
                    className={`w-3 h-3 transition-transform ${openSort ? "rotate-180" : ""}`}
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

                {openSort && (
                  <div className="absolute right-0 top-full mt-2 min-w-[180px] bg-white border border-[#ddd] shadow-lg z-50">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedFilters(prev => ({ ...prev, sort: option.value }));
                          setOpenSort(false);
                        }}
                        className={`block w-full text-left px-4 py-3 hover:bg-[#f5f5f5] text-[11px] uppercase tracking-[1px] ${
                          selectedFilters.sort === option.value ? "bg-[#faf9f6] font-semibold text-black" : "text-[#555]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-3 py-3 px-4 md:px-8 border-t border-[#e5e2dd] bg-[#faf9f6]">
            <span className="text-[10px] uppercase tracking-[1.5px] text-[#777]">Active Filters:</span>
            {searchQuery && (
              <span className="flex items-center gap-1.5 bg-[#f0ede8] border border-[#d5d2cc] px-2.5 py-1 text-[9px] uppercase tracking-[1px] text-[#333]">
                <span>Search: "{searchQuery}"</span>
                <button 
                  onClick={() => {
                    setSearchValue("");
                    setSearchQuery("");
                    setSearchActive(false);
                  }}
                  className="hover:text-black transition ml-1"
                >
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {filters.map((filter) => {
              const selectedValue = selectedFilters[filter.key];
              if (!selectedValue) return null;
              const selectedOption = filter.options.find(o => o.value === selectedValue);
              const label = selectedOption ? selectedOption.label : selectedValue;

              return (
                <span 
                  key={filter.key} 
                  className="flex items-center gap-1.5 bg-[#f0ede8] border border-[#d5d2cc] px-2.5 py-1 text-[9px] uppercase tracking-[1px] text-[#333]"
                >
                  <span>{filter.title}: {label}</span>
                  <button 
                    onClick={() => setSelectedFilters(prev => ({ ...prev, [filter.key]: "" }))}
                    className="hover:text-black transition ml-1"
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              );
            })}
            <button 
              onClick={handleClearAll}
              className="text-[9px] uppercase tracking-[1.5px] text-[#888] hover:text-black underline transition underline-offset-2 ml-auto"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuSection;