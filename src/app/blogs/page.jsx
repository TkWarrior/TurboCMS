// "use client"
// import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
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

const fetchAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`); 
    console.log("response object:", res);
    console.log("API URL:", `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`);
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }
    const data = await res.json(); 
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
  
    console.error("Error details:", error.response?.data || error.message);
    throw error; 
  }
};

export default async function Blogs() {
// export default function Blogs() {
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchBlogs() {
  //     try {
  //       const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}//api/v1/get`);
  //       if (!res.ok) throw new Error("Failed to fetch");
  //       const data = await res.json();
  //       console.log("Fetched blogs:", data);
  //       setBlogs(data.blogs);
  //     } catch (err) {
  //       console.log("error log",err)
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchBlogs();
  // }, []);
  const blogData = await fetchAllBlogs();
  console.log(blogData);
  if (!blogData || blogData.length === 0) {
    return <div>No blogs available at the moment.</div>;
  }
  return (
    <div className="min-h-[100vh] mt-10">
      <section className="grid grid-cols-1 gap-3 mb-10 md:grid-cols-2 lg:grid-cols-3 sm:ml-30 sm:mr-30 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            excerpts={blog.excerpts}
            image={blog.thumbnail}
            url={blog.slug}
          />
        ))}
      </section>
    </div>
  );
}

const BlogCard = ({ title, excerpts, image,url }) => {
  return (
    <div className="bg-white border shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && <Image
        src={image}
        alt={title}
        width={500}
        height={250}
        className="  sm:250px md:h-[250px] lg:h-[280px] "
      />}
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2 text-gray-800">{title}</h1>
        <p className="text-sm text-gray-600 mb-3">{excerpts.substring(0,50)}</p>
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
