import ContactHero from "./ContactHero";
import ContactEmail from "./ContactEmail";
import ContactSocials from "./ContactSocials";
import ContactInformation from "./ContactInformation";
import ContactClosing from "./ContactClosing";
import ResumeLink from "@/components/resume/ResumeLink";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />

      <div className="contact-details container-main">
        <div className="mb-10">
          <ResumeLink
            label="Download my résumé"
            className="inline-flex items-center border border-current px-6 py-4 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[var(--color-graphite)] hover:text-[var(--color-warm-white)]"
          />
        </div>

        <ContactEmail />

        <div className="contact-secondary">
          <ContactSocials />
          <ContactInformation />
        </div>
      </div>

      <ContactClosing />
    </div>
  );
}
