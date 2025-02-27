import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous instance to prevent duplication
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Hair Cut", "Eye Brow", "Nail Art"],
        datasets: [
          {
            data: [40, 30, 30],
            backgroundColor: ["#EF4444", "#22C55E", "#3B82F6"],
            hoverBackgroundColor: ["#DC2626", "#16A34A", "#2563EB"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              padding: 15,
              color: "black",
            },
          },
          tooltip: {
            backgroundColor: "#1F2937",
            bodyColor: "#F9FAFB",
          },
        },
      },
    });

    return () => {
      chartInstance.current.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-[-8px] bg-white h-60">
      <h2 className="font-normal text-black mb-[-30px]">Segmentation</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
