import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import CardAnima from "./card/CardAnima.jsx";
import Card2 from "./card/Card2.jsx";
import { Col, Row } from "react-bootstrap";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Page id="Home">
      <Container className="Contanier_Splash">
        <Row>
          <Col sm={4}>
            <CardAnima />
          </Col>

          <Col sm={4} className="ColDiv">
            <Toggle onClick={changeTheme}>{icon}</Toggle>
            <Title>Welcome to Moody Cats Club</Title>
            <TagLine>Non-fungible Collection</TagLine>
            <a className="HoverButton glow1" href="#HomePage">
              {" "}
              <button className="HoverButton glow1">HOME</button>
            </a>{" "}
            <br />
            <button className="HoverButton glow1">
              <a className="textHover" href="https://metamask.io/">
                Download METAMASK
              </a>
            </button>
          </Col>

          <Col sm={4}>
            <Card2 />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Splash;
