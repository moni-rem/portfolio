import { motion } from "framer-motion";
import bgVideo from "../assert/heart.mp4"; 
import React, { useState, useEffect } from "react";


export default function Profile() {
  const [edit, setEdit] = useState(false);

  
  // Word-by-word animation
const sentence = "Hello, Welcome to my homepage";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
       staggerChildren: 0.12,
      // repeat: Infinity,
      repeatType: "loop",
       repeatDelay: 1.2,
         duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
             ease: "easeInOut",
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};


//scroll change color
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40); // change color after 40px
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


// hover:shadow-[0_0_35px_#3b82f6]
  const card =
    "bg-white/2 rounded-2xl shadow-lg p-8 border border-white/5  transition-all duration-300";

  return (
  <div className="relative min-h-screen text-white p-6 md:p-10 font-sans ">

  {/*  Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={bgVideo} type="video/mp4" />
  </video>

  {/* 🖤 Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* 📦 Content */}
  <div className="relative z-10">


      {/* Top button */}
      <div className="flex justify-center md:justify-start">
        <button
          onClick={() => setEdit(!edit)}
          className="bg-pink-200/20 text-white px-5 py-2 rounded-lg hover:bg-blue-100/10 transition text-lg"
        >
          {edit ? "Save" : "Edit profile"}
        </button>
      </div>

      {/* Header */}
              {/* hover:shadow-[0_0_30px_#3b82f6] */}
        <header
          className={`
            sticky top-4 z-50 mt-6 h-20 md:h-24
            flex items-center justify-center rounded-xl
            transition-all duration-300
            ${
              scrolled
                ? "  bg-blue-100/20 backdrop-blur-md shadow-[0_0_25px_#3b82f6] "
                : "bg-black/40 backdrop-blur-md shadow-lg"
            }
          `}
        >
        <nav>
          <ul className="flex  flex-wrap justify-center gap-4 md:gap-10 text-white font-semibold text-base md:text-lg">
            {["Profile", "Education", "Skills", "Project"].map((item) => (
              <li
                key={item}
                className="
                  px-4 py-2 rounded-lg cursor-pointer
                  transition-all duration-300
                  hover:text-white
                  hover:bg-blue-600
                  hover:shadow-[0_0_18px_#3b82f6]
                "
              >
                {item}
              </li>
            ))}

            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5 py-2 rounded-lg font-bold
                  bg-white text-blue-600
                  transition-all duration-300
                  hover:bg-blue-600 hover:text-white
                  hover:shadow-[0_0_22px_#3b82f6]
                "
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Welcome */}
      <motion.div variants={container} initial="hidden" animate="show" className="text-center mt-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-400 flex flex-wrap justify-center gap-2">
          {sentence.split(" ").map((word, index) => (
            <motion.span key={index} variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
             ease: "easeInOut",
          }}
          className="mt-4 text-base md:text-lg text-gray-300"
        >
          Frontend Developer • React • Tailwind
        </motion.p>

      </motion.div>
      </div>
    </div>
  );
}
