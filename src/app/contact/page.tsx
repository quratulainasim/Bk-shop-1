import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <Header />

      <section className="bg-slate-300">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-indigo-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto  text-indigo-800 font-bold">
              Get in touch with us to learn more about our BiKey.Shop and how we
              organize and delived books. Whether you have questions about our
              new offer and sale personalized recommendations we are here to
              help you on your wellness journey. Fill out the form below and we
              will respond as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="text-md text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 p-2 "
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="text-md text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 p-2"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="text-md text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 h-32 py-1 px-3 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white font-bold bg-indigo-900 border-0 py-2 px-4 hover:bg-orange-300 rounded text-lg">
                  Submit
                </button>
                <Link href="/"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
