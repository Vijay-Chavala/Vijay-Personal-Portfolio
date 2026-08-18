import restaurentPage from "../assets/images/restaurentPage.png";
import servicesHub from "../assets/images/servicesHub.png";
import onlineShopping from "../assets/images/onlineShopping.png";
import groceBuy from "../assets/images/groceBuy.png";
import articPrint from "../assets/images/ArticPrint.png";
import mriEssentials from "../assets/images/mriEssentials.png";
import wilm from "../assets/images/Wilm.png";
import atma from "../assets/images/Atma.png";
import korb from "../assets/images/KorbNow.png";
import arkClam from "../assets/images/Arkclam.png";
import exitUs from "../assets/images/ExitUs.png";
import zimmereiFrank from "../assets/images/Zimmerfrank.png";
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
    menuName: "projects",
    to: "projects",
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
    language: "React.js",
    percentage: 90,
  },
  {
    id: 2,
    language: "Next.js",
    percentage: 85,
  },
  {
    id: 3,
    language: "JavaScript (ES6+)",
    percentage: 90,
  },
  {
    id: 4,
    language: "TypeScript",
    percentage: 80,
  },
  {
    id: 5,
    language: "HTML5 / CSS3",
    percentage: 85,
  },
  {
    id: 6,
    language: "Tailwind CSS",
    percentage: 85,
  },
  {
    id: 7,
    language: "Redux / RTK Query",
    percentage: 85,
  },
  {
    id: 8,
    language: "TanStack Query",
    percentage: 80,
  },
];

