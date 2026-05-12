import React, { useMemo } from "react";

const STATIC_EDUCATION = [
  {
    id: 1,
    school_name: "ACLEDA University of Business",
    start_year: "2024",
    end_year: "2028",
    degree: "Bachelor’s Degree",
    field: "Computer Science",
    description:
      "Currently pursuing a Bachelor’s degree and building a strong foundation in software development, problem-solving, and modern technologies.",
  },
  {
    id: 2,
    school_name: "TUX Global Institute",
    start_year: "2025",
    end_year: "2026",
    degree: "Associate Degree",
    field: "Computer Science",
    description:
      "Studying alongside university to strengthen practical development skills and teamwork experience.",
  },
  {
    id: 3,
    school_name: "High School",
    start_year: "2018",
    end_year: "2024",
    degree: "High School Graduate",
    field: "",
    description:
      "Graduated in 2024 and continued my path into technology and software development.",
  },
];

export default function Education() {
  const education = useMemo(() => STATIC_EDUCATION, []);

  return (
    <section id="education" className="min-h-screen bg-black text-white py-16 px-6 scroll-mt-36">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-blue-400 mb-12 text-center">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 space-y-10">
          {education.map((e) => (
            <div key={e.id} className="relative pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/40" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/20">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {e.school_name}
                  </h3>

                  <span className="text-sm text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                    {e.start_year} - {e.end_year}
                  </span>
                </div>

                <p className="text-gray-300 mt-2">
                  {e.degree} {e.field && `• ${e.field}`}
                </p>

                {e.description && (
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {e.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {education.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No education data available.
          </p>
        )}
      </div>
    </section>
  );
}
