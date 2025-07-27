import getAllBlogs from "@/app/actions/getAllBlogs";
import EditableBlogCard from "./EditableBlogCard";

export default async function AdminAllPosts({page=1 , category}){

    const { posts , count} = await getAllBlogs(page,category);
    console.log("post",posts)
    return (
        <section className="space-y-4">
            {posts.map((post)=> {
                return <EditableBlogCard key={post.id} post={post} />;
            })}
        </section>
    );
}