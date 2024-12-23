import React, { useEffect } from "react";
// import { Chart, LineElement, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  // Register components
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend);
  

Chart.register(LineElement, LinearScale, PointElement, Title, Tooltip, Legend);

function LearningGraph() {
    const chartRef = useRef(null); // Correctly define chartRef using useRef
    const chartInstanceRef = useRef(null); // Reference to store the chart instance
  
    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
  
      // Destroy the previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
  
      // Create a new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [
            {
              label: "Student Progress",
              data: [20, 40, 60, 80, 100],
              borderColor: "#4caf50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              tension: 0.4,
              pointRadius: 5,
              pointBackgroundColor: "#4caf50",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100,
            },
          },
        },
      });
  
      // Cleanup function to destroy the chart on unmount
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }, []); // Empty dependency array to run the effect only once
  
    return (
      <div className="w-full max-w-4xl mx-auto">
        <canvas ref={chartRef}></canvas> {/* Attach the ref to the canvas */}
      </div>
    );
  }
  
  export default LearningGraph;