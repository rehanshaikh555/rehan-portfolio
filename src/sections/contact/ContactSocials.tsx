import { contactProfile } from "@/data/contact";

export default function ContactSocials() {
  return (
    <section className="contact-socials">
      <span className="contact-label">ELSEWHERE</span>
      <div className="contact-social-list">
        {contactProfile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{social.label}</span>
            <span className="contact-social-value">{social.value}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
