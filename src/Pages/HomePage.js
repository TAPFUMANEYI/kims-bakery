import "./Homepage.css";
import {Link} from 'react-router-dom'
export default function HomePage() {
  return (
    <section className="home-page">
      <div className="up">
        <div className="up-text">
          <h3>Stunning Bakery</h3>
          <Link to='/menu'>
          <button>Find Out More</button>
          </Link>
        </div>
      </div>

      <div className="down">
        <span className="dash"></span><h2>Kim's Patisserie</h2><span className="dash"></span>

        <div className="down-content">
          <div className="left-section">
            <div className="box">
              <p className="box-title">Danish Pastry</p>
              <p className="order-now">ORDER NOW</p>
            </div>
            <div className="box">
              <p className="box-title">KIMO</p>
              <p className="order-now">ORDER NOW</p>
            </div>
            <div className="box contact-us">
              <p>Contact us</p>
            </div>
          </div>
          <div className="right-section">
            <p className="description">
              Everyone wants a slice of Cake on their special day and we’re
              delighted to be able to offer pastries. From our famous Raspberry & White Chocolate,
              an indulgent Chocolate feast or perhaps a zingy Lemon surprise, we
              will happily accommodate to any taste that tickles your fancy for
              that special pastries!
            </p>
            <blockquote className="testimonial">
              “You provided our amazing pastries and cupcakes and we just
              wanted to say a massive thank you again for our amazing cake. You
              really captured our vision…truly talented and creative! The pastries
              looked fantastic and tasted sooo delicious, so many of our guests
              commented on the pastries.”
              <span>Nayvee Tech</span>
            </blockquote>
           <Link to="/about">
          <button className="find-out-more">About</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
