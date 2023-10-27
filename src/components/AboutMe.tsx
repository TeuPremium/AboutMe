import { useNavigate } from "react-router-dom";
import { Button, Column, Container } from "./AboutMeStyles";

export default function AboutMe() {
  const navigate = useNavigate();
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
            Olá, sou o Vinícius e sou um software developer e estudante de
            Engenharia Eletrônica. Sou um apaixonado por tecnologia e gatos e
            esse comigo no desenho é o pastel, meu gatinho cego.
            <br />
            Aqui estão algumas das minhas hard-skills:
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
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Column>
    </Container>
  );
}
