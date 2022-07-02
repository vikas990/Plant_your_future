import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "../../utils";
import { Hamburger, ListContainer, LogoContainer } from "./Navbar.styles";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <LogoContainer>
        <div onClick={() => setShow(false)}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
          </Link>
        </div>

        <Hamburger>
          {show ? (
            <CloseIcon onClick={() => setShow(false)} />
          ) : (
            <MenuIcon onClick={() => setShow(true)} />
          )}
        </Hamburger>
        <ListContainer show={show}>
          <p onClick={() => setShow(false)}>
            <Link href="/">Home</Link>
          </p>
          <p>About Us</p>
          <p>Connect</p>
          <p onClick={() => setShow(false)}>
            <Link href="/inspire">Inspire</Link>
          </p>
        </ListContainer>
      </LogoContainer>
    </>
  );
};

export default Navbar;
