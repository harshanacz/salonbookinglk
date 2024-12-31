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
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
        datasets: [
            {
                label: "This week",
                data: [5, 15, 20, 25, 10, 20, 30], // Example data
                borderColor: "#6A0DAD", // Line color
                backgroundColor: "rgba(25, 118, 210, 0.2)", 
                borderWidth: 2,
                tension: 0.4, 
                pointBackgroundColor: "var(--primary)", 
                pointRadius: 5, 
            },
            {
                label: "Last week",
                data: [10, 20, 15, 30, 20, 25, 15], // Example data
                borderColor: "#ff9800", 
                borderWidth: 2, 
                borderDash: [5, 5], 
                tension: 0.4, 
                pointBackgroundColor: "#ff9800", 
                pointRadius: 5, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
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
            className="flex flex-col items-center justify-center px-4 py-3 h-60 bg-white font-light gap-8 rounded-[20px]"
        >
            <div className="font-normal text-black mb-[-28px] ">Transactions</div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
