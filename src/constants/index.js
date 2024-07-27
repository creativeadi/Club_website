import {vit} from '../assets'
import { xpotech,innoxify,electro } from '../assets';

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "events",
      title: "Events",
    },
    {
      id: "teams",
      title: "Teams",
    },
    {
      id: "feedback",
      title: "Feedback",
    },
  ];

  const experiences = [
    {
      title: "ELECTRO-CRAFT",
      icon: vit,
      iconBg: "#383E56",
      date: "7th August 2024",
      photo: electro,
      points: [
        "Special gifts for outstanding performances during the event!",
        "Engage with experts and gain insights from their vast experience.",
        "Interactive Q&A sessions to clear all your doubts.",
        "Networking opportunities with fellow electronics enthusiasts.",
      ],
    },
    {
      title: "XPOTECH",
      icon: vit,
      iconBg: "#E6DEDD",
      date: "24th February 2024",
      photo: xpotech,
      points: [
        "Elevate Your Tech Experience at Xpotech – Advitya's Ultimate Tech Extravaganza!",
        "Unleash the Power of Innovation: Calling all students! Get ready to showcase your brilliance at Xpotech, the most anticipated event hosted by VITronix Club at Advitya! 🌐",
        "Connect, Collaborate, Conquer: Xpotech is not just an event; it's a vibrant community of like-minded individuals pushing the boundaries of technology. Network with fellow enthusiasts, explore collaborative opportunities, and be a part of the future! 🌐🤖",
      ],
    },
    {
      title: "InnoXify",
      icon: vit,
      iconBg: "#383E56",
      date: "14th August 2023",
      photo: innoxify,
      points: [
        "The VITronix Club of VIT Bhopal University is organizing an event InnoXify: Amplifying Ideas for Impact on the 14th Aug at our Campus in Offline Mode.",
        "The event is an Ideation challenge where the students get to present their ideas in the form of presentations..",
        "Participants will be provided a problem statements, to which they have to find solutions.",
        "The top three winners will be provided with exciting prizes.",
      ],
    },
  ];

  export {experiences};
  