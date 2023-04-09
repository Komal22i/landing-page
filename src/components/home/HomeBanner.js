import React from "react";
import {AiOutlinePlayCircle} from "react-icons/ai"
import Client from "./Client";

const HomeBanner = () => {
  return (
    <div className="bg-primary">
      <div className="container-box mx-auto w-full text-white pt-10 lg:px-0 px-5">
        <h3 className="lg:text-4xl leading-8 text-3xl lg:w-[60%] w-full py-3 font-semibold">
          We design physical <span className="underline">experiences</span>  that create more happy in the world
        </h3>
        <p className="py-3 lg:w-[50%] w-full text-lg">
          — We’re a full-service interior design agency who specialise in
          simple, useful and beautiful solutions for any space.
        </p>

        <div className=" md:flex gap-5 pt-6">
          <button className="flex gap-2 hover:text-white hover:bg-secondary lg:w-48 w-full py-3 bg-white rounded-md text-secondary px-5 items-center justify-center">
            <AiOutlinePlayCircle size={20}/>
           <span className="font-semibold">Showreel</span> 
          </button>
          <button className="hover:text-secondary hover:bg-white hover:border-secondary hover:border-2 bg-secondary py-3 px-6 rounded-md lg:w-48 w-full lg:my-0 my-4">
        
           <span className="">Get in touch</span> 
          </button>
        </div>

        <img alt="landing_image" src="../images/home-banner.png" className="w-full h-fit py-12"/>
      </div>

    <Client/>
    </div>
  );
};

export default HomeBanner;
