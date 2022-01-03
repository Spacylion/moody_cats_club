import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((80vw - 1000px) / 3);
  z-index: 10;
  font-family: "Zen Dots", cursive;
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;

  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    // display: block;
    // position: absolute;
    // top: 10px;
    // right: 10px;
    // transform: translate(-100%, 75%)l
    // font-size: 1.8rem;
    // cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: flex;
    right: 0;
    top: 0;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #256ce1;
  padding: 5px 20px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
