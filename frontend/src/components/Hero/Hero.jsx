import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import profile from "../../assets/profile.jpg";
import { personal } from "../../data/portfolioData";
import "./Hero.css";

function useTypewriter(words, speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDeleting(false); setI(i + 1); }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(personal.roles);

  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            <FiMapPin /> {personal.location}
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="hero-role">
            {role}<span className="cursor">|</span>
          </h2>
          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={personal.resume} download className="btn btn-outline">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={personal.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="photo-ring">
            <img src={profile} alt={personal.name} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}