import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/about.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

AOS.init();

const About = (props) => {
  return (
    <div>
      <Header/>
    <div>
      <section className="section-1">
        <div className="header">
          <p>
            Naija Yellow Catalogue took shape after <br /> realizing the market
            is overwhelmed with <br /> tons of companies and businesses with{" "}
            <br /> little or no simplistic means of finding or <br /> contacting
            them.
          </p>
        </div>
        <div className="body">
          <p>
            We pride ourselves on being experienced with the issues that
            commoners go through to find contact details of businesses and
            service providers. we aim to provide a scalable catalogue <br />{" "}
            that can help solve this issue and bring satisfaction to all parties
            involved.
          </p>
          <p>
            This application has been created to satisfy all issues bothering
            the progress of businesses and also rapid change how people view
            yellow page directories with our innovations.
          </p>
        </div>
      </section>
      {/* SECTION-2 */}
      <section className="section-2">
        <div className="pictures-grid">
          <figure className="img1" data-aos="zoom-in-up">
            <img
              src={process.env.PUBLIC_URL + "/images/two.jpg"}
              alt="First Pic"
            />
          </figure>
          <figure className="img2" data-aos="zoom-in-down">
            <img
              src={process.env.PUBLIC_URL + "/images/four.jpg"}
              alt="Second Pic"
            />
          </figure>
          <figure className="img3" data-aos="zoom-in-up">
            <img
              src={process.env.PUBLIC_URL + "/images/three.jpg"}
              alt="Third Pic"
            />
          </figure>
          <figure className="img4" data-aos="zoom-in-down">
            <img
              src={process.env.PUBLIC_URL + "/images/one.jpg"}
              alt="Fourth Pic"
            />
          </figure>
        </div>
      </section>
      {/* SECTION-3 */}
      <section className="section-3">
        <div className="about-grid">
          <div className="about-header">
            <h1>About Us</h1>
          </div>
          <div className="about-body" data-aos="zoom-in-left">
            <h2>
              Naija Yellow Catalogue, bridging the gap between business owners
              and consumers online.
            </h2>
            <br />
            <p>
              The Naija Yellow Catalogue is an online business directory that
              contains the necessary information about businesses that are
              registered on the platform. The Naija Yellow Catalogue enables
              business owners to easily showcase their business and also aids
              the consumers to easily find useful information on required
              services. Naija Yellow Catalogue took shape after we carried out
              critical research on the increasing number of businesses
              especially the number of entrepreneurs over the years. Little
              businesses and start-ups have little or no online documentation.
              This makes it hard to find and patronize such businesses. Naija
              Yellow Catalogue has provided a scalable catalogue that solves the
              aforementioned issues , assures satisfaction and comfort, all at
              ease. We have also included an outstanding feature “EVENT TAB”
              which helps to search happening events around your location.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION-4 */}
      <section className="section-4">
        <div className="story-grid">
          <div className="story-header">
            <h1>Our Story</h1>
          </div>
          <div className="story-body" data-aos="zoom-in-right">
            <h2>How it all started in 2020?</h2> <br />
            <p>
              The creation of the ELITE team began at a software fellowship
              “TIIDELab Fellowship” in August,2020. We were paired together for
              several task and decided to join to solve the problem of
              insufficient documentation for businesses online. We have worked
              on various projects together over the years. We hope you have a
              wonderful user experience and also hope we solve your problems.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>

    </div>
  );
};

export default About;
