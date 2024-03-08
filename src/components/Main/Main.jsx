import "./Main.css";
import Bio from "../Bio/Bio";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export default function Main() {
  return (
    <div className="Main">
      <Bio />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
