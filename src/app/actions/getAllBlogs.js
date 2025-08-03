import { prisma } from "@/lib/prisma";
import { postConfig } from "@/static/postConfig";

export default async function getAllBlogs({ page=1, category }) {
  const postPerPage = postConfig.perPage ;
  console.log("page no:",page,"no of posts per page:",postPerPage)
  let query = {
    take: postPerPage,
    skip: postPerPage*(page-1), // no of posts to skip after each page
    where: {
      ...(category && {
            catslug: {
                equals: category,
                mode : "insensitive"
            }
        })
    },
    orderBy: {
      createdAt: "desc",
    }
  };

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany(query),
    prisma.post.count({
      where: {
        ...(category && { catslug: category }),
      }
    })
  ]);

  return { posts, count };
}

export  async function getUserBlogs({ page=1, category , userId}) {
  const postPerPage = postConfig.perPage ;
  console.log("page no:",page,"no of posts per page:",postPerPage)

  let basequery = {
     authorId : userId,
      ...(category && {
            catslug: {
                equals: category,
                mode : "insensitive"
            }
        })
  }
  let query = {
    take: postPerPage,
    skip: postPerPage*(page-1), // no of posts to skip after each page
    where: basequery,
    orderBy: {
      createdAt: "desc",
    }
  };

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany(query),
    prisma.post.count({
      where: basequery
    })
  ]);

  return { posts, count };
}