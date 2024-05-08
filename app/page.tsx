import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />

      <div>
        <div className="flex-1 h-full w-auto">
          <div className="pt-6 flex-col gap-10 px-10 md:px-20">
            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
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

            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
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

            <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
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
