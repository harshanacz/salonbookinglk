"use client";
import Link from "next/link";
import Image from "next/image";
import serviceImg from "public/images/Dmesh.jpg";

import { useState } from "react";
import { useRouter } from "next/navigation";


interface Service {
  id: number;
  name: string;
  price: number;
  duration: string;
}
interface Salon {
  id: number;
  name: string;
  rating: number;
  image: string;
}
const availableServices: Service[] = [
  { id: 1, name: "Hair Massage", price: 2000, duration: "1hr" },
  { id: 2, name: "Hair Color", price: 5000, duration: "1hr" },
  { id: 3, name: "Hair Treatment", price: 2000, duration: "2hr" },
  { id: 4, name: "Hair extension", price: 1000, duration: "1hr" },
];
const availableSalons: Salon[] = [
  { id: 1, name: "Salon Dmesh", rating: 4.9, image: "/Dmesh.jpg" },
  { id: 2, name: "Style Hub", rating: 4.7, image: "/images/StyleHub.jpg" },
  { id: 3, name: "Elite Salon", rating: 4.8, image: "/images/EliteSalon.jpg" },
];
const AddMore = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedSalon, setSelectedSalon] = useState<Salon>(availableSalons[0]);
  const router = useRouter();

  const addService = (service: Service) => {
    if (!selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };
  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );
  

  return (
    <div className="p-7 shadow-lg w-full min-h-screen bg-purple-50 flex flex-col overflow-y-scroll no-scrollbar">
      {/* Navigation */}

      <nav className="text-gray-600 mb-4 mt-5">
        <span className="text-black font-semibold pr-3">Services</span> {"> "}
        <Link
          href="/services"
          className="text-gray-500 hover:underline pl-3 pr-3"
        >
          Time
        </Link>{" "}
        {"> "}
        <Link href="/time" className="text-gray-500 hover:underline pl-3">
          Confirm
        </Link>
      </nav>

      {/* Header */}

      <h1 className="pl-6 text-2xl font-bold mb-4">Add More</h1>
      <button className=" bg-purple-900 text-white px-4 py-1 lg:w-[250px] rounded-full lg:text-sm">
        Related services
      </button>

      {/* Main Content */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4 ">
        {/* Available Services */}
        <div className=" space-y-3">
          {availableServices.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md lg:w-[750px]"
            >
              <div>
                <p className="text-lg font-normal">{service.name}</p>
                <p className="text-sm text-gray-500">{service.duration}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-normal">
                  LKR {service.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addService(service)}
                  className="mt-10 bg-black text-white w-8 h-8 rounded-lg flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary*/}

        <div
          className="bg-white p-6 shadow-md rounded-lg min-h-[600px] w-full max-w-[600px] 
             lg:absolute lg:top-20 lg:right-20 lg:w-auto 
             md:relative  md:mt-0 md:min-h-[300px] "
        >
          <div className="flex items-center gap-3 w-[500px] pr-6">
            <img
              src={selectedSalon.image}
              alt={selectedSalon.name}
              className="w-20 h-20 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">{selectedSalon.name}</h3>
              <p className="text-sm text-gray-500">
                {selectedSalon.rating} ⭐⭐⭐⭐⭐
              </p>
              {/*<img src="/Dmesh.jpg" alt="Salon" className="w-20 h-20 rounded-lg" />
            <div>
              <h3 className="text-lg font-semibold">Saloon Dmesh</h3>
              <p className="text-sm text-gray-500">4.9 ⭐⭐⭐⭐⭐ (485)</p>*/}
            </div>
          </div>

          <div className="border-t mt-4 pt-4 space-y-2">
            {selectedServices.map((service) => (
              <div key={service.id} className="flex justify-between">
                <span>{service.name}</span>
                <span>LKR {service.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold min-h-[200px]">
            <span>Total</span>
            <span>LKR {totalPrice.toLocaleString()}</span>
          </div>

          <button
            onClick={() => router.push("/services/time")}
            className="mt-20 w-full bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white py-3 rounded-2xl text-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMore;
