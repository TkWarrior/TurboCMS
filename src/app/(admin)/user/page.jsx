import isAdmin from "@/app/utils/isAdmin";
import AdminAllPosts from "@/components/admin/AdminAllPosts";
import AdminAllUser from "@/components/admin/AdminAllUser";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function AllUser(){

    const session = await getServerSession(authOptions);
    const adminCheck = await isAdmin(session);

    if(!session){
        return <section className="w-full h-screen justify-center items-center"> 
            Your're not authenticated
        </section>
    }

    if(!adminCheck){
        return (
          <section className="w-full h-screen justify-center items-center">
            Your're not authorized
          </section>
        );
    }
    return (
        <AdminAllUser/>
    )
}