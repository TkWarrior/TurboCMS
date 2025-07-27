import { prisma } from "@/lib/prisma";
import { postConfig } from "@/static/postConfig";

export default async function getAllBlogs({ page=1, category }) {
  const postPerPage = postConfig.perPage ;

  let query = {
    take: postPerPage,
    skip: postPerPage*(page-1), // no of posts to skip after each page
    where: {
      ...(category && {
            catSlug: {
                equals: category,
                mode: 'insensitive'
            }
        }),
    },
    orderBy: {
      createdAt: "desc",
    }
  };

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany(query),
    prisma.post.count({
      where: {
        ...(category && { catSlug: category }),
      }
    })
  ]);

  return { posts, count };
}
