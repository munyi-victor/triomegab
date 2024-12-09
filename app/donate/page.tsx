import DonationsCard from "@/components/DonationsCard";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Donate",
  description:"Donate to the TriomegaB hearts of passion foundation."
}

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

      <DonationsCard
        itemName="Bathing Soaps"
        imageSrc="/hero_img.jpg"
        price={250}
      />

      <DonationsCard
        itemName="Sanitary Pads"
        imageSrc="/hero_img.jpg"
        price={300}
      />

      <DonationsCard
        itemName="Inner-wears"
        imageSrc="/hero_img.jpg"
        price={250}
      />
    </div>
  );
};

export default Donate;
