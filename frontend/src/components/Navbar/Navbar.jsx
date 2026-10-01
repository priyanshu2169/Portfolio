import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import { personal } from "../../data/portfolioData";
import "./Navbar.css";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="gradient-text">{"<"}PT{" />"}</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={personal.resume} target="_blank" rel="noreferrer" className="btn btn-primary nav-cta">
            Resume
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}