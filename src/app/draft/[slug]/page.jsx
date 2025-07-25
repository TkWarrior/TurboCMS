"use client";
import Editor from "@/components/Editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {use} from 'react';

export default function Editdraft({ params }) {
  const { slug } = use(params);

  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async()=> {
      const res = await fetch(`/api/v1/update/${slug}`);
      if(!res.ok){
        if (res.status === 403) {
          toast.error("You are not authorized to edit this post");
        } 
        else {
          toast.error("Unable to load the post");
        }
      }
      const data =await res.json(); 
      console.log("post for updation :", data);    
      setPost(data);
    };
  
    fetchPost();
    
  }, [slug]);

  const savePost = async ({ title,ogImage,content,keyword,metaDescription,excerpts,category,status}) => {
    const data = { title,ogImage,content, keyword, metaDescription,excerpts,category,status};
    try {
      const res = await axios.put(`/api/v1/update/${slug}`,data);
      console.log("post updated successfully", res.data);
    } catch (error) {
      console.log("failed to update post", error);
    }
  }
  if(!post){
        return <></>;
  }
  return (
    <div className="p-8">
      <h1 className="font-bold text-lg mb-2">Create a new post </h1>
      <Editor onSave={savePost} initialData={post}/>
    </div>
  );
}
