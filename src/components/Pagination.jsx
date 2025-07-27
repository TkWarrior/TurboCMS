"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Pagination({currentPage ,totalItem, perPage , ...props}){
    const router = useRouter();
    const handlePageChange = (page) =>{
        console.log("page no: ",page)
        if(page < 1 || page > totalPages) return ;
         router.push(`?page=${page}`)
    }
    const totalPages = Math.ceil(totalItem/perPage);
    return (
      <div {...props}>
        <div className="flex justify-center gap-2f">
          <button
            onClick={() => handlePageChange(parseInt(currentPage) - 1)}
            className={`px-2 py-1 rounded-md flex gap-2 items-center bg-slate-900 text-white ${
              currentPage == 1 ? "text-gray-400 cursor-not-allowed" : ""
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => {
            return (
              <button
                disabled={currentPage==0}
                className={`px-2 py-1 rounded-md ${
                  currentPage == index + 1 ? "bg-gray-600/40" : "bg-transparent"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            disabled = {currentPage==totalPages}
            className={`px-2 py-1 rounded-md flex gap-2 items-center bg-slate-900 text-white ${
              currentPage == totalPages
                ? "text-gray-400 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handlePageChange(parseInt(currentPage) + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
}