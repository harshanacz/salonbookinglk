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

type Salon = {
  salonId: number;
  salonName: string;
  email: string;
  contactNumber: string;
  location: string;
  verifiedStatus: boolean;
};

export default function SalonsPage() {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("salonName");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter by");

  useEffect(() => {
    fetch("/salons.json")
      .then((response) => response.json())
      .then((data: Salon[]) => setSalons(data))
      .catch((error) => console.error("Error fetching salons:", error));
  }, []);

  const isSalonKey = (key: string): key is keyof Salon => {
    return ["salonName", "email", "contactNumber", "location", "verifiedStatus"].includes(key);
  };

  const filteredSalons = salons.filter((salon) => {
    if (!isSalonKey(filterType)) return false;

    const filterValue = salon[filterType] ?? "";
    return filterValue
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSalons = filteredSalons.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSalons.length / itemsPerPage);

  const options = [
    { value: "salonName", label: "Salon Name" },
    { value: "email", label: "Email" },
    { value: "contactNumber", label: "Contact Number" },
    { value: "location", label: "Location" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="ml-2 p-5 font-normal text-lg md:ml-28 md:text-xl">
        Salons
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
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Salon Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Verified Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSalons.map(({ salonId, salonName, email, contactNumber, location, verifiedStatus }) => (
                <TableRow key={salonId}>
                  <TableCell>{salonName}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{contactNumber}</TableCell>
                  <TableCell>{location}</TableCell>
                  <TableCell>{verifiedStatus ? "Verified" : "Not Verified"}</TableCell>
                  <TableCell>
                    <Button variant="ghost" onClick={() => router.push(`/admin/salons/${salonId}`)}>
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