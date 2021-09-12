import restaurentPage from "../assets/images/restaurentPage.png";
import covidTracker from "../assets/images/covidTracker.png";
import servicesHub from "../assets/images/servicesHub.png";
import todoApp from "../assets/images/todoApp.png";
import imageSearch from "../assets/images/imageSearch.png";
import weatherApp from "../assets/images/weatherApp.png";
import personalPortfolio from "../assets/images/personalPortfolio.png";
import onlineShopping from "../assets/images/onlineShopping.png";

//colors

export const colors = [
  {
    id: "0",
    colorName: "default",
    colorCode: "#e6e7ee",
  },
  {
    id: "1",
    colorName: "blue",
    colorCode: "#b1dbfb",
  },
  {
    id: "2",
    colorName: "pink",
    colorCode: "#fdafd5",
  },
  {
    id: "3",
    colorName: "green",
    colorCode: "#a4f599",
  },
  {
    id: "4",
    colorName: "yellow",
    colorCode: "#f7cc9c",
  },
  {
    id: "5",
    colorName: "red",
    colorCode: "#ffa8a8",
  },
];

export const themeColors = [
  {
    id: "1",
    category: "mainBody",
    colorClassName: "blueDayDark",
    colorCode: "#6c63ff",
  },
  {
    id: "2",
    category: "mainBody",
    colorClassName: "bluGrnDayDark",
    colorCode: "#01d5e4",
  },

  {
    id: "3",
    category: "mainBody",
    colorClassName: "pinky",
    colorCode: "#ff81be",
  },
  {
    id: "4",
    category: "dark",
    colorClassName: "yellowww",
    colorCode: "#ffdc5c",
  },
  {
    id: "5",
    category: "dark",
    colorClassName: "lightGreen",
    colorCode: "#abfc68",
  },
  {
    id: "6",
    category: "dark",
    colorClassName: "bluDayDark",
    colorCode: "#01d5e4",
  },

  {
    id: "7",
    category: "dark",
    colorClassName: "pinky",
    colorCode: "#ff81be",
  },
];

export const menuItems = [
  {
    id: 1,
    menuName: "home",
    to: "",
  },
  {
    id: 2,
    menuName: "about",
    to: "about",
  },
  {
    id: 3,
    menuName: "services",
    to: "services",
  },
  {
    id: 4,
    menuName: "portfolio",
    to: "portfolio",
  },
  {
    id: 5,
    menuName: "contact",
    to: "contact",
  },
];

export const skillSet = [
  {
    id: 1,
    language: "HTML",
    percentage: 80,
  },
  {
    id: 2,
    language: "CSS",
    percentage: 70,
  },
  {
    id: 3,
    language: "Javascript",
    percentage: 65,
  },
  {
    id: 4,
    language: "Bootstrap",
    percentage: 60,
  },
  {
    id: 5,
    language: "Material UI",
    percentage: 30,
  },
  {
    id: 6,
    language: "ReactJs",
    percentage: 70,
  },
  {
    id: 7,
    language: "Angular",
    percentage: 20,
  },
];

export const otherSkills = [
  {
    id: 1,
    tool: "Photoshop",
    percentage: 90,
  },
  {
    id: 2,
    tool: "Premier Pro",
    percentage: 50,
  },
  {
    id: 3,
    tool: "Blender",
    percentage: 30,
  },
  {
    id: 4,
    tool: "After Effects",
    percentage: 30,
  },
];
export const academicDetails = [
  {
    id: 1,
    year: 2012,
    education: "SSC",
    course: "",
    institute: "Referral High School",
    place: "Kathipudi",
    percentage: "8.7 GPA",
  },
  {
    id: 2,
    year: "2012-2014",
    education: "Intermediate",
    course: "Maths Physics & Chemistry",
    institute: "Minerva Junior College",
    place: "Prathipadu",
    percentage: "63.80%",
  },
  {
    id: 3,
    year: "2014-2018",
    education: "Bachelor of Technology",
    course: "Computer Science And Engineering",
    institute: "Aditya Engineering College",
    place: "Surampalem",
    percentage: "64.59%",
  },
];

