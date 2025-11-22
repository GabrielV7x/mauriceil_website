import "../styles/navbar.scss";


import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close menu after click
    }
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <img src="/Mauriceil_logo.png" alt="Logo" />
      </div>

      {/* BURGER ICON */}
      <div className="burger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      <ul className={`navbar-menu ${open ? "show" : ""}`}>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("gallery")}>Gallery</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>

    </nav>
  );
}