export const otherSkills = [
  {
    id: 1,
    tool: "Node.js / Express",
    percentage: 75,
  },
  {
    id: 2,
    tool: "Zustand / Redux Saga",
    percentage: 80,
  },
  {
    id: 3,
    tool: "Material UI / Shadcn/UI",
    percentage: 85,
  },
  {
    id: 4,
    tool: "Socket.IO / WebSockets",
    percentage: 75,
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
    place: "Kakinada, Andhra Pradesh",
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
    id: 17,
    category: "react",
    title: "KORB",
    subTitle: "B2B Wholesale & Retail Commerce Platform",
    link: "",
    image: `${korb}`,
    desc: "KORB is a B2B wholesale and retail commerce platform with dual Super Admin and Business Admin dashboards for managing products, listings, multi-warehouse stock, and corporate accounting. Built with React.js, Redux Toolkit, and RTK Query for optimized data fetching and caching.",
    tags: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Node.js REST APIs",
      "Tailwind CSS",
      "Material UI",
      "Recharts",
    ],
    features: [
      "Super Admin & Business Admin dashboards",
      "Product catalog and inventory management",
      "Multi-warehouse stock tracking",
      "Analytical reporting with Recharts",
      "Nested shipping status tracking",
    ],
    contributions: [
      "Architected dual admin dashboards for wholesale/retail operations",
      "Built analytical reporting dashboards with Recharts",
      "Reduced chart render times by 50% through memoization",
      "Implemented product catalogs and inventory mutation workflows",
      "Designed nested shipping status tracking modules",
    ],
  },
  {
    id: 18,
    category: "nextjs",
    title: "ARK CLAM",
    subTitle: "Enterprise Learning Management Platform",
    link: "",
    image: `${arkClam}`,
    desc: "ARK CLAM is a multi-tenant B2B LMS with an Admin Dashboard and Employee Portal for interactive video onboarding and certification tracking. Features Next.js App Router, Stripe subscription flows, HLS video streaming, and real-time Socket.IO notifications.",
    tags: [
      "Next.js 15",
      "React 18",
      "Redux Toolkit",
      "RTK Query",
      "Socket.IO",
      "Stripe",
      "HLS Streaming",
      "React Player",
    ],
    features: [
      "Multi-tenant Admin & Employee portals",
      "Interactive video-on-demand with progress tracking",
      "Stripe recurring subscription payments",
      "Real-time Socket.IO notifications",
      "HLS streaming via React Player",
    ],
    contributions: [
      "Developed Admin Dashboard and Employee Portal using Next.js App Router",
      "Integrated automated recurring subscription flows with Stripe",
      "Implemented HLS video playback with progress tracking",
      "Built real-time notification system with Socket.IO",
      "Deployed and managed application on AWS EC2 with PM2",
    ],
  },
  {
    id: 19,
    category: "nextjs",
    title: "ExitUs",
    subTitle: "Digital Obituary Platform",
    link: "",
    image: `${exitUs}`,
    desc: "ExitUs is a memorial platform for multi-lingual notice generation, geolocation features, and interactive partner search. Built with Next.js 16, React 19, TypeScript, TanStack Query, Zustand, and Shadcn/UI with complex multi-step form workflows.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Hook Form",
      "Zod",
    ],
    features: [
      "Multi-lingual obituary notice generation",
      "Geolocation and partner search",
      "Multi-step obituary wizard",
      "Performance-oriented endpoint caching",
    ],
    contributions: [
      "Built obituary generation wizard with React Hook Form and Zod validation",
      "Improved wizard completion rates by 25% through UX optimization",
      "Implemented TanStack Query for performance-oriented API caching",
      "Developed geolocation features and interactive partner search",
    ],
  },
  {
    id: 20,
    category: "nextjs",
    title: "ZimmereiFrank",
    subTitle: "Construction Project Management Platform",
    link: "",
    image: `${zimmereiFrank}`,
    desc: "ZimmereiFrank is an operational scheduling system replacing physical spreadsheets with centralized monitoring, time-card logging, and file management. Features role-based dashboards for field engineers and administrative controllers.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Tailwind CSS",
    ],
    features: [
      "Project planning timeline interfaces",
      "On-site responsive time sheets",
      "Role-based dashboards for engineers and admins",
      "Centralized file management",
      "Time-card logging system",
    ],
    contributions: [
      "Crafted operational scheduling system replacing manual spreadsheets",
      "Built role-based dashboards for field engineers and admin controllers",
      "Developed project planning timeline interfaces",
      "Integrated on-site responsive time sheet modules",
    ],
  },
  {
    id: 2,
    category: "react",
    title: "ArticPrint",
    subTitle: "Live T-Shirt Customizer",
    link: "https://articprint-app.com/login",
    image: `${articPrint}`,
    desc: "ArticPrint is a live drag-and-drop T-shirt customizer built with React-Konva, enabling users to upload images, add text, layer elements, and adjust positions and sizes on an interactive canvas. Complex state management is handled through Redux-Saga for a true WYSIWYG design experience.",
    tags: [
      "React.js",
      "Redux-Saga",
      "React-Konva",
      "Styled Components",
      "Axios",
      "Canvas",
      "Drag & Drop",
    ],
    features: [
      "Live drag-and-drop canvas editor",
      "Active canvas image scaling and layer configuration",
      "Multi-layer design support",
      "Text editor and crop tools",
      "Save and download designs",
    ],
    contributions: [
      "Engineered live drag-and-drop T-shirt customizer using React-Konva",
      "Implemented active canvas image scaling and layer configuration",
      "Built scalable frontend architecture with Redux-Saga",
      "Optimized performance for large canvas assets",
    ],
  },
  {
    id: 3,
    category: "react",
    title: "MRI Essentials",
    subTitle: "Orthopedic MRI Educational Platform",
    link: "https://mri-essentials.com",
    image: `${mriEssentials}`,
    desc: "MRI Essentials is an orthopedic MRI educational platform serving healthcare professionals with concise educational content and 4000+ high-quality case studies in the Pro version. Features premium subscription pathways, dynamic card layouts, and Stripe payment integration.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Node.js",
      "Stripe",
      "Styled Components",
      "Axios",
      "Medical Imaging",
    ],
    features: [
      "Educational content and 4000+ MRI case studies",
      "Premium subscription pathways",
      "Stripe payment integration",
      "Dynamic card layouts",
      "Optimized image viewing",
    ],
    contributions: [
      "Built educational premium subscription pathways",
      "Developed dynamic card layouts for medical content",
      "Integrated Stripe payment system",
      "Implemented image viewer and content access modules",
    ],
  },
  {
    id: 4,
    category: "react",
    title: "WILM",
    subTitle: "Educational Content, Ticketing & Pool Wagers",
    link: "https://wilm-app.com",
    image: `${wilm}`,
    desc: "WILM is an educational content-sharing platform with nested video layouts, admin dashboards for tournament wagering logs, and operational configuration forms. Built for school communities with integrated ticketing for student queries and support.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "Content Management",
      "Ticketing",
      "Admin Dashboard",
    ],
    features: [
      "Nested video page layouts",
      "Admin dashboards for tournament wagering logs",
      "Operational configuration forms",
      "Integrated ticketing system",
      "Educational content management",
    ],
    contributions: [
      "Created nested video layouts and content hierarchy",
      "Built admin dashboards for tournament wagering logs",
      "Developed operational configuration forms",
      "Implemented ticketing system and content management UI",
    ],
  },
  {
    id: 1,
    category: "react",
    title: "Wexxl & Atma Admin",
    subTitle: "Insurance & Analytics Admin Dashboards",
    link: "https://atma-app.com/login",
    image: `${atma}`,
    desc: "Wexxl & Atma Admin are React.js admin dashboards for insurance coverage management and analytical questionnaires. Features integrated filters, data visualization, and role-based access for operational teams.",
    tags: [
      "React.js",
      "Redux-Saga",
      "Styled Components",
      "Axios",
      "Admin Dashboard",
      "Data Filters",
      "Responsive Design",
    ],
    features: [
      "Insurance coverage management dashboard",
      "Analytical questionnaires with integrated filters",
      "Role-based admin access",
      "Responsive data tables and forms",
    ],
    contributions: [
      "Designed dashboards for insurance coverage management",
      "Built analytical questionnaire modules with integrated filters",
      "Developed reusable admin UI components",
      "Managed async data flows with Redux-Saga",
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
