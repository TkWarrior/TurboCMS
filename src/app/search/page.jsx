"use client"
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default  function SearchPost() {
    const [result , setResult] = useState([]);
    const [search , setSearch] = useState("");
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("");
    
    const fetchPost = async()=>{
        try {
            setLoading(true);
            const res = await fetch(`api/v1/search?search=${encodeURIComponent(search)}`)
            if(!res.ok){
                if(res.status==404){
                    return setError("No Post Found")
                }
            }
            else{
                setError("");
            }
             
            const postFound = await res.json();
           
            setResult(postFound);
        } catch (error) {
            console.error(error.message)
        } finally{
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        if(search){
            const timer = setTimeout(()=> fetchPost(),500)
            return ()=>clearTimeout(timer);
        }
      
    },[search])

    console.log("search ", search)
    return (
    <div className="w-full min-h-screen flex flex-col">
      <Input value={search} className="border-accent-foreground" onChange={e => setSearch(e.target.value)}/>
        {loading&& "Loading..."}
        { search &&
          <ul className="flex flex-col gap-2 p-8">
                { error ? <div>{error}</div> 
                :result.map((post)=>{
                    return (
                      <li
                        key={post.id}
                        className="bg-gray-300 p-3 rounded tracking-tighter hover:scale-[1.01] transition-all duration-200"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-bold">{post.title}</h3>
                          <p className="text-sm">
                            {post.excerpts.substring(0, 30)}...
                          </p>
                          <div className="flex items-center gap-2">
                            <Image
                              src={post.author.image}
                              width={15}
                              height={15}
                              alt="author image"
                            />
                            <p className="text-xs">
                              Written By : {post.author.name}
                            </p>
                          </div>
                        </Link>
                      </li>
                    );
                 })}
            </ul>
            
        }
    </div>
  );
}
