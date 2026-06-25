import { useEffect } from "react"
import MenuSection from "../components/newarrival/MenuSection"
import ProductGrid from "../components/newarrival/ProductGrid"


function NewArrivalPage() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <MenuSection />
    <ProductGrid />
    </>

  )
}

export default NewArrivalPage