"use client";
import { LuBadgeCheck } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Overview = () => {
  const [selected, setSelected] = useState("This week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div>
      <div className="h-16 rounded-[20px] flex flex-row items-center justify-between bg-white my-2">
        <div className="m-5 flex items-center">
          <span className="text-2xl font-bold m-5">Admin Dashboard</span>

          {/*//<span className="m-5 relative">
            {/* Dropdown Button 
            <button
              className=" text-black py-2 px-4 rounded flex flex-row items-center gap-5"
              onClick={toggleDropdown}
            >
              {selected} <IoIosArrowDown />
            </button>

           // Dropdown Menu 
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 w-32 bg-white border rounded shadow-sm z-10">
                <div className="py-1">
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => {
                      setSelected("This Week");
                      setIsDropdownOpen(false);
                    }}
                  >
                    This Week
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => {
                      setSelected("This Month");
                      setIsDropdownOpen(false); // Close dropdown after selection
                    }}
                  >
                    This Month
                  </button>
                </div>
              </div>
            )}
          </span>*/}
        </div>

        {/* Right Section */}
        <div className="flex flex-row mr-12 text-3xl gap-10 relative">
          <div className="relative">
            <Link href="/admin/dashboard/verify">
                <LuBadgeCheck />
            </Link>

            <span className="absolute top-[-8px] right-[-5px] bg-[var(--primary)] text-white rounded-full text-base font-medium w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <Link href="/admin/dashboard/notifications">
                <MdNotificationsNone />
            </Link>
            <span className="absolute top-[-8px] right-[-5px] bg-[var(--primary)] text-white rounded-full text-base font-medium w-5 h-5 flex items-center justify-center">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
