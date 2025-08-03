import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import isAdmin from "@/app/utils/isAdmin";
import { getServerSession } from "next-auth/next";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request , { params }){
    const {slug} =  params;
    const body = await request.json();

    const { title,ogImage,content,keyword,metaDescription,excerpts,category ,status} = body;
    const session = await getServerSession(authOptions)

    const admin = await isAdmin(session);
    
    const post = await prisma.post.findUnique({
        where:{slug},
        select : {
            authorId : true,
        },
    });

    if(!post){
        return NextResponse.json({mesage : "post not found"},{status : 404})
    }

    const isAuthor = post.authorId === session.user.id
    if(!admin && !isAuthor){
        return NextResponse.json({message:"Not authorized to edit the post"},{status:403})
    }

    try {
        const updatedPost = await prisma.post.update({
          where : {slug},
          data: {
            title,
            content,
            thumbnail: ogImage || null,
            desc: metaDescription || null,
            keyword: keyword || null,
            catslug : category || null,
            status,
            excerpts
          },
        });
        // user will be able to see the updated post promptly
        revalidateTag(slug)
        return NextResponse.json(updatedPost , {status : 200})
    } catch (error) {
        console.log("unable to update the post",error.message)
        return NextResponse.json({message: "post updation failed"},{status:500})
    }
} 

export async function GET(request , {params}){
  const {slug}  = params;
  
  const session = await getServerSession(authOptions);
   if (!session?.user?.id) {
     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
   }
  const admin = await isAdmin(session);

  const post = await prisma.post.findUnique({
    where: { slug }
  });
  if(!post){
    return NextResponse.json({message : "post not found"},{status:404})
  }
  
  const isAuthor = session.user.id === post.authorId;

  if (!admin && !isAuthor) {
    return NextResponse.json({ message: "You're not allowed to view this post" }, { status: 403 });
  }

  return NextResponse.json(post, { status: 200 });
}