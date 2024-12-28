"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./ui/sidebar/Sidebar";
import MiniSidebar from "./ui/sidebar/MiniSidebar";

const AdminLayout = ({children}) => {
    const pathname = usePathname();

    const fullSiderbarRoutes =[
        "/admin/dashboard",
        "/admin/serviceCards",
        "/admin/appointments",
        "/admin/clients",
        "/admin/salons",
        "/admin/complains",
        "/admin/reports",
        "/admin/settings",
    ];

    const isFullSidebar = fullSiderbarRoutes.includes(pathname);
    return (
        <div className="flex">
            {isFullSidebar ? <Sidebar/> : <MiniSidebar/>}
            <main className="flex-grow p-4">{children}</main>
        </div>
    )
}

export default AdminLayout;