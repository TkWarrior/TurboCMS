import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import isAdmin from "@/app/utils/isAdmin";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(request) {
    const {id ,status} = await request.json();

    if(["DRAFT","PUBLISHED","ARCHIVED","DELETE"].includes(status)){
        const session = await getServerSession(authOptions);
        const adminCheck = await isAdmin(session);
        const grabPost = await prisma.post.findUnique({
            where : {id},
        })

        const isAuthor = grabPost.authorId == session.user?.id;
        if(isAuthor || adminCheck){
          const updatedPost = await prisma.post.update({
            where: { id },
            data: { status },
          });
          return NextResponse.json(updatedPost, { status: 200 });
        }    
    }
    return NextResponse.json({message : "Not Authorized"},{status : 400});
}