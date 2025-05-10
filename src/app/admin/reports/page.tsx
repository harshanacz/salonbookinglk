"use client";

import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Barchart from "@/app/admin/ui/dashboard/BarChart";
import Linechart from "@/app/admin/ui/dashboard/LineChart";
import Piechart from "@/app/admin/ui/dashboard/PieChart";

const Page = () => {
  const counts = [
    { value: "12400", name: "Total Revenue" },
    { value: "200", name: "Total Services" },
    { value: "350", name: "Active saloons" },
    { value: "4.5/5", name: "Customer satisfaction" },
  ];

  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });
  const [allSalons, setAllSalons] = useState(true);
  const [searchSalon, setSearchSalon] = useState("");

  const [selected, setSelected] = useState("PDF");

  return (
    <div className="m-5  overflow-auto h-screen">
      <div className="font-medium text-2xl md:text-xl">Reports</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {counts.map((count, index) => (
          <div key={index} className="bg-white py-4 px-6 rounded-lg shadow-sm">
            <div className="text-center">
              <p className="text-xl font-bold">{count.value}</p>
              <p className="text-sm text-muted-foreground">{count.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Date Range Picker Section */}
      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Select Date Range</h2>
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full sm:w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  className="sm:flex"
                  classNames={{
                    day_range_middle:
                      "bg-[#E6D6F9] text-[#6A0DAD] hover:bg-[#D0B4F5] hover:text-[#6A0DAD]",
                    day_selected:
                      "bg-[#6A0DAD] text-white hover:bg-[#5C0B9F] hover:text-white focus:bg-[#5C0B9F] focus:text-white",
                    day_range_end:
                      "bg-[#6A0DAD] text-white hover:bg-[#5C0B9F] hover:text-white focus:bg-[#5C0B9F] focus:text-white",
                    day_range_start:
                      "bg-[#6A0DAD] text-white hover:bg-[#5C0B9F] hover:text-white focus:bg-[#5C0B9F] focus:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>
            <Button
              className="w-full sm:w-auto bg-[#6A0DAD] hover:bg-[#5C0B9F] text-white"
              onClick={() => {
                console.log("Selected Date Range:", date);
              }}
            >
              Apply Filter
            </Button>
          </div>
          {/* Salon Selection and Download Section */}
          <div className="flex items-center gap-2">
            {!allSalons && (
              <input
                type="text"
                value={searchSalon}
                onChange={(e) => setSearchSalon(e.target.value)}
                className="border px-2 py-1 rounded-md"
                placeholder="Search Salons..."
              />
            )}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={allSalons}
                onChange={() => setAllSalons(!allSalons)}
              />
              All Salons
            </label>
            <DropdownMenu>
      <DropdownMenuTrigger className="p-2 bg-white rounded">
        {selected}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Download Format</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setSelected("CSV")}>PDF</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelected("PDF")}>Excel</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelected("Excel")}>CSV</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

            <Button
              className="bg-[--primary] hover:bg-[--primay] text-white"
              onClick={() => alert("Downloading...")}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
      <div>
      <Tabs defaultValue="revenue" className="mt-8">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="services">Popular Services</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue across all salons</CardDescription>
            </CardHeader>
            <CardContent>
              <Barchart/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Statistics</CardTitle>
              <CardDescription>Distribution of appointments by status</CardDescription>
            </CardHeader>
            <CardContent>
              <Piechart/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Popular Services</CardTitle>
              <CardDescription>Top 5 most booked services</CardDescription>
            </CardHeader>
            <CardContent>
              <Linechart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>

    </div>
  );
};

export default Page;
