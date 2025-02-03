type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  action: React.ReactNode;
  hoverEffect?: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  action,
  hoverEffect = true,
}) => {
  return (
    <div className="group rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-alt)] p-8 text-left transition-all duration-500">
      <span className="text-sm font-medium text-[var(--color-accent)]">
        {number}
      </span>
      <h3 className="mt-7 text-xl text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-7">{action}</div>

      {/* Warm, cozy glow effect */}
      {hoverEffect && (
        <style jsx>{`
          :global(.group:hover) {
            border-color: transparent;
            background-color: rgba(255, 248, 220, 1);
            box-shadow:
              0 0 60px 20px rgba(255, 250, 205, 0.6),
              0 0 120px 40px rgba(255, 228, 181, 0.4),
              0 0 200px 60px rgba(255, 239, 213, 0.3),
              0 0 300px 80px rgba(255, 218, 185, 0.2),
              0 0 400px 100px rgba(255, 222, 173, 0.15);
          }
        `}</style>
      )}
    </div>
  );
};

export default ServiceCard;
