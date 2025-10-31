import { getAuthsession } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import SingleUser from '../user/[username]/page';

export default async function dashboard() {
  const session = await getAuthsession();
  
  if(!session){
      console.log("session",session)
      redirect("/sign-in")
  }
  return (
      <div className="min-h-[100vh]">
       <SingleUser params={{ username: session.user.username }} />{" "}
      </div>
  );
}

