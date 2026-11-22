import { contactProfile } from "@/data/contact";

export default function ContactInformation() {
  return (
    <section className="contact-information">
      <div>
        <span className="contact-label">BASED IN</span>
        <p>{contactProfile.location}</p>
      </div>
      <div>
        <span className="contact-label">CURRENTLY</span>
        <p>{contactProfile.availability}</p>
      </div>
    </section>
  );
}
