"use client"
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <Meteors number={50} />
      <div className="flex flex-col justify-center max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mt-4 mb-6">Contact Us</h1>
        <p className="text-gray-500 text-center mx-auto my-2 text-sm max-w-lg"> We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
        <form className="flex justify-center flex-col gap-4 mt-4">
            <input className="p-4 rounded-md dark:bg-black text-gray-500"
              type="text" placeholder="Your email address"/>
            <textarea className="p-4 h-[10rem] rounded-md dark:bg-black text-gray-500"
              placeholder="Your message" />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default page