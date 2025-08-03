import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export async function fetchAllUsers(){
    const res = await prisma.user.findMany();
    return res;
}
export default async function AdminAllUser(){
    const users = await fetchAllUsers();
    console.log("users:",users)
    return (
      <section className="flex flex-col p-8 gap-4">
        <h1>List of All users</h1>
        {users.map((user,index) => {
            return (
              <Link key={index} href={`user/${user.username}`} className="flex p-3 gap-4 bg-gray-400/20">
                <Image
                  src={user.image}
                  width={50}
                  height={50}
                  alt="user image"
                />
                <div>
                  <h2 className="font-bold">{user.name}</h2>
                  <p className="text-xs text-gray-700">{user.email}</p>
                  <p className="text-xs text-gray-700">{user.username}</p>
                </div>
              </Link>
            );
        })}

      </section>
    );
}