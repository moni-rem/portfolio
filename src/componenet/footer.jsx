import React from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-400">
            Rem Phearomthunmony
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-sm">
            Passionate Full-Stack Developer focused on building modern,
            scalable, and user-friendly applications.
          </p>
        </div>

        {/* Center - Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-400 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">
            Connect With Me
          </h3>

          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-3 rounded-full hover:bg-blue-500/20 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-3 rounded-full hover:bg-blue-500/20 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-3 rounded-full hover:bg-blue-500/20 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="mailto:your@email.com"
              className="bg-white/5 p-3 rounded-full hover:bg-blue-500/20 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mony. Made with{" "}
        <Heart className="inline text-red-500" size={14} /> using React & Tailwind.
      </div>
    </footer>
  );
}