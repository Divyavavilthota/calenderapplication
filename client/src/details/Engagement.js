import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Engagement = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Emails", "Phone Calls", "LinkedIn Messages"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  useEffect(() => {
    // Destroy previous chart to prevent canvas reuse error
    if (chartRef.current) {
      chartRef.current.chartInstance?.destroy();
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#222", // Dark background for contrast
        borderRadius: "10px",
        padding: "40px",
        color: "#fff",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.6)", // Shadow for depth
        textAlign: "center",
        marginTop: "90px", // Adjust this value as needed for spacing
        marginLeft: "600px", // Adjust this value for left spacing
        width: "60%", // Full width of the container
        maxWidth: "300px", // Max width for the chart container
        height: "350px", // Increased height to fully cover the chart
        display: "flex", // Flexbox to center content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "1.0rem", color: "#FFD700" }}>
          Engagement Breakdown
        </h2>
        <div style={{ width: "90%", height: "70%" }}>
          <Pie
            ref={chartRef}
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#fff",
                    font: {
                      size: 10,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Engagement;
