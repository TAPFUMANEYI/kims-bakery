import "./Values.css";
import { FaLeaf, FaHandsHelping, FaRecycle, FaUtensils } from "react-icons/fa";
import img11 from "../images/pexels-askar-abayev-6193435.jpg";

export default function ProductsPage() {
  return (
    <section className="values-sec">
        <div className="values-wrap">
      <h2>Our Value Kim's Bakery</h2>
      <div className="container">
        <div className="left card">
          <img src={img11} alt="values images" />
          <div className="card__content">
            <div className="card-wrap">
              <p className="card__title">Our Values as Kim's Patisserie</p>
              <ul className="card__description">
                <li><FaLeaf /> Quality Ingredients</li>
                <li><FaUtensils /> Handcrafted Recipes</li>
                <li><FaHandsHelping /> Community Focused</li>
                <li><FaRecycle /> Sustainable Practices</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>Values</h3>
          <p>
            At RB Bakery, we believe in upholding values that reflect our
            commitment to excellence and community. Here are some of the core
            values that drive us:
          </p>
          <div className="value-item">
            <h4>Quality Ingredients</h4>
            <p>
              We use only the finest, locally sourced ingredients to ensure
              every product we bake is of the highest quality.
            </p>
          </div>
          <div className="value-item">
            <h4>Handcrafted Recipes</h4>
            <p>
              Our recipes are meticulously crafted by our experienced bakers,
              combining tradition with innovation to deliver delightful flavors.
            </p>
          </div>
          <div className="value-item">
            <h4>Community Focused</h4>
            <p>
              We are dedicated to supporting our local community through various
              initiatives and partnerships, making sure we give back to those
              who support us.
            </p>
          </div>
          <div className="value-item">
            <h4>Sustainable Practices</h4>
            <p>
              Our bakery is committed to sustainable practices, from sourcing
              ingredients to packaging, ensuring we minimize our environmental
              impact.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
