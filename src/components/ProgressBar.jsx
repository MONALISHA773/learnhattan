// import React, { useEffect, useRef } from "react";

// function ProgressBar({ progress }) {
//   const progressBarRef = useRef(null);

//   useEffect(() => {
//     if (progressBarRef.current) {
//       progressBarRef.current.style.width = `${progress}%`;
//     }
//   }, [progress]);

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <h3 className="text-xl text-center mb-4">Your Learning Progress</h3>
//       <div className="w-full bg-gray-300 rounded-full">
//         <div
//           ref={progressBarRef}
//         //   className="h-5 rounded-full transition-all duration-500 bg-blue-500"
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default ProgressBar;
import React, { useEffect, useRef } from "react";

function ProgressBar({ progress }) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl text-center mb-4">Your Learning Progress</h3>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full mb-4">
        <div
          ref={progressBarRef}
          className="h-5 rounded-full transition-all duration-500 bg-blue-500"
        ></div>
      </div>

      {/* Additional Content/Box Below Progress */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-2">Keep Going!</h4>
        <p className="text-gray-700">
          You are making great progress. Keep up the good work and continue learning.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
