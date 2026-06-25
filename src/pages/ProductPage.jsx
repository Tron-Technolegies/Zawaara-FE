import MoreLike from "../components/product/MoreLike"
import Product from "../components/product/Product"
import ProductNewArrival from "../components/product/ProductNewArrival"
import { useEffect } from "react"


function ProductPage() {
   useEffect(()=>{
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    <Product/>
    <ProductNewArrival/>
    <MoreLike/>
    </>
  )
}

export default ProductPage