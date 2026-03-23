import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const perguntas = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou.',
    resposta: 'O que costuma não funcionar é a terapia genérica para uma dor específica. Dependência emocional exige um trabalho direcionado para os padrões de controle, medo de abandono e comunicação dentro do vínculo. Esse é o foco do meu método. Se você saiu de uma terapia anterior sem essa clareza, provavelmente o trabalho foi diferente do que você precisava.',
  },
  {
    pergunta: 'Funciona online?',
    resposta: 'Funciona. O ambiente online remove barreiras práticas e, para muitas mulheres, cria mais segurança para falar sobre temas delicados sem precisar sair de casa. O processo é o mesmo, a presença é real.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta: 'Prefiro não colocar um número aqui sem antes conversar com você, porque o processo e a frequência variam. O que posso dizer é que o custo emocional de mais um ano no mesmo ciclo de brigas, medo e vigilância é maior do que qualquer sessão. Se o investimento financeiro for uma preocupação real, me conta quando a gente conversar, e vemos juntas o que é viável.',
  },
  {
    pergunta: 'Quanto tempo leva para ver resultado?',
    resposta: 'Resultados iniciais começam a aparecer nas primeiras semanas, mas transformações estruturais levam tempo real. A maioria das mulheres percebe mudanças consistentes entre 3 e 6 meses de processo. Não existe atalho honesto aqui.',
  },
  {
    pergunta: 'Tenho medo de reviver traumas.',
    resposta: 'Esse medo é legítimo e eu o respeito. O trabalho que faço não força nenhuma abertura que você não está pronta para fazer. Vamos no seu ritmo, passo a passo. O objetivo nunca é reviver a dor, mas entender o que ela construiu para que você possa escolher um caminho diferente.',
  },
  {
    pergunta: 'Como funciona a privacidade?',
    resposta: 'Tudo o que você compartilha nas sessões é protegido pelo sigilo profissional. Nenhuma informação é divulgada, registrada de forma identificável ou compartilhada com terceiros. O espaço terapêutico é seu, integralmente.',
  },
]

function FaqItem({ pergunta, resposta, isOpen, onToggle }: {
  pergunta: string
  resposta: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(45,30,16,0.1)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingTop: '1.625rem',
          paddingBottom: '1.625rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          color: '#2D1E10',
          lineHeight: 1.35,
          fontWeight: 400,
        }}>
          {pergunta}
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: '28px',
          height: '28px',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          color: '#3D6B4F',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: 'rgba(45,30,16,0.65)',
              fontWeight: 300,
              paddingBottom: '1.5rem',
              maxWidth: '720px',
            }}>
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  const toggle = (i: number) => setAberto((prev) => (prev === i ? null : i))

  return (
    <section style={{ backgroundColor: '#FAF5EF' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn>
          <span className="eyebrow-ultra" style={{ color: '#B5843A', display: 'block', marginBottom: '1rem' }}>
            PERGUNTAS FREQUENTES
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.125rem)',
            lineHeight: 1.25,
            color: '#2D1E10',
            marginBottom: '3.5rem',
          }}>
            Respostas para o que você já pensou em perguntar
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ borderTop: '1px solid rgba(45,30,16,0.1)' }}>
            {perguntas.map((item, i) => (
              <FaqItem
                key={i}
                pergunta={item.pergunta}
                resposta={item.resposta}
                isOpen={aberto === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
