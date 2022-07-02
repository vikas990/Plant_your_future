import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ListContainer, LogoContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <LogoContainer>
        <div>
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        </div>
        <ListContainer>
          <p>Home</p>
          <p>About Us</p>
          <p>Connect</p>
          <p>
            <Link href="/inspire">Inspire</Link>
          </p>
        </ListContainer>
      </LogoContainer>
    </>
  );
};

export default Navbar;
