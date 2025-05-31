import {
  HERO_BACKGROUND_iMAGE_DESKTOP,
  HERO_BACKGROUND_iMAGE_MOBILE,
} from "@/constants";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HERO_BACKGROUND_iMAGE_MOBILE})`,
        // Responsive background image for desktop
        ...(typeof window !== "undefined" && window.innerWidth >= 768
          ? { backgroundImage: `url(${HERO_BACKGROUND_iMAGE_DESKTOP})` }
          : {}),
      }}
      className={`h-[286px] md:h-[421px] lg:h-[481px]  bg-no-repeat bg-center bg-cover text-white text-center flex flex-col justify-center items-center rounded-xl`}
    >
      <h1 className="font-semibold text-3xl md:text-[68px] lg:text-[94px]">
        Find your favorite <br /> place here!
      </h1>
      <p className="text-[7.42px] md:text-[18px] lg:[24px]">
        The best prices for over 2 million properties worldwide
      </p>
    </section>
  );
};

export default HeroSection;
