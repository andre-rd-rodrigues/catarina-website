import clsx from 'clsx';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
  color?: string;
};

const SectionTitle = ({ title, subtitle, className, color }: SectionTitleProps) => {
  return (
    <div className={className}>
      <h2 
        className={clsx(
          "text-md font-ibm-plex-sans mb-5 uppercase tracking-[5px]",
          color ? color : "text-[var(--color-accent)]"
        )}
      >
        {subtitle}
      </h2>
      <h3 
        className={clsx(
          "text-4xl",
          color ? color : "text-[var(--color-primary)]"
        )}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
