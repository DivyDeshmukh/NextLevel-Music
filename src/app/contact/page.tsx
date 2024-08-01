import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-[#101522] py-12 pt-36">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-md text-neutral-600 dark:text-neutral-400 flex-grow">
          We are here to help with any questions about our courses, programs, or
          events.
        </p>
        <form className="flex flex-col justify-center items-center gap-8">
          <input
            type="email"
            placeholder="Your email address"
            className="p-6 bg-black w-[70vw] mt-4 pl-4 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 bg-black w-[70vw] mt-4 pl-4 rounded-md"
            rows={5}
          />
        </form>
      </div>
      <Meteors number={20} />
    </div>
  );
}

export default page;
