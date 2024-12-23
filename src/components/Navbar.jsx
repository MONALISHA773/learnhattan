
// import React, { useState } from "react";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-semibold cursor-pointer">Learnhattan</h1>
        
//         {/* Desktop Navbar */}
//         <nav className="hidden md:flex">
//           <a href="#" className="mx-4 hover:text-gray-300 hover:underline">Home</a>
//           <a href="#" className="mx-4 hover:text-gray-300 hover:underline">About</a>
//           <a href="#" className="mx-4 hover:text-gray-300 hover:underline">Services</a>
//           <a href="#" className="mx-4 hover:text-gray-300 hover:underline">Contact</a>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button 
//           onClick={toggleMenu} 
//           className="md:hidden text-white focus:outline-none"
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor" 
//             className="w-6 h-6"
//           >
//             <path 
//               stroke-linecap="round" 
//               stroke-linejoin="round" 
//               stroke-width="2" 
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div 
//         className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
//       >
//         <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Home</a>
//         <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">About</a>
//         <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Services</a>
//         <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Contact</a>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body class for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`p-4 fixed top-0 left-0 w-full z-50 shadow-lg ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className={`text-xl font-semibold cursor-pointer ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Learnhattan
        </h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex">
          <a
            href="#"
            className="mx-4 hover:text-gray-300 hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="mx-4 hover:text-gray-300 hover:underline"
          >
            About
          </a>
          <a
            href="#"
            className="mx-4 hover:text-gray-300 hover:underline"
          >
            Services
          </a>
          <a
            href="#"
            className="mx-4 hover:text-gray-300 hover:underline"
          >
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white md:text-black focus:outline-none"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m4.22 1.78l.7-.7M19 12h-1m-1.78 4.22l-.7.7M12 19v1m-4.22-1.78l-.7.7M5 12h1m1.78-4.22l.7-.7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m4.22 1.78l.7-.7M19 12h-1m-1.78 4.22l-.7.7M12 19v1m-4.22-1.78l-.7.7M5 12h1m1.78-4.22l.7-.7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
