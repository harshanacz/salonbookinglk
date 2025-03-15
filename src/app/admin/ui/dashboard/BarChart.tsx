"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function AppointmentsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "appointments",
            data: [3, 5, 2, 4, 6, 1, 3],
            backgroundColor: "#8b5cf6",
            borderRadius: 4,
            barThickness: 30,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, 
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 8,
            ticks: {
              stepSize: 2,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    // Resize chart on window resize
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="font-normal text-black mb-4 text-center">Appointments</div>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
