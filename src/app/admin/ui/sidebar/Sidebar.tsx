"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import profile from "../../../../components/profile.png";

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

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <FiHome />, path: "/admin/dashboard" },
    {
      name: "Service Cards",
      icon: <FiCreditCard />,
      path: "/admin/serviceCards",
    },
    { name: "Appointments", icon: <FiCalendar />, path: "/admin/appointments" },
    { name: "Clients", icon: <FiUsers />, path: "/admin/clients" },
    { name: "Salons", icon: <HiOutlineOfficeBuilding  />, path: "/admin/salons" },
    { name: "Complains", icon: <FiMessageSquare />, path: "/admin/complains" },
    { name: "Reports", icon: <FiBarChart2 />, path: "/admin/reports" },
    { name: "Settings", icon: <FiSettings />, path: "/admin/settings" },
  ];

  return (
    <div>
      <div className="flex flex-row">
        <div>
          {/* Mobile View  toggle button */}
          <button
            className="md:hidden text-[var(--darkPurple)] p-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </button>
          <div
            className={`text-black h-screen flex flex-col transition-transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 
          fixed md:relative w-64 z-10`}
          >
            <div className="flex flex-row items-center justify-center py-10 gap-5">
              <Image
                src={profile}
                width={60}
                height={60}
                alt="profile"
                className="rounded-full"
              />
              <h1 className="text-center text-sm font-medium">Super Admin</h1>
            </div>
            <div className="flex flex-col">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    router.push(link.path);
                  }}
                  className={`flex items-center my-1 px-4 mr-6 rounded-r-full py-3 hover:bg-[#F3E5F5] 
            ${pathname === link.path ? "bg-[#F3E5F5]" : ""}`}
                >
                  <span className="mx-4 text-lg">{link.icon}</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-grow border-l-2 border-[#D9D9D9] mx-4 my-5"></div>
      </div>
    </div>
  );
};
export default Sidebar;
