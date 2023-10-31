import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <div>TeuPremium</div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  z-index: 2;
  height: 45px;
  background-color: #a24316;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 20px;
    font-weight: 600;
    color: #fff5e9;
  }
`;
