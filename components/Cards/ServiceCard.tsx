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
      className={`group-service-card flex h-full flex-col justify-between rounded-lg border border-[var(--color-border-primary)] p-8 text-left shadow-md transition-all duration-300 ${className}`}
    >
      <div>
        <span className="text-sm font-light text-[var(--color-accent)]">
          {subtitle}
        </span>
        <h3 className="mt-3 text-xl text-[var(--color-primary)]">{title}</h3>
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      {!!action && <div className="mt-7">{action}</div>}

      {/* Warm, cozy glow effect */}
      {hoverEffect && (
        <style jsx>{`
          :global(.group-service-card:hover) {
            border-color: transparent;
            background-color: rgba(255, 255, 255, 0.6);
            box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0.05),
              0 0 20px 6px rgba(255, 255, 255, 0.03),
              0 0 30px 8px rgba(255, 255, 255, 0.01);
          }
        `}</style>
      )}
    </div>
  );
};

export default ServiceCard;
