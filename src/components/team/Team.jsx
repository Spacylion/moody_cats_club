import "./team.css";
import { products } from "../../data";
import Products from "../products/Products";
import Dev1 from "../../img/cat1.jpg";
import Dev3 from "../../img/cat3.jpg";
import Dev4 from "../../img/cat4.jpg";
import Dev5 from "../../img/cat5.jpg";
import Dev6 from "../../img/cat6.jpg";
import Dev2 from "../../img/cat2.jpg";

const Team = () => {
  return (
    <div className="c" id="Team">
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Dev1} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Team</h1>

          <div className="a-award">
            <img src={Dev2} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Catz CEO</h4>
              <p className="a-award-desc">Developer of the Metaverse</p>
            </div>
          </div>
          <div className="a-award">
            <img src={Dev4} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Blockchain Cat</h4>
              <p className="a-award-desc">
                Contracted all his mouses to the Blockchain
              </p>
            </div>
          </div>
          <div className="a-award">
            <img src={Dev5} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">UI designer Cat</h4>
              <p className="a-award-desc">
                Random spacy cat who name himself lion{" "}
              </p>
            </div>
          </div>
          <div className="a-award">
            <img src={Dev3} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Artist Cat</h4>
              <p className="a-award-desc">Creator of all art collection</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
