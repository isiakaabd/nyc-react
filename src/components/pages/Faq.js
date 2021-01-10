import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchFaq} from "../reducer/action"
import "../css/faq.css";

class Faq extends Component {
  componentWillMount() {
    this.props.fetchFaq();
  }

  render() {
    this.props.faqs.map((faq) => {
      console.log(faq)
    })
      return (
        <main id="main" className="container">
          <section id="main-image">
            <div className="main-image">
              <img
                src={process.env.PUBLIC_URL + "/images/faq.png"}
                alt="FAQ main"
              />
            </div>
          </section>
          {/* Frequently Asked Questions */}
          <section className="accordion mt-0" id="accordionExample">
            {/* First Question */}
            <section id="section-1">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>1.</span>
                      <span>What is Naija Yellow Catalogue?</span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      The Naija Yellow Catalogue web application is an online
                      directory where businesses are registered and organized by
                      category. It also a platform where users can get information
                      on businesses by searching based on name, category or
                      location.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Second Question */}
            <section id="section-2">
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>2.</span>
                      <span>What does it cost to use Naija Yellow Catalogue?</span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wol f moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusm od. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proi dent.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aestheti c synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Third Question */}
            <section id="section-3">
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>3.</span>
                      <span>
                        How can i update my business information on Naija Yellow
                        Catalogue?
                      </span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Fourth Question */}
            <section id="section-4">
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>4.</span>
                      <span>What are the restrictions to posting adverts?</span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Fifth Question */}
            <section id="section-5">
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span>5.</span>
                      <span>
                        Can i change my business location even after registration?
                      </span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Sixth Question */}
            <section id="section-6">
              <div className="card">
                <div className="card-header" id="headingSix">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <span>6.</span>
                      <span>
                        What are the operation hours at Naija Yellow Catalogue?
                      </span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Seventh Question */}
            <section id="section-7">
              <div className="card">
                <div className="card-header" id="headingSeven">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <span>7.</span>
                      <span>
                        Can I advertise in a different category other that which i
                        registered under?
                      </span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Eight Question */}
            <section id="section-8">
              <div className="card">
                <div className="card-header" id="headingEight">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <span>8.</span>
                      <span>
                        Are video functionalities also available for advertisements?
                      </span>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                      aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                      beer labore wes anderson cred nesciunt sapiente ea proident.
                      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                      beer farm-to-table, raw denim aesthetic synth nes ciunt you
                      probably haven't heard of them accusamus labore sustainable
                      VHS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      );
  }
}

const mapStateToProps = (state) => ({
  faqs: state.userReducer.faq,
})

export default connect(mapStateToProps, {fetchFaq})(Faq);
