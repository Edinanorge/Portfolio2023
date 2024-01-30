//images
import holidaz from "../assets/holidaze.png";
import stop_shop from "../assets/stop_shop.png";
import noroff_marked from "../assets/noroff_marked.png";

//icons
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javaScript from "../assets/javaScript.svg";
import typeScript from "../assets/typeScript.svg";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import adobeXd from "../assets/adobeXd.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javaScript,
  },
  {
    name: "TypeScript",
    icon: typeScript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: adobeXd,
  },
];

const educations = [
  {
    title: "Front-end Development",
    school_name: "Noroff-School of technology and digital media",

    date: "Jan 2022 - Feb 2024",
    grade: "Higher Professional Degree",
  },
  {
    title: "Department of Social Science",
    school_name: "Sapientia Hungarian University",

    date: "Sept 2007 - June 2010",
    grade: "Bachelor Degree",
  },
  {
    title: "Matematikk og Informatikk",
    school_name: "Kos Karoly",
    date: "Sept 2003 - June 2007",
    grade: "",
  },
];

const projects = [
  {
    name: "Holidaze holidays",
    description:
      "This is a web-based platform designed to enable users to search, book, and manage holiday stays from various providers. The project draws inspiration from Airbnb and is meticulously built with the assistance of a provided API.",
    tags: [
      {
        name: "react",
        color: "blue-gradient",
      },
      {
        name: "Noroff API",
        color: "green-gradient",
      },
      {
        name: "styled components",
        color: "pink-gradient",
      },
    ],
    image: holidaz,
    source_code_link: "https://github.com/Edinanorge/Holidaze.git",
    demo_link: "https://holidaze-holidays.netlify.app/",
  },
  {
    name: "Stop Shop",
    description:
      "An e-commerce website has been developed to empower users by offering a seamless experience for searching products, exploring detailed product information, and effortlessly adding items to their shopping cart",
    tags: [
      {
        name: "TypeScript",
        color: "blue-gradient",
      },
      {
        name: "Noroff API",
        color: "green-gradient",
      },
      {
        name: "CSS Modules",
        color: "pink-gradient",
      },
    ],
    image: stop_shop,
    source_code_link: "https://github.com/Edinanorge/js-farmeworks.git",
    demo_link: "https://stops.netlify.app",
  },
  {
    name: "Noroff Marked",
    description:
      "This is an auction platform that empowers users to list items for bidding and place bids on items submitted by fellow users. It's a dynamic platform designed to enhance the auction experience. Built with the assistance of a provided API",
    tags: [
      {
        name: "JavaScript",
        color: "blue-gradient",
      },
      {
        name: "Noroff API",
        color: "green-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-gradient",
      },
    ],
    image: noroff_marked,
    source_code_link: "https://github.com/Edinanorge/Semester-project-2.git",
    demo_link: "https://noroffmarked.netlify.app",
  },
];

const contact = {
  github: "https://github.com/Edinanorge",
  linkedin: "https://www.linkedin.com/in/edinai/",
};

export { skills, educations, projects, contact };
