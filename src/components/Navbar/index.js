import React from "react";
import ConnectOnly from "../../ConnectOnly.js";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import Logo from "../../img/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="" className="LogoBar" />
          <h2 class="Moody">Moody Cats Club</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <a className="NavMenuDiv" href="#Home">
            Home
          </a>
          <a className="NavMenuDiv" href="#Summery">
            Summary
          </a>
          <a className="NavMenuDiv" href="#Roadmap">
            Roadmap
          </a>
          <a className="NavMenuDiv" href="#Team">
            Team
          </a>
          <a className="NavMenuDiv" href="#FAQ">
            FAQ
          </a>
          <a className="NavMenuDiv" href="#Socials">
            Socials
          </a>
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to="/signin">CONNECT TO METAMASK</NavBtnLink> */}
          <ConnectOnly />
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
