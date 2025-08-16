import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  

  try {
    const { name, email, password } = await req.json();

    console.log("name", name);

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "All fields are required. " },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User Registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error : ", error);

    return NextResponse.json(
      { message: "Something went wrong! try again" },
      { status: 500 }
    );
  }
}
