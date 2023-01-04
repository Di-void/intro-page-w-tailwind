import React from "react";
import HeroImgMobile from "../assets/images/image-hero-mobile.png";
import HeroImgDesktop from "../assets/images/image-hero-desktop.png";
import { icons } from "../libs/icons";

const Hero = () => {
  return (
    <main className="gap-x-10 lg:grid lg:grid-cols-2 lg:px-8 lg:py-12 lg:w-[80vw] lg:mx-auto">
      {/* HERO IMAGE */}
      <div className="w-full h-[320px] md:w-[70vw] lg:w-full lg:h-[65vh] xl:h-[70vh] mx-auto lg:order-2">
        <img
          src={HeroImgMobile}
          alt="img"
          className="w-full h-full object-scale-down sm:object-cover lg:hidden"
        />
        <img
          src={HeroImgDesktop}
          alt="img"
          className="w-full h-full object-cover xl:object-contain lg:block hidden"
        />
      </div>
      {/* END HERO IMAGE */}

      {/* HERO AND INFO */}
      <article className="place-self-center mt-5 lg:m-0 lg:min-h-[60vh] lg:w-full lg:relative">
        <h2 className="text-3xl font-bold text-center max-w-[400px] mx-auto md:text-4xl lg:text-6xl lg:text-left">
          Make remote work
        </h2>
        <p className="text-center text-medium-gray mt-3 max-w-2xl p-3 lg:p-0 lg:max-w-[400px] lg:text-left lg:mt-8 mx-auto">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-14 max-w-lg lg:max-w-[400px] mx-auto">
          <button className="w-1/3 min-w-[160px] max-w-[180px] border border-almost-black bg-almost-black text-almost-white py-3 px-3 rounded-xl hover:bg-almost-white hover:text-almost-black duration-150">
            Learn more
          </button>
        </div>
        <footer className="flex justify-between mt-14 md:mt-10 lg:mt-20 mb-10 lg:mb-0 max-w-lg mx-auto lg:max-w-[400px]">
          {icons.map((icon) => {
            return (
              <div key={icon.id}>
                <img
                  src={icon.path}
                  alt="/"
                  className="z-0 w-full h-full object-scale-down scale-75 md:scale-110 lg:scale-90"
                />
              </div>
            );
          })}
        </footer>
      </article>
      {/* HERO AND INFO */}
    </main>
  );
};

export default Hero;
