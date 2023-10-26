import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Body() {
  return (
    <Container>
      <Column>
        <img src="https://avatars.githubusercontent.com/u/50275359?v=4" />
        <div>
          <h1>Vinicius Brandão</h1>
        </div>

        <Link to="https://github.com/TeuPremium" target="_blank">
          <OptionBubble>Sobre mim</OptionBubble>
        </Link>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  height: 70vh;
  background-color: #76739956;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  @media (min-width: 800px) {
    max-width: 800px;
  }
  @media (min-width: 1920px) {
    max-width: 1100px;
  }
  @media (min-width: 2561px) {
    max-width: 1500px;
  }

  img,
  div {
    width: max-content;
    height: max-content;
    max-width: 90%;
    max-height: 90%;
    border-radius: 55px;
    @media (min-width: 600px) {
      width: 350px;
    }
    @media (min-width: 1920px) {
      width: 450px;
    }
    text-align: center;
  }
`;

const OptionBubble = styled.div``;
