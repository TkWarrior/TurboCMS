import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// const blogConfig = [
//   {
//     id: 1,
//     title: "Spring Boot vs Node JS",
//     excerpt: "A guide for the beginner",
//     image: "/thumbnail/spring-vs-node-js .png", 
//     url:"blog/demo-slug"
//   },
//   {
//     id: 2,
//     title: "React vs Node JS",
//     excerpt: "Which One is more suitable for faster development",
//     image: "/thumbnail/react-vs-nextjs.png",
//     url:"blog/demo-slug"
//   },
//   {
//     id: 3,
//     title: "React Developer Roadmap",
//     excerpt: "Start Your journey as a react developer",
//     image: "/thumbnail/react-roadmap.png",
//     url:"blog/demo-slug"
//   },
//   {
//     id: 4,
//     title: "Frontend Developer Roadmap",
//     excerpt: "Start Your journey as a  front-end-developer",
//     image: "/thumbnail/frontendroadmap.webp",
//     url:"blog/demo-slug"
//   },
// ];

const fetchAllBlogs = async()=>{
    const res = await axios.get(`${process.env.NEXTAUTH_URL}//api/v1/get`);
    const data = await res.data;
    console.log("single blog card",data)
    return data;
}

export default async function Blogs() {
  const blogData = await fetchAllBlogs();
  return (
    <section className="min-h-[100vh] grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {blogData.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          excerpt={blog.excerpts}
          image={blog.thumbnail}
          url = {blog.slug}
        />
      ))}
    </section>
  );
}

const BlogCard = ({ title, excerpts, image,url }) => {
  return (
    <div className=" min-h-[100vh] bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="object-cover w-fit h-[200px]"
      />}
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2 text-gray-800">{title}</h1>
        <p className="text-sm text-gray-600 mb-3">{excerpts}</p>
        <Link
          href={`blog/${url}`}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};
