import { w } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  c,
  css,
  webRtc,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  python,
  videoCall,
  payment,
  ambulance,
  leetcode,
  codeforces,
  gitLogo,
  nextjs

} from "../assets";
import { code } from "three/examples/jsm/nodes/Nodes.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Development",
    icon: web,
  },
  {
    title: "MERN Stack",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Competitive Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "next.js",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "webRtc",
    icon: webRtc,
  },
  {
    name: "docker",
    icon: docker,
  },  
];

const experiences = [
  {
    title: "Chatty 2.0",
    company_name: "videoRooms",
    icon: videoCall,
    iconBg: "#707070",
    date: "August 2023 - December 2023",
    points: [
      "The core concept of the project is to create a virtual platform that serves as a hub for users to engage in both formal and social collaboration.",
      "Users can create video chat room of maximum 4 users.",
      "Allows users to authenticate themselves and send friend requests to other users while getting real time updates.",
    ],
  },
  {
    title: "Zaytm 2.0",
    company_name: "paymentApp",
    icon: payment,
    iconBg: "#707070",
    date: "November 2023 - March 2024",
    points: [
      "The core concept of the project is to build a banking wallet and understand how banking API’s work for a wallet like application.",
      "Web-based platform facilitating payments to manage peer-to-peer transactions, simplifying sharing expenses online.",
      "Managed database schemas and interactions with PostgreSQL and Prisma, ensuring data integrity and efficient query performance.",
    ],
  },
  {
    title: "RoadGuard",
    company_name: "Road Accident Prediction and Classification",
    icon: ambulance,
    iconBg: "#707070",
    date: "ongoing",
    points: [
      "Input taken from user is sent to the backend flask server which feeds the parameters to the ML model and returns the result.",
      "The purpose of such a model is to be able to predict which conditions will be more prone to accidents, and therefore take preventive measures.",
      "Takes input from the user and predicts the probability of an accident happening in that area.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Solved over 150 questions on Leetcode evidenced by achieving the title of Knight and demonstrating my algorithmic problem-solving and coding skills.",
    name: "aaby_abhay",
    designation: "Knight",
    company: "LeetCode",
    image: leetcode,
    link : "https://leetcode.com/"
  },
  {
    testimonial:
      "Reaching the rank of Specialist within just 150 questions on CodeForces, I have demonstrated my ability to solve complex problems efficiently.",
    name: "mcAdams",
    designation: "Specialist",
    company: "codeForces",
    image: codeforces,
    link : "https://codeforces.com/"
  },
  {
    testimonial:
      "My git-hub account contains the link of the projects I have done so far. I have worked on various projects and have a good understanding of the technologies.",
    name: "aaby242abhay",
    designation: "Well-versed",
    company: "github",
    image: gitLogo,
    link : "https://github.com/aaby242abhay"
  },
];

const projects = [
  {
    name: "ChattY 2.0 ",
    description:
      "Video chat web application to send real time messages and video calling between connected users.",
    tags: [
      {
        name: "webRTC",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scoket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/aaby242abhay/Chatty-2.0",
  },
  {
    name: "Zaytm 2.0",
    description:
      "Zaytm is a web-based wallet application that lets users and merchants onramp money via a fake bank account.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aaby242abhay/zayTm-2.0",
  },
  {
    name: "RoadGaurd",
    description:
      "A machine learning powered web app which predicts accidents severity based on user’s location and weather conditions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aaby242abhay/Road_Accident_Prediction",
  },
];

export { services, technologies, experiences, testimonials, projects };
