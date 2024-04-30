import React from 'react';
import Cores from '@/components/Cores';
import Image from 'next/image';

const About = () => {
  return (
    <div className="pt-5">
      <div className="text-center border-b pb-5 px-10">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-1 text-gray-600">
          We are the TriomegaB Hearts of Passion Foundation. Our aim is to
          mentor, insipre and build youths to grow into important and valuable
          individuals. We help them in terms of career choosing, growing talents
          and also character development.
        </p>

        <h2 className="mt-3 font-semibold text-2xl">Our History</h2>
        <p className="mt-1 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iure
          fugiat voluptate inventore blanditiis mollitia tenetur vel natus
          corporis excepturi explicabo ipsa ullam, non, aspernatur quia porro
          rerum nulla repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci quidem blanditiis commodi repellendus
          asperiores distinctio corporis rerum ea iusto ipsum sed similique
          eligendi dolores harum deserunt dolor quo, quas voluptates? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim
          atque vel rem dolore beatae quaerat quidem officiis corporis, non vero
          reiciendis perspiciatis esse minus recusandae, in veritatis.
          Perspiciatis, autem!
        </p>
      </div>
      <div>
        <h2 className="mt-3 font-semibold text-2xl text-center">
          Our Core Values
        </h2>
        <Cores />
      </div>

      <div className="px-8">
        <h2 className="text-center text-3xl font-semibold">Meet the Team</h2>

        <div className="pb-4 mt-5">
          <div className="grid md:grid-cols-3 grid-cols-none gap-4">
            <div className="flex flex-col justify-center items-center shadow-lg py-3 px-1 bg-fuchsia-800 rounded-md">
              <Image
                src={"/hero_img.jpg"}
                alt=""
                height={150}
                width={150}
                className="rounded-full h-[150px] w-[150px] mb-1 border"
              />
              <h3 className="font-semibold text-xl text-white">
                Francis Kivenia
              </h3>
              <h4 className="text-gray-300 font-semibold">Chairman, CEO</h4>
            </div>

            <div className="flex flex-col justify-center items-center shadow-lg py-3 bg-fuchsia-800 rounded-md">
              <Image
                src={"/hero_img.jpg"}
                alt=""
                height={150}
                width={150}
                className="rounded-full h-[150px] w-[150px] mb-1 border"
              />
              <h3 className="font-semibold text-xl text-white">Victor Munyi</h3>
              <h4 className="text-gray-300 font-semibold">
                Digital Specialist
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center shadow-lg py-3 bg-fuchsia-800 rounded-md">
              <Image
                src={"/hero_img.jpg"}
                alt=""
                height={150}
                width={150}
                className="rounded-full h-[150px] w-[150px] mb-1 border"
              />
              <h3 className="font-semibold text-xl text-white">Madrine Njue</h3>
              <h4 className="text-gray-300 font-semibold">Events Organizer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;