export const services = [
  {
    id: 1,
    icon: "fa fa-mobile",
    title: "Responsive Design",
    info: "Get insights into who is browsing your site so that you can make smarter business decisions.",
  },
  {
    id: 2,
    icon: "fa fa-laptop",
    title: "Web Design",
    info: "Create design that strengthens company’s brand while ensuring ease of use and simplicity for your audience.",
  },
  {
    id: 3,
    icon: "fa fa-code",
    title: "Clean Code",
    info: "I write standards based code that is semantic, accessible, easy to maintain, cross browser compatible.",
  },
  {
    id: 4,
    icon: "bi bi-scissors mb-3",
    title: "Creative Editing",
    info: "Video editing services can include cutting or splicing segments, re-sequencing clips, adding transitions, formatting, and more...",
  },
  // {
  //   id: 5,
  //   icon: "fa fa-graphic",
  //   title: "Graphic Design",
  //   info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  // },
  // {
  //   id: 6,
  //   icon: "fa fa-bullhorn",
  //   title: "Great Support",
  //   info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  // },
];
export const projects = [
  {
    id: 0,
    category: "react",
    title: "Personal Portfolio",
    link: "https://simple-react-restaurant.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/Vijay-Personal-Portfolio",
    image: `${personalPortfolio}`,
    desc: "This is a Personal Portfolio website created by using react-js in this we can see complete details of a developer.It's complete UI design is taken from most trending Ui design 'Neumorphism' in 2021.Created reuseable components.Created a data file as a api file which contains all the information needed to display the content on the website and also it contains day and night mode.Also implemented multicolor themes and multicolor backgrounds. ",
    tags: [
      "react",
      "html",
      "css",
      "react-router-dom",
      "useState",
      "useEffect",
      "React Boostrap",
    ],
  },
  {
    id: 1,
    category: "react",
    title: "Royal Restaurant",
    link: "https://simple-react-restaurant.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/simple-react-restaurant-app",
    image: `${restaurentPage}`,
    desc: "This is a simple restaurant website,with having beautiful landing page and also having menu section which you can filter menu items. This is built using React on the Frontend and deployed on Netlify.",
    tags: ["react", "html", "css", "react-router-dom", "useState"],
  },
  {
    id: 2,
    category: "react",
    title: "Corona Tracker",
    link: "https://vj-react-js-covid19-tracker.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/covid-tracker",
    image: `${covidTracker}`,
    desc: "This is Covid tracker web application helps us to track and trace corona cases and also to help spreading the awareness. In this we get number of infected people, recovered people and as well as number of deaths caused by covid-19.In this web application with help of chart.js we are creating charts to visualize number of infected people, deaths and recovered people which everyone can understands easily. We can also trace covid cases of specific country by selecting country.",
    tags: [
      "react",
      "material-ui",
      "html",
      "css",
      "CoronaTracker public API",
      "axios",
      "chartjs",
      "classnames",
      "react-countup",
    ],
  },
  {
    id: 3,
    category: "react",
    title: "Weather App",
    link: "https://react-js-weather-application.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/React-Weather-App",
    image: `${weatherApp}`,
    desc: "This Weather Application provides accurate weather information based on location. This web app will also provide rain forecast, humidity information, temperatures , wind, pressure ,Humidity of the day for a location. The forecasts are accentuated by icons for clear comprehension.  Users will be able to find the sunrise and sunset time with a simple and brief text on today’s weather.",
    tags: ["open-weather API", "axios", "react", "useState", "useEffect"],
  },

  {
    id: 5,
    category: "react",
    title: "Image Search",
    link: "https://react-images-search-app.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/react-image-search",
    image: `${imageSearch}`,
    desc: "This is a image search app created using React and open API and deployed on Netlify.In this app we can search any kind of images. ",
    tags: ["react", "html", "css", "axios"],
  },

  {
    id: 6,
    category: "HTML CSS JS",
    title: "Services Hub",
    link: "https://services-hub.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/ServicesHub",
    image: `${servicesHub}`,
    desc: "Services Hub is a website where we can find all the technicians and professionals.Here we can find all the services.",
    tags: ["html", "css", "Jquery", "Boostrap-4", "JS"],
  },
  {
    id: 7,
    category: "react",
    title: "To-Do App",
    link: "https://reactjs-to-do-list-app.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/react-todo-list",
    image: `${todoApp}`,
    desc: "This is a project To-Do App, that helps to manage tasks and change tasks, write notes and delete tasks. This is built using React on the Frontend deployed on Netlify.",
    tags: ["react", "useState", "useEffect", "css", "html"],
  },
  {
    id: 8,
    category: "HTML CSS JS",
    title: "Online Shopping",
    link: "https://my-online-shopping.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/online-shopping",
    image: `${onlineShopping}`,
    desc: "This is one of the e-commerce website designed(photoshop) and developed using html,css,js,boostrap.completed developing front end part",
    tags: ["bootstrap", "html", "css", "js"],
  },

  {
    id: 9,
    category: "design",
    title: "Yoga Design 1",
    link: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    desc: "Yoga Design 1 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 10,
    category: "design",
    title: "Services Design ",
    link: "https://drive.google.com/uc?id=1hvpQOIF8qvD8qNKbZoQUK4iz1zyltzCA",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1hvpQOIF8qvD8qNKbZoQUK4iz1zyltzCA",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },

  {
    id: 11,
    category: "design",
    title: "Yoga Design 2",
    link: "https://drive.google.com/uc?id=1fOYte468ULzWFdHfqVTtiRpSJ66BmFxU",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1fOYte468ULzWFdHfqVTtiRpSJ66BmFxU",
    desc: "Yoga Design 2 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 12,
    category: "design",
    title: "Mobile Service Design",
    link: "https://drive.google.com/uc?id=1G2K75FapjxWvz6wonbUieYOO-km2D6iY",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1G2K75FapjxWvz6wonbUieYOO-km2D6iY",
    desc: "Mobile Service Design 1 - This is one of the Ui design for Mobile repair services.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 13,
    category: "design",
    title: "Mobile service Design 2",
    link: "https://drive.google.com/uc?id=1o_6RUb8caurfsDJIQh4QMFsWcHJnk6ko",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1o_6RUb8caurfsDJIQh4QMFsWcHJnk6ko",
    desc: "Mobile Service Design 2 - This is one of the Ui design for Mobile repair services.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 14,
    category: "design",
    title: "Yoga Design 3",
    link: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    desc: "Yoga Design 3 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 15,
    category: "design",
    title: "Online Shopping ",
    link: "https://drive.google.com/embeddedfolderview?id=1xLDGiQOmfKuAb_tq_Qq5yq6Ylc_F7E7e",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1mjgMRK1gkQV2zUA5QV7f9jwtpcu9mcZB",
    desc: "Online Shopping website UI design (large and mobile devices)",
    tags: ["ui", "photoshop cs6"],
  },
];
