"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";
import { DonationsProps } from "@/types/index";
import { useState } from "react";
import PaynowModal from "./PaynowModal";

const DonationsCard = ({
  itemName,
  imageSrc,
  description,
  price,
}: DonationsProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center mt-4 mb-3 shadow-lg rounded-xl py-3 px-4 border-t">
      <h2 className="font-semibold text-xl">{itemName}</h2>
      <Image
        src={imageSrc}
        alt=""
        height={120}
        width={120}
        className="rounded-lg h-[180px] w-full mb-1 mt-1 border"
      />
      <p className="text-center">
        Donate {itemName} to help our kids maintain a high level of hygiene and
        cleanliness in general.
      </p>
      <p>{description}</p>
      <h3 className="font-semibold mb-3 mt-1">Ksh. {price}</h3>

      <CustomButton
        value="Donate"
        type="button"
        customClass="secondary"
        handleClick={openModal}
      />

      {modalOpen && <PaynowModal closeModal={closeModal} price={price} />}
    </div>
  );
};

export default DonationsCard;
