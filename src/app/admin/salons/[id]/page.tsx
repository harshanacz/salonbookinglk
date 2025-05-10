"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown } from "lucide-react";

type Service = {
  serviceName: string;
  price: string;
  rating: number;
  numberOfExperts: number;
};

type Salon = {
  salonId: number;
  salonName: string;
  createdDate: string;
  verifiedStatus: boolean;
  services: Service[];
};

export default function SalonDetailPage() {
  const params = useParams(); // Use useParams to get the id
  const salonId = params.id as string; // Ensure it's treated as a string
  const [salon, setSalon] = useState<Salon | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/salons.json")
      .then((response) => response.json())
      .then((data: Salon[]) => {
        const salonData = data.find((s) => s.salonId === parseInt(salonId));
        if (salonData) {
          setSalon(salonData);
        } else {
          setError("Salon not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching salon details:", error);
        setError("Failed to fetch salon details");
      });
  }, [salonId]);

  const handleVerifyStatusChange = (status: boolean) => {
    if (salon) {
      setSalon({ ...salon, verifiedStatus: status });
    }
  };

  const handleSuspend = () => {
    console.log("Salon suspended");
  };

  const handleCloseService = (serviceName: string) => {
    if (salon) {
      const updatedServices = salon.services.filter(
        (service) => service.serviceName !== serviceName
      );
      setSalon({ ...salon, services: updatedServices });
    }
  };

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!salon) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="ml-2 p-5 font-normal text-lg md:ml-28 md:text-xl">
        Salon Details
      </div>

      <div className="container mx-auto p-4 bg-[--backgroundWhite] rounded-lg w-full md:w-4/5 flex flex-col overflow-auto max-h-[85vh]">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{salon.salonName}</h2>
            <p className="text-sm text-gray-600">
              Created on: {new Date(salon.createdDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-2"
              >
                {salon.verifiedStatus ? "Verified" : "Not Verified"}
                <ChevronDown className="h-4 w-4" />
              </Button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  <div
                    onClick={() => {
                      handleVerifyStatusChange(true);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Verified
                  </div>
                  <div
                    onClick={() => {
                      handleVerifyStatusChange(false);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Not Verified
                  </div>
                </div>
              )}
            </div>
            <Button variant="destructive" onClick={handleSuspend}>
              Suspend
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Number of Experts</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salon.services.map(
                ({ serviceName, price, rating, numberOfExperts }, index) => (
                  <TableRow key={index}>
                    <TableCell>{serviceName}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell>{rating}</TableCell>
                    <TableCell>{numberOfExperts}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        onClick={() => handleCloseService(serviceName)}
                      >
                        Close
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
