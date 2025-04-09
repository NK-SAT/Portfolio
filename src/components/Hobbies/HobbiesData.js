import { FaCameraRetro, FaBookReader, FaWalking } from "react-icons/fa";
import beachtran from "../../assets/beachtran.jpg";
import walk from "../../assets/try.png";
import book from "../../assets/bookaga.jpeg";
import  Cricket from "../../assets/BatsmanHIcon.png";
import batting from "../../assets/battingPic.jpg";


export const hobbiesData = [
  {
    name: "Photography & Walking",
    icon: <FaCameraRetro />,
    image: beachtran,
    description: "I enjoy capturing nature and beautiful moments. And walking clears my mind and helps me unwind. It's my way of staying active while exploring the world around me."
  },
  {
    name: "Exploring",
    icon: <FaWalking />,
    image: walk,
    description: "Exploring fuels my curiosity. Whether it's diving into new technologies like Gen AI, or trends like Ghibli, or experiencing different cultures, places, and languages — I love exploring the unknown and learning from it."
  },
  {
    name: "Reading",
    icon: <FaBookReader />,
    image: book,
    description: "I read to grow, from self-improvement to deep tech. Topics like quantum computing fascinate me, pushing me to think beyond limits and explore new perspectives."
  },
  {
    name: "",
    icon: <img src={Cricket} alt="cricket icon" style={{ width: "85px", height: "85px" }} />,
    image: batting,
    description: "Cricket isn't just a game to me, it's a mindset. Inspired by Dhoni, his words like ' TRUST THE PROCESS ' and ' I LIVE IN THE PRESENT WITH AN EYE IN FUTURE. ' constantly remind me to stay calm, focused, and resilient in every walk of life."
  }
];
