import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>TeuPremium</div>
    </Container>
  );
}

const Container = styled.div`
  height: 45px;
  background-color: brown;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
