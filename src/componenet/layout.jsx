import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import bgVideo from "../assert/heart.mp4";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white p-6 md:p-10 font-sans overflow-x-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header
          className={`
            sticky top-4 z-50 mt-6 h-20 md:h-24
            flex items-center justify-center rounded-xl
            transition-all duration-300
            ${scrolled
              ? "bg-blue-100/20 backdrop-blur-md shadow-[0_0_25px_#3b82f6]"
              : "bg-black/40 backdrop-blur-md shadow-lg"}
          `}
        >
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-10 text-white font-semibold text-base md:text-lg">
              <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/">Home</Link></li>
              <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/education">Education</Link></li>
              <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/skills">Skills</Link></li>
              <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page content renders here */}
        <Outlet />
      </div>
    </div>
  );
}
