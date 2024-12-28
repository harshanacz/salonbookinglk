"use client";

import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
    const data = {
        labels: ["Hair Cut", "Eye brow", "Nail art"],
        datasets: [
            {
                label: "Segmentation",
                data: [40, 30, 30], // Sample values for segments
                backgroundColor: ["#f44336", "#4caf50", "#03a9f4"], // Colors for segments
                hoverOffset: 4, // Effect when hovering
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    usePointStyle: true, // Use circles for legend
                    padding: 20, // Add padding to labels
                    
                },
            },
            title: {
                display: true,
                text: "Segmentation",
                align: "start",
                font: {
                    size: 16,
                },
            },
        },
    };

    return (
        <div className="w-full h-72">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default PieChart;
