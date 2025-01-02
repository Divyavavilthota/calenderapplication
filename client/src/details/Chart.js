import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyReport = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef(null); // Create a ref for the chart

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchMockData = async () => {
      setIsLoading(true);

      try {
        // Mock data simulating a backend response
        const mockData = [
          { method: "LinkedIn Post", frequency: 15 },
          { method: "Email", frequency: 25 },
          { method: "Phone Call", frequency: 10 },
          { method: "Text Message", frequency: 8 },
        ];

        // Process the data to create chart labels and datasets
        const labels = mockData.map((item) => item.method);
        const data = mockData.map((item) => item.frequency);

        // Update chart data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Communication Frequency",
              data: data,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(255, 255, 255, 1)",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMockData();

    // Clean up the chart instance on unmount
    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute", // Ensure it's fixed in the top-left corner
        top: "500px", // Increased gap at the top for more space
        left: "20px",
        width: "1000px",
        marginLeft: "1300px",
        padding: "60px", // Increased padding for better spacing
        backgroundColor: "#222", // Darker background for better contrast
        borderRadius: "10px",
        color: "#fff",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.6)", // More prominent shadow
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "2.0rem", textAlign: "center", color: "#FFD700" }}>
        Communication Frequency
      </h2>
      {isLoading ? (
        <p style={{ fontSize: "2.0rem", textAlign: "center" }}>Loading...</p>
      ) : chartData.labels.length > 0 ? (
        <Bar
          ref={chartRef} // Attach the ref here
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#fff", // White color for legend text
                  font: {
                    size: 20, // Increase font size for the legend
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#fff", // White color for x-axis ticks
                  font: { size: 20 }, // Increased font size for better readability
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)", // Light grid lines for better contrast
                },
                title: {
                  display: true,
                  text: "Methods of Communication",
                  color: "#fff", // White color for x-axis title
                  font: { size: 30 }, // Larger font size for axis title
                },
              },
              y: {
                ticks: {
                  color: "#fff", // White color for y-axis ticks
                  font: { size: 20 }, // Increased font size for better readability
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)", // Light grid lines for better contrast
                },
                title: {
                  display: true,
                  text: "Frequency",
                  color: "#fff", // White color for y-axis title
                  font: { size: 40}, // Larger font size for axis title
                },
              },
            },
          }}
          height={300} // Slightly larger height for a more prominent chart
        />
      ) : (
        <p style={{ fontSize: "2.0rem", textAlign: "center" }}>No data available.</p>
      )}
    </div>
  );
};

export default CommunicationFrequencyReport;
