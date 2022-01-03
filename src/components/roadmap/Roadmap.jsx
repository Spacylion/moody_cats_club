import "./roadmap.css";
import CollectionItem from "../../img/R_img_Header.png";
import Products from "../products/Products";
import { products } from "../../data";
import { Accordion } from "react-bootstrap";
import Dev1 from "../../img/cat1.jpg";
const Roadmap = () => {
  return (
    <div className="pl">
      <div className="frame">
        <div className="pl-texts" id="Roadmap">
          <h2 className="glow">ROADMAP</h2>
          <div className="pl-list">
            {products.map((item) => (
              <Products key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
          <Accordion defaultActiveKey="0" className="accordion_div">
            <Accordion.Item eventKey="0" className="accordion_div1">
              <Accordion.Header>Phase 1</Accordion.Header>
              <Accordion.Body>
                We want to get as much hype on the drop as possible to fill in
                the white list and overall hype up the project. We want to get
                as much people on the discord as possible to create a Moody Cats
                Club strong community full of dimond hands.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion_div2">
              <Accordion.Header>Phase 2</Accordion.Header>
              <Accordion.Body>
                After selling out the drop we will reveal the NFTs per chunks to
                keep the floor price stable and get rid of as much paper hands
                as we can.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion_div3">
              <Accordion.Header>Phase 3</Accordion.Header>
              <Accordion.Body>
                We will make huge giveaways and legendary drops that will be
                ultra rare!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="accordion_div4">
              <Accordion.Header>Phase 4</Accordion.Header>
              <Accordion.Body>
                We will hopefully get into many of the biggest NFT gallery in
                the metaverse and have special events for NFT holders.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            <img src={Dev1} alt="" className="mobile_img " />
          </div>
        </div>
      </div>

      <h1 className="glow">Buy Your First Moody Cats!</h1>
    </div>
  );
};

export default Roadmap;
