"use client"
import Editor from "@/components/Editor";
import axios from "axios";
import { useState } from "react";

export default function draft(){
   
    const savePost = async({title,slug , ogImage , content,keyword,metaDescription,excerpts,category,status}) =>{
        const data = {title,slug , ogImage , content,keyword,metaDescription,excerpts,category,status}
       try {
         const res = await axios.post(
           "http://localhost:3000//api/v1/create",
           data
         );
         console.log("post saved successfully",res.data)
       } catch (error) {
            console.log("failed to save post",error)
       }
    }
    return(
        <div className="p-8 flex flex-col min-h-[100vh]" >
            <h1 className="font-bold text-lg mb-2">Create a new post </h1>
            <Editor onSave={savePost}/>
        </div>
    )
}