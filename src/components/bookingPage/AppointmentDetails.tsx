"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Service = {
  id: string;
  name: string;
  price: number;
};

type Salon = {
  name: string;
  rating: string;
  image: string;
};

type AppointmentDetailsProps = {
  selectedSalon: Salon | null;
  selectedServices: Service[];
  selectedDate: string;
  selectedTime: string;
  totalPrice: number;
};

export default function AppointmentDetails({
  selectedSalon,
  selectedServices,
  selectedDate,
  selectedTime,
  totalPrice,
}: AppointmentDetailsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<Service[]>([]);
  const router = useRouter();

  const extraServices = [
    { id: "3", name: "Nail Art", duration: "1hr", price: 2000 },
    { id: "4", name: "Foot Massage", duration: "2hr", price: 8000 },
    { id: "5", name: "Facial", price: 5000 },
    { id: "6", name: "Head Massage", price: 3000 },
    { id: "7", name: "Hair Spa", price: 4500 },
    { id: "8", name: "Pedicure", price: 3500 },
  ];

  const handleExtraSelection = (service: Service) => {
    setSelectedExtras((prevExtras) =>
      prevExtras.some((item) => item.id === service.id)
        ? prevExtras.filter((item) => item.id !== service.id)
        : [...prevExtras, service]
    );
    
  };

  const finalTotal = totalPrice + selectedExtras.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="absolute top-20 right-20 w-auto bg-white p-6 shadow-md rounded-lg min-h-[600px]">
      {/* Salon Details */}
      <div className="flex items-center gap-3 w-[500px] pr-6">
        <img
          src={selectedSalon?.image || "/default-image.jpg"}
          alt={selectedSalon?.name || "Salon"}
          className="w-20 h-20 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {selectedSalon?.name || "Loading..."}
          </h3>
          <p className="text-sm text-gray-500">{selectedSalon?.rating || "⭐"}</p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="mt-4">
        <h2 className="text-base font-semibold">Appointment Details</h2>
        <p className="text-gray-600">{selectedDate}</p>
        <p className="text-gray-600">{selectedTime}</p>
      </div>

      {/* Selected Services */}
      <div className="border-t mt-4 pt-4 space-y-2">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex justify-between">
            <span>{service.name}</span>
            <span>LKR {service.price.toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>LKR {totalPrice.toLocaleString()}</span>
      </div>

      {/* Continue Button */}
      <button
        className="mt-4 w-full bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white py-3 rounded-2xl text-lg"
        onClick={() => setShowPopup(true)}
      >
        Continue
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Add An Extra Service?</h3>
              <button onClick={() => setShowPopup(false)}>×</button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2">
            {extraServices.map((service) => (
              <div key={service.id} className="p-3 bg-purple-100 rounded-lg mb-2">
                <p className="font-semibold">{service.name}</p>
                <p className="text-sm text-gray-600">{service.duration}</p>
                <p className="text-sm">From LKR {service.price.toLocaleString()}</p>
              </div>
            ))}
            </div>
            
            <button
              className="mt-4 w-full bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white py-3 rounded-2xl text-lg"
              onClick={() => router.push("/services/confirm")}
            >
              No Thanks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
