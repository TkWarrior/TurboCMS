import { Ship } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';

function Navbar() {
  return (
    <header className="flex w-full h-15 ">
      <nav className="flex justify-between w-full px-4 items-center shadow-sm">
        <div className="flex gap-2 px-4">
          <Ship />
          <h1 className='text-gray-700'> TailCMS</h1>
        </div>
        <div>
          <Button className="text-gray-200">Sign In</Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar