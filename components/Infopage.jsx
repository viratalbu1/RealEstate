import React from "react";
import { useEffect } from "react";
import { Button } from "./Button";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0rem;
`;
const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  line-height: 1.4;
  align-items: flex-start;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

export default function Infopage(props) {
  console.log(props.props);
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <h1>{props.props.heading}</h1>
            <p>{props.props.paragraph1}</p>
            <p>{props.props.paragraph2}</p>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis itaque nisi eius deserunt repellendus laboriosam esse voluptates eveniet, optio quidem facilis delectus illo necessitatibus eligendi aspernatur suscipit sed exercitationem ipsa?</p> */}
            <Button to="/home">View More</Button>
          </ColumnLeft>
          <ColumnRight reverse={props.props.reverse}>
            <img src={props.props.image} alt="sws" />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
}
