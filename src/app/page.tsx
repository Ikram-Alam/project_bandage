import CategorySection from "./components/Category";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/hero";
import FeaturedProducts from "./components/Product";
import Summer from "./components/Summer";
import WinterComponent from "./components/Winter";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <CategorySection/>
   <FeaturedProducts/>
   <Summer/>
   <WinterComponent/>
   <Features/>
   <Footer/>
   </>
  );
}
