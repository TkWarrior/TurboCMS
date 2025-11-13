import { getAuthsession } from "@/lib/auth";
import getSingleUser from "../actions/getSingleUser";
import Image from "next/image";
import Link from "next/link";

export default async function UserBlogs(){
  const session = await getAuthsession();
  console.log("session in blogs page", session);
  const user = session?.user?.username
    ? await getSingleUser(session.user.username)
    : null;
  console.log("user in blogs page", user);
  console.log("user in blogs page", user);
  const posts = user?.Post ;
  console.log("user posts:", posts);

  if(!posts || posts.length ===0){
    return <div>No blogs available for this user.</div>
  }
  return (
    <div className="min-h-[100vh] mt-10">
      <section className="grid grid-cols-1 gap-3 mb-10 md:grid-cols-2 lg:grid-cols-3 sm:ml-30 sm:mr-30 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
        {posts.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            excerpts={blog.excerpts}
            image={blog.thumbnail}
            url={blog.slug}
            status={blog.status}
          />
        ))}
      </section>
    </div>
  );
}

const BlogCard = ({ title, excerpts, image, url, status }) => {
  return (
    <div className="bg-white border shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={250}
          className="  sm:250px md:h-[250px] lg:h-[280px] "
        />
      )}
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2 text-gray-800">{title}</h1>
        <p className="text-sm text-gray-600 mb-3">
          {excerpts.substring(0, 50)}
        </p>
        <Link
          href={`blog/${url}`}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Read More →
        </Link>
        <p className="mt-2 text-sm text-gray-500">Status: {status || "N/A"}</p>
      </div>
    </div>
  );
};
