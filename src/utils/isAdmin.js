import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const listOfAdmins = [
    "talibulhaque369@gmail.com",
    "abc@gmail.com",
    "xyz@gmail.com"
]

export default async function isAdmin(session){
   
    if(!session) return false;

    let emailMatch = listOfAdmins.map(each => each.toLowerCase().trim().includes(session.user.email.toLowerCase().trim()));

    if((session.user.role == 'admin') || (session.user?.email && emailMatch)){
        return true;
    }

    return false;
}