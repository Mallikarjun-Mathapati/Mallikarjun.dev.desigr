import React from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Portfolio = () => {
  return (
    <>
      <Link className="a-portfolio" id="portfolio"></Link>
      <section className="projects" data-aos="fade-up">
        <div className="container">
          <div className="portfolio-center">
            <div className="portfolio">
              <div className="portfolio-heading">
                <h4>PORTFOLIO 🤗</h4>
                <h2>
                  Each project is a unique piece of development and design
                </h2>
              </div>
              <div className="portfolio-su-sections">
                {/* tab 1 */}

                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="As a UX Designer">
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/bookmart app bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content">
                        <h2>
                          <span>BOOK</span>MART APP
                        </h2>
                        <p>
                          <span>Book</span>mat is a platform where you can buy
                          all Educational accessories in one place and it is
                          very easy to use. It offers wide spectrum of products
                          and competetive pricing. Bookmart app targets people
                          who don’t have time to go to bookstore.
                        </p>
                        <div className="using-soft">
                          <p>Figma</p>
                          <p>Adobe Illustrator</p>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://www.behance.net/mallu007"
                            target="_blank"
                          >
                            {" "}
                            Behance
                            <i class="fa-brands fa-square-behance fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://www.figma.com/file/R2ztILH4SgeVeoBGBVB84X/Untitled?type=design&node-id=229%3A4384&t=TpmgRS8f8N6A4HA4-1"
                            target="_blank"
                          >
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Shoptop Website bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-shoptop-website">
                        <h2>
                          <span>SHOP</span>TOP WEBSITE
                        </h2>
                        <p>
                          <span> Shop</span> top is a clothing store that offers
                          affordable pricing. Target user is between 19 - 30
                          years old and most users are college students or early
                          professionals. Shop topis goal is to make shopping
                          fun, fast and easy for all typesof users.
                        </p>
                        <div className="using-soft">
                          <p>Figma</p>
                          <p>Adobe Illustrator</p>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://www.behance.net/mallu007"
                            target="_blank"
                          >
                            {" "}
                            Behance
                            <i class="fa-brands fa-square-behance fa-bounce fa-xl"></i>
                          </Link>

                          <Link to="/" target="_blank">
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Royalx website bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-royalx-website">
                        <h2>
                          ROYAL<span>X</span> WEBSITE
                        </h2>
                        <p>
                          Royal <span>X</span> is provides an end-to-end IT
                          infrastructure solution to businesses of all sizes.
                          The organization is also committed to sustainability,
                          and its solutions are meant to help achieve high
                          levels of efficiency. Our main focus is creating
                          and...................
                        </p>
                        <div className="using-soft">
                          <p>Figma</p>
                          <p>Adobe Illustrator</p>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://www.behance.net/mallu007"
                            target="_blank"
                          >
                            {" "}
                            Behance
                            <i class="fa-brands fa-square-behance fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://www.figma.com/file/hNFLLovhfqIehAr7da0PoI/Untitled?type=design&node-id=0%3A1&t=gVWUyCIpdRaeFlKo-1"
                            target="_blank"
                          >
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Rental cars bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-personal-website4">
                        <h2>
                          RENTAL<span>CARS</span>
                        </h2>
                        <p>
                          A Rental <span>cars</span> website is an online
                          platform that allows users to rent cars for personal
                          or business use. The website provides an interface for
                          searching, comparing, and reserving cars.&nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp;
                        </p>
                        <div className="using-soft">
                          <p>Figma</p>
                          <p>Adobe Illustrator</p>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://www.behance.net/mallu007"
                            target="_blank"
                          >
                            {" "}
                            Behance
                            <i class="fa-brands fa-square-behance fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://www.figma.com/file/Wpaa3wlZniPB5NYI67bYA3/Untitled?type=design&node-id=0%3A1&t=FSnN6q1fKPahHwvv-1"
                            target="_blank"
                          >
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/dashBord bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-dashboard">
                        <h2>
                          <span>DASH</span>BOARD
                        </h2>
                        <p>
                          <span>Dash</span>board is the pinnacle of modern
                          technology. Who needs to actually think when you have
                          a smorgasbord of colorful graphs and numbers right in
                          front of your face. And graphical user interface (GUI)
                          which organizes and presents information.
                        </p>
                        <div className="using-soft">
                          <p>Figma</p>
                          <p>Adobe Illustrator</p>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://www.behance.net/mallu007"
                            target="_blank"
                          >
                            {" "}
                            Behance
                            <i class="fa-brands fa-square-behance fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://www.figma.com/file/ejLlVlS28jdMmRTwaa73De/Untitled?type=design&node-id=0%3A1&t=fLKsKBZ8kAjkzWFy-1"
                            target="_blank"
                          >
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  {/* tab 2 */}

                  <Tab eventKey="profile" title="As a front end developer ">
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/YouCanUse.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-personal-website5">
                        <h2>
                          You<span className="portfolio-content-personal-website5-span1">Can</span><span id="portfolio-content-personal-website4-span2">Use</span>
                        </h2>
                        <p>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; COMING
                          SOON....... &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        {/* <p>COMING SOON.......</p> */}
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/ReactJS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://github.com/Mallu0007"
                            target="_blank"
                          >
                            {" "}
                            Code
                            <i class="fa-brands fa-github fa-bounce fa-xl"></i>
                          </Link>

                          <Link to="/" target="_blank">
                            {" "}
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Rental cars bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-personal-website3">
                        <h2>
                          RENTAL<span>CARS</span>
                        </h2>
                        <p>
                            A Rental <span>car</span> website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
                        </p>
                        {/* <p>COMING SOON.......</p> */}
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/ReactJS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://github.com/Mallu0007"
                            target="_blank"
                          >
                            {" "}
                            Code
                            <i class="fa-brands fa-github fa-bounce fa-xl"></i>
                          </Link>

                          <Link to="/" target="_blank">
                            {" "}
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Personal website new bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-personal-website1">
                        <h2>
                          <span>MALIK</span>ARJUN.dev.desigr
                        </h2>
                        <p>
                          This personal website provides me a fantastic
                          opportunity to express all of my creative abilities
                          and share my thoughts and accomplishments with the
                          rest of the world. It might be an excellent place to
                          start in any career.
                        </p>
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/ReactJS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://github.com/Mallu0007"
                            target="_blank"
                          >
                            {" "}
                            Code
                            <i class="fa-brands fa-github fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://mallu0007.github.io/Mallikarjun/"
                            target="_blank"
                          >
                            {" "}
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Dons Website bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-dons-website ">
                        <h2>
                          <span>DONS </span>SHOPING WEBSITE
                        </h2>
                        <p>
                          <span>Dons</span> is a clothing store that offers
                          affordable pricing. Target user is between all age and
                          most users are college students or early
                          professionals. Shop topis goal is to make shopping
                          fun, fast and easy for all types of users.
                        </p>
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/HTML.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/CSS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/JS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://github.com/Mallu0007"
                            target="_blank"
                          >
                            {" "}
                            Code
                            <i class="fa-brands fa-github fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://mallu0007.github.io/Dans-Shopping/"
                            target="_blank"
                          >
                            {" "}
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/personal website bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-personal-website">
                        <h2>
                          <span>PER</span>SONAL WEBSITE
                        </h2>
                        <p>
                          My first website was made using CSS, HTML, and
                          JavaScript.
                        </p>
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/HTML.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/CSS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/JS.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://github.com/Mallu0007"
                            target="_blank"
                          >
                            {" "}
                            Code
                            <i class="fa-brands fa-github fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://mallu0007.github.io/Mallikarjun/"
                            target="_blank"
                          >
                            {" "}
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  {/* A Rental <span>car</span> website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars. */}

                  {/* tab 3 */}

                  <Tab eventKey="contact" title="As a WordPress Developer" d>
                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img
                          src={require("../Images/Royalx website bg.png")}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-content portfolio-content-royalx-website">
                        <h2>
                          ROYAL<span>X</span> WEBSITE
                        </h2>
                        <p>
                          Royal <span>X</span> is provides an end-to-end IT
                          infrastructure solution to businesses of all sizes.
                          The organization is also committed to sustainability,
                          and its solutions are meant to help achieve high
                          levels of efficiency. Our main focus is creating
                          and...................
                        </p>
                        <div className="using-soft">
                          <div className="tech img1 portfolio-softwere">
                            <img
                              src={require("../Images/Logos/wordPress.png")}
                              alt=""
                            />
                            <img
                              src={require("../Images/Logos/Figama.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="using-link">
                          <Link to="https://royalx.in/" target="_blank">
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>

                          <Link
                            to="https://www.figma.com/file/hNFLLovhfqIehAr7da0PoI/Untitled?type=design&node-id=0%3A1&t=gVWUyCIpdRaeFlKo-1"
                            target="_blank"
                          >
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />

                    <div className="portfolio-project">
                      <div className="portfolio-img">
                        <img src={require("../Images/UTT BG.png")} alt="" />
                      </div>
                      <div className="portfolio-content portfolio-content-utt-website">
                        <h2>
                          UNIVERSAL<span>TRAVEL</span> AND TOURISM
                        </h2>
                        <p>
                          All the travel needs ranging from domestic to
                          international tours. We understand how important your
                          holiday is to you so we put all our efforts in making
                          your trip memorable. We believe your holiday should
                          truly be an unforgettable experience.....
                        </p>
                        <div className="tech img1 portfolio-softwere">
                          <img
                            src={require("../Images/Logos/wordPress.png")}
                            alt=""
                          />
                          <img
                            src={require("../Images/Logos/Figama.png")}
                            alt=""
                          />
                        </div>
                        <div className="using-link">
                          <Link
                            to="https://myuniversaltourism.com/"
                            target="_blank"
                          >
                            Live
                            <i class="fa-solid fa-eye fa-bounce fa-xl"></i>
                          </Link>

                          <Link to="/" target="_blank">
                            {" "}
                            Figma
                            <i class="fa-brands fa-figma fa-bounce fa-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
