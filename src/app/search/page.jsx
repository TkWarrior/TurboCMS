"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function SearchPost() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(""); 
      const res = await fetch(
        `api/v1/search?search=${encodeURIComponent(search)}`
      );
      if (!res.ok) {
        if (res.status == 404) {
          setResult([]); 
          return setError("No posts found for this search.");
        }
        throw new Error("Server error"); 
      }
      const postFound = await res.json();
      setResult(postFound);
    } catch (error) {
      console.error(error.message);
      setError("Failed to fetch posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => fetchPost(), 500);
      return () => clearTimeout(timer);
    } else {
      setResult([]);
      setError("");
    }
  }, [search]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 w-full min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for articles, news, and more..."
          className="w-full p-4 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
        {search == "" && !loading && (
          <div className="text-center pt-16 items-center gap-4">
            <div>
              <Image
                src="/undraw_file-search_cbur.svg" // Path to your SVG in the public folder
                alt="Illustration of a person with a magnifying glass"
                width={250}
                height={250}
                priority
                className="mx-auto"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
              Ready to Discover?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Use the search bar above to find articles and posts.
            </p>
          </div>
        )}
        <div className="mt-8">
          {loading && (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          )}

          {error && !loading && (
            <div className="text-center flex  flex-col py-10 px-4 rounded-lg">
              <div className="mx-auto">
                <Image
                  src="/undraw_notify_rnwe.svg"
                  alt="Illustration of a person with a magnifying glass"
                  width={250}
                  height={250}
                  priority
                />
              </div>

              <p className="text-lg mt-10 font-semibold text-red-600 dark:text-red-400">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && search && (
            <ul className="space-y-4">
              {result.map((post) => (
                <li
                  key={post.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {post.excerpts.substring(0, 150)}...
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Image
                        src={post.author.image}
                        width={32}
                        height={32}
                        alt={`${post.author.name}'s profile picture`}
                        className="rounded-full"
                      />
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {post.author.name}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
