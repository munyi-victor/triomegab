import Link from "next/link";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div
      className="hero_container bg-cover bg-center bg-no-repeat h-[89vh] lg:h-[90vh] w-full text-center pt-36 pb-10 border-b border-solid border-black-100"
      style={{}}
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
        <Link href={"/"}>
          <CustomButton customClass="primary" value="Join Us Now" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
