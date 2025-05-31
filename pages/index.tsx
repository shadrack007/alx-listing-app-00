import { Quicksand } from "next/font/google";

import FilterSection from "@/components/common/FilterSection";
import HeroSection from "@/components/common/HeroSection";
import ListingSection from "@/components/common/ListingSection";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const Home: React.FC = () => {
  return (
    <div className={`${quicksand.className} px-3 md:px-5 lg:px-10 space-y-7`}>
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </div>
  );
};

export default Home;
