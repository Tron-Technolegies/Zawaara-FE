import { useEffect, useState } from "react"
import MenuSection from "../components/newarrival/MenuSection"
import ProductGrid from "../components/newarrival/ProductGrid"


function NewArrivalPage() {
  useEffect(()=>{
      window.scrollTo(0, 0)
    }, [])
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    color: "",
    material: "",
    size: "",
    price: "",
    sort: "latest"
  });

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <MenuSection 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
    />
    <ProductGrid 
      searchQuery={searchQuery}
      selectedFilters={selectedFilters}
    />
    </>

  )
}

export default NewArrivalPage