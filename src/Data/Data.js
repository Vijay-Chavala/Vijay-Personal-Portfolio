import restaurentPage from "../assets/images/restaurentPage.png";
import servicesHub from "../assets/images/servicesHub.png";
import onlineShopping from "../assets/images/onlineShopping.png";
import groceBuy from "../assets/images/groceBuy.png";
import articPrint from "../assets/images/ArticPrint.png";
import mriEssentials from "../assets/images/mriEssentials.png";
import wilm from "../assets/images/Wilm.png";
import atma from "../assets/images/Atma.png";
// yoga design images
import yogaDesign1 from "../assets/images/yogaDesign1.jpg";
import yogaDesign2 from "../assets/images/yogaDesign2.jpg";
import yogaDesign3 from "../assets/images/yogaDesign3.jpg";

// mobile service design images
import mobileServiceDesign1 from "../assets/images/mobileService.jpg";

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
    percentage: 75,
  },
  {
    id: 3,
    language: "Javascript",
    percentage: 80,
  },
  {
    id: 4,
    language: "Styled Components",
    percentage: 70,
  },
  {
    id: 5,
    language: "Bootstrap",
    percentage: 60,
  },

  {
    id: 6,
    language: "ReactJs",
    percentage: 80,
  },
  {
    id: 7,
    language: "Redux",
    percentage: 70,
  },
  {
    id: 8,
    language: "NextJs",
    percentage: 40,
  },
];

