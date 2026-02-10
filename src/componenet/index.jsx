import React, { useState, useEffect } from "react";
import profileImg from "../assert/profile.jpg";
import pos from "../assert/pos.png";
import skincare from "../assert/skincare.jpg";
import { motion } from "framer-motion";
import bgVideo from "../assert/heart.mp4"; 


export default function Profile() {
  const [edit, setEdit] = useState(false);

  const [skill, setSkill] = useState(
    "HTML, CSS, JavaScript, React, Express, Java, SpringBoot, MySQL, UXUI, Django"
  );
  const [languages, setLanguages] = useState("Chinese, Khmer, English");

  const [education, setEducation] = useState([
    { year: "2024", text: "Graduated from High School" },
    { year: "2025", text: "E-Commerce using Django" },
    { year: "2025", text: "POS System using Django" },
  ]);

  // Skills icons (card grid)
  
const [skills, setSkills] = useState([
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]);


  const updateSkill = (index, key, value) =>{
    const updated = [...skills];
    updated[index][key] = value;
    setSkills(updated);
  };

  const addSkill = () =>{
    setSkills([
      ...skills,
      {name: "new skill",icon:""}
    ]);
  };

  const removeSkill = (index) =>{
    setSkills(skills.filter((_, i)=>i !== index));
  };

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

      <div className="mt-10 space-y-8">
        {/* ===== Profile ===== */}
        <section id="profile" className={card}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Pic */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-md"
              />
              <p className="text-pink-400 text-xl font-semibold">A cat programmer</p>
            </div>

            {/* About */}
            <div>
              <h2 className="text-blue-300 font-bold text-3xl mb-6">About Me</h2>

              {[
                ["Who am I?", "My name is Mony, 20 years old. Currently major in computer Science in TUX Global Institute."],
                
              ].map(([label, value]) => (
                <div key={label} className="flex items-center gap-6 py-2">
                  <div className="font-semibold text-sm text-gray-300 w-28">{label}:</div>
                  <div className="text-sm text-white flex-1">
                    {edit ? (
                      <input
                        defaultValue={value}
                        className="w-full rounded-lg px-3 py-2 text-sm  border border-white/10 outline-none"
                      />
                    ) : (
                      <span className="text-gray-100">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Education ===== */}
        <section id="education" className={card}>
          <h2 className="text-blue-300 font-bold text-3xl mb-6 border-b border-white/10 pb-3">
            Education
          </h2>

          <div className="space-y-3">
            {education.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {edit ? (
                  <>
                    <input
                      value={item.year}
                      onChange={(e) => {
                        const copy = [...education];
                        copy[i].year = e.target.value;
                        setEducation(copy);
                      }}
                      className="rounded-lg px-3 py-2  border border-white/10 w-24"
                    />
                    <input
                      value={item.text}
                      onChange={(e) => {
                        const copy = [...education];
                        copy[i].text = e.target.value;
                        setEducation(copy);
                      }}
                      className="rounded-lg px-3 py-2 bg-black border border-white/10 flex-1"
                    />
                  </>
                ) : (
                  <>
                    <div className="font-bold text-lg text-white w-24">{item.year}</div>
                    <div className="text-lg text-gray-300">{item.text}</div>
                  </>
                )}

                {edit && (
                  <button
                    onClick={() => setEducation(education.filter((_, idx) => idx !== i))}
                    className="text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          {edit && (
            <button
              onClick={() => setEducation([...education, { year: "2026", text: "New Item" }])}
              className="mt-5 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
            >
              + Add Education
            </button>
          )}
        </section>

       {/* ===== Skills (ONE) ===== */}
<section id="skill" className={card}>
  <div className="flex items-center justify-between flex-wrap gap-4">
    <h2 className="text-blue-300 font-bold text-3xl">Skills</h2>

    {edit && (
      <div className="flex gap-3 flex-wrap">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="rounded-lg px-3 py-2 bg-black border border-white/10 w-[320px] max-w-full"
          placeholder="Skills: HTML, CSS, React..."
        />
        <input
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
          className="rounded-lg px-3 py-2 bg-black border border-white/10 w-[260px] max-w-full"
          placeholder="Languages: Khmer, English..."
        />
      </div>
    )}
  </div>

  {/* Skill icons */}
  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
    {skills.map((s, index) => (
      <div
        key={s.name + index}
        className="
          bg-black/40 rounded-2xl p-5 shadow
          flex flex-col items-center justify-center gap-3
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_0_28px_#3b82f6]
          border border-white/5
          relative
        "
      >
        {edit ? (
          <>
            {/* icon preview */}
            <img
              src={s.icon || "https://via.placeholder.com/56"}
              alt={s.name}
              className="w-14 h-14 object-contain"
            />

            <input
              value={s.icon}
              onChange={(e) => updateSkill(index, "icon", e.target.value)}
              placeholder="Icon URL"
              className="w-full text-xs px-2 py-1 rounded bg-black border border-white/10 text-white"
            />

            <input
              value={s.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
              placeholder="Skill name"
              className="w-full text-center px-2 py-1 rounded bg-black border border-white/10 text-white"
            />

            <button
              onClick={() => removeSkill(index)}
              className="text-red-400 text-xs hover:text-red-500"
            >
              Remove
            </button>
          </>
        ) : (
          <>
            <img src={s.icon} alt={s.name} className="w-14 h-14 object-contain" />
            <p className="font-semibold text-white">{s.name}</p>
          </>
        )}
          </div>
        ))}
      </div>

      {/* ONE Add button (outside the map) */}
      {edit && (
        <button
          onClick={addSkill}
          className="mt-6 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold"
        >
          + Add Skill
        </button>
      )}

      {/* Language chips */}
      <div className="mt-8">
        <h3 className="text-white font-semibold mb-3">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages
            .split(",")
            .map((l) => l.trim())
            .filter(Boolean)
            .map((l) => (
              <span
                key={l}
                className="px-3 py-1 rounded-full text-sm bg-blue-600/20 text-blue-200 border border-blue-500/30"
              >
                {l}
              </span>
            ))}
        </div>
      </div>

      {/*  */}
    </section>


    {/* ===== Projects ===== */}
<section id="project" className={card}>
  <h2 className="text-blue-300 font-bold text-3xl mb-6 border-b border-white/10 pb-3 flex items-center">
    Project
  </h2>

  {/* width control */}
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Project 1 */}
      <div className="bg-black/40 rounded-xl p-5 border border-white/5 hover:shadow-[0_0_28px_#3b82f6] transition">
        <h3 className="text-lg font-bold text-white mb-2">
          POS Management System
        </h3>

        <p className="text-gray-300 text-sm">
          Cafe POS system using Java + MySQL.
        </p>

        <a
          href="https://github.com/Jumnert/JavaCafePos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-3 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition h-10"
        >
          GitHub
        </a>

        <img
          src={pos}
          alt="POS Management System"
          className="w-full h-48 object-cover rounded-xl mt-4"
          loading="lazy"
        />
      </div>

      {/* Project 2 */}
      <div className="bg-black/40 rounded-xl p-5 border border-white/5 hover:shadow-[0_0_28px_#3b82f6] transition">
        <h3 className="text-lg font-bold text-white mb-2">
          Skincare Website
        </h3>

        <p className="text-gray-300 text-sm">
          E-commerce skincare website using Django + MySQL.
        </p>

        <a
          href="https://github.com/Jumnert/E-Commerce_Django"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-3 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition h-10"
        >
          GitHub
        </a>

        <img
          src={skincare}
          alt="Skincare Website"
          className="w-full h-48 object-cover rounded-xl mt-4"
          loading="lazy"
        />
      </div>

      {/* Project 3 */}
      <div className="bg-black/40 rounded-xl p-5 border border-white/5 hover:shadow-[0_0_28px_#3b82f6] transition">
        <h3 className="text-lg font-bold text-white mb-2">
          Another POS System
        </h3>

        <p className="text-gray-300 text-sm">
          Advanced POS with inventory & reporting.
        </p>

        <a
          href="https://github.com/Jumnert/JavaCafePos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-3 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition h-10"
        >
          GitHub
        </a>

        <img
          src={pos}
          alt="POS System"
          className="w-full h-48 object-cover rounded-xl mt-4"
          loading="lazy"
        />
      </div>

    </div>
  </div>
</section>



      </div>
   
    </div> 
    </div>
  );
}
