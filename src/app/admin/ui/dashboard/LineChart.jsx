"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
} from "chart.js";

// Register required components
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
);

const LineChart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Example labels for the week
        datasets: [
            {
                label: "This week",
                data: [5, 15, 20, 25, 10, 20, 30], // Example data
                borderColor: "#6A0DAD", // Line color
                backgroundColor: "rgba(25, 118, 210, 0.2)", // Fill under the line
                borderWidth: 2, // Line width
                tension: 0.4, // Smooth curve
                pointBackgroundColor: "var(--primary)", // Point color
                pointRadius: 5, // Point size
            },
            {
                label: "Last week",
                data: [10, 20, 15, 30, 20, 25, 15], // Example data
                borderColor: "#ff9800", // Line color
                borderWidth: 2, // Line width
                borderDash: [5, 5], // Dashed line
                tension: 0.4, // Smooth curve
                pointBackgroundColor: "#ff9800", // Point color
                pointRadius: 5, // Point size
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Prevent Chart.js from enforcing the aspect ratio
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true, // Circle legend indicators
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: "#1e293b", 
                titleColor: "#fff", 
                bodyColor: "#fff", 

                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 5, 
                    callback: (value) => `${value}k`, 
                },
            },
        },
    };

    return (
        <div
            className="flex flex-col items-center justify-center px-4 py-3 h-60 bg-white font-light gap-8"
        >
            <div className="font-normal text-black mb-[-28px] ">Transactions</div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
