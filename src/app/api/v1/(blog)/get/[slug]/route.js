import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
      status: "PUBLISHED"
    },
    include: {
      author: {
        select: {
          name: true,
          image: true
        },
      },
    },
  });
  // console.log(post);
  if (!post) {
    return NextResponse.json(
      { message: "couldn't find the post" },
      { status: 404 }
    );
  }
  return NextResponse.json(post, { status: 200, headers: { "Content-Type" : "application/json"} });
}
