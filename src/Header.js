import React from "react";
import "./styles/header.css";

function Header() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin">CONNECT</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Header;
