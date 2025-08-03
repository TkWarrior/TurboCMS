"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

function EditableBlogCard({ post }){
     const router = useRouter();
    const [currentStatus , setCurrentStatus] = useState(post.status)
   
    const handleConvertToDraft = async(id)=>{
         const res = await fetch(`/api/v1/state`,{
                method : "PATCH",
                headers :{
                    'Content-Type' : "application/json"
                } ,
                body : JSON.stringify({id , status:"DRAFT"})
            }
         )
         if(res.ok){
            console.log("draft",res)
            setCurrentStatus("DRAFT");
            router.refresh()
         }
    } 

    const handleDelete = async(id) =>{
        const res = await fetch(`/api/v1/delete/${post.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (res.ok) {
          setCurrentStatus("DELETE");
          router.refresh();
        }

    }
    const handlePublish = async(id)=>{
            const res = await fetch(
              `/api/v1/state`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, status: "PUBLISHED" }),
              }
            );
            if (res.ok) {
              setCurrentStatus("PUBLISHED");
              router.refresh();
            }
    }

 
    return (
    <div className="bg-zinc-200 border rounded-lg shadow-md p-6 space-y-2 flex flex-col justify-between h-full transition-shadow hover:shadow-lg w-full">
    
      <div >
        <h1 className="text-xl font-bold text-slate-800 mb-2 break-words">
          {post.title || "Untitled Post"}
        </h1>
        <p className="text-slate-600 text-sm line-clamp-3">
     
          {post.excerpts || "No excerpt available."}
        </p>
      </div>

     
      <div className=" border-slate-200 flex gap-2 items-center">
        {currentStatus === "PUBLISHED" ? (
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm" onClick={() => handleConvertToDraft(post.id)}>
              Convert To Draft
            </Button>
            <Button variant="outline" size="sm" onClick={()=>router.push(`/blog/${post.slug}`)} >
              View Post
            </Button>
          </div>
        ) : (
          <Button variant="default" size="sm" onClick={() => handlePublish(post.id)}>
            Publish
          </Button>
        )}
        <Trash onClick={() => handleDelete(post.id)}/>
      </div>
    </div>
  );
}

export default EditableBlogCard;
