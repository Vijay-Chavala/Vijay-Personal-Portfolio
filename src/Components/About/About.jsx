import React, { useState, useContext } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styles from "../About/About.module.css";
import "./Education/Education.css";
import Resume from "../../assets/Resume_Vijay_Chavala_ReactJs_2025.pdf";

import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import { Link } from "react-router-dom";
import { colorsStore } from "../../App";
const About = () => {
  const [key, setKey] = useState("skills");
  // eslint-disable-next-line no-unused-vars
  const [globalColor, setGlobalColor] = useContext(colorsStore);
  console.log("about " + globalColor);
  return (
    <Container className="bgHeight">
      <div className="text-center mt-5 headingContent">
        <h6>Main Info</h6>
        <h2>About</h2>
        <div className="underline"></div>
      </div>
      <Row>
        <Col sm="12" md="7">
          <div className={styles.selfIntroduction}>
            <h5>Hi,Im Vijay Kumar</h5>
            <h2>UI Developer</h2>
            <p>
              After graduating in 2018 with a Bachelor’s Degree in Computer
              Science and Engineering, I spent around 3 years working together
              with senior backend developers as a freelance UI developer I
              acquired project and time management skills, as well as the
              ability to work on new technologies.
            </p>
            <p>
              For the past 2.5 years, I’ve been working as a React.js Developer
              at Applaunch, a fast-paced startup. I’ve contributed to building
              and maintaining scalable web applications using technologies like
              React, Redux, Redux-Saga, Axios, and Styled Components. My role
              focuses on developing component-driven UIs, handling complex state
              management, integrating APIs, and delivering smooth, user-centric
              experiences.
            </p>

            <p>
              Prior to joining Applaunch, I spent over 3 years as a freelance UI
              developer, working closely with senior backend developers on
              various web projects. During this time, I gained strong skills in
              project ownership, time management, and adapting quickly to new
              tools and client needs.
            </p>

            <p>
              As a freelancer, I provided end-to-end web design and development
              services. I used Photoshop for design mockups and technologies
              such as HTML5, CSS3, Bootstrap, JavaScript, and React.js to create
              responsive websites and web applications optimized for all screen
              sizes and browsers.
            </p>

            <p>
              I’ve always had a keen interest in UI/UX design. My combined
              knowledge of visual design and front-end development allows me to
              craft intuitive, modern, and user-focused interfaces.
            </p>

            <p>
              While my main expertise lies in frontend development, I’m also
              passionate about full-stack development and constantly learning
              new tools to improve the user experience and development workflow.
            </p>
          </div>
          <div className={styles.btnGroup}>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
            >
              Contact Me
            </Link>
          </div>
        </Col>
        <Col sm="12" md="5">
          <div className="mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="e2165270-d70d-4354-9ac9-1848d055b0c2"
              data-name="Layer 1"
              width="971.44041"
              height="662"
              viewBox="0 0 971.44041 662"
              className={styles.workingImage}
            >
              <defs>
                <linearGradient
                  id="afa9b5ae-644d-481c-a512-b5b81b77e42b-68"
                  x1="979.44552"
                  y1="738.58992"
                  x2="979.44552"
                  y2="646.78456"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="gray" stopOpacity="0.25"></stop>
                  <stop
                    offset="0.53514"
                    stopColor="gray"
                    stopOpacity="0.12"
                  ></stop>
                  <stop offset="1" stopColor="gray" stopOpacity="0.1"></stop>
                </linearGradient>
                <linearGradient
                  id="bf9220ea-365d-417c-960f-9ff5535a2d22-69"
                  x1="600.65162"
                  y1="650.10521"
                  x2="600.65162"
                  y2="119"
                  xlinkHref="#afa9b5ae-644d-481c-a512-b5b81b77e42b-68"
                ></linearGradient>
                <linearGradient
                  id="b4202d31-0de8-4369-b735-813ee4300deb-70"
                  x1="485.7202"
                  y1="615.59838"
                  x2="485.7202"
                  y2="377.70425"
                  xlinkHref="#afa9b5ae-644d-481c-a512-b5b81b77e42b-68"
                ></linearGradient>
              </defs>
              <title>Designer</title>
              <path
                d="M260.11393,656.80937c-6.98452,26.59789-31.459,43.21966-31.459,43.21966s-13.15033-26.50193-6.16581-53.09982,31.459-43.21966,31.459-43.21966S267.09845,630.21148,260.11393,656.80937Z"
                transform="translate(-114.2798 -119)"
                fill="#3f3d56"
              ></path>
              <path
                d="M249.52,651.18266c-19.56251,19.32716-21.75117,48.83128-21.75117,48.83128s29.52845-1.83141,49.091-21.15858,21.75116-48.83129,21.75116-48.83129S269.08248,631.85549,249.52,651.18266Z"
                transform="translate(-114.2798 -119)"
                fill={globalColor}
              ></path>
              <rect
                x="68.05348"
                y="573.24114"
                width="106.91603"
                height="45.49618"
                rx="15.19753"
                fill={globalColor}
              ></rect>
              <g opacity="0.7">
                <path
                  d="M1009.77408,663.17837V646.78456H927.805V722.606a15.984,15.984,0,0,0,15.984,15.984h50.00113a15.984,15.984,0,0,0,15.984-15.984V705.80229a21.312,21.312,0,0,0,0-42.62392Zm0,34.427v-26.2301a13.115,13.115,0,0,1,0,26.2301Z"
                  transform="translate(-114.2798 -119)"
                  fill="url(#afa9b5ae-644d-481c-a512-b5b81b77e42b-68)"
                ></path>
              </g>
              <path
                d="M1007.13681,665.74436a19.45875,19.45875,0,1,0,19.45875,19.45874A19.45877,19.45877,0,0,0,1007.13681,665.74436Zm0,31.43336a11.97462,11.97462,0,1,1,11.97461-11.97462A11.97462,11.97462,0,0,1,1007.13681,697.17772Z"
                transform="translate(-114.2798 -119)"
                fill={globalColor}
              ></path>
              <path
                d="M1007.13681,665.74436a19.45875,19.45875,0,1,0,19.45875,19.45874A19.45877,19.45877,0,0,0,1007.13681,665.74436Zm0,31.43336a11.97462,11.97462,0,1,1,11.97461-11.97462A11.97462,11.97462,0,0,1,1007.13681,697.17772Z"
                transform="translate(-114.2798 -119)"
                opacity="0.1"
              ></path>
              <path
                d="M818.01569,531.77609H892.857a0,0,0,0,1,0,0v74.07228a9.75,9.75,0,0,1-9.75,9.75H827.76569a9.75,9.75,0,0,1-9.75-9.75V531.77609A0,0,0,0,1,818.01569,531.77609Z"
                fill={globalColor}
              ></path>
              <rect
                y="615.59838"
                width="971.44041"
                height="32.93018"
                fill="#e0e0e0"
              ></rect>
              <g opacity="0.7">
                <path
                  d="M753.24926,514.26464c-10.41165-37.79179-69.43785-65.38862-113.8507-71.50773.006-.27882.02112-.55536.02112-.83569V409.571c.04726-.01733.09584-.03182.143-.04925v-1.22615A110.93933,110.93933,0,0,0,706.57314,338.064a119.882,119.882,0,0,0,7.14989-15.41561c4.74115-1.72629,8.322-9.54462,8.322-18.93884a33.06945,33.06945,0,0,0-1.3381-9.49537,121.52779,121.52779,0,0,0,.88891-14.41912,120.17944,120.17944,0,0,0-39.6966-89.38228,23.44841,23.44841,0,0,0,.37522-5.87723c-1.00473-15.52708-17.58929-26.07586-33.13284-26.78142a32.8005,32.8005,0,0,0,5.53147-34.63658c-9.91113,14.43929-30.25853,15.97418-47.77168,16.08774,7.55675-2.9265,10.95734-13.39715,6.56225-20.20525-18.30375,24.53386-53.985,29.07689-75.75576,50.59371a63.8633,63.8633,0,0,0-11.77976,16.06661,120.24089,120.24089,0,0,0-45.31946,94.1347,121.55587,121.55587,0,0,0,.87233,14.28918,32.96391,32.96391,0,0,0-1.38014,9.62531c0,9.43741,3.61453,17.27988,8.38807,18.95778a119.88387,119.88387,0,0,0,7.18266,15.46665,110.91725,110.91725,0,0,0,66.54128,69.98516v33.80212c0,.26025.01449.51691.0196.77593-44.58123,6.01408-104.079,33.82817-114.39809,71.92387-8.91132,32.89854-18.42365,69.02824-23.15665,90.24078,40.56827,28.50553,125.69315,45.24341,179.04119,45.24341,50.6869,0,133.53278-15.10715,172.90663-41.06339C772.36065,585.734,762.54821,548.0178,753.24926,514.26464Z"
                  transform="translate(-114.2798 -119)"
                  fill="url(#bf9220ea-365d-417c-960f-9ff5535a2d22-69)"
                ></path>
              </g>
              <path
                d="M603.61048,640.72159c48.89581,0,128.8143-14.57335,166.79676-39.61233-4.11411-22.48424-13.57985-58.86769-22.55024-91.42816-11.42431-41.46766-83.52767-70.216-126.54025-70.216h-41.4486c-43.1459,0-115.35328,28.91469-126.6338,70.55985-8.5964,31.736-17.77266,66.589-22.33837,87.05194C470.03068,624.57518,552.14757,640.72159,603.61048,640.72159Z"
                transform="translate(-114.2798 -119)"
                fill={globalColor}
              ></path>
              <circle
                cx="486.8065"
                cy="164.49683"
                r="116.23581"
                fill="#72351c"
              ></circle>
              <path
                d="M449.29134,261.31116H523.77a0,0,0,0,1,0,0v59.58294a37.23927,37.23927,0,0,1-37.23927,37.23927h-.00007a37.23927,37.23927,0,0,1-37.23927-37.23927V261.31116A0,0,0,0,1,449.29134,261.31116Z"
                opacity="0.1"
              ></path>
              <path
                d="M459.97433,258.55269H513.087a10.683,10.683,0,0,1,10.683,10.683v48.89994a37.23927,37.23927,0,0,1-37.23927,37.23927h-.00007a37.23927,37.23927,0,0,1-37.23927-37.23927V269.23568A10.683,10.683,0,0,1,459.97433,258.55269Z"
                fill="#fda57d"
              ></path>
              <path
                d="M563.70906,408.43366a107.19075,107.19075,0,0,0,74.47862.20587v-9.14914H563.70906Z"
                transform="translate(-114.2798 -119)"
                opacity="0.1"
              ></path>
              <circle
                cx="486.8065"
                cy="187.66796"
                r="106.75269"
                fill="#fda57d"
              ></circle>
              <path
                d="M525.04613,209.56488S570.036,300.88751,696.94755,247.8398L667.402,201.507l-52.37621-18.80172Z"
                transform="translate(-114.2798 -119)"
                opacity="0.1"
              ></path>
              <path
                d="M525.04613,208.2219s44.98982,91.32263,171.90142,38.27492L667.402,200.164,615.02578,181.3623Z"
                transform="translate(-114.2798 -119)"
                fill="#72351c"
              ></path>
              <path
                d="M524.64663,202.0522a61.66959,61.66959,0,0,1,15.28543-24.86262c21.00146-20.75652,55.42186-25.13895,73.07881-48.80594,4.23984,6.56758.95939,16.66822-6.33032,19.49128,16.89431-.10957,36.52273-1.59016,46.08358-15.51925a31.6415,31.6415,0,0,1-5.336,33.4127c14.99426.68059,30.99283,10.85661,31.962,25.835.64565,9.97871-5.6112,19.42651-13.81131,25.14924s-18.12112,8.34985-27.88617,10.50284C609.18758,233.54021,506.04616,259.8821,524.64663,202.0522Z"
                transform="translate(-114.2798 -119)"
                fill="#72351c"
              ></path>
              <path
                d="M707.83565,307.60241h-2.83022l-55.06218,49.01876c-53.0477-24.84513-91.99411,0-91.99411,0L500.201,309.61688l-5.82291.73165a106.75011,106.75011,0,0,0,213.45756-2.74612ZM600.92449,375.42289c-20.76778,0-37.60344-4.209-37.60344-9.40086s16.83566-9.40086,37.60344-9.40086,37.60344,4.20894,37.60344,9.40086S621.69227,375.42289,600.92449,375.42289Z"
                transform="translate(-114.2798 -119)"
                fill="#72351c"
              ></path>
              <ellipse
                cx="380.01131"
                cy="187.56625"
                rx="9.93048"
                ry="18.61966"
                fill="#fda57d"
              ></ellipse>
              <ellipse
                cx="593.54511"
                cy="187.56625"
                rx="9.93048"
                ry="18.61966"
                fill="#fda57d"
              ></ellipse>
              <g opacity="0.7">
                <rect
                  x="279.15815"
                  y="377.70425"
                  width="413.12412"
                  height="237.89413"
                  rx="14.5"
                  fill="url(#b4202d31-0de8-4369-b735-813ee4300deb-70)"
                ></rect>
              </g>
              <rect
                x="286.64228"
                y="382.09344"
                width="398.15585"
                height="233.50494"
                rx="26.83505"
                fill="#535461"
              ></rect>
              <circle
                cx="485.7202"
                cy="498.84591"
                r="13.47144"
                fill="#fff"
              ></circle>
              <rect
                x="41.16273"
                y="648.52856"
                width="889.11495"
                height="13.47144"
                fill="#e0e0e0"
              ></rect>
              <rect
                x="41.16273"
                y="648.52856"
                width="889.11495"
                height="4.49048"
                opacity="0.1"
              ></rect>
              <path
                d="M993.66537,650.77609v69.22823a14.59407,14.59407,0,0,1-14.59405,14.59406h7.48413a14.59408,14.59408,0,0,0,14.59406-14.59406V650.77609Z"
                transform="translate(-114.2798 -119)"
                opacity="0.1"
              ></path>
              <path
                d="M947.06443,594.97939c-1.26234.216-2.68649.55668-3.30507,1.67806-.98172,1.77969.79727,3.7863,2.42071,5.0092,2.99922,2.25925,6.16039,4.47845,8.19907,7.63175s2.67912,7.5539.45056,10.576c-2.9099,3.94605-9.85229,4.79489-10.52416,9.65158-.43133,3.11795,2.26418,5.77847,4.99546,7.343,6.74142,3.86165,15.432,4.89187,20.3151,10.93461,2.02-4.15378,6.53823-6.55488,11.04189-7.58024s9.183-.94882,13.7492-1.6444c1.47405-.22454,3.13458-.67474,3.79362-2.01224,1.27644-2.59048-2.36152-5.69737-1.1059-8.298.95565-1.97936,3.763-1.82565,5.81307-2.61832,3.33807-1.29069,4.71459-5.58675,3.76717-9.038s-3.62359-6.14839-6.4377-8.3597c-7.58411-5.95952-16.70353-9.46426-25.92726-11.98516-4.2899-1.17245-9.32574-3.01108-13.78142-3.18882C956.2274,592.90716,951.32174,594.25107,947.06443,594.97939Z"
                transform="translate(-114.2798 -119)"
                fill="#eee"
              ></path>
            </svg>
          </div>
        </Col>
      </Row>

      <div className={`mx-auto mt-5  ${styles.aboutMeTabs}`}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="education" title="Education">
            <Education />
          </Tab>
          <Tab eventKey="skills" title="Skills">
            {key}
            <Skills />
          </Tab>

          <Tab eventKey="experience" title="Experience">
            <div className={styles.experienceTab}>
              <div className={styles.experienceTabContainer}>
                <div>
                  <section className="">
                    <div className="timeline-items">
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2+ years</div>
                        <div className="timeline-content ">
                          <h3> UI Developer/React Developer</h3>
                          <li>
                            Developed high performance applications using React
                            JS, HTML, CSS, JavaScript, Boostrap5 and Redux.
                          </li>
                          <li>
                            Design reusable UI components using React with
                            JavaScript.
                          </li>
                          <li>
                            Building stable and maintainable codebases using
                            React.
                          </li>
                          <li>
                            Developed fully responsive user interfaces using
                            boostrap and custom media queries.
                          </li>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">1+ years</div>
                        <div className="timeline-content ">
                          <h3> UI Developer</h3>
                          <li>
                            Responsible for developing responsive page layouts
                            using HTML5, CSS3, JavaScript along with bootstrap
                            and ReactJs library,
                          </li>
                          <li>
                            Used jQuery for basic animation and user screen
                            customization purposes.
                          </li>
                          <li>
                            Designed UI designs based on client requirements.
                            {/* together with a backend developer{" "} */}
                          </li>
                        </div>
                      </div>
                      {/* <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2021</div>
                        <div className="timeline-content">
                          <h3> </h3>
                          <p></p>
                        </div>
                      </div> */}
                    </div>
                  </section>
                </div>

                <div className={styles.expBtnGroup}>
                  <Link
                    to="/services"
                    className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/portfolio"
                    className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
                  >
                    See My Works
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default About;
