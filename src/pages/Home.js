import React from "react";
import HomeBanner from "../components/home/HomeBanner";

import WhoWeAre from "../components/home/WhoWeAre";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default Home;
