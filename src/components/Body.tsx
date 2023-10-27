import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Body() {
  const navigate = useNavigate();

  function goTo(destination: string) {
    console.log(destination);
    navigate(destination);
  }

  return (
    <Container>
      <Column>
        <span>
          <img src="https://avatars.githubusercontent.com/u/50275359?v=4" />
          <h1>Vinicius Brandão</h1>
        </span>

        <UnderSection>
          <OptionBubble onClick={() => goTo("/me")}>
            {"Sobre mim  "}
            <img src="https://cdn-icons-png.flaticon.com/512/1310/1310078.png" />
          </OptionBubble>

          <Link
            style={{ height: "0px" }}
            to="https://github.com/TeuPremium"
            target="_blank"
          >
            <OptionBubble>
              {"Meu Github  "}
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            </OptionBubble>
          </Link>

          <Link
            style={{ height: "0px" }}
            to="https://github.com/TeuPremium"
            target="_blank"
          >
            <OptionBubble>
              {"Meu Linkedin"}
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" />
            </OptionBubble>
          </Link>
        </UnderSection>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: absolute;
  top: 70px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  height: 85vh;
  background-color: #76739956;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  overflow-y: scroll;

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
  span {
    width: max-content;
    height: max-content;
    max-width: 90%;
    max-height: 90%;
    border-radius: 55px;
    @media (min-width: 600px) {
      margin-top: 15px;
      width: 350px;
    }
    @media (min-width: 1920px) {
      width: 450px;
    }

    text-align: center;
  }

  div {
    margin-top: 25px;
  }
  h1 {
    margin-top: 15px;
  }
`;

const OptionBubble = styled.div`
  position: relative;
  right: 23px;
  background-color: #ffffff29;
  width: 90%;
  height: 25px;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  img {
    height: 33px;
    width: 33px;
    bottom: 10px;
    position: relative;
    object-fit: contain;
  }
  color: #ffffffcc;
  font-size: x-large;

  @media (min-width: 600px) {
    max-width: 350px;
  }
  @media (min-width: 1920px) {
    max-width: 450px;
  }
`;

const UnderSection = styled.div``;
