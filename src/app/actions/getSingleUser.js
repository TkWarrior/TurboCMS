import { prisma } from "@/lib/prisma";

export default async function getSingleUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      name: true,
      image: true,
      email: true,
      username: true,
      Post: {
        select: {
          id: true,
          title: true,
          slug: true,
          thumbnail: true,
          excerpts: true,
          status: {
            select: {
              PUBLISHED: true,
            },
          },
        },
      },
    },
  });

  return user;
}
