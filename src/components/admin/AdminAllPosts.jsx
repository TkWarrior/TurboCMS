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
        <h2>Manage All The Blogs</h2>
        <CategoryFilter />
        {posts.map((post) => {
          return <EditableBlogCard key={post.id} post={post} />;
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