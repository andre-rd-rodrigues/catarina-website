import React from 'react';

const PriceTable: React.FC = () => {
  const borderColor = 'border-gray-300';
  const tableColumnTitleBgColor = 'bg-[#56867386]';

  return (
    <div className="overflow-auto p-4">
      <table className={`min-w-[1000px] border ${borderColor} text-sm`}>
        <thead>
          <tr className={tableColumnTitleBgColor}>
            <th className={`border ${borderColor} p-2`} rowSpan={2}>
              Serviços
            </th>
            <th className={`border ${borderColor} p-2`} colSpan={2}>
              Consulta Medicina Funcional Integrativa
            </th>
            <th className={`border ${borderColor} p-2`} rowSpan={2}>
              Sessão Terapia
            </th>
            <th className={`border ${borderColor} p-2`} rowSpan={2}>
              Leitura Mapa Astral + Human Design
            </th>
          </tr>
          <tr className={tableColumnTitleBgColor}>
            <th className={`border ${borderColor} p-2`}>1ª consulta</th>
            <th className={`border ${borderColor} p-2`}>2ª consulta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border ${borderColor} p-2 font-semibold`}>
              O que inclui / Info
            </td>
            <td className={`border ${borderColor} p-2`}>
              ● Pre-questionário (on-line)
              <br />
              ● 1º tempo consulta
              <br />
              ● 2º tempo consulta
              <br />
              ● PDF com indicações + plano terapêutico
              <br />● Outros materiais de apoio quando necessário
            </td>
            <td className={`border ${borderColor} p-2`}>
              ● 1º tempo consulta (reavaliação dos resultados)
              <br />
              ● 2º tempo consulta (adaptação do plano)
              <br />● Novo PDF com indicações + plano terapêutico
            </td>
            <td className={`border ${borderColor} p-2`}>
              Sessão 1h
              <br />
              Regime Presencial/Online
            </td>
            <td className={`border ${borderColor} p-2`}>
              Sessão 1h30min
              <br />
              Regime Presencial/Online
            </td>
          </tr>
          <tr>
            <td className={`border ${borderColor} p-2 font-semibold`}>Valor</td>
            <td className={`border ${borderColor} p-2`}>360€</td>
            <td className={`border ${borderColor} p-2`}>140€</td>
            <td className={`border ${borderColor} p-2`}>75€/sessão</td>
            <td className={`border ${borderColor} p-2`}>120€</td>
          </tr>
          <tr>
            <td className={`border ${borderColor} p-2 font-semibold`}>
              Opção pagamento
            </td>
            <td className={`border ${borderColor} p-2`}>2x180€</td>
            <td className={`border ${borderColor} p-2`}>-</td>
            <td className={`border ${borderColor} p-2`}>
              Semanal: pagamento único no início do mês = 5% desconto
            </td>
            <td className={`border ${borderColor} p-2`}>-</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="mb-2 text-lg">
          Opções para quem quer uma abordagem mais integrada e completa:
        </h2>
        <table className={`min-w-[800px] border ${borderColor} text-sm`}>
          <thead>
            <tr className={tableColumnTitleBgColor}>
              <th className={`border ${borderColor} p-2`} rowSpan={2}>
                Pacote
              </th>
              <th className={`border ${borderColor} p-2`} colSpan={2}>
                Saúde Corpo-Mente
              </th>
            </tr>
            <tr className={tableColumnTitleBgColor}>
              <th className={`border ${borderColor} p-2`}>3 meses</th>
              <th className={`border ${borderColor} p-2`}>6 meses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`border ${borderColor} p-2 font-semibold`}>
                O que inclui
              </td>
              <td className={`border ${borderColor} p-2`}>
                ● 1ª Consulta MFI
                <br />
                ● 12 Sessões Terapia Semanais
                <br />
                ● 1 Consulta de Seguimento
                <br />
                ● 1 Leitura Mapa Astral + Human Design
                <br />+ Mentoria / Dúvidas Whatsapp (durante os 3 meses)
              </td>
              <td className={`border ${borderColor} p-2`}>
                ● 1ª Consulta MFI
                <br />
                ● 12 Sessões Terapia Semanais + 6 Sessões Quinzenais
                <br />
                ● 2 Consultas de Seguimento
                <br />
                ● 1 Leitura Mapa Astral + Human Design
                <br />+ Mentoria / Dúvidas Whatsapp (durante os 6 meses)
              </td>
            </tr>
            <tr>
              <td className={`border ${borderColor} p-2 font-semibold`}>
                Valor
              </td>
              <td className={`border ${borderColor} p-2`}>1400€</td>
              <td className={`border ${borderColor} p-2`}>1800€</td>
            </tr>
            <tr>
              <td className={`border ${borderColor} p-2 font-semibold`}>
                Opções Pagamento
              </td>
              <td className={`border ${borderColor} p-2`}>3x 480€</td>
              <td className={`border ${borderColor} p-2`}>
                3x 610€ ou 6x 320€
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
