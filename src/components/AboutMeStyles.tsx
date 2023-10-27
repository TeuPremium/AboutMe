import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  padding-left: 35px;
  padding-right: 35px;
  box-sizing: border-box;
  font-size: larger;
  padding-bottom: 110px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h1 {
    margin: 0;
    margin-left: 10px;
  }

  .role {
    font-size: 1.2em;
    color: #ffffffcc;
    margin-top: 5px;
  }
  span {
    display: flex;
    align-items: center;
  }
  ul {
    margin-top: 13px;
    list-style-type: square;
    padding-left: 45px;
  }

  li {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  position: relative;
  right: 23px;
  background-color: #ffffff29;
  width: 45%;
  height: 25px;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  position: absolute;
  bottom: 45px;
  left: 27.5%;
  display: flex;
  justify-content: center;
`;
