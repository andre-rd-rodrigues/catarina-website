import React from 'react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

interface InfoCardProps {
  icon: IconName;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
      <div className="flex items-center gap-3">
        <DynamicIcon name={icon} color={'var(--color-accent)'} size={24} />
        <h3 className="text-xl text-gray-800">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
