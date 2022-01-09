import React, { useEffect, useState } from "react";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { getLoginState } from "./firebase";

const Homepage = () => {
 
  const [authUser,setAuthUser] = useState({state: false, data:null});

  useEffect(() => {
    setUser()    
  }, []);

  const setUser = async () => {
    const res = await getLoginState()    
    setAuthUser(res)
  }

  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent bg-white"
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Rapid</a>
          </h1>
          {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>              
              
              <li className={authUser.state?"d-none":"d-bock"}>
                <a className="nav-link btn-custom text-center ms-3 p-2" href="/login">
                  Login
                </a>
              </li>              
              <li className={authUser.state?"d-none":"d-bock"}>
                <a className="nav-link btn-custom text-center ms-3 p-2 " href="/register">
                  {authUser.state?`welcome, ${authUser.data.email}`: "Sign up"}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links"><b>
              {authUser.state?`welcome, ${authUser.data.email}`: ""}
              </b></div>
        </div>
      </header>

      <section id="hero" className="clearfix">
        <div className="container d-flex h-100">
          <div
            className="row justify-content-center align-self-center w-100"
            data-aos="fade-up"
          >
            <div
              className="col-lg-6 intro-info pt-0 order-lg-first order-last"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2>
                Welcome to
                <br />
                <span>London</span>
              </h2>
              <div>
                <a href="#services" className="btn-get-started m-3 scrollto">
                  Get Started
                </a>                
              </div>
            </div>

            <div
              className="col-lg-6 intro-img order-lg-last position-relative order-first float-end d-flex justify-content-center align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
                <div className="position-md-absolute">
                    <div className="position-absolute intro-icon d-none">London</div>
                    <img
                      src="assets/img/intro-img.png"
                      alt=""
                      className="img-fluid float-end"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div
                  className="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src="assets/img/about-img.jpg" alt="" />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <div
                  className="about-content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <h2>About London</h2>
                  <h3>
                    Traditional, Evolving and Vibrant
                  </h3>
                  <p>
                  London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.
                  </p>
                  <p className="d-none d-lg-block">
                  London, as one of the world's global cities, exerts strong influence on its arts, commerce, education, entertainment, fashion, finance, health care, media, tourism, and communications. Its GDP (€801.66 billion in 2017) makes it the biggest urban economy in Europe and one of the major financial centres in the world. In 2019 it had the second highest number of ultra high-net-worth individuals in Europe after Paris and the second-highest number of billionaires of any city in Europe after Moscow. The city is home to the most 5-star hotels of any city in the world. In 2012, London became the first city to host three Summer Olympic Games.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle pe-3"></i> 
                      London Has 170 Museums
                    </li>
                    <li>
                      <i className="bi bi-check-circle pe-3"></i> 
                      Over 300 Languages Are Spoken In London
                    </li>
                    <li>
                      <i className="bi bi-check-circle pe-3"></i> 
                      Houses Of Parliament Is The Largest Palace In The UK 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Services</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row">
                          
              <div
                className="col-md-6 col-lg-4 wow bounceInUp"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <Link to="/planmyjourney">
                  <div className="icon" style={{ background: "#fceef3" }}>
                    <i
                      className="bi bi-briefcase"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Plan My Journey
                  </h4>
                  <p className="description text-black">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow bounceInUp"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <Link to="/map">
                  <div className="icon" style={{ background: "#fcf9ee" }}>
                    <i
                      className="bi bi-activity"
                      style={{ color: "#ecc123" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Map
                  </h4>
                  <p className="description text-black">
                    fermentum iaculis eu non diam phasellus.
                    Scelerisque felis imperdiet proin fermentum leo. Amet                  
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow bounceInUp"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <Link to="/bookaticket">
                  <div className="icon" style={{ background: "#eef9fc" }}>
                    <i
                      className="bi bi-ticket"
                      style={{ color: "#4db2ce" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Book a Ticket
                  </h4>
                  <p className="description text-black">
                    fermentum ia diam phasellus.
                    Scelerisque felis imperdiet proin fermentum leo. Amet
                    volutpatnunc congue.
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <Link to="/planacarpool">
                  <div className="icon" style={{ background: "#fff0da" }}>
                    <i
                      className="bi bi-card-checklist"
                      style={{ color: "#e98e06" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Plan A Carpool
                  </h4>
                  <p className="description text-black">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                  </Link>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="box">
                  <Link to="/findmytransit">
                  <div className="icon" style={{ background: "#e6fdfc" }}>
                    <i
                      className="bi bi-bar-chart"
                      style={{ color: "#3fcdc7" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Track My Transit 
                  </h4>
                  <p className="description text-black">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur voluptate velit
                    esse
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <Link to="/requestassistance">
                  <div className="icon" style={{ background: "#eafde7" }}>
                    <i
                      className="bi bi-binoculars"
                      style={{ color: "#41cf2e" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Request Road-Side assitance
                  </h4>
                  <p className="description text-black">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  </Link>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className=" box">
                  <Link to="/reportblock">
                  <div className="icon" style={{ background: "#e1eeff" }}>
                    <i
                      className="bi bi-brightness-high"
                      style={{ color: "#2282ff" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Report road blockage
                  </h4>
                  <p className="description text-black">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="box">
                  <Link to="/findnearme">
                  <div className="icon" style={{ background: "#ecebff" }}>
                    <i
                      className="bi bi-calendar4-week"
                      style={{ color: "#8660fe" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    Find near me
                  </h4>
                  <p className="description text-black">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="box">
                  <Link to="/mycarbonprint">
                  <div className="icon" style={{ background: "#ebffee" }}>
                    <i
                      className="bi bi-bezier"
                      style={{ color: "#5cca6c" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    See my carbon-footprint
                  </h4>
                  <p className="description text-black">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>        

        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3 className="cta-title">Subscribe for Daily Transit Update</h3>
                <p className="cta-text">
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </section>                       
      </main>

      <footer id="footer" className="section-bg">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer-info">
                      <h3>Rapid</h3>                      
                    </div>
                  </div>                  
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form">
                  <h4>Send us a message</h4>
                  <p>
                    Eos ipsa est voluptates. Nostrum nam libero ipsa vero.
                    Debitis quasi sit eaque numquam similique commodi harum aut
                    temporibus.
                  </p>

                  <form
                    action="/"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" title="Send Message">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Homepage;
