"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function SegmentationChart() {
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
      type: "doughnut",
      data: {
        labels: ["Hair Cut", "Eye Brow", "Nail Art"],
        datasets: [
          {
            data: [40, 25, 35],
            backgroundColor: ["#ef4444", "#10b981", "#3b82f6"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        cutout: "70%",
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div>
        <div className="font-normal text-black mb-[-28px] text-center">
          Segmentation
        </div>
      </div>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
