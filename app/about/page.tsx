import React from 'react';
import Image from "next/image";

import Cores from '@/components/Cores';
import TeamMembers from '@/components/TeamMembers';

const About = () => {
  return (
    <div className="pt-5">
      <div className="text-center border-b pb-5 px-10">
        <h1 className="text-3xl font-semibold">About Us</h1>
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
            <TeamMembers name="Francis Kivenia" position="Chairman, CEO" imageSrc="/hero_img.jpg" />

            <TeamMembers name="Victor Munyi" position="Digital Specialist" imageSrc="/hero_img.jpg" />

            <TeamMembers name="Madrine Njue" position="Events Organizer" imageSrc="/hero_img.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;