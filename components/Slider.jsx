import react from "react";
import styled, { css } from "styled-components";
import ButtonDiv, { Button } from "./Button";
import DATA from "../data/data";
import { useRef, useState, useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Herosection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const Herowaraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const Heroslide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const Heroslider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-timing-function: ease;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0px;
    overflow: hidden;
    opacity: 0.4;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 3.5) 20%,
      rgba(0, 0, 0, 3.5) 40%,
      rgba(0, 0, 0, 3) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
const Heroimage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const Herocontent = styled.div`
  padding-right: 10px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1600px;

  color: #fff;
  h1 {
    font-size: clamp(1.5rem, 8vw, 12rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  }
`;
const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px;
  margin-left: 1 rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const Sliderbutton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const Prevarrow = styled(IoArrowBack)`
  ${ArrowButtons}
`;
const Nextarrow = styled(IoArrowForward)`
  ${ArrowButtons}
`;
const Arrow = styled(IoMdArrowRoundForward)``;
export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);
  const length = DATA.length;
  useEffect(() => {
    const nextSlidefun = () => {
      setCurrent((current) => {
        return current === 0 ? length - 1 : current - 1;
      });
    };
    timeout.current = setTimeout(nextSlidefun, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  function nextSlide() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }
  function prevSlide() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }
  return (
    <Herosection>
      <Herowaraper>
        {DATA.map((val, index) => {
          //   console.log(val.title);
          return (
            <Heroslide key={index}>
              {index === current && (
                <Heroslider>
                  <Heroimage src={val.image} alt={val.title} />
                  <Herocontent>
                    <h1>{val.title}</h1>
                    <p>{val.price}</p>
                    <Button to="/">
                      View More
                      <Arrow />
                    </Button>
                  </Herocontent>
                </Heroslider>
              )}
            </Heroslide>
          );
        })}
        <Sliderbutton>
          <Prevarrow onClick={() => prevSlide()} />
          <Nextarrow onClick={() => nextSlide()} />
        </Sliderbutton>
      </Herowaraper>
    </Herosection>
  );
}
