'use client';
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


export const NavbarRoutes = ()=>{

  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter")
  
  return(
    <div className="flex gap-x-2 ml-auto">
      {
        isTeacherPage || isPlayerPage ?
        (<Link href='/'>
         <Button variant={'ghost'}>
          <LogOut/>
          Exit
        </Button>
        </Link>):(
          <Link href='/teacher/courses'>
            <Button variant='ghost'>
              Teacher mode
            </Button>
          </Link>
        )

      }
    <div className="w-8 h-8 rounded-full bg-red-900" />
    </div>
  )
}