import React from "react";

const Cores = () => {
  return (
    <div className="flex-1 h-full w-auto">
      <div className="pt-6 flex-col gap-10 px-10 md:px-20">
        <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
          <div className="text-center flex justify-center">
            <h1 className="bg-fuchsia-950 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
              1
            </h1>
          </div>
          <h2 className="font-semibold mt-4 text-2xl">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To make sure that every kid gets basic needs, quality education,
            career and grow their talents.
          </p>
        </div>

        <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
          <div className="text-center flex justify-center">
            <h1 className="bg-fuchsia-950 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
              2
            </h1>
          </div>
          <h2 className="font-semibold mt-4 text-2xl">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            To become the leading charity givers and talent and career growers
            in the region.
          </p>
        </div>

        <div className="bg-white py-10 px-10 flex-col text-center justify-center align-middle shadow-lg mb-10 rounded-2xl">
          <div className="text-center flex justify-center">
            <h1 className="bg-fuchsia-950 text-white rounded-full h-20 w-20 flex justify-center items-center text-4xl font-bold">
              3
            </h1>
          </div>
          <h2 className="font-semibold mt-4 text-2xl">Our Motto</h2>
          <p className="text-gray-600 mt-2">Touch a life, Pave a blessing.</p>
        </div>
      </div>
    </div>
  );
};

export default Cores;
