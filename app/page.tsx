import EventsCard from "@/components/EventsCard";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      {/* <EventsCard /> */}

      <div className="bg-fuchsia-900">
        <div className="flex-1 h-full w-auto">
          <div className="pt-6 flex-col gap-5 px-10 md:px-20">
            <div className="bg-white py-5 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <h2 className="font-semibold text-2xl">Our Aim</h2>
              <p className="text-gray-600 mt-2">
                To transform lives by offering compassionate support and
                resources, creating pathways for lasting positive changes and
                spreading blessings to those in need.
              </p>
            </div>

            <div className="bg-white py-5 px-10 flex-col text-center justify-center align-middle shadow-xl mb-5 rounded-2xl">
              <h2 className="font-semibold text-2xl">Our Goal</h2>
              <p className="text-gray-600 mt-2">
                To inspire hope and empower individuals, paving the way for a
                brighter and more promising future.
              </p>
            </div>
            <WhatWeDo />
          </div>
        </div>
      </div>
    </main>
  );
}
