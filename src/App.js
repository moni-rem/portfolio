import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componenet/layout";
import Home from "./componenet/home";
import Education from "./componenet/education";
import Skills from "./componenet/skills";
import Projects from "./componenet/projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
