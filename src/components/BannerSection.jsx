import { useLocation } from "react-router-dom";
import bannerData from "../data/bannerData";

const BannerSection = () => {
  const location = useLocation();
  const currentData = bannerData[location.pathname];

  return (
    <section className="flex flex-col items-center justify-center gap-10 lg:gap-20 overflow-hidden py-16 w-full h-min">
      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 px-8 h-min max-w-[1200px] w-full">
        <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#222222] text-left">
          {currentData?.heading}
        </h1>

        <p className="flex-1 max-w-[460px] font-inter font-normal text-base leading-[26px] text-[#666666] text-left">
          {currentData?.description}
        </p>
      </div>

      <div className="w-full">
        <img
          src={currentData.image}
          alt={currentData?.heading}
          className="block w-full h-[250px] md:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BannerSection;
