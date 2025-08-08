import getAllBlogs from "@/app/actions/getAllBlogs";
import EditableBlogCard from "./EditableBlogCard";
import Pagination from "../Pagination";
import { postConfig } from "@/static/postConfig";
import CategoryFilter from "../CategoryFilter";


export default async function AdminAllPosts({page=1 , category}){

    const { posts , count} = await getAllBlogs({page,category});
    console.log("page no: ",page,"post count :", count )
    return (
      <section className="space-y-4">
        <h2 className="text-3xl mx-auto font-bold w-fit p-4">Manage All The Blogs</h2>
        <CategoryFilter  />
        {posts.map((post) => {
          return (
            <div key={post.id} className="w-[70%] mx-auto">
              <EditableBlogCard key={post.id} post={post}/>
            </div>
          );
        })}
        <Pagination
          className="fixed bottom-10 left-1/2 -translate-x-1/2"
          currentPage={page}
          totalItem={count}
          perPage={postConfig.perPage}
        />
      </section>
    );
}