import { contactProfile } from "@/data/contact";

export default function ContactEmail() {
  return (
    <section className="contact-email">
      <span className="contact-label">DIRECT EMAIL</span>
      <a href={`mailto:${contactProfile.email}`}>
        {contactProfile.email}
        <span aria-hidden="true"> ↗</span>
      </a>
    </section>
  );
}
