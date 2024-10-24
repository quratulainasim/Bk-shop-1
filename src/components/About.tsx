import React from "react";

function About() {
  return (
    <section className="bg-slate-300 w-full">
      <div className="bg-slate-300 mx-auto flex-col flex px-10 py-5 items-center justify-center w-full ">
        <h1 className="text-indigo-950 text-4xl font-bold text-center hover:underline  mb-5 sm:text-3xl md:text-5xl lg:text-6xl">
          Why We Curate
        </h1>
        <div className="bg-slate-300 text-center lg:w-2/3 w-full">
          <h2 className="sm:text-2xl text-3xl mb-2 font-bold text-indigo-950">
            A Gateway to Curating Stories Creating Connections
          </h2>
          <p className="mb-2 text-lg text-indigo-800 font-bold">
            A book shop is more than just a place to sell books it is a gateway
            to worlds of imagination knowledge and discovery.In today is digital
            age our online presence should replicate the charm of a physical
            bookstore inviting easy to navigate and filled with personalized
            recommendations to ensure each visitor leaves with the perfect book
            in hand.
          </p>
          <div className="flex justify-center">
            <button className="text-white font-bold bg-indigo-950 border-0 py-1 px-2 focus:outline-none rounded text-lg hover:bg-orange-200">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
