"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Appointments",
        data: [50, 20, 30, 60, 80, 40, 70], // Sample data
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(103, 58, 183, 1)"); // Purple
          gradient.addColorStop(1, "rgba(225, 190, 231, 1)"); // Light purple
          return gradient;
        },
        borderWidth: 0,
        borderRadius: 10, // Rounded bars
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide the legend
      title: {
        display: true,
        text: "Overall Appointments",
        align: "start",
        font: { size: 16 },
        color: "#000",
      },
    },
    scales: {
      x: {
        grid: { display: false }, // Hide grid lines
      },
      y: {
        grid: { drawBorder: false },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="w-full h-72">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
