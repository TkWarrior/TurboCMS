import { authOptions, getAuthsession } from "@/lib/auth";
import  { prisma }  from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST( request ) {
  const session = await getAuthsession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "unauthorized" },{status:401});
  }
  const body = await request.json();
  const { title,slug,ogImage,content,keyword,metaDescription,excerpts, category,status} = body;

  console.log(title,slug, ogImage,content,keyword,metaDescription,excerpts,category,status,"content");
  
  if (!title || !content || !slug || !category || !session.user.id) {  
    return NextResponse.json({message:"Missing fileds"},{status:400})
  }
  

  const statusOfPost = status || "DRAFT";
  // checking the category if it is already present in the database

  try {
    let categoryCheck = await prisma.category.findUnique({
      where: { slug: category },
    });

    // if not present then create a new category
    if (!categoryCheck) {
      categoryCheck = await prisma.category.create({
        data: {
          title: category.charAt(0).toUpperCase() + category.slice(1),
          slug: category,
        },
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        thumbnail: ogImage,
        desc: metaDescription,
        status: statusOfPost,
        catslug: categoryCheck.slug,
        keyword: keyword || null,
        excerpts: excerpts || null,
        authorId: session.user.id,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("couldn't send message");
    return NextResponse.json({message:"couldn't send message"},{status:500})
  }
  
   
}
