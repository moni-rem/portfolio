import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import profileImg from "../assert/profile.jpg"; // adjust path if needed

export default function Home() {
  const [edit, setEdit] = useState(false);

  const sentence = "Hello, Welcome to my homepage";

  // ✅ Controls to force loop (reliable)
  const controls = useAnimation();

  useEffect(() => {
    let alive = true;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      while (alive) {
        await controls.start("show");     
        await sleep(1800);                 
        await controls.start("hidden");    
        await sleep(300);                
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, [controls]);

  // ✅ Parent variant (stagger children)
  const container = {
    hidden: {
      transition: { when: "afterChildren" },
    },
    show: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 18, transition: { duration: 0.25 } },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const card =
    "bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/10 transition-all duration-300";

  return (
    <>
      {/* Welcome */}
      <div className="text-center mt-16">
        {/* ✅ Looping word-by-word title */}
        <motion.h2
          variants={container}
          initial="hidden"
          animate={controls}
          className="text-3xl md:text-5xl font-extrabold text-blue-400 flex flex-wrap justify-center gap-2"
        >
          {sentence.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* ✅ Looping subtitle */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-4 text-base md:text-lg text-gray-300"
        >
          Frontend Developer • React • Tailwind
        </motion.p>
      </div>

      <div className="mt-10 space-y-8">
        {/* ===== Profile ===== */}
        <section id="profile" className={card}>
           <button
                onClick={() => setEdit(!edit)}
                className="mt-4 px-4 py-2 rounded-lg bg-pink-100/20 hover:bg-blue-100/10 transition font-semibold"
              >
                {edit ? "Save" : "Edit"}
              </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profile Pic */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={profileImg}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-2 border-blue-200 shadow-md"
              />
              <p className="text-pink-400 text-xl font-semibold">
                A cat programmer
              </p>
            </div>

            {/* About */}
            <div>
              <h2 className="text-blue-300 font-bold text-3xl mb-6">About Me</h2>

              <div className="flex items-start gap-6 py-2">
                

                <div className="text-sm text-white flex-1">
                  {edit ? (
                    <input
                      defaultValue="My name is Mony, 20 years old. Currently major in Computer Science in TUX Global Institute."
                      className="w-full rounded-lg px-3 py-2 text-sm border border-white/10 outline-none bg-black/40"
                    />
                  ) : (
                    <span className="text-white text-lg gap-4">
                         I am a motivated junior web developer with a strong foundation
                      in front-end and back-end development. I build responsive 
                      applications using HTML, CSS, JavaScript, and React, and 
                      develop reliable back-end systems with Django,
                      Java, Spring Boot, and MySQL. I have hands-on
                      experience with real-world projects such as e-commerce and
                      POS systems, learn quickly, and write clean, maintainable code.
                      I am seeking a junior developer or internship role where I can
                      grow and contribute to a collaborative team.
                    </span>
                  )}
                </div>
              </div>

             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
