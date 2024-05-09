import Image from "next/image";

import CustomButton from "./CustomButton";
import { DonationsProps } from "@/types/index";

const Donations = ({
  itemName,
  imageSrc,
  description,
  price,
}: DonationsProps) => {
  return (
    <div className="flex flex-col items-center mt-4 mb-3 shadow-lg rounded-xl py-3 border-t">
      <h2 className="font-semibold text-xl">{itemName}</h2>
      <Image
        src={imageSrc}
        alt=""
        height={120}
        width={120}
        className="rounded-full h-[120px] w-[120px] mb-1 mt-3 border"
      />
      <p className="text-center">{description}</p>
      <h3 className="font-semibold mb-3 mt-1">Ksh. {price}</h3>

      <CustomButton value="Pay now" type="button" customClass="secondary" />
    </div>
  );
};

export default Donations;
