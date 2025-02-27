"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Edit, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

type Appointment = {
  appointmentId: number;
  userName: string;
  salonName: string;
  email: string;
  orderService: string;
  dateSent: string;
};

export default function ClientTable() {
  const [clients, setClients] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("userName");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter by");

  useEffect(() => {
    fetch("/appointments.json")
      .then((response) => response.json())
      .then((data: Appointment[]) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const isAppointmentKey = (key: string): key is keyof Appointment => {
    return ["userName", "salonName", "email", "orderService", "dateSent"].includes(key);
  };

  const filteredClients = clients.filter((client) => {
    if (!isAppointmentKey(filterType)) return false;
    const matchesSearch = client[filterType]
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate = dateFilter ? client.dateSent.startsWith(dateFilter) : true;
    return matchesSearch && matchesDate;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const options = [
    { value: "userName", label: "Client" },
    { value: "salonName", label: "Salon" },
    { value: "email", label: "Email" },
    { value: "orderService", label: "Order" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="ml-2 p-5 font-normal text-lg md:ml-28 md:text-xl">
        Appointments
      </div>

      <div className="container mx-auto p-4 bg-[--backgroundWhite] rounded-lg w-full md:w-4/5 flex flex-col overflow-auto max-h-[85vh]">
        <div className="mb-4 flex gap-4 flex-wrap md:flex-nowrap items-center">
          <Input
            type="text"
            placeholder={`Search ${selectedOption.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-3/4 focus:outline-none focus:ring-0 bg-[#F5F5F5] border-none rounded-xl"
          />
          <div className="relative w-40">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#F5F5F5] rounded-xl py-2 px-4 text-left flex justify-between items-center"
            >
              {selectedOption}
              <ChevronDown className="h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelectedOption(option.label);
                setFilterType(option.value);
                setIsDropdownOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
              </div>
            )}
          </div>
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full md:w-1/4 focus:outline-none focus:ring-0 bg-[#F5F5F5] border-none rounded-xl"
          />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Salon</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Order Service</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentClients.map(({ appointmentId, userName, salonName, email, orderService, dateSent }) => (
                <TableRow key={appointmentId}>
                  <TableCell>{userName}</TableCell>
                  <TableCell>{salonName}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{orderService}</TableCell>
                  <TableCell>{dateSent}</TableCell>
                  <TableCell>
                  <Button variant="ghost" onClick={() => router.push(`/admin/appointments/${appointmentId}`)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 justify-end">
          <div className="flex items-center gap-4">
            <Button
              style={{ color: "var(--primary)" }}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span>{currentPage}</span>
            <Button
              className="text-[var(--secondary)]"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
