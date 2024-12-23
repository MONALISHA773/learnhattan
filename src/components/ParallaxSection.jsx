import React from "react";
import '../styles.css';
function ParallaxSection() {
  return (
    <section
      className="parallax relative w-full h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://en.digitalreport.com.tr/wp-content/uploads/sites/2/2022/11/Hybrid-Blockchain-technology-explained-Features-benefits-and-how-it-works_07.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="relative z-10 flex items-center justify-start w-full h-full">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-left px-6 md:px-16 slide-in-left">
          Learn, earn, and grow in the Web3 world with Learnhattan!
        </h2>
      </div>
    </section>
  );
}

export default ParallaxSection;