export const otherSkills = [
  {
    id: 1,
    tool: "Photoshop",
    percentage: 80,
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
    info: "Create design that strengthens company's brand while ensuring ease of use and simplicity for your audience.",
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
    id: 2,
    category: "react",
    title: "ArticPrint",
    subTitle: "T-Shirt Designer",
    link: "https://articprint-app.com/login",
    image: `${articPrint}`,
    desc: "ArticPrint is a dynamic web application for creating custom T-shirt designs through an intuitive drag-and-drop interface. Users can personalize T-shirts by uploading images, adding text, layering multiple elements, and freely adjusting their positions and sizes — offering a true WYSIWYG design experience. The platform features a fully interactive, performance-optimized canvas-based UI using React-Konva for image and text manipulation, with complex state management handled through Redux-Saga.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "React-Konva",
      "Canvas",
      "Drag & Drop",
      "Responsive Design",
    ],
    features: [
      "Multi-Layer Canvas",
      "Crop & Move Tools",
      "Text Editor",
      "Responsive UI",
      "Save and Download Designs",
    ],
    contributions: [
      "Developed interactive canvas-based UI",
      "Implemented drag-and-drop functionality",
      "Designed responsive components",
      "Managed async operations with Redux-Saga",
      "Built scalable frontend architecture",
      "Optimized performance for large assets",
      "Collaborated with backend teams",
    ],
  },
  {
    id: 3,
    category: "react",
    title: "MRI Essentials",
    subTitle: "Orthopedic MRI Educational Platform",
    link: "https://mri-essentials.com",
    image: `${mriEssentials}`,
    desc: "MRI Essentials is an orthopedic MRI educational platform designed to serve both as a comprehensive teaching tool and a quick daily reference for healthcare professionals. The platform provides access to concise MRI educational content and over 4000 high-quality case studies in the Pro version. Built with React.js and featuring secure payment integration through Stripe, the application delivers a smooth, responsive experience for healthcare professionals accessing medical imaging content.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "React-Konva",
      "Stripe",
      "Medical Imaging",
      "Responsive Design",
    ],
    features: [
      "Educational Content Access",
      "4000+ MRI Case Studies",
      "Stripe Payment Integration",
      "Optimized Image Viewing",
      "Mobile-Friendly Interface",
    ],
    contributions: [
      "Developed key UI components",
      "Integrated Stripe payment system",
      "Managed async operations",
      "Implemented image viewer features",
      "Built scalable frontend architecture",
    ],
  },
  {
    id: 4,
    category: "react",
    title: "WILM",
    subTitle: "Educational Content & Ticketing App",
    link: "https://wilm-app.com",
    image: `${wilm}`,
    desc: "WILM is a personal content-sharing platform built for educational use, especially among school communities. The app allows users to upload and organize text, images, videos, and documents, and features a ticketing system for student queries and support. Built with React.js, Redux-Saga, and Styled Components, WILM delivers a clean, scalable, and responsive experience for both students and educators.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "Content Management",
      "Ticketing",
      "Responsive Design",
    ],
    features: [
      "Upload and organize educational content",
      "Nested page structure for content hierarchy",
      "Integrated ticketing system",
      "Responsive design for all devices",
    ],
    contributions: [
      "Built dynamic UI components for content management",
      "Implemented nested page navigation",
      "Integrated ticketing system for support",
      "Managed async data flows with Redux-Saga",
      "Styled with modular Styled Components",
    ],
  },
  {
    id: 1,
    category: "react",
    title: "Atma",
    subTitle: "Astrology Dating App(Admin Dashboard)",
    link: "https://atma-app.com/login",
    image: `${atma}`,
    desc: "Atma is a dynamic web application for creating custom T-shirt designs through an intuitive drag-and-drop interface. Users can personalize T-shirts by uploading images, adding text, layering multiple elements, and freely adjusting their positions and sizes — offering a true WYSIWYG design experience. The platform features a fully interactive, performance-optimized canvas-based UI using React-Konva for image and text manipulation, with complex state management handled through Redux-Saga.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "React-Konva",
      "Canvas",
      "Drag & Drop",
      "Responsive Design",
    ],
    features: [
      "Multi-Layer Canvas",
      "Crop & Move Tools",
      "Text Editor",
      "Responsive UI",
      "Save and Download Designs",
    ],
    contributions: [
      "Developed interactive canvas-based UI",
      "Implemented drag-and-drop functionality",
      "Designed responsive components",
      "Managed async operations with Redux-Saga",
      "Built scalable frontend architecture",
      "Optimized performance for large assets",
      "Collaborated with backend teams",
    ],
  },

  {
    id: 6,
    category: "react",
    title: "Royal Restaurant",
    subTitle: "Restaurant Website",
    link: "https://simple-react-restaurant.netlify.app/",
    image: `${restaurentPage}`,
    desc: "This is a simple restaurant website,with having beautiful landing page and also having menu section which you can filter menu items. This is built using React on the Frontend and deployed on Netlify.",
    tags: ["react", "html", "css", "react-router-dom", "useState"],
  },

  {
    id: 8,
    category: "HTML CSS JS",
    title: "GroceBuy",
    subTitle:
      "Online Groceries, Vegetables, Meat and Food order delivery service",
    link: "http://grocebuy.com/",
    image: `${groceBuy}`,
    desc: "GroceBuy offers online Groceries, Vegetables, Meat and Food order delivery service from your favorite local stores or Restaurants We deliver all of your daily needs right to your door - or wherever you are! We manage about 1000+ products in each grocebuy location, so when you order, your stuff comes directly from your favorite store.",
    tags: ["html", "css", "jQuery", "Boostrap5", "Slick Slider", "JavaScript"],
  },
  {
    id: 9,
    category: "HTML CSS JS",
    title: "Services Hub",
    subTitle: "Technicians and Professionals Finder",
    link: "https://services-hub.netlify.app/",
    image: `${servicesHub}`,
    desc: "Services Hub is a website where we can find all the technicians and professionals.Here we can find all the services.",
    tags: ["html", "css", "Jquery", "Boostrap-4", "JS"],
  },
  {
    id: 10,
    category: "HTML CSS JS",
    title: "Online Shopping",
    subTitle: "E-commerce Website",
    link: "https://my-online-shopping.netlify.app/",
    image: `${onlineShopping}`,
    desc: "This is one of the e-commerce website designed(photoshop) and developed using html,css,js,boostrap.completed developing front end part",
    tags: ["bootstrap", "html", "css", "js"],
  },
  {
    id: 11,
    category: "design",
    title: "Yoga Design 1",
    link: "https://drive.google.com/uc?export=view&id=1eQuMN0AlvKl9yR3ETM69ffQiFmwm03Ud",
    gitHubLink: "",
    image: `${yogaDesign1}`,
    desc: "Yoga Design 1 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },

  {
    id: 13,
    category: "design",
    title: "Yoga Design 2",
    link: "https://drive.google.com/uc?id=1fOYte468ULzWFdHfqVTtiRpSJ66BmFxU",
    gitHubLink: "",
    image: `${yogaDesign2}`,
    desc: "Yoga Design 2 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },
  {
    id: 14,
    category: "design",
    title: "Mobile Service Design",
    link: "",
    gitHubLink: "",
    image: `${mobileServiceDesign1}`,
    desc: "Mobile Service Design 1 - This is one of the Ui design for Mobile repair services.",
    tags: ["ui", "photoshop cs6"],
  },

  {
    id: 16,
    category: "design",
    title: "Yoga Design 3",
    link: "",
    gitHubLink: "",
    image: `${yogaDesign3}`,
    desc: "Yoga Design 3 - This is one of the Ui design for Yoga website designed for one of the client",
    tags: ["ui", "photoshop cs6"],
  },
];
