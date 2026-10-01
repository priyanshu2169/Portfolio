import { FiAward } from "react-icons/fi";
import Reveal from "../common/Reveal";
import SectionTitle from "../common/SectionTitle";
import { certifications } from "../../data/portfolioData";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle label="// certifications" title="Certificates & Learning" />

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="cert-card card">
                <div className="cert-icon"><FiAward /></div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}