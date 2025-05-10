"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default function TransactionsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "This month",
            data: [5000, 15000, 20000, 25000, 10000, 20000, 30000],
            borderColor: "#8b5cf6",
            backgroundColor: "#8b5cf6",
            tension: 0.3,
            pointRadius: 4,
          },
          {
            label: "Lasth month",
            data: [10000, 20000, 15000, 30000, 20000, 25000, 15000],
            borderColor: "#f59e0b",
            backgroundColor: "#f59e0b",
            borderDash: [5, 5],
            tension: 0.3,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => (value === 0 ? "0k" : value + "k"),
            },
          },
          x: {
            grid: {
              display: true,
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div>
      <div>
        <div className="font-normal text-black text-center">
          Sales
        </div>
      </div>
      <div className="w-full h-80">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

