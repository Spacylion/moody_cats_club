import "./intro.css";
import CatHead from "../../img/R_img_Header.png";
import Backspin from "../../img/backgr.png";
import ConnectButton from "../../ButtonConnect";
import Card3 from "../card/Card3";
import backFilm from "../../img/backFilm.mp4";
import {
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";

const Intro = () => {
  return (
    <div className="ImgScroll imgMob" id="HomePage">
      <video autoPlay muted loop className="videoPage ">
        <source src={backFilm} type="video/mp4" />
      </video>

      <Row>
        <Col>
          <div className="i">
            <ConnectButton />
            <div className="i-divtext">
              <h2 className="i-intro glow">Moody Cats Club Collection</h2>
              <h1 className="i-name glow">10,000</h1>
            </div>
          </div>
        </Col>

        <Col>
          <div className="r">
            <div className="r-divtext">
              <Card3 />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
