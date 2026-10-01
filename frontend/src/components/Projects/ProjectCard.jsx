import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import Reveal from "../common/Reveal";

export default function ProjectCard({ project, index }) {
  const { title, badge, description, tech, github, live } = project;

  return (
    <Reveal delay={index * 0.1}>
      <article className="project-card card">
        <div className="project-top">
          <span className="project-folder"><FiFolder /></span>
          <div className="project-links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
                <FiGithub />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" aria-label="Live demo">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <span className="project-badge">{badge}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}