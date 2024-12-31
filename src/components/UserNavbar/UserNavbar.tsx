"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import styles from "./UserNavbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[var(--blackColor)]">
              SalonBooking.lk
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
          <a href="#" className={styles["link-btn"]}>
          Categories
            </a>
            <a href="#" className={styles["link-btn"]}>
              For Business
            </a>
            <a href="#" className={styles["link-btn"]}>
              Sign In
            </a>
            <button className={styles["join-btn"]}>Join</button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="mr-2 inline-flex items-center justify-center p-2 rounded-md text-[var(--blackColor)] bg-gray-100  hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

     {/* Mobile Menu */}
<div
  className={`${mobileMenuOpen ? "block" : "hidden"} sm:hidden absolute top-16 left-0 w-full shadow-sm z-50 `}
>
  <div className={styles["mobile-menu-container"]}>
  <a href="#" className={styles["mobile-menu-link"]}>
  Categories
    </a>
    <a href="#" className={styles["mobile-menu-link"]}>
      For Business
    </a>
    <a href="#" className={styles["mobile-menu-link"]}>
      Sign In
    </a>
    <a href="#" className={styles["mobile-menu-link"]}>
      Sign Up
    </a>
  </div>
</div>

    </nav>
  );
}
