import { useState } from "react";
import pos from "../assert/pos.png";
import skincare from "../assert/skincare.jpg";
import keychain from"../assert/key.jpg";
import Footer from "./footer";
export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "POS Management System",
      desc: "Cafe POS system using Java + MySQL.",
      link: "https://github.com/Jumnert/JavaCafePos",
      img: pos,
    },
    {
      id: 2,
      title: "Skincare Website",
      desc: "E-commerce skincare website using Django + MySQL.",
      link: "https://github.com/Jumnert/E-Commerce_Django",
      img: skincare,
    },
    {
      id: 3,
      title: "KeychainHub Website",
      desc: "create an website using ORM, React.js, Node.js and Python .",
      link: "https://github.com/moni-rem/KeychainHub",
      img: keychain,
    },
  ]);

  const card =
    "bg-white/2 rounded-2xl shadow-lg p-8 border border-white/5 transition-all duration-300";

  return (
    <section id="project" className={`${card} scroll-mt-36`}>
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
        <h2 className="text-blue-300 font-bold text-3xl flex items-center">
          Project
        </h2>

      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-black/40 rounded-xl p-5 border border-white/5 hover:shadow-[0_0_28px_#3b82f6] transition"
            >
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>

              <p className="text-gray-300 text-sm">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-3 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition h-10"
              >
                GitHub
              </a>

              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover rounded-xl mt-4"
                loading="lazy"
              />

            </div>
          ))}
        </div>
      </div>
       <Footer/>
    </section>

   
  );
}
