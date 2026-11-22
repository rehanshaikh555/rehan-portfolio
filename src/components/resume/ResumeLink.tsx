type ResumeLinkProps = {
  className?: string;
  label?: string;
};

export default function ResumeLink({
  className = "",
  label = "Download CV",
}: ResumeLinkProps) {
  return (
    <a
      href="/resume/Rehan_Ahemad_Shaikh_Resume.pdf"
      download="Rehan_Ahemad_Shaikh_Resume.pdf"
      className={className}
    >
      {label}
      <span aria-hidden="true"> ↓</span>
    </a>
  );
}
