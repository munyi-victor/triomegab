import Image from "next/image";

import { TeamMembersProps } from "@/types";

const TeamMembers = ({ name, position, imageSrc }: TeamMembersProps) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-lg py-3 px-1 bg-fuchsia-800 rounded-md">
      <Image
        src={imageSrc}
        alt=""
        height={150}
        width={150}
        className="rounded-full h-[150px] w-[150px] mb-1 border"
      />
      <h3 className="font-semibold text-xl text-white">{name}</h3>
      <h4 className="text-gray-300 font-semibold">{position}</h4>
    </div>
  );
};

export default TeamMembers;