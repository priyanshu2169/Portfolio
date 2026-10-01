import { FiBookOpen } from "react-icons/fi";
import Reveal from "../common/Reveal";
import SectionTitle from "../common/SectionTitle";
import { education } from "../../data/portfolioData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section skills-section">
      <div className="container">
        <SectionTitle label="// education" title="My Academic Journey" />

        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.school + e.period} delay={i * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot"><FiBookOpen /></div>
                <div className="timeline-card card">
                  <span className="timeline-period">{e.period}</span>
                  <h3>{e.school}</h3>
                  <p className="timeline-degree">{e.degree}</p>
                  {e.score && <span className="tag">Score: {e.score}</span>}
                  {e.place && <p className="timeline-place">{e.place}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}