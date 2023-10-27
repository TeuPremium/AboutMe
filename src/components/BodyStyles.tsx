import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: absolute;
  top: 70px;
`;

export const Column = styled.div`
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

export const OptionBubble = styled.div`
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
  font-weight: 600;
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

export const UnderSection = styled.div``;
