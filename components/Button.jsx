import react from "react";
import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  width: 180px;
  height: 40px;
  border-radius: 5%;
  background-color: black;
  color: white;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;
