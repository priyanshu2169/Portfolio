import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { personal } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} <span className="gradient-text">{personal.name}</span>. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={personal.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}