import { CircleUserRound, Ship } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthsession } from '@/lib/auth';
import Link from 'next/link';
import Image from 'next/image';
import SignOut from './signout';


async function Navbar() {
  const session = await getAuthsession();
  const temp_user = {
      name : "Talib",
      username: "talib"
  }

  return (
    <header className="sm:sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <nav className=" sm:scroll-smooth w-full md:flex  items-center gap-6">
          <div className=" flex sm:flex gap-4 items-center font-bold text-slate-900">
            <Ship size={40} className=" sm:mx-0" />
            <p className="text-xl ">TurboCMS</p>
          </div>
          <div className="hidden sm:w-fit sm:flex sm:mx-auto sm:gap-8">
            <div>
              <Link
                href="#feature"
                className="text-sm font-medium  text-slate-600 hover:text-blue-600 transition-colors p-4 "
              >
                Features
              </Link>
            </div>
            <div>
              <Link
                href="#testimonial"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors p-4"
              >
                Testimonial
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors p-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
        {session ? (
          <div className="hover:cursor-pointer">
            <UserModal user={session?.user} />
          </div>
        ) : (
          <Link href="/sign-in">
            <CircleUserRound size={40} />
          </Link>
        )}
      </div>
    </header>
  );
}

const UserModal = ({user}) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image 
            src={user.image}
            alt="user image"
            width={40}
            height={40}
            className='rounded-full border-2 border-green-500'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Hii, {user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={`/profile/${user.username}`}> Go to Profile</Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem>
            <SignOut/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}

export default Navbar