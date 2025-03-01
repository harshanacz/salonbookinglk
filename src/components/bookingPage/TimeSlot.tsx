"use client";
import { useState } from "react";

type TimeSlotProps = {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
};

type TimeSlot = {
  time: string;
  status: "available" | "unavailable";
  
};

// Generate multiple time slots to enable scrolling
const timeSlots: TimeSlot[] = Array.from({ length: 15 }, (_, i) => ({
  time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"} AM`,
  status: i % 4 === 0 ? "unavailable" : "available",
  
}));

export default function TimeSlotSelector({ selectedTime, setSelectedTime }: TimeSlotProps) {
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 overflow-y-auto border border-gray-300 rounded-lg p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

      {timeSlots.map((slot, index) => (
        <button
          key={index}
          disabled={slot.status === "unavailable"}
          onClick={() => setSelectedTime(slot.time)}
          className={`w-full p-4 flex justify-between items-center rounded-lg text-sm font-medium
            ${slot.status === "unavailable"
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border border-gray-300 hover:bg-gray-50"
            }
            ${selectedTime === slot.time ? "border-black" : ""}
          `}
        >
          <span>{slot.time}</span>
          <span className="text-gray-500">High Demand</span>
          
        </button>
      ))}
    </div>
  );
}
