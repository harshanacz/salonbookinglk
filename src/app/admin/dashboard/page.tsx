"use client";
import Overview from "../ui/dashboard/Overview";
import "./dashboard.css";
import Barchart from "../ui/dashboard/Barchart";
import PieChart from "../ui/dashboard/PieChart";

const Page = () => {
  const counts = [
    { value: "98", name: "Total Clients" },
    { value: "200", name: "Total Services" },
    { value: "350", name: "Total Appointments" },
    { value: "40", name: "Total Salons" },
  ];

  return (
    <div>
      <Overview />
      <div className="grid grid-rows-[auto auto auto] grid-cols-5 gap-4 mt-4">

        {counts.map((count, index) => (
          <div key={index} className="col-span-1 bg-white gridStyle py-4">
            <div className="text-center">
              <p className="text-xl font-bold">{count.value}</p>
              <p className="text-sm">{count.name}</p>
            </div>
          </div>
        ))}
        
        <div className="row-span-3 bg-white gridStyle">02</div>
        <div className="col-span-2 bg-white gridStyle p-5"><Barchart/></div>
        <div className="col-span-2 bg-white gridStyle p-5 px-[15%]"><PieChart/></div>
        <div className="col-span-4 bg-white gridStyle">04</div>
      </div>
    </div>
  );
};

export default Page;
