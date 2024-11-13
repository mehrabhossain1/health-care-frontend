import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/ui/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import Stats from "@/components/ui/HomePage/Stats/Stats";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </div>
  );
};

export default HomePage;
