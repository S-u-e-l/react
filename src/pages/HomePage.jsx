import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      

      <div className="flex justify-center items-center" id="Hero">
        <div className="cover w-full xl:max-w-[1280px]">
          <Navbar/>
          <Hero/>
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
