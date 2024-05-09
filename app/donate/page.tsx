import Image from "next/image";

import Donations from "@/components/Donations";

const Donate = () => {
  return (
    <div className="pt-3 px-4 md:px-20">
      <div className="text-center">
        <h1 className="font-semibold text-2xl">
          Touch a Life, Pave Blessings!
        </h1>
        <p className="text-gray-600">
          We appreciate you for willing to make a donation.
        </p>
      </div>

      <Donations
        itemName="Bathing Soaps"
        imageSrc="/hero_img.jpg"
        price={250}
        description="Donate soap to help our kids maintain a high level of hygiene and cleanliness in general."
      />

      <Donations
        itemName="Sanitary Pads"
        imageSrc="/hero_img.jpg"
        price={300}
        description="Donate sanitary pads to help our kids maintain a high level of hygiene and cleanliness in general."
      />

      <Donations
        itemName="Inner-wears"
        imageSrc="/hero_img.jpg"
        price={250}
        description="Donate inner-wears to help our kids maintain a high level of hygiene and cleanliness in general."
      />
    </div>
  );
};

export default Donate;
