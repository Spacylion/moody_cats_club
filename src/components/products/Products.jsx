import "./products.css";
import ProductsCard from "../../img/cat1.jpg";

const Products = ({ img, link }) => {
  return (
    <div className="products_div">
      <div className="p-browser">
        <div className="p-circle-1"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_black" rel="noreferrer">
        <img src={img} alt="" className="roadmapImg" />
      </a>
    </div>
  );
};

export default Products;
