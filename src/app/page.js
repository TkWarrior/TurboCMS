import TypeWriterHeadline from "@/components/TypeWriterHeadline";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, PencilIcon, Zap } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-100vh flex-grow-1 gap-16 row-start-2 items-center sm: w-full animate-fadeIn">
     
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-3xl mx-auto">
            
            <TypeWriterHeadline/>
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
      <section id="feature" className="py-20 bg-zinc-200 border-y border-slate-200">
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
      
      <section id="contact" className="h-[50vh] sm:h-[30vh] w-full flex flex-col ">
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
              Submit
            </Button>
          </div>
        </div>
      </section>
      {/* <section class="relative py-20 md:py-32 overflow-hidden">
            <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div class="container mx-auto px-6 text-center relative">
                <div class="max-w-3xl mx-auto">
                    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900">
                        From Idea to Impact.
                        <span class="block mt-2 md:mt-4 gradient-text">Let AI Fuel Your Blog.</span>
                    </h1>
                    <p class="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Generate engaging blog posts, optimize for SEO, and manage your content pipeline with ease. Our AI-driven CMS gives you full control without the overwhelm.
                    </p>
                </div>
                <div class="mt-10 flex gap-4 justify-center">
                    <a href="/sign-in">
                        <button class="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                            Try Now For Free
                        </button>
                    </a>
                    <button class="px-8 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 border border-slate-300 shadow-sm">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

       
        <section class="py-20 bg-slate-50 border-y border-slate-200">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                     <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">Powerful Features, Simple Interface</h2>
                     <p class="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to create and manage content that drives results.</p>
                </div>
                <div class="grid gap-8 grid-cols-1 md:grid-cols-3">
                    <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div class="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"></path><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"></path><path d="M15 2v5h5"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold tracking-tighter mb-2">AI Content Generation</h3>
                        <p class="text-slate-600">Turn your ideas into polished posts with smart AI assistance for outlines, drafts, and rephrasing.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div class="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="10" y1="14" y2="3"></line><line x1="14" x2="14" y1="10" y2="3"></line><line x1="18" x2="18" y1="18" y2="3"></line><line x1="6" x2="6" y1="6" y2="3"></line><path d="M3 21h18"></path><path d="M14 21v-4.5a2.5 2.5 0 0 0-5 0V21"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold tracking-tighter mb-2">SEO Optimization</h3>
                        <p class="text-slate-600">Get AI-powered suggestions for keywords, meta descriptions, and titles to rank higher in search results.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div class="bg-orange-100 text-orange-600 p-4 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold tracking-tighter mb-2">Content Pipeline</h3>
                        <p class="text-slate-600">Manage your entire workflow from draft to published post with an intuitive and efficient dashboard.</p>
                    </div>
                </div>
            </div>
        </section>

       
        <section class="py-20">
            <div class="container mx-auto px-6">
                <div class="bg-slate-800 text-white rounded-2xl p-12 text-center flex flex-col items-center">
                    <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Transform Your Content?</h2>
                    <p class="mt-4 text-lg text-slate-300 max-w-xl">Join hundreds of creators who are building their audience faster with AI.</p>
                    <div class="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md">
                        <input class="bg-slate-700 border border-slate-600 rounded-md px-4 py-3 w-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shrink-0">
                            Start Your Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section> */}
    </main>
  );
}

