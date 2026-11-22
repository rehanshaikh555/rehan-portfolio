import { contactProfile } from "@/data/contact";

export default function ContactHero() {
  return (
    <section className="contact-hero container-main">
      <p className="contact-eyebrow">{contactProfile.eyebrow}</p>
      <h1>{contactProfile.title}</h1>
      <p className="contact-description">{contactProfile.description}</p>
    </section>
  );
}
