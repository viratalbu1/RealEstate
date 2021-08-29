import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navlist = styled.nav`
  height: 60px;
  width: 100%;
  // background-color: red;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  // margin: o 12px;
  z-index: 100;
`;
const Navitems = styled.div`
  //   float: left;
  display: flex;
  justify-content: space-between;
`;
const Navitem = styled(Link)`
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const Logo = styled.i`
  font-weight: bold;
`;
const Heading = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: large;
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
export default function Navbar() {
  return (
    <>
      <Navlist>
        <Logo>MyBusiness</Logo>
        <Heading to="/home">Real-Estate</Heading>
        <Navitems>
          <Navitem to="/home">Home</Navitem>
          <Navitem to="/about">About</Navitem>
          <Navitem to="/contactUs">Contact Us</Navitem>
        </Navitems>
      </Navlist>
    </>
  );
}
