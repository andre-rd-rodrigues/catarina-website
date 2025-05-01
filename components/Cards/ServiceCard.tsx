type ServiceCardProps = {
  subtitle: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  subtitle,
  title,
  description,
  action,
  hoverEffect = true,
  className = '',
}) => {
  return (
    <div
      className={`group-service-card rounded-lg border border-[var(--color-border-primary)] p-8 text-left shadow-md transition-all duration-300 ${className}`}
    >
      <span className="text-sm font-medium text-[var(--color-accent)]">
        {subtitle}
      </span>
      <h3 className="mt-7 text-xl text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
      {!!action && <div className="mt-7">{action}</div>}

      {/* Warm, cozy glow effect */}
      {hoverEffect && (
        <style jsx>{`
          :global(.group-service-card:hover) {
            border-color: transparent;
            background-color: rgba(255, 255, 255, 0.3); /* branco translúcido */
            box-shadow: 0 0 50px 4px rgba(255, 255, 255, 0.1),
              0 0 10px 6px rgba(250, 250, 250, 0.05),
              0 0 20px 8px rgba(245, 245, 245, 0.03);
          }
        `}</style>
      )}
    </div>
  );
};

export default ServiceCard;
