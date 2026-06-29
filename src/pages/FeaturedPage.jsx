import { useState } from "react";
import MenuSection from "../components/newarrival/MenuSection";
import FeaturedProductGrid from "../components/featured/FeaturedProductGrid";

function FeaturedPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    color: "",
    material: "",
    size: "",
    price: "",
    sort: "latest",
  });

  return (
    <>
      <MenuSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />

      <FeaturedProductGrid
        searchQuery={searchQuery}
        selectedFilters={selectedFilters}
      />
    </>
  );
}

export default FeaturedPage;