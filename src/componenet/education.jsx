import React, { useState } from "react";

export default function Education() {
  const card =
    "bg-white/1 rounded-2xl shadow-lg p-8 border border-white/5 transition-all duration-300";

  const [edit, setEdit] = useState(false);

  const [languages, setLanguages] = useState([
    { language: "Khmer", level: "Pro-Max" },
    { language: "English", level: "Advance" },
    { language: "Chinese", level: "master" },
  ]);

  const [education, setEducation] = useState([
    {
      text:
        "I graduated from high school in 2025 and am currently pursuing a Bachelor’s degree at ACLEDA University while also studying for an Associate degree at TUX Global, majoring in Computer Science. I am highly motivated to build a strong foundation in software development, problem-solving, and modern technologies. Recently, I completed a two-month internship at ACLEDA University, where I gained practical experience working in a professional environment, improved my technical skills, and learned how to collaborate effectively within a team. This experience strengthened my passion for technology and reinforced my goal of becoming a skilled and reliable software developer.",
    },
  ]);

  return (
    <section id="education" className={card}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-blue-300 font-bold text-3xl border-b border-white/10 pb-3">
          Education
        </h2>

        <button
          onClick={() => setEdit(!edit)}
          className="px-4 py-2 rounded-lg bg-pink-600/30 hover:bg-pink-600/50 transition"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>

      {/* ===== Education Text ===== */}
      <div className="space-y-6">
        {education.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            {edit ? (
              <textarea
                value={item.text}
                onChange={(e) => {
                  const copy = [...education];
                  copy[i].text = e.target.value;
                  setEducation(copy);
                }}
                className="rounded-lg px-3 py-2 bg-black/40 border border-white/10 flex-1 min-h-[140px]"
              />
            ) : (
            <p

              className="relative text-2xl mt-10 text-bold sleading-relaxed font-normal
              bg-[linear-gradient(120deg,rgba(255,255,255,0.20)_20%,rgba(96,165,250,0.90)_35%,rgba(255,255,255,0.20)_50%,rgba(96,165,250,0.90)_65%,rgba(255,255,255,0.20)_80%)]
              bg-[length:300%_100%] bg-clip-text text-transparent
              animate-waterFlow drop-shadow-[0_0_10px_rgba(96,165,250,0.25)]"
            >
              {item.text}
            </p>


            )}

            {edit && (
              <button
                onClick={() => setEducation(education.filter((_, idx) => idx !== i))}
                className="text-red-400 hover:text-red-300"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {edit && (
        <button
          onClick={() => setEducation([...education, { text: "New Education Item" }])}
          className="mt-5 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
          type="button"
        >
          + Add Education
        </button>
      )}

      {/* ===== Languages ===== */}
      <div className="mt-10">
        <h2 className="text-blue-300 font-bold text-3xl border-b border-white/10 pb-3">
          Languages
        </h2>

        <div className="mt-6 space-y-4">
          {languages.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {edit ? (
                <>
                  <input
                    value={item.language}
                    onChange={(e) => {
                      const copy = [...languages];
                      copy[i].language = e.target.value;
                      setLanguages(copy);
                    }}
                    placeholder="Language"
                    className="rounded-lg px-3 py-2 border border-white/10 w-40 bg-black/40 text-white "
                  />

                  <input
                    value={item.level}
                    onChange={(e) => {
                      const copy = [...languages];
                      copy[i].level = e.target.value;
                      setLanguages(copy);
                    }}
                    placeholder="Level (Pro, Intermediate...)"
                    className="rounded-lg px-3 py-2 bg-black/40 border border-white/10 flex-1 text-white"
                  />
                </>
              ) : (
                <div className="flex items-center gap-3 flex-wrap ml-20">
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-600/20 text-blue-200 border border-blue-500/30">
                    {item.language}
                  </span>
                  <span className="text-gray-300 text-sm ml-20">{item.level}</span>
                </div>
              )}

              {edit && (
                <button
                  onClick={() => setLanguages(languages.filter((_, idx) => idx !== i))}
                  className="text-red-400 hover:text-red-300"
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {edit && (
          <button
            onClick={() =>
              setLanguages([...languages, { language: "New Language", level: "Level" }])
            }
            className="mt-5 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
            type="button"
          >
            + Add Language
          </button>
        )}
      </div>
    </section>
  );
}
