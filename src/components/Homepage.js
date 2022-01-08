import React, { useEffect } from "react";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Homepage = () => {
 
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
              <li>
                <a className="nav-link btn-custom text-center ms-3 p-2" href="#">
                  Login
                </a>
              </li>              
              <li>
                <a className="nav-link btn-custom text-center ms-3 p-2 " href="#">
                  Sign up
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
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
                  <Link to="/planmyjourney">
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
                  <Link to="planmyjourney">
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
                  <Link to="planmyjourney">
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
                  <Link to="planmyjourney">
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

        <section id="why-us" className="why-us">
          <div className="container-fluid" data-aos="fade-up">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="why-us-img">
                  <img
                    src="assets/img/why-us.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="why-us-content">
                  <p>
                    Molestiae omnis numquam corrupti omnis itaque. Voluptatum
                    quidem impedit. Odio dolorum exercitationem est error omnis
                    repudiandae ad dolorum sit.
                  </p>
                  <p>
                    Explicabo repellendus quia labore. Non optio quo ea ut
                    ratione et quaerat. Porro facilis deleniti porro consequatur
                    et temporibus. Labore est odio. Odio omnis saepe qui. Veniam
                    eaque ipsum. Ea quia voluptatum quis explicabo sed nihil
                    repellat..
                  </p>

                  <div
                    className="features clearfix"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i
                      className="bi bi-bookmarks"
                      style={{ color: "#f058dc" }}
                    ></i>
                    <h4>Corporis dolorem</h4>
                    <p>
                      Commodi quia voluptatum. Est cupiditate voluptas quaerat
                      officiis ex alias dignissimos et ipsum. Soluta at enim
                      modi ut incidunt dolor et.
                    </p>
                  </div>

                  <div
                    className="features clearfix"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i
                      className="bi bi-box-seam"
                      style={{ color: "#ffb774" }}
                    ></i>
                    <h4>Eum ut aspernatur</h4>
                    <p>
                      Molestias eius rerum iusto voluptas et ab cupiditate aut
                      enim. Assumenda animi occaecati. Quo dolore fuga quasi
                      autem aliquid ipsum odit. Perferendis doloremque iure
                      nulla aut.
                    </p>
                  </div>

                  <div
                    className="features clearfix"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i
                      className="bi bi-card-checklist"
                      style={{ color: "#589af1" }}
                    ></i>
                    <h4>Voluptates dolores</h4>
                    <p>
                      Voluptates nihil et quis omnis et eaque omnis sint aut.
                      Ducimus dolorum aspernatur. Totam dolores ut enim ullam
                      voluptas distinctio aut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div
              className="row counters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="421"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="48"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3 className="cta-title">Call To Action</h3>
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
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>                

        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-2.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-3.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-4.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore labore illum veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src="assets/img/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member">
                  <img
                    src="assets/img/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member">
                  <img
                    src="assets/img/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>              

        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Frequently Asked Questions</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </header>

            <ul className="faq-list" data-aso="fade-up" data-aos-delay="100">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
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
                      <p>
                        Cras fermentum odio eu feugiat lide par naso tierra.
                        Justo eget nada terra videa magna derita valies darta
                        donna mare fermentum iaculis eu non diam phasellus.
                        Scelerisque felis imperdiet proin fermentum leo. Amet
                        volutpat consequat mauris nunc congue.
                      </p>
                    </div>

                    <div className="footer-newsletter">
                      <h4>Our Newsletter</h4>
                      <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam
                        noster magna veniam enim veniam illum dolore legam minim
                        quorum culpa amet magna export quem.
                      </p>
                      <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                      </form>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#about">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>

                    <div className="footer-links">
                      <h4>Contact Us</h4>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022
                        <br />
                        United States <br />
                        <strong>Phone:</strong> +1 5589 55488 55
                        <br />
                        <strong>Email:</strong> info@example.com
                        <br />
                      </p>
                    </div>

                    <div className="social-links">
                      <a href="#" className="twitter">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                    action="forms/contact.php"
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
