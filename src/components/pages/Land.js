import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/landing.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

AOS.init();

const Land = (props) => {
  return (
    <div>

    <Header />
    
    <div>
      <section id="main-area">
        <div className="main-content">
          <h3>
            {" "}
            never get stranded <br /> with business decisions
          </h3>
         
          <div className="main-box">
            <div className="box-contents">
              <div className="input-icon">
                
                <input
                  type="text"
                  name="whoweknow"
                  id="business"
                  placeholder="We know"
                  required
                />
                <select id="sel-category" required>
                  <option value disabled selected hidden>
                    Category
                  </option>
                  <option>Real Estate/Property</option>
                  <option>Beauty &amp; Fashion</option>
                  <option>Technology</option>
                  <option>Catering &amp; Decoration</option>
                  <option>Agriculture</option>
                  <option>Restaurant</option>
                  <option>Construction and Renovation</option>
                  <option>Transportation</option>
                  <option>News &amp; Media</option>
                  <option>Health and Fitness</option>
                  <option>Education &amp; Schools</option>
                  <option>Electronics</option>
                </select>
                <select id="location" required>
                  <option value disabled selected hidden>
                    Location
                  </option>
                  <option>Abuja</option>
                  <option>Kaduna</option>
                  <option>Lagos</option>
                  <option>Kano</option>
                  <option>Jos</option>
                </select>
                <button
                  onclick="findBusiness()"
                  id="findBus"
                  className="search-btn"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section id="categories">
        <div className="container">
          <div className="category-header">
            <h2>What Can We Help You Find?</h2>
            <p>Explore Our Categories</p>
          </div>
          <div className="card-deck">
            {/* Card One */}
            <div className="card" data-aos="fade-up-right">
              <img
                src={process.env.PUBLIC_URL + "/images/property.jpg"}
                className="card-img-top"
                alt="Real Estate / Property"
              />
              <div className="card-body">
                <h5 className="card-title">Real Estate &amp; Property</h5>
                <p className="card-text">
                  Realtors and Surveryors, find the right people in business for you,
                  and also, let them find you.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 10 mins ago</small>
              </div>
            </div>
            {/* Card Two */}
            <div className="card" data-aos="fade-up-left">
              <img
                src={process.env.PUBLIC_URL + "/images/catering.jpg"}
                className="card-img-top"
                alt="Catering"
              />
              <div className="card-body">
                <h5 className="card-title">Catering &amp; Decorations</h5>
                <p className="card-text">
                 Find the best of Interior and Exterior Designers with a touch of both Local and International concepts.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 30 mins ago</small>
              </div>
            </div>
            {/* Card Three */}
            <div
              className="card"
              data-aos="fade-down-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/construction.jpg"}
                className="card-img-top"
                alt="Construction"
              />
              <div className="card-body">
                <h5 className="card-title">Construction and Renovation</h5>
                <p className="card-text">
                  Architects, Urban and Regional Planners, Project Managers, get in here.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 8 mins ago</small>
              </div>
            </div>
            {/* Card Four */}
            <div
              className="card"
              data-aos="fade-down-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/health.jpg"}
                className="card-img-top"
                alt="Health"
              />
              <div className="card-body">
                <h5 className="card-title">Health &amp; Fitness</h5>
                <p className="card-text">
                  Find the best of Fitness coaches and health experts around you.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="card-deck">
            {/* Card Five */}
            <div className="card" data-aos="fade-down-left">
              <img
                src={process.env.PUBLIC_URL + "/images/fashion.jpg"}
                className="card-img-top"
                alt="Fashion"
              />
              <div className="card-body">
                <h5 className="card-title">Fashion &amp; Beauty</h5>
                <p className="card-text">
                  Businesses that surround glamour and the glow, find the best boutiques and fashion designers.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 25 mins ago</small>
              </div>
            </div>
            {/* Card Six */}
            <div
              className="card"
              data-aos="fade-down-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/electronics.jpg"}
                className="card-img-top"
                alt="Electronics"
              />
              <div className="card-body">
                <h5 className="card-title">Electronics &amp; Repair</h5>
                <p className="card-text">
                 Businesses relating to the industry of  Gadgets and more.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 7 mins ago</small>
              </div>
            </div>
            {/* Card Seven */}
            <div className="card" data-aos="fade-down-right">
              <img
                src={process.env.PUBLIC_URL + "/images/media.jpg"}
                className="card-img-top"
                alt="Media"
              />
              <div className="card-body">
                <h5 className="card-title">News &amp; Media</h5>
                <p className="card-text">
                  Media Houses and Entertainment Businesses.
                </p>
              </div>
              <div className="card-footer">
                
              </div>
            </div>
            {/* Card Eight */}
            <div className="card" data-aos="fade-down-left">
              <img
                src={process.env.PUBLIC_URL + "/images/agriculture.jpg"}
                className="card-img-top"
                alt="Agriculture"
              />
              <div className="card-body">
                <h5 className="card-title">Agriculture</h5>
                <p className="card-text">
                  Agriprenueral businesses, and agricultural industries.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 11 mins ago</small>
              </div>
            </div>
          </div>
          <div className="card-deck">
            {/* Card Nine */}
            <div className="card" data-aos="fade-down-right">
              <img
                src={process.env.PUBLIC_URL + "/images/travel.jpg"}
                className="card-img-top"
                alt="Transportation"
              />
              <div className="card-body" data-aos="zoom-in-up">
                <h5 className="card-title">Transportation</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 18 mins ago</small>
              </div>
            </div>
            {/* Card Ten */}
            <div
              className="card"
              data-aos="fade-down-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/education.jpg"}
                className="card-img-top"
                alt="Education"
              />
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 35 mins ago</small>
              </div>
            </div>
            {/* Card Eleven */}
            <div className="card" data-aos="fade-down-right">
              <img
                src={process.env.PUBLIC_URL + "/images/technology.jpg"}
                className="card-img-top"
                alt="Technology"
              />
              <div className="card-body">
                <h5 className="card-title">Technology</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 16 mins ago</small>
              </div>
            </div>
            {/* Card Twelve */}
            <div className="card" data-aos="fade-down-left">
              <img
                src={process.env.PUBLIC_URL + "/images/food.jpg"}
                className="card-img-top"
                alt="Restaurant"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurant</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 13 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Land;
