export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Effective communication, the backbone of successful projects.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Creating together, thriving together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I’m always learning and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Innovating with passion, crafting with precision.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Expanding horizons in backend technologies.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s bring your vision to life together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "React Chat Application",
    des: "Chat app with Firebase for authentication and messaging.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735081357/wilmer-portafolio/kaclkkbmt1qt5gbimmmj.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/React-AppChat-FireBase",
  },
  {
    id: 2,
    title: "Kodigo Music Player",
    des: "Simple music player using Spotify's API.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735081357/wilmer-portafolio/wf9zejukz74rnhu036kg.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/KodigoMusic",
  },
  {
    id: 3,
    title: "InnovaTech Website",
    des: "Responsive site for showcasing InnovaTech's services.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735081359/wilmer-portafolio/uelxhcz9j1wm8uxoyzox.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/innova-tech-network-html-js",
  },
  {
    id: 4,
    title: "Next.js ShadCN Dashboard",
    des: "Responsive dashboard built with Next.js and ShadCN.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735081355/wilmer-portafolio/npfedjyqywybcmpyjbzl.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/next-shadcn-dashboard",
  },
];

export const education = [
  {
    "quote": "Solid foundation in software engineering, agile methodologies, and object-oriented programming with Java and C#.",
    "name": "Engineer's Degree in Computer Software Engineering",
    "title": "Universidad Francisco Gavidia | Jan 2023 - 2028"
  },
  {
    "quote": "Deepened understanding of secure systems, product management, and agile workflows.",
    "name": "Associate's Degree in Cybersecurity",
    "title": "ESIT | Aug 2024 - 2026"
  },
  {
    "quote": "Sharpened financial analysis and accounting skills, bridging technology and business strategy.",
    "name": "Specialization in Accounting and Finance",
    "title": "Avanza Formación Continua | Jul 2024 - Feb 2025"
  },
  {
    "quote": "Immersive training in web development with React.js, TypeScript, Laravel, and SOLID principles.",
    "name": "Full Stack Junior in Computer Programming",
    "title": "KODIGO | Jul 2024 - Dec 2024"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Aspiring Software Developer",
    desc: "Pursuing a degree in Software Engineering, with a focus on modern web development practices and continuous learning.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Development",
    desc: "Built and maintained websites for clients, focusing on clean design, accessibility, and performance optimization.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Student & Technology Enthusiast",
    desc: "Committed to learning and exploring the latest web technologies to enhance problem-solving and development skills.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/wkatir",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/-wilmer-salazar/",
  },
];