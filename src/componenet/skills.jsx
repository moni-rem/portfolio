import React from "react";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  {name: "c#",icon: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",},

];

const tools = [
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://i.pinimg.com/736x/6d/79/25/6d792532e621d7f5faaed966c555abc1.jpg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  


];

export default function Skills() {
  const card =
    "bg-white/2 rounded-2xl shadow-lg p-8 border border-white/5  transition-all duration-300";

  return (
    <section id="skill" className={`${card} scroll-mt-36`}>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <h2 className="flex justify-center items-center text-blue-300 font-bold text-3xl">
          Skills
        </h2>
      </div>

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
            <img src={s.icon} alt={s.name} className="w-14 h-14 object-contain" />
            <p className="font-semibold text-white">{s.name}</p>
          </div>
        ))}
      </div>

      <h2 className="flex justify-center items-center mt-20 text-blue-300 font-bold text-3xl">
        Tools
      </h2>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {tools.map((s, index) => (
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
            <img src={s.icon} alt={s.name} className="w-14 h-14 object-contain" />
            <p className="font-semibold text-white">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
