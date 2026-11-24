import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({ number, title, meta }) {
  return (
    <div className="section-heading">
      <Reveal>
        <div className="eyebrow">{number} / index</div>
        <h2 className="section-heading__title">{title}</h2>
      </Reveal>
      <Reveal delay={0.12} className="section-heading__meta">{meta}</Reveal>
    </div>
  );
}
