import Reveal from "./Reveal";

export default function SectionTitle({ title }) {
  return (
    <Reveal>
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800 }}>
          {title}
        </h2>
        <div style={{ width: 60, height: 4, borderRadius: 4, background: "var(--gradient)", marginTop: 12 }} />
      </div>
    </Reveal>
  );
}