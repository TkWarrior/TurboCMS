import { getAuthsession } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation';
import React from 'react'

export default async function dashboard() {
  const session = await getAuthsession();
  
  if(!session){
      console.log("session",session)
      redirect("/sign-in")
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className='text-3xl'>Welcome! Back {session?.user.name}</h1>
    </div>
  );
}

