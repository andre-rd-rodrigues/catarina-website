type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  action: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  action,
}) => {
  return (
    <div className="rounded-lg border border-[var(--color-border-primary)] p-8 text-left transition-all duration-300 hover:border-[var(--color-accent)]">
      <span className="text-sm font-medium text-[var(--color-accent)]">
        {number}
      </span>
      <h3 className="mt-7 text-xl text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-7">{action}</div>
    </div>
  );
};

export default ServiceCard;
