// 'use client'

// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import axios from "axios"
// export default function clientPage({params}){
//     /* Traditional data fetching in next js
//     const [data , setData] = useState([]);
//     const [isLoading,setIsLoading] = useState(true);
//     const [error , setError] = useState(false);
   
//     useEffect(()=>{
//          async function fetchPost (){
//             try {
//                  const res = await fetch(
//                    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
//                  );
//                   if (!res.ok) {
//                     throw new Error("failed api call");
//                   }
//                  const response = await res.json();
//                  setData(response);    
//             } catch (error) {
//                 console.error(error.message);
//                 setError(error)
//             } finally{
//                 setIsLoading(false)
//             }
           
//         }  
//         fetchPost();
//     }, []); */

//     /* Data fetching using useQuery GET Request */
//     const {data , isLoading ,error} = useQuery ({
//         queryKey:['key'],
//         queryFn : async ()=>{
//            const res = await axios.get(
//                    `https://jsonplaceholder.typicode.com/posts/${params.slug}`,data);
//            const response = res.data;
//            console.log(response)
//            return response;
//         }
        
//     }) 
//     return (
//       <div>
//         <h1>post page</h1>

//         {
//             isLoading ? "Loading content": <>
//                 <h1>{data.title}</h1>
//             </>
//         }
//         {
//             error ? {error} : <>No Error</>
//         }
//       </div>
//     );
// }