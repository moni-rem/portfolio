
import React, { useState } from "react";

export default function Skills(){
      const card =
        "bg-white/2 rounded-2xl shadow-lg p-8 border border-white/5  transition-all duration-300";
    
        const [edit, setEdit] = useState(false);

        const [skill, setSkill] = useState(
    "HTML, CSS, JavaScript, React, Express, Java, SpringBoot, MySQL, UXUI, Django"
  );

 
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

const [tools, setTools] = useState([
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
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



    return(
<section id="skill" className={card}>
  <div className="flex items-center justify-between flex-wrap gap-4">
    <h2 className="flex justify-center items-center text-blue-300 font-bold text-3xl">Skills</h2>

        <button
          onClick={() => setEdit(!edit)}
          className="px-4 py-2 rounded-lg bg-pink-600/30 hover:bg-pink-600/50 transition"
        >
          {edit ? "Save" : "Edit"}
        </button>

    {edit && (
      <div className="flex gap-3 flex-wrap">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="rounded-lg px-3 py-2 bg-black border border-white/10 w-[320px] max-w-full"
          placeholder="Skills: HTML, CSS, React..."
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


      {/* tool */}
          <h2 className="flex justify-center items-center mt-20 font-bold text-blue-300 font-bold text-3xl">Tools</h2>


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
          + Add Tools
        </button>
      )}


    

      {/*  */}
    </section>

    )
}