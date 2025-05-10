"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Worker {
  name: string;
  image: string;
}

interface Appointment {
  id: number;
  time: string;
  worker: string;
  service: string;
  color: string;
  price?: string;
}

const workers: Worker[] = [
  { name: "Anna", image: "/images/anna.jpg" },
  { name: "Leo", image: "/images/leo.jpg" },
];

const appointments: Appointment[] = [
  {
    id: 1,
    time: "9:00-9:30",
    worker: "Anna",
    service: "Hair cut",
    color: "bg-blue-200",
    price: "LKR 40",
  },
  {
    id: 2,
    time: "10:00-10:30",
    worker: "Leo",
    service: "Nail Extension",
    color: "bg-purple-500",
    price: "LKR 50",
  },
  {
    id: 3,
    time: "10:30-11:00",
    worker: "Leo",
    service: "Nail Extension",
    color: "bg-pink-500",
    price: "LKR 60",
  },
  {
    id: 4,
    time: "11:00-11:30",
    worker: "Anna",
    service: "Nail Polish",
    color: "bg-green-300",
    price: "LKR 30",
  },
  {
    id: 5,
    time: "11:45-12:00",
    worker: "Leo",
    service: "Nail Extension",
    color: "bg-green-500",
    price: "LKR 50",
  },
];

const times = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

const SalonSchedule = ({
  workers,
  times,
  appointments,
  openModal,
}: {
  workers: Worker[];
  times: string[];
  appointments: Appointment[];
  openModal: (appointment: Appointment) => void;
}) => {
  return (
    <div className="p-4 bg-purple-50 rounded-lg shadow">
      {/* Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center bg-white p-2 rounded-lg shadow">
        <div className="text-center font-bold">Time</div>
        {workers.map((worker, index) => (
          <div key={index} className="flex flex-col items-center">
            {worker.image && (
              <img
                src={worker.image}
                alt={worker.name || "Worker"}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
              />
            )}
            <span className="text-xs mt-1">{worker.name || "Unnamed"}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
        {/* Time Column */}
        <div className="flex flex-col">
          {times.map((time, index) => (
            <div
              key={index}
              className="h-14 sm:h-16 flex items-center justify-center border-b text-gray-600 text-xs sm:text-sm"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Appointments Columns for Each Worker */}
        {workers.map((worker, workerIndex) => (
          <div key={workerIndex} className="flex flex-col">
            {times.map((time, timeIndex) => {
              const appointment = appointments.find(
                (appt) =>
                  appt.worker === worker.name &&
                  appt.time.includes(time.split(" ")[0])
              );
              return (
                <div
                  key={timeIndex}
                  className="h-14 sm:h-16 flex items-center border-b relative"
                >
                  {appointment && (
                    <div
                      className={`absolute w-full px-2 py-1 text-white rounded text-xs sm:text-sm ${appointment.color} cursor-pointer`}
                      onClick={() => openModal(appointment)}
                    >
                      {appointment.time} {appointment.service}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AppointmentsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const router = useRouter();

  const handleCheckout = () => {
    if (selectedAppointment) {
      localStorage.setItem(
        "bookedServices",
        JSON.stringify([selectedAppointment])
      );
      router.push("/owner/summaryBill");
    }
  };

  const openModal = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsOpen(true);
  };

  return (
    <div>
      <SalonSchedule
        workers={workers}
        times={times}
        appointments={appointments}
        openModal={openModal}
      />
    </div>
  );
}
