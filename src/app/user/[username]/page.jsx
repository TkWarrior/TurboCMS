import getSingleUser from "@/app/actions/getSingleUser";
import Image from "next/image";
import Link from "next/link";

export default async function SingleUser({ params }) {
  const { username } =  params;
  const user = await getSingleUser(username)
  return (
    <div className="min-h-[100vh]"> 
      <UserProfile user={user} />
      <UserPosts posts={user.Post} />
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  );
}

export  function UserProfile({user}){
    const {name,email,username,image} = user;

    return (
      <section className="flex flex-col gap-1">
        <Image width={100} height={100} src={image} alt="user image" className="mx-auto mt-5 rounded-full border-[greenyellow] border-2" />
        <div className="text-center">
          <h1 className="font-bold ">{name}</h1>
          <p className="text-gray-500 text-sm">{email}</p>
          <p className="text-sm">@{username}</p>
        </div>
      </section>
    );
}

export function UserPosts({posts}){
    const userPosts = posts;
    if(posts.length==0){
        return <p> No Post Available</p>
    }
    return (
      <div className="mt-10 p-8 mx-auto">
        <h1 className="text-center font-bold mb-10 tex-2xl">User Posts</h1>
        {userPosts.map((post) =>{
          return (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className=" flex gap-4 mx-auto p-4 bg-zinc-400/20  hover:bg-zinc-400/30 transition-all duration-200 hover:scale-[1.05]  w-8/12 sm:w-6/12"
            >
              <Image
                src={post.thumbnail}
                width={150}
                height={100}
                alt="user post"
              />
              <div>
                <h1 className="font-bold">{post.title}</h1>
                <h2>{post.excerpts.substring(0, 40)}...</h2>
              </div>
            </Link>
          );
        })}
      </div>
    )
}
