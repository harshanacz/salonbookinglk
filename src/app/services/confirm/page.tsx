"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Service {
    id: number;
    name: string;
    price: number;
    duration: string;
    time?: string;
}

interface Salon {
    id: number;
    name: string;
    rating: number;
    image: string;
}

const availableSalons: Salon[] = [
    { id: 1, name: "Salon Dmesh", rating: 4.9, image: "/Dmesh.jpg" },
    { id: 2, name: "Style Hub", rating: 4.7, image: "/images/StyleHub.jpg" },
    { id: 3, name: "Elite Salon", rating: 4.8, image: "/images/EliteSalon.jpg" },
];

const ConfirmPage = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [selectedSalon, setSelectedSalon] = useState<Salon>(availableSalons[0]);
    const [paymentMethod, setPaymentMethod] = useState<'venue' | 'card'>('venue');
    const router = useRouter();

    const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

    return (
        <div className="p-7 shadow-lg w-full min-h-screen bg-purple-50 flex flex-col overflow-y-scroll no-scrollbar">
            <nav className="text-gray-600 mb-4 mt-5">
                <Link href="/services" className="text-gray-500 hover:underline pl-3 pr-3">Time</Link> {" > "}
                <Link href="/services" className="text-gray-500 hover:underline pl-3">Services</Link> {" > "}
                <span className="text-black font-semibold pr-3">Confirm</span>
            </nav>

            <h1 className="pl-6 text-2xl font-bold mb-4">Review and Confirm</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                {/* Payment Method Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold">Payment Method</h3>
                    <div className="space-y-2">
                        <button
                            className={`w-full p-3 border rounded-lg flex items-center gap-2 ${paymentMethod === 'venue' ? 'border-purple-500 bg-purple-100' : 'border-gray-300'}`}
                            onClick={() => setPaymentMethod('venue')}
                        >
                            🏠 Pay at venue
                        </button>
                        <button
                            className={`w-full p-3 border rounded-lg flex items-center gap-2 ${paymentMethod === 'card' ? 'border-purple-500 bg-purple-100' : 'border-gray-300'}`}
                            onClick={() => setPaymentMethod('card')}
                        >
                            💳 Pay via Credit/Debit Card
                        </button>
                    </div>

                    <h3 className="font-semibold">Special Notice</h3>
                    <p className="text-gray-600 text-sm">To Confirm Your Appointment ✴ Please Make Sure to Send Your Hair Picture</p>

                    <h3 className="font-semibold">Booking Notes</h3>
                    <textarea className="w-full p-3 border rounded-lg mt-2 text-sm" placeholder="Include comments on your booking" />
                </div>

                {/* Order Summary Section */}
                <div className="bg-white p-6 shadow-md rounded-lg  w-full max-w-[600px] lg:absolute lg:top-20 lg:right-20 lg:w-auto md:relative  md:mt-0 md:min-h-[500px]">
                    <div className="flex items-center gap-3 w-[500px] pr-6">
                        <img src={selectedSalon.image} alt={selectedSalon.name} className="w-20 h-20 rounded-lg" />
                        <div>
                            <h3 className="text-lg font-semibold">{selectedSalon.name}</h3>
                            <p className="text-sm text-gray-500">{selectedSalon.rating} ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>

                    <div className="border-t mt-4 pt-4 space-y-2">
                        {selectedServices.map((service) => (
                            <div key={service.id} className="flex flex-col">
                                <span className="font-semibold">{service.name}</span>
                                <span className="text-gray-500 text-sm">{service.duration}</span>
                                <span className="text-gray-500 text-sm">{service.time}</span>
                                <span className="text-right font-bold">LKR {service.price.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t mt-4 pt-4">
                        <h3 className="font-bold text-lg">Total</h3>
                        <div className="flex justify-between">
                            <span className="text-purple-600 font-semibold">Pay now</span>
                            <span className="font-bold">LKR {totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Pay at venue</span>
                            <span className="font-bold">LKR {totalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push("/confirmation")}
                        className="mt-20 w-full bg-gradient-to-r from-[#8E44AD] to-[#6B0EAD] text-white py-3 rounded-2xl text-lg"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPage;
