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
    <header className="flex w-full h-15 ">
      <nav className="flex justify-between w-full px-4 items-center shadow-sm">
        <div className="flex gap-2 px-4">
          <Ship />
          <h1 className='text-gray-700'> Turbo CMS</h1>
        </div>
        {
            session ? <div className='hover:cursor-pointer'>
                <UserModal user={session?.user}/>
            </div> :  (
              <Link href='/sign-in'>Sign in</Link>
            )
        }
        
      </nav>
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