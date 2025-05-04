import React from 'react';
import PricingCard from '../Cards/PricingCard';

const servicesData = [
  {
    title: 'Consulta Medicina Funcional Integrativa',
    subtitle: '1ª consulta',
    price: '360€*',
    services: [
      'Pre-questionário (on-line)',
      '1º tempo consulta',
      '2º tempo consulta',
      'PDF com indicações + plano terapêutico',
      'Outros materiais de apoio quando necessário',
    ],
    note: '*O valor total é correspondente a duas consultas: 2x180€',
  },
  {
    title: 'Consulta Medicina Funcional Integrativa',
    subtitle: '2ª consulta',
    price: '140€',
    services: [
      '1º tempo consulta (reavaliação dos resultados)',
      '2º tempo consulta (adaptação do plano)',
      'Novo PDF com indicações + plano terapêutico',
    ],
  },
  {
    title: 'Sessão Terapia',
    subtitle: '',
    price: '75€/sessão',
    services: ['Sessão 1h', 'Regime Presencial/Online'],
    note: 'Para sessões semanais, pagamento único no início do mês com 5% de desconto',
  },
  {
    title: 'Leitura Mapa Astral + Human Design',
    subtitle: '',
    price: '120€',
    services: ['Sessão 1h30min', 'Regime Presencial/Online'],
  },
];

const packsData = [
  {
    title: 'Saúde Corpo-Mente',
    subtitle: '3 meses',
    price: '1400€',
    services: [
      '1ª Consulta MFI',
      '12 Sessões Terapia Semanais',
      '1 Consulta de Seguimento',
      '1 Leitura Mapa Astral + Human Design',
      'Mentoria / Dúvidas Whatsapp (durante os 3 meses)',
    ],
    note: 'Pagamento em 3 prestações mensais de 480€',
  },
  {
    title: 'Saúde Corpo-Mente',
    subtitle: '6 meses',
    price: '1800€',
    services: [
      '1ª Consulta MFI',
      '12 Sessões Terapia Semanais + 6 Sessões Quinzenais',
      '2 Consultas de Seguimento',
      '1 Leitura Mapa Astral + Human Design',
      'Mentoria / Dúvidas Whatsapp (durante os 6 meses)',
    ],
    note: 'Opções de pagamento: 3 prestações de 610€ ou 6 prestações de 320€',
  },
];

const PriceCards: React.FC = () => {
  return (
    <div className="grid gap-6 p-6">
      {/* Serviços */}
      <div className="space-y-6">
        <h3 className="text-xl text-[var(--color-primary)]">Serviços</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              services={item.services}
              note={item.note}
            />
          ))}
        </div>
      </div>

      {/* Packs */}
      <div className="mt-10 space-y-6">
        <h3 className="text-xl text-[var(--color-primary)]">Packs</h3>
        <div className="flex h-full flex-wrap gap-6">
          {packsData.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              services={item.services}
              note={item.note}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
