"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  const [icon, setIcon] = useState(<h1 style={{ fontSize: 26 }}>&#9776;</h1>);
  const [isOpen, setIsOpen] = useState(false);

  const navDiv = useRef<any>();

  const toggleOpenMenu = () => {
    if (isOpen) {
      navDiv.current.style.right = "-250px";
      setIsOpen(false);
      setIcon(<h1 style={{ fontSize: 26 }}>&#9776;</h1>);
    } else {
      navDiv.current.style.right = "0";
      setIsOpen(true);
      setIcon(<h1 style={{ fontSize: 26 }}>&times;</h1>);
    }
  };


  const closeMenu = () => {
    navDiv.current.style.right = "-250px";
    setIsOpen(false);
    setIcon(<h1 style={{ fontSize: 26 }}>&#9776;</h1>);
  }

  return (
    <nav className="flex py-[12px] px-[50px] justify-between items-center w-full h-[10%] z-10 shadow-lg bg-fuchsia-900">
      <section
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 26,
          color: "#fff",
          fontWeight: "bold",
          gap: 10,
        }}
      >
        <Link href={"/"} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="tmb logo"
            height={50}
            width={50}
            className="rounded-full"
          />
        </Link>
        <h1>TriomegaB</h1>
      </section>

      <div
        ref={navDiv}
        className={`flex gap-[40px] items-center transition duration-700 bg-fuchsia-900 flex-col md:flex-row fixed md:sticky top-[9.7%] md:top-auto w-[250px] md:w-auto right-[-250px] md:right-auto h-full`}
      >
        <ul className="flex flex-col md:flex-row gap-[20px] items-center list-none">
          <li>
            <Link
              href={"/"}
              onClick={closeMenu}
              className="text-[20px] text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              onClick={closeMenu}
              className="text-[20px] text-white"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href={"/donate"}
              onClick={closeMenu}
              className="text-[20px] text-white"
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              onClick={closeMenu}
              className="text-[20px] text-white"
            >
              Contact us
            </Link>
          </li>
        </ul>

        <Link href={"/"} onClick={closeMenu}>
          <CustomButton customClass="primary" value="Touch Life" />
        </Link>
      </div>

      <span
        onClick={toggleOpenMenu}
        className="block md:hidden cursor-pointer text-white font-bold"
      >
        {icon}
      </span>
    </nav>
  );
};

export default Navbar;
