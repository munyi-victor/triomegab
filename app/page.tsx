import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />

      <div className="bg-fuchsia-900">
        <div className="flex-1 h-full w-auto">
          <div className="pt-6 flex-col gap-5 px-10 md:px-20">
            <div className="bg-white py-5 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <h2 className="font-semibold text-2xl">Our Aim</h2>
              <p className="text-gray-600 mt-2">
                To transform lives by offering compassionate support and resources, creating pathways for lasting positive changes and spreading blessings to those in need.
              </p>
            </div>

            <div className="bg-white py-5 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <h2 className="font-semibold text-2xl">Our Goal</h2>
              <p className="text-gray-600 mt-2">
                To inspire hope and empower individuals, paving the way for a brighter and more promising future.
              </p>
            </div>

            <h1 className="text-center mb-3 font-semibold text-2xl text-gray-100">What we do</h1>

            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <div className="text-center flex justify-center">
                <h1 className="bg-fuchsia-900 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
                  1
                </h1>
              </div>
              <h2 className="font-semibold mt-4 text-2xl">Mentorship</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                iure fugiat voluptate inventore blanditiis mollitia tenetur vel
                natus corporis excepturi explicabo ipsa ullam, non, aspernatur
                quia porro rerum nulla repudiandae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>

            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <div className="text-center flex justify-center">
                <h1 className="bg-fuchsia-900 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
                  2
                </h1>
              </div>
              <h2 className="font-semibold mt-4 text-2xl">Inspiration</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                iure fugiat voluptate inventore blanditiis mollitia tenetur vel
                natus corporis excepturi explicabo ipsa ullam, non, aspernatur
                quia porro rerum nulla repudiandae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>

            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <div className="text-center flex justify-center">
                <h1 className="bg-fuchsia-900 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
                  3
                </h1>
              </div>
              <h2 className="font-semibold mt-4 text-2xl">Building</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                iure fugiat voluptate inventore blanditiis mollitia tenetur vel
                natus corporis excepturi explicabo ipsa ullam, non, aspernatur
                quia porro rerum nulla repudiandae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
