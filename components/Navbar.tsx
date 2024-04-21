import { NavbarStyle } from "@/styles/App.styles";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  return (
    <NavbarStyle>
      <nav>
        <Link href={"/"}>
          <Image
            src="/tmb_logo.jpg"
            alt="tmb logo"
            height={40}
            width={40}
            className="rounded-full"
          />
        </Link>

        <div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About us</Link>
            </li>
            <li>
              <Link href={"/donate"}>Donate</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact us</Link>
            </li>
          </ul>
          
          <CustomButton customClass="primary" value="Touch Life" />
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
