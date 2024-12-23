import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";
import ProgressBar from "./components/ProgressBar";
// import LearningGraph from "./components/LearningGraph";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <ParallaxSection />
      <div className="my-12">
        <ProgressBar progress={70} />
      </div>
      {/* <div className="my-12">
        <LearningGraph />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
