import { Button } from "@/components/ui/button";
import { Layers, Pencil, PencilIcon, Zap } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full animate-fadeIn">
      <section className="min-h-[70vh] w-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start gap-8">
        <div className=" space-y-6 sm:mx-auto max-w-xl">
          <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl tracking-tighter text-gray-900">
            From Idea to Impact
          </h1>
          <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl tracking-tighter text-gray-900">
            Let AI Fuel Your Blog.
          </h1>
          <p className="text-lg text-gray-600 text-center tracking-tighter  mx-auto sm:mx-0 ">
            Generate engaging blog posts, optimize for SEO, and manage your
            content pipeline with ease. Our AI-driven CMS gives you full control
            without the overwhelm.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap mx-auto sm:justify-start">
          <Link href="/sign-in">
            <Button
              variant="default"
              className="px-6 py-3 text-base font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Try Now
            </Button>
          </Link>

          <Button
            variant="outline"
            className="px-6 py-3 text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[50vh] bg-zinc-200 w-full flex flex-col justify-center">
        <div className="grid gap-2 my-10 grid-cols-1 sm:grid-cols-3 mx-auto">
          <span className="flex flex-col items-center gap-2 text-center">
            <Zap size={50} />
            <h3 className="text-xl font-bold tracking-tighter">
              Fast Performance
            </h3>
            <p className="text-gray-600 w-[70%] text-center">
              Lightning-fast loading and smooth editing no lag, no limits.
            </p>
          </span>

          <span className="flex flex-col items-center gap-2 text-center">
            <Pencil size={50} />
            <h3 className="text-xl font-bold tracking-tighter">Write Blogs</h3>
            <p className="text-gray-600 w-[70%] text-center">
              Turn your ideas into polished posts with smart AI assistance.
            </p>
          </span>

          <span className="flex flex-col items-center gap-2 text-center">
            <Layers size={50} />
            <h3 className="text-xl font-bold tracking-tighter">
              Efficient Tools
            </h3>
            <p className="text-gray-600 w-[70%] text-center">
              Manage content effortlessly with features that just make sense.
            </p>
          </span>
        </div>
      </section>
      <section className="h-[50vh] sm:h-[30vh] w-full flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[50%]  mx-auto">
          <h4 className="font-bold text-2xl">
            Transform Your Carreer in Content Writing
          </h4>
          <p className="text-xl text-gray-700 ">
            Join the Platform to Write and Publish Content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              className="bg-zinc-200 focus-outline-none rounded-md px-4 py-2 w-full sm:w-[300px] text-sm"
              placeholder="Enter your email"
            />
            <Button
              variant="default"
              className="px-6 py-2 text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
