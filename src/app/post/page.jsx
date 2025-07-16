// "use client"
// import React from 'react'
// import axios  from 'axios'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { useRouter } from 'next/navigation'

// function PostPage() {
//     const router = useRouter();
//     const formData = {
//         "text" : "Hello Talib",
//         "body" : "hii there"
//     }
//     const queryClient = useQueryClient();

//     const mutation = useMutation({
//         mutationFn:async(formData) => {
//             try {
//                 const res = axios.post("https://jsonplaceholder.typicode.com/posts",formData);
                
//                 return res;
//             } catch (error) {
//                 console.error(error)
//             }          
//         },
//         onSuccess : ()=>{
//                 console.log("submitted");
//               queryClient.invalidateQueries(["key"]);
//               router.push('/thank-you')
              
//         }
//     }
//     )

//     const handleSubmit = (e)=>{
//         mutation.mutate(formData);
//     }
//   return (
//     <div>page
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default PostPage