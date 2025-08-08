import { Ship } from 'lucide-react';
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
        <nav className=" sm:scroll-smooth w-full md:flex items-center gap-6">
          <Ship size={40} className="mx-auto sm:mx-0" />
          <div className=" flex sm:flex gap-4 items-center font-bold text-slate-900">
            <p className="text-xl mx-auto">TurboCMS</p>
          </div>
          <div className="w-fit flex mx-auto gap-8">
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
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors p-4"
              >
                Pricing
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
          <Link href="/sign-in">Sign in</Link>
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