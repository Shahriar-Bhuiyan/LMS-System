"use client";
import { BarChart, BarChart2, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";


const guestRoutes = [
    {
        icon:Layout,
        label:'Dashboard',
        href:'/'
    },
    {
        icon:Compass,
        label:'Browse',
        href:'/search'
    }
]

const teacherRoutes = [
    {
        icon:List,
        label:'Courses',
        href:'/teacher/courses'
    },
    {
        icon:BarChart,
        label:'Analytics',
        href:'/teacher/analytics'
    }
]

export const SidebarRoutes =()=>{

    const pathname = usePathname();

    let isActiveRoute = pathname?.includes('/teacher')
     
     const routes = isActiveRoute ? teacherRoutes : guestRoutes;
    return (
        <div className="flex flex-col w-full">
        {routes.map((route)=>(
            <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
            />
        ))}
        </div>
    )
}