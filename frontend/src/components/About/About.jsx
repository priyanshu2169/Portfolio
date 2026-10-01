import { FiCode, FiServer, FiCpu } from "react-icons/fi";
import Reveal from "../common/Reveal";
import SectionTitle from "../common/SectionTitle";
import { about } from "../../data/portfolioData";
import "./About.css";

const highlights = [
  { icon: <FiCode />, title: "Full-Stack", text: "React frontends with Node.js and Express backends." },
  { icon: <FiServer />, title: "Backend Focus", text: "REST APIs, authentication, and MVC architecture." },
  { icon: <FiCpu />, title: "AI/ML Integration", text: "Bringing ML models into real web products." },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle label="// about me" title="Who I Am" />

        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>{about.summary}</p>
              <p className="about-goal">{about.goal}</p>

              <div className="about-stats">
                {about.stats.map((s) => (
                  <div key={s.label} className="stat card">
                    <h3 className="gradient-text">{s.value}</h3>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="highlight card">
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}