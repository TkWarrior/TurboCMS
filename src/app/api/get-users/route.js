import { NextResponse } from "next/server";

const data = [
  {
    userId: "1",
    name: "talib",
  },
  {
    userId: "2",
    name: "abullais",
  },
  
  {
    userId: "3",
    name: "aboozer",
  },
];


export async function POST(request){
        const {id} = await request.json();
        const filterUser = (id) => data.filter((user) => user.userId === id);
        try {
            return NextResponse.json(  {user : filterUser(id.toString())})
        } catch (error) {
            return NextResponse.json({ error: error.messsage });
        }
        
}