import restaurentPage from "../assets/images/restaurentPage.png";
import covidTracker from "../assets/images/covidTracker.png";
import servicesHub from "../assets/images/servicesHub.png";
import todoApp from "../assets/images/todoApp.png";
import imageSearch from "../assets/images/imageSearch.png";
import weatherApp from "../assets/images/weatherApp.png";
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
    colorCode: "#f9b4b4",
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
    colorName: "violet",
    colorCode: "violet",
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
    colorCode: "#e94394",
  },
  {
    id: "4",
    category: "dark",
    colorClassName: "yellowww",
    colorCode: "#f9c921",
  },
  {
    id: "5",
    category: "dark",
    colorClassName: "lightGreen",
    colorCode: "#72fd00",
  },
  {
    id: "6",
    category: "dark",
    colorClassName: "bluDayDark",
    colorCode: "#01d5e4",
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
    info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  },
  {
    id: 2,
    icon: "fa fa-laptop",
    title: "Web Design",
    info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  },
  {
    id: 3,
    icon: "fa fa-code",
    title: "Clean Code",
    info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  },
  {
    id: 4,
    icon: "bi bi-scissors mb-3",
    title: "Video Editing",
    info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  },
  // {
  //   id: 5,
  //   icon: "fa fa-graphic",
  //   title: "Graphic Design",
  //   info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  // },
  {
    id: 6,
    icon: "fa fa-bullhorn",
    title: "Great Support",
    info: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
  },
];
export const projects = [
  {
    id: 1,
    category: "react",
    title: "Royal Restaurant",
    link: "https://simple-react-restaurant.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/simple-react-restaurant-app",
    image: `${restaurentPage}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
    tags: ["react", "html", "css", "react-router-dom", "useState"],
  },
  {
    id: 2,
    category: "react",
    title: "Corona Tracker",
    link: "https://vj-react-js-covid19-tracker.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/covid-tracker",
    image: `${covidTracker}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.",
    tags: [
      "react",
      "material-ui",
      "html",
      "css",
      "CoronaTracker public API",
      "axios",
    ],
  },
  {
    id: 3,
    category: "HTML CSS JS",
    title: "Services Hub",
    link: "https://services-hub.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/ServicesHub",
    image: `${servicesHub}`,
    desc: "Pictures, abstract symbols, materials,relationships and to Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.make arrangements and rearrangements among these ingredients.",
    tags: ["html", "css", "Jquery", "Boostrap-4", "JS"],
  },
  {
    id: 4,
    category: "react",
    title: "Weather App",
    link: "https://react-js-weather-application.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/React-Weather-App",
    image: `${weatherApp}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.arrangements and rearrangements among these ingredients.",
    tags: ["open-weather API", "axios", "react", "useState", "useEffect"],
  },
  {
    id: 5,
    category: "react",
    title: "Image Search",
    link: "https://react-images-search-app.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/react-image-search",
    image: `${imageSearch}`,
    desc: "Pictures, abstract symbols, materials,relationships and toPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients. make arrangements and rearrangements among these ingredients.",
    tags: ["react", "html", "css", "axios"],
  },
  {
    id: 6,
    category: "react",
    title: "To-Do App",
    link: "https://reactjs-to-do-list-app.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/react-todo-list",
    image: `${todoApp}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["react", "useState", "useEffect", "css", "html"],
  },
  {
    id: 7,
    category: "HTML CSS JS",
    title: "Online Shopping",
    link: "https://my-online-shopping.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/online-shopping",
    image: `${onlineShopping}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["bootstrap", "html", "css", "js"],
  },
  {
    id: 8,
    category: "react",
    title: "Personal Portfolio",
    link: "https://vijay-personal-portfolio.netlify.app/",
    gitHubLink: "https://github.com/Vijay-Chavala/Vijay-Personal-Portfolio",
    image: `${onlineShopping}`,
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: [
      "react",
      "useEffect",
      "useState",
      "react-bootstrap",
      "react-router-dom",
      "emailjs",
    ],
  },
  {
    id: 9,
    category: "design",
    title: "Yoga Design 1",
    link: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
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
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 12,
    category: "design",
    title: "Mobile Service Design",
    link: "https://drive.google.com/uc?id=1G2K75FapjxWvz6wonbUieYOO-km2D6iY",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1G2K75FapjxWvz6wonbUieYOO-km2D6iY",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 13,
    category: "design",
    title: "Mobile service Design 2",
    link: "https://drive.google.com/uc?id=1o_6RUb8caurfsDJIQh4QMFsWcHJnk6ko",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1o_6RUb8caurfsDJIQh4QMFsWcHJnk6ko",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 14,
    category: "design",
    title: "Yoga Design 3",
    link: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 15,
    category: "design",
    title: "E-commerce ",
    link: "https://drive.google.com/uc?id=1xLDGiQOmfKuAb_tq_Qq5yq6Ylc_F7E7e",
    gitHubLink: "",
    image: "https://drive.google.com/uc?id=1mjgMRK1gkQV2zUA5QV7f9jwtpcu9mcZB",
    desc: "Pictures, abstract symbols, materials,relationships and to make arrangements and rearrangements amoPictures, abstract symbols, materials,relationships and to make arrangements and rearrangements among these ingredients.ng these ingredients.",
    tags: ["ui", "photoshop cs6"],
  },
];
