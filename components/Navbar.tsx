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
    <nav className="nav">
      <Link href={"/"} onClick={closeMenu}>
        <Image
          src="/tmb_logo.jpg"
          alt="tmb logo"
          height={40}
          width={40}
          className="rounded-full"
        />
      </Link>

      <div ref={navDiv}>
        <ul>
          <li>
            <Link href={"/"} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link href={"/donate"} onClick={closeMenu}>
              Donate
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={closeMenu}>
              Contact us
            </Link>
          </li>
        </ul>

        <Link href={"/"} onClick={closeMenu}>
          <CustomButton customClass="primary" value="Touch Life" />
        </Link>
      </div>

      <span onClick={toggleOpenMenu} className="iconShow">
        {icon}
      </span>
    </nav>
  );
};

export default Navbar;
