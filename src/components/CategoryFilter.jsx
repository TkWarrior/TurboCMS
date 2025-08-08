"use client"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';

export default function CategoryFilter() {
    const searchParams = useSearchParams();
    console.log("search Params:",searchParams)
    const router = useRouter();
    const [category,setCategory] = useState(searchParams.get('cat')||'');
    console.log("filtered posts by category:",category )
    const handleSubmit = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set('cat',category);
        router.push(`/posts?${params.toString()}`)
    }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <div className="flex w-fit sm:flex w-fit mx-auto gap-2">
        <Input
          value={category}
          className="w-[400px]"
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Search Category"
        ></Input>
        <Button type="submit">Filter</Button>
      </div>
    </form>
  );
}

