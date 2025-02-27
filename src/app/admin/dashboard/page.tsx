"use client";
import Overview from "../ui/dashboard/Overview";
import "./dashboard.css";
import BarChart from "../ui/dashboard/BarChart";
import PieChart from "../ui/dashboard/PieChart";
import LineChart from "../ui/dashboard/LineChart";
import Notifications from "../ui/dashboard/Notifications";

const Page = () => {
  const counts = [
    { value: "98", name: "Total Clients" },
    { value: "200", name: "Total Services" },
    { value: "350", name: "Total Appointments" },
    { value: "40", name: "Total Salons" },
  ];

  return (
    <div className="p-4 h-full">
      <Overview />
      <div className="grid grid-cols-2 md:grid-cols-11 gap-4 mt-4">
        {counts.map((count, index) => (
          <div
            key={index}
            className="col-span-1 md:col-span-2 bg-white gridStyle py-2"
          >
            <div className="text-center">
              <p className="text-xl font-bold">{count.value}</p>
              <p className="text-sm">{count.name}</p>
            </div>
          </div>
        ))}

        <div className="hidden md:block col-span-1 md:row-span-3 md:col-span-3 bg-white gridStyle">
          <div>
            <div className="flex flex-col items-center justify-center font-medium text-lg mt-3">
              Latest Notifications
            </div>
            <div className="p-3">
              <Notifications />
            </div>
          </div>
        </div>

        <div className="col-span-2  md:col-span-4 bg-white">
          <BarChart />
        </div>

        <div className="col-span-2 md:block md:col-span-4 bg-white gridStyle p-2 px-[30%] md:px-[15%]">
          <PieChart />
        </div>

        <div className="col-span-2 md:col-span-8 bg-white gridStyle">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Page;
