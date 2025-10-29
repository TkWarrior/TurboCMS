import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { PostStatus } from "@prisma/client";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: PostStatus.PUBLISHED,
      },
    });
    console.log("all posts".posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Prisma error in /api/v1/get:", error);
    return NextResponse.json(
      { error: "Internal Server error", details:error.message },
      { status: 500 }
    );
  }
}
