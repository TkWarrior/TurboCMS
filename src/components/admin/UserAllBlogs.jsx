import EditableBlogCard from "./EditableBlogCard";
import Pagination from "../Pagination";
import { postConfig } from "@/static/postConfig";
import CategoryFilter from "../CategoryFilter";
import { getUserBlogs } from "@/app/actions/getAllBlogs";


export default async function UserAllPosts({page=1 , category ,user}){

    const { posts , count} = await getUserBlogs({page,category ,userId:user.id});
    console.log("page no: ",page,"post count :", count )
    return (
      <section className=" min-h-[100vh] space-y-4">
        <h2 className="text-3xl font-bold ml-20">Manage All The Blogs</h2>
        <CategoryFilter className="mx-auto"/>
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