export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaboration is key; I value strong client communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seamlessly collaborating worldwide",
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
    title: "A developer passionate about creating innovative solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Diving into backend development to expand my skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next big project?",
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
    des: "A real-time chat app with Firebase authentication and messaging, featuring dynamic room creation and responsive design.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735058498/wilmer-portafolio/seklnz7xmf2jxvolbley.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/React-AppChat-FireBase",
  },
  {
    id: 2,
    title: "Kodigo Music Player",
    des: "A music player application using Spotify's API for playlist management.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735058514/wilmer-portafolio/pihsqcewtrdipanmikzs.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/KodigoMusic",
  },
  {
    id: 3,
    title: "InnovaTech Website",
    des: "A modern and responsive website for InnovaTech, showcasing services and projects for a network services company in El Salvador.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735058514/wilmer-portafolio/frshqovdsumwbaeshh41.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/innova-tech-network-html-js",
  },
  {
    id: 4,
    title: "Next.js ShadCN Dashboard",
    des: "A responsive and modern dashboard template built with Next.js and ShadCN. Features reusable components, responsive design, and interactive elements.",
    img: "https://res.cloudinary.com/drycov6o6/image/upload/v1735058497/wilmer-portafolio/um1paw7zlkrxrzdztq7w.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wkatir/next-shadcn-dashboard",
  },
];

export const education = [
  {
    quote:
      "The Universidad Francisco Gavidia provided me with a solid foundation in software engineering, emphasizing agile methodologies, leadership, and programming languages like Java and C#. The focus on object-oriented programming and fundamental skills has been pivotal for my career.",
    name: "Engineer's Degree in Computer Software Engineering",
    title: "Universidad Francisco Gavidia | Jan 2023 - 2028",
  },
  {
    quote:
      "ESIT's program in Cybersecurity has deepened my understanding of secure systems and methodologies, equipping me with skills in product management and agile workflows to enhance project outcomes.",
    name: "Associate's Degree in Cybersecurity",
    title: "ESIT | Aug 2024 - 2026",
  },
  {
    quote:
      "Avanza Formación Continua's specialization in Accounting and Finance sharpened my financial analysis and accounting skills, bridging the gap between technology and business strategy.",
    name: "Specialization in Accounting and Finance",
    title: "Avanza Formación Continua | Jul 2024 - Feb 2025",
  },
  {
    quote:
      "The Full Stack Junior program at KODIGO offered immersive hands-on training in modern web development, focusing on technologies like React.js, TypeScript, Laravel, and SOLID design principles. This experience significantly enhanced my proficiency in responsive design and backend systems.",
    name: "Full Stack Junior in Computer Programming",
    title: "KODIGO | Jul 2024 - Dec 2024",
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
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];