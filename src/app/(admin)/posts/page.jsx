
import AdminAllPosts from "@/components/admin/AdminAllPosts";
import CategoryFilter from "@/components/CategoryFilter";
import { authOptions } from "@/lib/auth"
import isAdmin from "@/app/utils/isAdmin";
import { getServerSession } from "next-auth"
import UserAllPosts from "@/components/admin/UserAllBlogs";

export default async function AllPosts({searchParams}){
    // pagination implementation
    const page =  searchParams.page || 1;
    const category = searchParams.cat || null;
    const session  = await getServerSession(authOptions);
    const adminCheck = await isAdmin(session);
    // debugging
    console.log("admin check"  , adminCheck)
    if(!adminCheck){ 
        return <UserAllPosts page={page} category={category} user={session.user}/>;
    }
    return (
        <div> 
            <AdminAllPosts page={page} category={category}/>
        </div>
    )
}