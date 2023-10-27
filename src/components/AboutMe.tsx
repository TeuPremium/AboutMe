import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  position: absolute;
  top: 70px;
  padding: 20px;
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
    list-style-type: circle;
    padding-left: 45px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
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
`;

export default function Body() {
  return (
    <Container>
      <Column>
        <span>
          <img
            src="https://avatars.githubusercontent.com/u/50275359?v=4"
            alt="Profile"
          />
          <div>
            <h1>&nbsp; Vinicius Brandão</h1>
            <div className="role"> &nbsp; Software Engineer</div>
          </div>
        </span>
        <br />
        <div>
          <p>
            Sou estudante de Engenharia Eletrônica na UFPE e um apaixonado por
            tecnologia. Adoro gatos e tenho um interesse especial em Machine
            Learning com Python. Tenho habilidades nas seguintes áreas:
          </p>
          <ul>
            <li>Front-end: HTML, CSS, JQuery, React.js, Styled components.</li>
            <li>
              Back-end: REST, Node.js, Express, Typescript, Jest, TDD, NestJS.
            </li>
            <li>Banco de Dados: PostgreSQL, MongoDB.</li>
            <li>Arquitetura: Prisma (ORM), Arquitetura em camadas, MVC.</li>
            <li>
              Metodologias de trabalho: Metodologias Ágeis, Scrum, Prototipagem.
            </li>
            <li>
              Mais Ferramentas: Python, Machine Learning, Git, Github, Visual
              Studio Code, Trello, Slack, Docker, CI GitHub actions.
            </li>
            <li>Inglês fluente.</li>
          </ul>
        </div>
        <Button></Button>
      </Column>
    </Container>
  );
}
