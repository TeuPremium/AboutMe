import { Link, useNavigate } from "react-router-dom";
import { Column, Container, OptionBubble, UnderSection } from "./BodyStyles";

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
          {/* This should be a separate component, !Separate later! */}
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
            to="https://www.linkedin.com/in/viniciusssb000/"
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
