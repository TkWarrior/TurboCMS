import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export default async function handler(req){

    const {name ,email ,password} = await req.body();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            name  , 
            email ,
            password : hashedPassword     
        })     
       
        return NextResponse.json({message : "User Registered successfully" , user:newUser} , {status : 201});
    
    } catch (error) {
        console.error("Registration error : ",error);
       
        return NextResponse.json({message:"Something went wrong! try again"},{status:500})
    }
}