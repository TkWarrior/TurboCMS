import { getAuthsession } from '@/lib/auth'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function dashboard() {
  const session = await getAuthsession();
  
  if(!session){
    return (
      <div className="flex justify-center items-center h-screen">
        Oops You're not authenticated
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className='text-3xl'>Welcome! Back {session.user.name}</h1>
    </div>
  );
}

