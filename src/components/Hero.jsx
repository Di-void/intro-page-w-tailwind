import React from "react";
import HeroImg from "../assets/images/image-hero-mobile.png";
import { icons } from "../libs/icons";

const Hero = () => {
  return (
    <main className="">
      <div className="">
        <img src={HeroImg} alt="img" className="w-full h-full" />
      </div>

      <article className="mt-5 p-4">
        <h2 className="text-3xl font-bold text-center">Make remote work</h2>
        <p className="text-center text-medium-gray mt-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="flex justify-center mt-6">
          <button className="w-1/3 bg-almost-black text-almost-white py-3 px-3 rounded-xl hover:bg-opacity-95 duration-150">
            Learn more
          </button>
        </div>
        <footer className="flex justify-between mt-10 mb-10">
          {icons.map((icon) => {
            return (
              <div key={icon.id} className="h-[22px] w-[75px]">
                <img
                  src={icon.path}
                  alt="/"
                  className="w-full h-full scale-115"
                />
              </div>
            );
          })}
        </footer>
      </article>
    </main>
  );
};

export default Hero;
