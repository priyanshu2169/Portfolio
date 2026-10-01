import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Reveal from "../common/Reveal";
import SectionTitle from "../common/SectionTitle";
import { personal } from "../../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const info = [
    { icon: <FiMail />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiPhone />, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: <FiMapPin />, label: "Location", value: personal.location },
  ];

  return (
    <section id="contact" className="section skills-section">
      <div className="container">
        <SectionTitle label="// contact" title="Let's Work Together" />

        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <p className="contact-intro">
                I'm open to Software Developer and Backend Developer roles. Have
                an opportunity or a project in mind? Send me a message.
              </p>

              {info.map((item) => (
                <div key={item.label} className="contact-item card">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <span>{item.label}</span>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary">
                <FiSend /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}