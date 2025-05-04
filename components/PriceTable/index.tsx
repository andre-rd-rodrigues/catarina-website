import React from 'react';

const servicesData = [
  {
    title: 'Consulta Medicina Funcional Integrativa',
    subtitle: '1ª consulta',
    price: '360€',
    services: [
      'Pre-questionário (on-line)',
      '1º tempo consulta',
      '2º tempo consulta',
      'PDF com indicações + plano terapêutico',
      'Outros materiais de apoio quando necessário',
    ],
    note: '2x180€',
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
    note: '-',
  },
  {
    title: 'Sessão Terapia',
    subtitle: '',
    price: '75€/sessão',
    services: ['Sessão 1h', 'Regime Presencial/Online'],
    note: 'Semanal: pagamento único no início do mês = 5% desconto',
  },
  {
    title: 'Leitura Mapa Astral + Human Design',
    subtitle: '',
    price: '120€',
    services: ['Sessão 1h30min', 'Regime Presencial/Online'],
    note: '-',
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
    note: '3x 480€',
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
    note: '3x 610€ ou 6x 320€',
  },
];

const PriceCards: React.FC = () => {
  return (
    <div className="grid gap-6 p-6">
      {/* Serviços */}
      <div className="space-y-6">
        <h3 className="text-xl text-[var(--color-primary)]">Serviços</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
            >
              <h2 className="mb-1 text-center text-lg">{item.title}</h2>
              {item.subtitle && (
                <p className="text-center text-sm font-semibold uppercase tracking-[2px] text-[var(--color-accent)]">
                  {item.subtitle}
                </p>
              )}
              <div className="mb-3 mt-5 text-center text-lg text-[var(--color-danger)]">
                {item.price}
              </div>
              <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-gray-800">
                {item.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
              {item.note && (
                <>
                  <div className="my-7 h-[1px] w-full bg-[var(--color-accent)] opacity-25"></div>
                  <div className="mt-2 text-xs text-gray-500">{item.note}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Packs */}
      <div className="space-y-6">
        <h3 className="text-xl text-[var(--color-primary)]">Packs</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {packsData.map((item, index) => (
            <div
              key={index}
              className="rounded-sm border border-gray-300 bg-white p-4 shadow-sm"
            >
              <h2 className="mb-1 text-base">{item.title}</h2>
              {item.subtitle && (
                <h4 className="mb-2 text-sm text-gray-600">{item.subtitle}</h4>
              )}
              <div className="mb-3 text-lg text-gray-900">{item.price}</div>
              <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-gray-800">
                {item.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
              {item.note && (
                <div className="mt-2 text-xs text-gray-500">{item.note}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
