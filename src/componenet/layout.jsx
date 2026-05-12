import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WhiteDotBackground from "./WhiteDotBackground";


export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white p-6 md:p-10 font-sans overflow-x-hidden scroll-smooth">
      <WhiteDotBackground />

      {/* overlay */}
      <div className="fixed inset-0 z-0 bg-black/15 pointer-events-none" />

      {/* content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header
          className={`
            fixed top-0 left-1/2 z-50 mt-10 h-20 md:h-24 w-[92%] max-w-6xl -translate-x-1/2 px-6 md:px-10
            flex items-center justify-center rounded-xl
            transition-all duration-300
            ${scrolled
              ? "bg-blue-100/20 backdrop-blur-md shadow-[0_0_25px_#3b82f6]"
              : "bg-black/40 backdrop-blur-md shadow-lg"}
          `}
        >
          <nav>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-10 text-white font-semibold text-base md:text-lg">
          {/* Route links kept here in case you want them back later.
          <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/">Home</Link></li>
          <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/education">Education</Link></li>
          <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/skills">Skills</Link></li>
          <li><Link className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" to="/projects">Projects</Link></li>
          */}
          <li><a className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" href="#profile">Home</a></li>
          <li><a className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" href="#education">Education</a></li>
          <li><a className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" href="#skill">Skills</a></li>
          <li><a className="px-4 py-2 rounded-lg hover:bg-blue-600 transition" href="#project">Projects</a></li>

          <li>
          <a
            href="https://github.com/moni-rem"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Github
          </a>
        </li>

          <li>
            <a
              href="/PHEAROMTHUNMONY_REM_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View CV
            </a>
          </li>
    </ul>
            
          </nav>
        </header>

        <main className="pt-32 md:pt-36">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
