import Reveal from "./Reveal";

export default function SectionTitle({ label, title }) {
  return (
    <Reveal>
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent-2)", fontSize: "0.85rem", marginBottom: 8 }}>
          {label}
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800 }}>
          {title}
        </h2>
        <div style={{ width: 60, height: 4, borderRadius: 4, background: "var(--gradient)", marginTop: 12 }} />
      </div>
    </Reveal>
  );
}