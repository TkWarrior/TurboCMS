import TypeWriterHeadline from "@/components/TypeWriterHeadline";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, PencilIcon, Zap } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-100vh flex-grow-1 gap-16 row-start-2 items-center sm: w-full animate-fadeIn">
      <section className="relative py-20 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-3xl mx-auto">
            <TypeWriterHeadline />
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Generate engaging blog posts, optimize for SEO, and manage your
              content pipeline with ease. Our AI-driven CMS gives you full
              control without the overwhelm.
            </p>
          </div>
          <div className="mt-10 flex gap-4 justify-center">
            <Link href="/sign-in">
              <Button
                variant="default"
                className="px-6 py-3 text-base font-semibold  bg-blue-600 shadow-md hover:scale-105 transition-transform duration-300"
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
        </div>
      </section>
      <section
        id="feature"
        className="py-20 bg-zinc-200 border-y border-slate-200"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Powerful Features, Simple Interface
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to create and manage content that drives
              results.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"></path>
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"></path>
                  <path d="M15 2v5h5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tighter mb-2">
                AI Content Generation
              </h3>
              <p className="text-slate-600">
                Turn your ideas into polished posts with smart AI assistance for
                outlines, drafts, and rephrasing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="10" x2="10" y1="14" y2="3"></line>
                  <line x1="14" x2="14" y1="10" y2="3"></line>
                  <line x1="18" x2="18" y1="18" y2="3"></line>
                  <line x1="6" x2="6" y1="6" y2="3"></line>
                  <path d="M3 21h18"></path>
                  <path d="M14 21v-4.5a2.5 2.5 0 0 0-5 0V21"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tighter mb-2">
                SEO Optimization
              </h3>
              <p className="text-slate-600">
                Get AI-powered suggestions for keywords, meta descriptions, and
                titles to rank higher in search results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                  <path d="m9 16 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tighter mb-2">
                Content Pipeline
              </h3>
              <p className="text-slate-600">
                Manage your entire workflow from draft to published post with an
                intuitive and efficient dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Loved by Creators Worldwide
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. See what our users are saying
              about TurboCMS.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial Card 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                "TurboCMS has revolutionized my blogging workflow. The AI
                suggestions are scarily good and have cut my writing time in
                half. I can't imagine going back!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/Gemini_Generated_Image_eac22qeac22qeac2.png"
                  alt="Photo of Sarah L."
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Professor Meowzart.
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Founder, Nomad's Guide
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 ">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                "The SEO optimization tools are a game-changer. My organic
                traffic has increased by 40% since I started using TurboCMS.
                It's an essential tool for any serious content creator."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/Gemini_Generated_Image_9rdh6o9rdh6o9rdh.png"
                  alt="Photo of Mark C."
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Mark C.
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Marketing Head, TechSavvy
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                "As someone who manages multiple blogs, the content pipeline
                dashboard is a lifesaver. It’s so intuitive and keeps everything
                perfectly organized."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/Gemini_Generated_Image_9rdh6o9rdh6o9rdh (1).png"
                  alt="Photo of Elena R."
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Elena R.
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Freelance Content Strategist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="mb-10 mt-0 sm:h-[30vh] w-full flex flex-col "
      >
        <div className="flex flex-col items-center gap-2 max-w-[70%] mx-auto">
          <h4 className="font-bold text-2xl ">
            Transform Your Carreer in Content Writing
          </h4>
          <p className="text-xl text-gray-700 ">
            Join the Platform to Write and Publish Content
          </p>
          <div className="flex flex-col w-full sm:flex-row gap-4 mt-4">
            <input
              className="bg-zinc-200 focus-outline-none rounded-md px-4 py-2 w-full sm:w-[300px] text-sm"
              placeholder="Enter your email"
            />
            <Button
              variant="default"
              className="px-6 py-2 text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

