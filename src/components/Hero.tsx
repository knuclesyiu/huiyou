import React from "react";
import hero_image from "../assets/hero-image.png";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-(--color-primary)"
    >
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8 pb-10">
        {/* star badge */}
        {/* <div className="flex items-center gap-2 bg-gray-400 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group-[]:">
      <span className="group-hover:scale-110 transition-transform">
        <FaStar className="text-orange-300" />
      </span>
      <span className="text-sm font-medium">Jump start your growth</span>
    </div> */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Professional Company Secretarial Services
        </h1>

        <p className="text-gray-50 text-lg md:text-xl">
          We handle the compliance so you can focus on growing your business.
          <br />
          Expert company secretarial services tailored to your needs.
        </p>
        <div className="flex gap-6 w-full">
          <button className=" bg-white border-1 text-(--color-primary) md:w-1/4 w-1/3 px-6 py-2.5 rounded-lg hover:bg-gray-200 text-sm font-medium transition-all hover:shadow-lg">
            Our Services
          </button>
          <button className=" bg-(--color-primary) border-1 text-white md:w-1/4 w-1/3  px-6 py-2.5 rounded-lg hover:bg-gray-200 text-sm font-medium transition-all hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
      {/* right col */}
      <div className="w-full md:w-1/2 space-y-8">
        <img src={hero_image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
