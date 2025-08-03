
import AdminAllPosts from "@/components/admin/AdminAllPosts";
import CategoryFilter from "@/components/CategoryFilter";
import { authOptions } from "@/lib/auth"
import isAdmin from "@/utils/isAdmin";
import { getServerSession } from "next-auth"

export default async function AllPosts({searchParams}){
    // pagination implementation
    const page =  searchParams.page || 1;
    const category = searchParams.cat || null;
    const session  = await getServerSession(authOptions);
    const adminCheck = await isAdmin(session);
    // debugging
    console.log("admin check"  , adminCheck)
    if(!adminCheck){ 
        return (
            <div> Not Accessible</div>
        )
    }
    return (
        <div> 
            <AdminAllPosts page={page} category={category}/>
        </div>
    )
}