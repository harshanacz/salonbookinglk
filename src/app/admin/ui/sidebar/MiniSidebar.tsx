"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUsers,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const MiniSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <FiHome />, path: "/admin/dashboard" },
    { icon: <FiCreditCard />, path: "/admin/serviceCards" },
    { icon: <FiCalendar />, path: "/admin/appointments" },
    { icon: <FiUsers />, path: "/admin/clients" },
    { icon: <HiOutlineOfficeBuilding />, path: "/admin/salons" },
    { icon: <FiMessageSquare />, path: "/admin/complains" },
    { icon: <FiBarChart2 />, path: "/admin/reports" },
    { icon: <FiSettings />, path: "/admin/settings" },
  ];

  return (
    <div>
      <div className="flex flex-row">
        <div>
          {/* Mobile View toggle button */}
          <button
            className="md:hidden text-[var(--darkPurple)] p-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </button>
          <div
            className={`text-black flex flex-col items-center h-screen transition-transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 
    fixed md:relative w-20 md:justify-center`}
          >
            <div className="flex flex-col items-center bg-[#F3E5F5] py-4 rounded-r-[20px]">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    router.push(link.path);
                  }}
                  className={`flex items-center my-1 px-8 py-6 hover:bg-[#ebd5ee] 
            ${pathname === link.path ? "bg-[#ebd5ee]" : ""}`}
                >
                  <span className="text-lg">{link.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
