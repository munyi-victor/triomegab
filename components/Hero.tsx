"use client";

import { useState } from "react"
import CustomButton from "./CustomButton";
import JoinModal from "@/components/JoinModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[89vh] lg:h-[90vh] w-full text-center pt-24 md:p-36 pb-10 border-b border-solid border-black-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero_img.jpg")`,
      }}
    >
      <h1 className="text-4xl font-semibold text-white">
        Join us now as we <br />
        mentor, inspire and build the youths!
      </h1>
      <p className="text-gray-200 mt-4 text-wrap">
        Looking at the people living in the marginalised areas and the less
        priviledged, those that don't receive quality education anf enough
        resources, we aim to solve these issues.{" "}
      </p>

      <div className="mt-20 flex items-center justify-center">
        <CustomButton
          customClass="primary"
          value="Join Us Now"
          handleClick={openModal}
        />
      </div>

      {modalOpen && <JoinModal closeModal={closeModal} />}

      <div className="mt-14">
        <h3 className="text-gray-100">Connect with us:</h3>
        <div className="flex gap-5 justify-center text-white font-bold">
          <h4>Facebook</h4>
          <h4>Instagram</h4>
          <h4>Web</h4>
          <h4>Email</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
