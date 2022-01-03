import "../about/about.css";
import Card from "../../../img/R_img_Header.jpg";
import Award from "../../../img/R_img_Header.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Card} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" id="Summery">
          Summary
        </h1>
        <p className="a-sub">What are Moody Cats about?</p>
        <p className="a-desc ">
          Moody Cats Club NFT is an OpenSea collection of cat collectibles based
          on the ETH block chain. “THE ORIGINALS” serie are the ten first ever
          NFT on the collection however with project CCT that launched December
          first 2021, Moody Cats Club will be randomly generated and added to
          this collection each month until reaching 10K NFTs. We are now having
          big plans with drop 2 dropping some time during January. We are
          creating a brand new website as well as a discord were our community
          will grow bigger and bigger. Moody Cats Club NFT to the Moon!!
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" />
           */}
        </div>
      </div>
    </div>
  );
};

export default About;
