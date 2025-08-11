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
    <div className="min-h-[100vh] mt-10">
      <section className="grid grid-cols-1 gap-3 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-30 sm:mr-30">
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
    <div className="bg-white border shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && <Image
        src={image}
        alt={title}
        width={500}
        height={250}
        className=" w-fit h-[200px]"
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
