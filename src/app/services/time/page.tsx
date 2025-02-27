"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DateSelector from "@/components/bookingPage/DateSelector";
import TimeSlot from "@/components/bookingPage/TimeSlot";
import BookingSummary from "@/components/bookingPage/BookingSummary";
import AppointmentDetails from "@/components/bookingPage/AppointmentDetails";
import Link from "next/link";

export default function SelectTime() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    if (selectedTime) {
      setIsOpen(true);
    }
  };
  const selectedSalon = {
    name: "Saloon Dmesh",
    rating: "4.9 ⭐⭐⭐⭐⭐ (485)",
    image: "/Dmesh.jpg", // Ensure this image exists in the `public` folder
  };
  const selectedServices = [
    { id: "1", name: "Layer Hair Cut", price: 1000 },
    { id: "2", name: "Scalp Anti-Dandruff Treatment", price: 1000 },
  ];

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
  

  

  return (
    <div className="p-7 shadow-lg w-full h-screen bg-purple-50">
      
      <nav className="text-gray-600   mb-4 mt-5">
                <Link href="/services" className="text-gray-500 hover:underline pl-3 pr-3">Services</Link> {" > "}
                
                <span className="text-black font-semibold pr-3">Time</span>{" > "}
                
                <Link href="/time" className="text-gray-500 hover:underline pl-3">Confirm</Link>
            </nav>
            <h2 className="pl-6 text-2xl font-bold mb-4">Select Time</h2>     

      {/* Date Selector */}
      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      {/* Time Slots */}
      <div className="mt-4">
        <TimeSlot setSelectedTime={setSelectedTime} selectedTime={selectedTime} />
      </div>

      {/* Booking Summary vgg*/}
      <BookingSummary selectedTime={selectedTime} />

      {/* Appointment Details */}
      <AppointmentDetails
        selectedSalon={selectedSalon}
        selectedServices={selectedServices}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        totalPrice={totalPrice}
      />
      
      
    </div>
    
    
  );
}
