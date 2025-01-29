type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={className}>
      <h2 className="text-md font-ibm-plex-sans mb-5 uppercase tracking-[5px] text-[var(--color-accent)]">
        {subtitle}
      </h2>
      <h3 className="text-4xl text-[var(--color-primary)]">{title}</h3>
    </div>
  );
};

export default SectionTitle;
