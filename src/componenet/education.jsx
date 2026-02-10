import React, { useState } from "react";

export default function Education() {
  const card =
    "bg-white/2 rounded-2xl shadow-lg p-8 border border-white/5 transition-all duration-300";

  const [edit, setEdit] = useState(false);
  const [languages, setLanguages] = useState("Chinese, Khmer, English");

  const [education, setEducation] = useState([
    { year: "2024", text: "Graduated from High School" },
    { year: "2025", text: "E-Commerce using Django" },
    { year: "2025", text: "POS System using Django" },
  ]);

  return (
    <section id="education" className={card}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-blue-300 font-bold text-3xl border-b border-white/10 pb-3">
          Education
        </h2>

        {/* Optional edit button */}
        <button
          onClick={() => setEdit(!edit)}
          className="px-4 py-2 rounded-lg bg-pink-600/30 hover:bg-pink-600/50 transition"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>

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
                  className="rounded-lg px-3 py-2 border border-white/10 w-24 bg-black/40"
                />
                <input
                  value={item.text}
                  onChange={(e) => {
                    const copy = [...education];
                    copy[i].text = e.target.value;
                    setEducation(copy);
                  }}
                  className="rounded-lg px-3 py-2 bg-black/40 border border-white/10 flex-1"
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
          onClick={() => setEducation([...education, { year: "2026", text: "New Item" }])}
          className="mt-5 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
          type="button"
        >
          + Add Education
        </button>
      )}

      {/* Language chips */}
      <div className="mt-8">
        <h3 className="text-white font-semibold mb-3">Languages</h3>

        {edit && (
          <input
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            className="w-full mb-4 rounded-lg px-3 py-2 bg-black/40 border border-white/10"
            placeholder="Chinese, Khmer, English"
          />
        )}

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
    </section>
  );
}
