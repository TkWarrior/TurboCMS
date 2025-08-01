import dateFormate from "@/app/utils/dateFormate";
import axios from "axios";
import { Calendar } from "lucide-react";
import Image from "next/image";
import "@/style/blog.css"
import { notFound } from "next/navigation";

const fetchSinglePage = async(slug) => {
      const res = await fetch(`${process.env.NEXTAUTH_URL}//api/v1/get/${slug}`, {next : {tags : [slug]}})
    
      // if(res.status == 404){
      //  return notFound()
      // }
     
      const data = await res.json();
      
      // console.log("single blog page",data);
      return data;
};

export async function generateMetadata({params}){
      const {slug} = params;
      const res = await fetchSinglePage(slug);

      return {
        title: res.title,
        description : res.excerpt,
        openGraph :{
          images: [ res.thumbnail]
        }
      }
}

export default async function SingleBlogPage({params}) {
  
  const {slug} = params;
  const singlePost = await fetchSinglePage(slug)
  console.log("single page post ",singlePost)
  return (
    <section className="md:w-[70%] mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center">
        {singlePost.thumbnail && (
          <Image
            src={singlePost.thumbnail}
            alt="React vs Next.js"
            width={500}
            height={250}
            className="mx-auto object-cover w-full rounded-t-2xl"
          />
        )}
        <h1 className="text-2xl font-bold md:text-4xl ">{singlePost.title}</h1>
        <div className="p-6 w-fit space-y-3">
          {/* Date */}
          <div className="flex items-center  gap-2 text-gray-600 text-sm">
            <Calendar size={18} />
            <p>
              Created At:{" "}
              <span className="font-medium">{dateFormate(new Date())}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <p className="font-medium">Category:</p>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {singlePost.catslug}
            </span>
          </div>

          <div className="flex">
            <p className="font-medium text-gray-700 mb-2">Tags:</p>

            {singlePost?.keyword.split(",").map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
        {/* <p className="text-gray-600">
            {singlePost.content}
        </p> */}
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: singlePost.content }}
        ></div>
      </div>
    </section>
  );
}