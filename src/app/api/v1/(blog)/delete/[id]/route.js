import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import isAdmin from "@/app/utils/isAdmin";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;

  const session = await getServerSession(authOptions);
  const adminCheck = await isAdmin(session);
  const grabPost = await prisma.post.findUnique({
    where: { id },
  });

  if (!grabPost) {
    return NextResponse.json(
      { message: "No such post are found" },
      { status: 404 }
    );
  }

  const isAuthor = grabPost.authorId == session.user.id;
  if (isAuthor || adminCheck) {
    const deletedPost = await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json(deletedPost, { status: 200 });
  }

  return NextResponse.json({ message: "Not Authorized" }, { status: 403 });
}
