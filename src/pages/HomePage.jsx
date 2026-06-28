import CuratedEdits from "../components/home/CuratedEdits"
import FeaturedLook from "../components/home/FeaturedLook"
import HeritageBloom from "../components/home/HeritageBloom"
import HeritageSection from "../components/home/HeritageSection"
import HeroSection from "../components/home/HeroSection"
import HomeCollection from "../components/home/HomeCollection"
import JustArrived from "../components/home/JustArrived"
import ShopByCategories from "../components/home/ShopByCategories"
import SummerChronicles from "../components/home/SummerChronicles"
import CommunitySection from "../components/home/CommunitySection"
import { useEffect } from "react"


const Home = () => {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
      <HeroSection/>
      <HomeCollection/>
      <ShopByCategories/>
      <HeritageSection/>
      <CuratedEdits/>
      <HeritageBloom/>
      <JustArrived/>
      <SummerChronicles/>
      <FeaturedLook/>
      <CommunitySection/>
      

      
    </div>
  )
}

export default Home
