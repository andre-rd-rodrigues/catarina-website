'use client';

import FAQs from '@/components/FAQS';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SplitLeaf from '@/components/SplitLeaf';
import { FAQS } from '@/constants/faqs';
import { HOMEPAGE_CHOOSE_US_SECTION } from '@/constants/homepage';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
} from '@/motion/variants';
import { motion } from 'motion/react';

function Services() {
  return (
    <Page>
      <Page.Title
        src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Serviços"
      />
      {/* Especialidades */}
      <Section>
        {/* Consulta Medicina Funcional Integrativa */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Consulta Medicina Funcional Integrativa"
              subtitle="01"
              animation="left"
            />
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                <strong>Primeira consulta (consulta a dois tempos):</strong>{' '}
              </p>
              <p>
                <strong>Valor:</strong> 140€x2 = 280€
              </p>
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  Primeiro tempo: avaliação da história do paciente e exploração
                  dos problemas, com requisição de exames complementares e
                  introdução aos princípios base de cuidado com a saúde.
                </li>
                <li>
                  Segundo tempo: entrega de um plano terapêutico personalizado
                  em PDF com hábitos, sugestões nutricionais, ajustes de
                  medicação e suplementação, além de questões para reflexão.
                </li>
              </ul>
              <p>
                <strong>Consultas de seguimento:</strong>
              </p>
              <p>
                <strong>Valor:</strong> 120€
              </p>
              <p>
                Reavaliação do estado de saúde e ajustes no plano terapêutico
                conValor:
              </p>
            </motion.div>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <SplitLeaf
              images={[
                'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              ]}
            />
          </div>
        </div>

        {/* Sessões de Terapia */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D',
                'https://images.unsplash.com/photo-1637245048732-adf1a547835e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              ]}
            />
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="order-first flex-1 md:order-last"
          >
            <Section.Title
              title="Sessões de Terapia (Saúde Mental)"
              subtitle="02"
              animation="left"
            />
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                <strong>Presencial ou online. Semanal ou quinzenal.</strong>
              </p>
              <p>
                <strong>Valor:</strong> 70€/sessão (50min)
              </p>
              <p>
                Inspiradas na psicologia analítica de Jung, estas sessões
                promovem autoconhecimento, transformação e integração das partes
                conscientes e inconscientes. Cada sessão é adaptada ao paciente,
                com ferramentas específicas ao seu modo de expressão.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Pack Corpo-Mente */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Pack Corpo-Mente"
              subtitle="03"
              animation="left"
            />
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                Para quem deseja um cuidado complementar e contínuo do corpo,
                mente e espírito. Válido por 1 ano, não transmissível.
              </p>
              <p>
                <strong>3 meses - 1200€</strong>
              </p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Consulta médica inicial em dois tempos</li>
                <li>12 sessões semanais de terapia</li>
                <li>1 consulta de seguimento final</li>
                <li>Opcional: leitura de Mapa Astral + Human Design</li>
              </ul>
              <p>
                <strong>6 meses - 1700€</strong>
              </p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Consulta médica inicial em dois tempos</li>
                <li>12 sessões semanais + 6 sessões quinzenais</li>
                <li>2 consultas de seguimento (aos 3 e 6 meses)</li>
                <li>Opcional: leitura de Mapa Astral + Human Design</li>
              </ul>
            </motion.div>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
        </div>

        {/* Mapa Astral + Human Design */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="order-first flex-1 md:order-last"
          >
            <Section.Title
              title="Mapa Astral + Human Design"
              subtitle="04"
              animation="left"
            />
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                <strong>Valor:</strong> 100€
              </p>
              <p>
                Leitura intuitiva dos mapas astrológico e de Human Design com
                foco em questões de saúde. Ferramentas de autoconhecimento para
                maior alinhamento e bem-estar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Promoção de serviços */}
      <Section className="bg-[var(--color-secondary)]">
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative mb-10 rounded-md bg-[url('https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/man-pouring-tea-during-tea-ceremony-at-home-NSQZ9AE.jpg')] bg-cover bg-center p-10 md:p-20"
        >
          <div className="absolute inset-0 rounded-md bg-emerald-950/45"></div>
          <div className="relative z-10">
            <Section.Title
              subtitle="sentir apoio"
              title="Avoid Sickness, the Natural Way"
              color="text-white"
              className="mb-20"
              animation="left"
            />
            <motion.div
              variants={containerVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-12 md:grid-cols-2"
            >
              {HOMEPAGE_CHOOSE_US_SECTION.map(
                ({ title, description }, index) => (
                  <motion.div
                    variants={fadeInSlideInVariant}
                    key={index}
                    className="flex-1 border-b border-gray-600 pb-10"
                  >
                    <h5 className="mb-4 text-xl text-white">{title}</h5>
                    <p className="text-gray-300">{description}</p>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* FAQS */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Perguntas Frequentes"
              subtitle="FAQS"
              animation="left"
              className="mb-6"
            />
            <p className="mb-8">
            Encontre respostas para as perguntas mais comuns sobre medicina
            integrativa e os meus serviços. Se tiver mais dúvidas, não hesite em
            contactar-me.
            </p>
            <FAQs items={FAQS} />
          </motion.div>
        </div>
      </Section>
    </Page>
  );
}

export default Services;
