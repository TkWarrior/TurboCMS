import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request){

    const {searchParams} = new URL(request.url);

    const search = searchParams.get('search')

    if(!search){
        return NextResponse.json({message:"search is blank"},{status:404})
    }

    const posts = await prisma.post.findMany({
      where: {
        status: "PUBLISHED",
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
    if(!posts.length){
        return NextResponse.json({message:"No post with current search query found"},{status:404})
    }

    return NextResponse.json(posts,{status : 200 })
}