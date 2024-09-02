"use client";

import { useState } from "react";
import Link from "next/link";

import CustomButton from "./CustomButton";
import JoinModal from "@/components/JoinModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[90vh] w-full text-center px-2 pt-24 md:p-36 pb-10 border-b border-solid border-black-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero_img.jpg")`,
      }}
    >
      <h1 className="text-2xl lg:text-3xl font-semibold text-white">
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
          value="Join us"
          handleClick={openModal}
        />
      </div>

      {modalOpen && <JoinModal closeModal={closeModal} />}

      <div className="mt-14">
        <h3 className="text-gray-100">Connect with us:</h3>
        <div className="flex justify-center text-white mt-2">
          <ul className="flex gap-10 list-none">
            <li>
              <Link
                href="https://www.facebook.com/share/GSzjmwyvize3qLfV/?mibextid=qi2Omg"
                target="_blank"
                title="facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>

            <li>
              <Link href="/" title="instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>

            <li>
              <Link href="/" title="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
