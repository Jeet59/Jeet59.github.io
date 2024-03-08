import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="Navbar">
      <div className="NavbarItems">
        <div onClick={() => scrollToComponent("Bio")}>BIO</div>
        <div onClick={() => scrollToComponent("Projects")}>PROJECTS</div>
        <div onClick={() => scrollToComponent("Skills")}>SKILLS</div>
        <div onClick={() => scrollToComponent("Contact")}>CONTACT</div>
      </div>
    </div>
  );
}
