import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../AboutMe/AboutMe.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { colorsStore } from "../../../App";

const AboutMe = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalColor, setGlobalColor] = useContext(colorsStore);
  return (
    <Container className={` ${styles.aboutContainer}`}>
      <h2 className="text-center mt-5">About Me </h2>
      <div className="underline my-3"></div>
      <Row className="mx-auto">
        <Col sm="12" md="12" lg="6" className=" ">
          <div className={styles.imgContainer}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="bfab8c75-697c-4803-8887-67805a289174"
                data-name="Layer 1"
                width="833.19822"
                height="528.09112"
                viewBox="0 0 833.19822 528.09112"
                className={`${styles.aboutMeImage}`}
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M982.47224,697.446a50.79382,50.79382,0,0,1-13.58984,12.63c-1.12012.71-2.27,1.38-3.43995,2H937.91267c.32959-.66.6499-1.33.96-2a95.35444,95.35444,0,0,0-19.84033-109.34c16.64013,5.14,32.02,15.16,42.08008,29.37a64.46989,64.46989,0,0,1,10.23,23,96.2757,96.2757,0,0,0-7.66993-48.41c13.50977,10.99,24.03028,26.04,28.04,42.98C995.72224,664.626,992.81257,683.436,982.47224,697.446Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#a8bddc"
                ></path>
                <rect
                  id="fac751cd-b664-4a0e-b706-350582cb8c67"
                  data-name="Rectangle 62"
                  x="0.24873"
                  y="15.99211"
                  width="583.32015"
                  height="276.79553"
                  fill="#e6e6e6"
                ></rect>
                <rect
                  id="b0a7358e-9afd-471d-acfb-61846d6783eb"
                  data-name="Rectangle 75"
                  x="16.92896"
                  y="39.72781"
                  width="549.9605"
                  height="230.93917"
                  fill="#fff"
                ></rect>
                <rect
                  id="aa5ec1a1-4b89-4940-b1f9-b3733c9113eb"
                  data-name="Rectangle 80"
                  width="583.32015"
                  height="24.78117"
                  fill={globalColor}
                ></rect>
                <circle
                  id="a831dd22-f8fd-444c-85ba-25496ec291a0"
                  data-name="Ellipse 90"
                  cx="18.41549"
                  cy="11.46244"
                  r="4.5931"
                  fill="#fff"
                ></circle>
                <circle
                  id="ab3fc2d7-64e4-43ea-beb6-48f9ffc9306c"
                  data-name="Ellipse 91"
                  cx="35.84938"
                  cy="11.46244"
                  r="4.5931"
                  fill="#fff"
                ></circle>
                <circle
                  id="f523c68b-6151-4f09-81f5-322621decd8f"
                  data-name="Ellipse 92"
                  cx="53.28408"
                  cy="11.46244"
                  r="4.5931"
                  fill="#fff"
                ></circle>
                <path
                  d="M615.92515,273.91111H335.1497a7.7236,7.7236,0,1,0,0,15.4472H615.92515a7.7236,7.7236,0,0,0,0-15.4472Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#e4e4e4"
                ></path>
                <path
                  d="M615.92515,333.42824H335.1497a7.72359,7.72359,0,1,0,0,15.44719H615.92515a7.7236,7.7236,0,0,0,0-15.44719Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#e4e4e4"
                ></path>
                <path
                  d="M615.92515,392.94536H335.1497a7.7236,7.7236,0,0,0,0,15.4472H615.92515a7.7236,7.7236,0,0,0,0-15.4472Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#e4e4e4"
                ></path>
                <path
                  d="M480.98937,289.81264H335.419a8.33907,8.33907,0,0,1-8.429-7.62555,8.11012,8.11012,0,0,1,2.18956-6.13832,8.20765,8.20765,0,0,1,5.97017-2.592H465.08785a15.91953,15.91953,0,0,1,15.90152,15.90152Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill={globalColor}
                ></path>
                <path
                  d="M556.408,349.32976H335.419a8.33906,8.33906,0,0,1-8.429-7.62554,8.11013,8.11013,0,0,1,2.18956-6.13833,8.20769,8.20769,0,0,1,5.97017-2.592H540.5065A15.91967,15.91967,0,0,1,556.408,348.87543Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill={globalColor}
                ></path>
                <path
                  d="M525.51364,408.84689H335.419a8.33907,8.33907,0,0,1-8.429-7.62555,8.11012,8.11012,0,0,1,2.18956-6.13832,8.20765,8.20765,0,0,1,5.97017-2.592H509.61211a15.91968,15.91968,0,0,1,15.90153,15.90152Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill={globalColor}
                ></path>
                <path
                  d="M761.25307,411.17182a9.15861,9.15861,0,0,0,13.72045,2.99545l27.2582,17.784-.083-16.91272-25.87213-14.29511a9.20824,9.20824,0,0,0-15.02349,10.42835Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ffb6b6"
                ></path>
                <polygon
                  points="714.639 514.364 702.945 514.364 697.381 469.257 714.641 469.258 714.639 514.364"
                  fill="#ffb6b6"
                ></polygon>
                <path
                  d="M901.02221,711.65442l-37.70737-.0014v-.47693a14.67755,14.67755,0,0,1,14.67676-14.67653h.00093l23.03037.00093Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#adadad"
                ></path>
                <polygon
                  points="656.783 514.364 645.089 514.364 639.526 469.257 656.785 469.258 656.783 514.364"
                  fill="#ffb6b6"
                ></polygon>
                <path
                  d="M843.16654,711.65442l-37.70737-.0014v-.47693a14.67755,14.67755,0,0,1,14.67676-14.67653h.00093l23.03038.00093Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#adadad"
                ></path>
                <path
                  d="M826.68617,470.14448l-11.653,116.27817L820.85969,686.79h22.52722l4.55363-94.411,17.71638-51.62526,10.31238,79.55706v64.77571l25.62847,1.18574,8.50507-158.59987s2.88906-44.36014-2.87586-49.79554S826.68617,470.14448,826.68617,470.14448Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M926.04183,365.22242l-23.55121-8.866-4.14525-8.40461-29.60808.42995-6.70809,6.73944L838.973,362.67365,824.31356,474.984s45.12352,32.24974,85.17739,9.96749Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ccc"
                ></path>
                <path
                  d="M781.89639,422.027l38.75286,22.78387,32.2909-43.19323V374.52523a12.659,12.659,0,0,0-2.12713-7.03574,12.6987,12.6987,0,0,0-22.35173,2.29435l-16.76972,41.667-23.7856-7.0281Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ccc"
                ></path>
                <path
                  d="M894.50848,482.78791a9.15863,9.15863,0,0,1,12.18666-6.97916l20.656-25.15175,5.002,16.15634L911.971,488.22092a9.20824,9.20824,0,0,1-17.46248-5.433Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ffb6b6"
                ></path>
                <path
                  d="M925.31815,478.82745,912.265,465.77373l21.55711-38.62593-31.26532-35.04354,1.80513-14.1379a17.86711,17.86711,0,0,1,3.76792-8.89488h0a17.86982,17.86982,0,0,1,29.09485,1.66292l24.44527,54.355-.12216.181Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ccc"
                ></path>
                <path
                  d="M905.22146,318.773a25.10467,25.10467,0,0,1-49.75066-6.77108l.0485-.35636a25.10467,25.10467,0,0,1,49.69445,7.1264Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ffb6b6"
                ></path>
                <path
                  d="M898.832,331.70375c1.28921-2.61883,2.61358-5.43045,2.25128-8.32684s-3.20277-5.66484-5.99192-4.80406c-1.66787.51473-2.92844,2.16171-4.6719,2.246-2.39885.116-3.77422-2.62948-4.52089-4.91211l-3.041-9.29657a25.15358,25.15358,0,0,1-20.89111,4.72079c-2.82347-.64554-5.67592-1.90416-7.33216-4.28021s-1.64628-6.0617.6254-7.85842c1.11386-.881,2.59641-1.2157,3.66088-2.15577a4.10217,4.10217,0,0,0-3.27565-7.13851l7.65692-.957-2.28137-4.12614a7.53492,7.53492,0,0,0,5.99171,1.0992c2.06-.37093,4.0002-1.21914,6.0155-1.78479A23.15188,23.15188,0,0,1,898.7821,294.944a9.80176,9.80176,0,0,1,10.687,3.08588c2.04974,2.60156,2.60717,6.07331,2.68659,9.38439a40.71449,40.71449,0,0,1-4.15032,18.86012,15.451,15.451,0,0,1-3.48658,4.94577,6.97821,6.97821,0,0,1-5.60143,1.83184"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M1015.07286,714.04555l-635.44821,0a1.56681,1.56681,0,0,1-1.53909-1.13363,1.52911,1.52911,0,0,1,1.47725-1.91893l635.385,0a1.61534,1.61534,0,0,1,1.61617,1.19368A1.5282,1.5282,0,0,1,1015.07286,714.04555Z"
                  transform="translate(-183.40089 -185.95444)"
                  fill="#ccc"
                ></path>
              </svg>
            </div>
          </div>
        </Col>
        <Col sm="12" md="12" lg="6" className="mt-4">
          <div className={`${styles.aboutMeContent}`}>
            <p>
              Self-motivated and detail-oriented React.js Developer with over
              5.5 years of experience, including 2.5+ years in a fast-paced
              startup environment and 3 years as a freelance developer. Proven
              ability to build dynamic, scalable web applications with clean and
              efficient UI. Passionate about delivering responsive,
              pixel-perfect interfaces and proficient in advanced state
              management, performance optimization, and cross-browser
              compatibility.
            </p>
            <p>
              Over the past 2.5 years at Applaunch, a dynamic startup, I’ve been
              working as a React.js developer building scalable web applications
              using React, Redux, Redux-Saga, Axios, and Styled Components. I
              played a key role in developing user-centric features with clean
              architecture and state management. Prior to that, I spent over 3
              years as a freelance developer, collaborating with collaborating
              with senior backend developers to deliver complete full-stack
              solutions. I focused on building responsive, high-performance
              frontends using HTML5, CSS3, JavaScript, Bootstrap, and React.js.
            </p>

            <div className="btn-group">
              <Link
                to="/services"
                className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
              >
                More About Me
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
