'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
  { name: 'Anna', image: '/images/anna.jpg' },
  { name: 'Leo', image: '/images/leo.jpg' },
];

const appointments: Appointment[] = [
  { id: 1, time: '9:00-9:30', worker: 'Anna', service: 'Hair cut', color: 'bg-blue-200', price: 'LKR 40' },
  { id: 2, time: '10:00-10:30', worker: 'Leo', service: 'Nail Extension', color: 'bg-purple-500', price: 'LKR 50' },
  { id: 3, time: '10:30-11:00', worker: 'Leo', service: 'Nail Extension', color: 'bg-pink-500', price: 'LKR 60' },
  { id: 4, time: '11:00-11:30', worker: 'Anna', service: 'Nail Polish', color: 'bg-green-300', price: 'LKR 30' },
  { id: 5, time: '11:45-12:00', worker: 'Leo', service: 'Nail Extension', color: 'bg-green-500', price: 'LKR 50' },
];

const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

export default function AppointmentsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const router = useRouter(); 
  const handleCheckout = () => {
    if (selectedAppointment) {
      localStorage.setItem('bookedServices', JSON.stringify([selectedAppointment]));
      router.push('/owner/summaryBill');
    }
  };
  
  const openModal = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsOpen(true);
  };

  

  return (
    <div className="p-4 sm:p-6 bg-purple-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Appointments</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6 bg-transparent">
        <select className="px-3 py-2 bg-white rounded-lg shadow text-sm">
          <option>Working staff</option>
        </select>
        <div className="flex items-center gap-4">
          <select className="px-3 py-2 bg-white rounded-lg shadow text-sm">
            <option>Today | Monday 9th Aug</option>
          </select>
          <select className="px-3 py-2 bg-white rounded-lg shadow text-sm">
            <option>Day</option>
          </select>
          <span className="text-xl cursor-pointer">⚙️</span>
        </div>
        <select className="px-3 py-2 bg-white rounded-lg shadow text-sm">
          <option>Add New</option>
        </select>
      </div>

      {/* Workers Row */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center bg-white p-2 rounded-lg shadow">
        <div className="text-center font-bold">Time</div>
        {workers.map((worker) => (
          <div key={worker.name} className="flex flex-col items-center">
            <img
              src={worker.image}
              alt={worker.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
            />
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
        {/* Time Column */}
        <div className="flex flex-col">
          {times.map((time) => (
            <div key={time} className="h-14 sm:h-16 flex items-center justify-center border-b text-gray-600 text-xs sm:text-sm">
              {time}
            </div>
          ))}
        </div>

        {/* Appointments Columns for Each Worker */}
        {workers.map((worker) => (
          <div key={worker.name} className="flex flex-col">
            {times.map((time, index) => {
              const appointment = appointments.find((appt) => appt.worker === worker.name && appt.time.includes(time.split(' ')[0]));
              return (
                <div key={index} className="h-14 sm:h-16 flex items-center border-b relative">
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

      {/* Modal for Appointment Details */}
      {isOpen && selectedAppointment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg md:max-w-2xl rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Left Profile Section */}
            <div className="bg-purple-50 p-6 w-full md:w-1/3 flex flex-col items-center border-r">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full border"
              />
              <h3 className="text-lg font-semibold mt-2">Jack Deo</h3>
              <p className="text-sm text-gray-500">Jack@gmail.com</p>
              <button className="mt-3 text-purple-600 underline">View Profile</button>
              <div className="mt-4 text-xs text-gray-600 space-y-1">
                <p>📅 Created: 17 Dec 2024</p>
                <p>➕ Add pronouns</p>
                <p>➕ Add date of birth</p>
              </div>
            </div>

            {/* Right Appointment Details Section */}
            <div className="p-6 w-full md:w-2/3 relative">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold">Appointment Details</h2>
              <div className="mt-2">
                <select className="w-full border rounded-lg px-3 py-2 bg-gray-100">
                  <option>Booked</option>
                  <option>Completed</option>
                  <option>Canceled</option>
                </select>
              </div>

              {/* Services */}
              <div className="mt-4">
                <h3 className="font-semibold">Services</h3>
                <div className="mt-2 p-3 bg-gray-100 rounded-lg">
                  <p className="text-sm font-medium">{selectedAppointment.service}</p>
                  <p className="text-xs text-gray-600">{selectedAppointment.time} - {selectedAppointment.worker}</p>
                  <p className="text-sm font-semibold mt-1">{selectedAppointment.price}</p>
                </div>
              </div>

              <button onClick={handleCheckout}
               className="mt-4 w-full p-3 bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white font-semibold rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
