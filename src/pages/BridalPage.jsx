import BridalAtelier from "../components/bridal/BridalAtelier"
import BridalHero from "../components/bridal/BridalHero"
import Ceremonies from "../components/bridal/Ceremonies"
import FeaturedCouture from "../components/bridal/FeaturedCouture"
import { useEffect } from "react"


function BridalPage() {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
    <BridalHero/>
    <FeaturedCouture/>
    <Ceremonies/>
    <BridalAtelier/>
    </>
  )
}

export default BridalPage