"use client";
import React, { useEffect, useState } from "react";
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

type Booking = {
  salonName: string;
  service: string;
  payment: string;
  date: string;
  time: string;
};

type Client = {
  userId: number;
  name: string;
  email: string;
  gender: string;
  phoneNumber: string;
  verificationStatus: boolean;
  createdDate: string;
  profileImage: string;
  address: string;
  bookings: Booking[];
};

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [client, setClient] = useState<Client | null>(null);
  const [clientHistory, setClientHistory] = useState<Booking[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clientId, setClientId] = useState<string>("");

  useEffect(() => {
    // Unwrap the params promise to get the client id
    params.then((resolvedParams) => {
      setClientId(resolvedParams.id);
    });
  }, [params]);

  useEffect(() => {
    if (!clientId) return;

    // Fetch client details
    fetch("/clients.json")
      .then((response) => response.json())
      .then((data: Client[]) => {
        const clientData = data.find((c) => c.userId === parseInt(clientId));
        if (clientData) {
          setClient(clientData);
          setClientHistory(clientData.bookings || []);
        }
      })
      .catch((error) => console.error("Error fetching client details:", error));
  }, [clientId]);

  const handleSuspend = () => {
    // Handle suspend logic here
    console.log("Client suspended");
  };

  const handleVerifyStatusChange = (status: boolean) => {
    if (client) {
      setClient({ ...client, verificationStatus: status });
    }
  };

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="ml-2 p-5 font-normal text-lg md:ml-28 md:text-xl">
        Client Details
      </div>

      <div className="container mx-auto p-4 bg-[--backgroundWhite] rounded-lg w-full md:w-4/5 flex flex-col overflow-auto max-h-[85vh]">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{client.name}</h2>
            <p className="text-sm text-gray-600">{client.email}</p>
            <p className="text-sm text-gray-600">{client.phoneNumber}</p>
            <p className="text-sm text-gray-600">{client.address}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2"
              >
                {client.verificationStatus ? "Verified" : "Not Verified"}
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
          <h3 className="text-lg font-semibold">Booking History</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Salon Name</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientHistory.map(({ salonName, service, payment, date, time }, index) => (
                <TableRow key={index}>
                  <TableCell>{salonName}</TableCell>
                  <TableCell>{service}</TableCell>
                  <TableCell>{payment}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
