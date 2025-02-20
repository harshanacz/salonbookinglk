"use client";
import Link from "next/link";

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
  return (
    <div className="absolute top-20 right-20 w-auto h-6 bg-white p-6 shadow-md rounded-lg min-h-[600px]">
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
          <p className="text-sm text-gray-500">
            {selectedSalon?.rating || "⭐"}
          </p>
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

      <div className="mt-4 opacity-50">
        <p className="text-sm text-gray-600">Time: {selectedTime}</p>
        <p className="text-sm text-gray-600">Date: {selectedDate}</p>
      </div>


      {/* Total Price */}
      <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold min-h-[200px]">
        <span>Total</span>
        <span>LKR {totalPrice.toLocaleString()}</span>
      </div>

      {/* Continue Button */}
      <Link href="/confirm">
        <button className="mt-18 w-full bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white py-3 rounded-2xl text-lg">
          Continue
        </button>
      </Link>
    </div>
  );
}