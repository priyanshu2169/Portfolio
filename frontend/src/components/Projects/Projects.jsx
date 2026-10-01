import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle label="// projects" title="Things I've Built" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}