import getAllBlogs from "@/app/actions/getAllBlogs";
import EditableBlogCard from "./EditableBlogCard";
import Pagination from "../Pagination";
import { postConfig } from "@/static/postConfig";



export default async function AdminAllPosts({page=1 , category}){

    const { posts , count} = await getAllBlogs(page,category);
    console.log("post",posts)
    return (    
        <div>
             <section className="space-y-4">
          {posts.map((post) => {
            return <EditableBlogCard key={post.id} post={post} />;
          })}
        </section>
        <Pagination currentPage={page} totalItem={count} perPage={postConfig.perPage}/>
        </div>
      
       
       
     
    );
}