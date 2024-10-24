import React from "react";
import Image from "next/image";

function Category() {
  return (
    <section className="bg-slate-300">
      <div className="container mx-auto py-15 px-5">
        <h1 className="text-indigo-600 text-3xl font-bold text-left mb-2 font-serif">
          Kids Category
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/kids.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Do you like tea
              </h3>
              <p className="font-bold">($18.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/kids1.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Stolen Dreams
              </h3>
              <p className="font-bold">($14.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/kids2.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Super Dad
              </h3>

              <p className="font-bold">($10.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/kids3.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Cast Away
              </h3>
              <p className="font-bold">($14.30)</p>
            </div>
          </div>
        </div>

        <h1 className="text-indigo-600 text-3xl font-bold text-left mb-2 font-serif">
          Academic Category
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/academic.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Class 5
              </h3>
              <p className="font-bold">($13.50)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/acedimc1.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Class 12
              </h3>
              <p className="font-bold">($19.20)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/acedimc2.jpeg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Management
              </h3>

              <p className="font-bold">($20.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/acedimic3.jpeg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                English Language
              </h3>
              <p className="font-bold">($20.30)</p>
            </div>
          </div>
        </div>
        <h1 className="text-indigo-600 text-3xl font-bold text-left mb-2 font-serif">
          Novels Category
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/novel.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Harry Potter
              </h3>
              <p className="font-bold">($20.30)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/novel1.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                The Name of the Wind
              </h3>
              <p className="font-bold">($22.50)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/novel2.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                The Lord of the Rings
              </h3>

              <p className="font-bold">($21.40)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/novel3.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                The Alchemist
              </h3>
              <p className="font-bold">($24.20)</p>
            </div>
          </div>
        </div>

        <h1 className="text-indigo-600 text-3xl font-bold text-left mb-2 font-serif ">
          Biographic Category
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/biographic.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Jan Hadfield
              </h3>
              <p className="font-bold">($21.20)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/biographic1.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Or Rosenboim
              </h3>
              <p className="font-bold">($25.30)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/biographic2.png"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Abraham Lincoln
              </h3>

              <p className="font-bold">($22.80)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/biographic3.png"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Abdul Kalam
              </h3>
              <p className="font-bold">($21.30)</p>
            </div>
          </div>
        </div>

        <h1 className="text-indigo-600 text-3xl font-bold text-left mb-2 font-serif ">
          Islamic Category
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/islamic.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Lost Islamic History
              </h3>
              <p className="font-bold">($23.80)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/islamic1.png"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Qasas-ul-Ambia
              </h3>
              <p className="font-bold">($26.90)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/islamic2.png"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">
                Prophet Muhammad
              </h3>

              <p className="font-bold">($28.90)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/islamic3.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-orange-400 text-lg font-bold mb-1">Hadees</h3>
              <p className="font-bold">($26.80)</p>
            </div>
          </div>
          <button className="bg-indigo-900 py-1 mt-4 px-2 font-bold rounded-md mb-3 text-white hover:bg-orange-300">
            Add Cart
          </button>
        </div>
      </div>
    </section>
  );
}
export default Category;
