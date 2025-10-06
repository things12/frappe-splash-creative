import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import RewardsSection from "@/components/RewardsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <RewardsSection />
      <Footer />
    </div>
  );
};

export default Index;
