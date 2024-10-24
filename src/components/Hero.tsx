import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <main className="m-0 p-4 bg-slate-300">
      <section className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1">
          <h1 className="font-bold text-3xl md:text-4xl text-indigo-950 font-serif">
            Unlock the World of Knowledge
          </h1>
          <p className="text-3xl md:text-lg text-indigo-800 font-bold mt-2 font-serif">
            Books for every passion and interest
          </p>
          <button className="bg-indigo-950 text-white py-1 mt-4 px-3 font-bold rounded-lg hover:bg-orange-200 ">
            Start Reading Now
          </button>
        </div>
        <div className="flex-1 w-full h-auto">
          <Image
            src="/bookw.webp"
            alt="Image"
            width={900}
            height={900}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
