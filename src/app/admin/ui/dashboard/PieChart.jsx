import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Hair Cut", "Eye Brow", "Nail Art"],
    datasets: [
      {
        data: [40, 30, 30], // Replace with your percentages or values
        backgroundColor: ["#EF4444", "#22C55E", "#3B82F6"], // Tailwind colors
        hoverBackgroundColor: ["#DC2626", "#16A34A", "#2563EB"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
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
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-[-8px] bg-white h-60">
      <h2 className=" font-normal text-black mb-[-30px]">Segmentation</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
