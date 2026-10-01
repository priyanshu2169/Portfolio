import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiZap } from "react-icons/fi";
import Reveal from "../common/Reveal";
import SectionTitle from "../common/SectionTitle";
import { skills } from "../../data/portfolioData";
import "./Skills.css";

const icons = {
  Languages: <FiCode />,
  Frontend: <FiLayout />,
  Backend: <FiServer />,
  Databases: <FiDatabase />,
  "Tools & Platforms": <FiTool />,
  Other: <FiZap />,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionTitle label="// skills" title="Tech I Work With" />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="skill-card card">
                <div className="skill-head">
                  <span className="skill-icon">{icons[group.category]}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}