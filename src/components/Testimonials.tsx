import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const depoimentos = [
  {
    nome: 'Carla M.',
    cidade: 'Campinas, SP',
    resultado: 'Parei de vigiar o celular em 4 meses',
    texto: 'Eu achava que minha ansiedade era normal depois da traição. Passava horas verificando o celular dele, os aplicativos, as notificações. Com a Maria José entendi que eu estava tentando controlar o que não podia ser controlado. Em 4 meses aprendi a confiar, não cegamente nele, mas em mim mesma. Isso mudou tudo.',
    destaque: 'Aprendi a confiar em mim mesma antes de confiar nele.',
  },
  {
    nome: 'Ana Paula R.',
    cidade: 'São Paulo, SP',
    resultado: 'Evitei o divórcio que parecia inevitável',
    texto: 'Meu marido e eu já tínhamos marcado consulta com advogado. Depois de 11 anos e dois filhos, parecia que não tinha mais jeito. Uma amiga indicou a Maria José e fomos por desencargo de consciência. Oito meses depois, não só não separamos como estamos em um casamento que nunca tivemos antes. Ela tem um jeito de fazer você se ver no lugar do outro sem se anular.',
    destaque: 'Em 8 meses construímos o casamento que nunca tivemos.',
  },
  {
    nome: 'Fernanda L.',
    cidade: 'Indaiatuba, SP',
    resultado: 'Aprendi a dizer não sem me sentir culpada',
    texto: 'Minha dependência emocional não era com meu parceiro, era com a aprovação de todo mundo. Vivia cedendo para não perder ninguém. A Maria José foi a primeira pessoa que me disse que estabelecer limites é um ato de amor, não de egoísmo. Hoje consigo dizer não e dormir tranquila. Parece simples, mas levei 34 anos para chegar aqui.',
    destaque: 'Estabelecer limites é um ato de amor. Demorei 34 anos para entender isso.',
  },
]

export default function Testimonials() {
  const [ativo, setAtivo] = useState(0)

  const anterior = () => setAtivo((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  const proximo = () => setAtivo((prev) => (prev + 1) % depoimentos.length)

  return (
    <section style={{ backgroundColor: '#F5EDE4' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn>
          <span className="eyebrow-ultra" style={{ color: '#B5843A', display: 'block', marginBottom: '1rem' }}>
            RESULTADOS REAIS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.125rem)',
            lineHeight: 1.25,
            color: '#2D1E10',
            marginBottom: '4rem',
          }}>
            O que mulheres como você já viveram
          </h2>
        </FadeIn>

        {/* Carrossel */}
        <FadeIn delay={0.1}>
          <div style={{ position: 'relative', minHeight: '320px' }}>

            {/* Aspa decorativa */}
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '120px',
              lineHeight: 1,
              color: '#3D6B4F',
              opacity: 0.1,
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: 0,
            }}>
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={ativo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                  backgroundColor: '#FBF7F3',
                  borderRadius: '12px',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  border: '1px solid rgba(61,107,79,0.08)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Resultado badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(61,107,79,0.08)',
                  borderRadius: '100px',
                  padding: '0.375rem 0.875rem',
                  marginBottom: '1.75rem',
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3D6B4F', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: '#3D6B4F',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}>
                    {depoimentos[ativo].resultado}
                  </span>
                </div>

                {/* Texto depoimento */}
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                  lineHeight: 1.8,
                  color: 'rgba(45,30,16,0.75)',
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}>
                  {depoimentos[ativo].texto}
                </p>

                {/* Destaque */}
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.0625rem',
                  color: '#3D6B4F',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5,
                }}>
                  {depoimentos[ativo].destaque}
                </p>

                {/* Assinatura */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '1px',
                    backgroundColor: '#B5843A',
                    opacity: 0.5,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    color: 'rgba(45,30,16,0.5)',
                    fontWeight: 400,
                  }}>
                    {depoimentos[ativo].nome}, {depoimentos[ativo].cidade}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botoes prev/next */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.5rem',
            }}>
              {/* Indicadores */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAtivo(i)}
                    style={{
                      width: i === ativo ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '100px',
                      backgroundColor: i === ativo ? '#3D6B4F' : 'rgba(61,107,79,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              {/* Setas */}
              <div style={{ display: 'flex', gap: '0.625rem' }}>
                <button
                  onClick={anterior}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(61,107,79,0.25)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    color: '#3D6B4F',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3D6B4F'
                    e.currentTarget.style.color = '#FBF7F3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#3D6B4F'
                  }}
                  aria-label="Depoimento anterior"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={proximo}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(61,107,79,0.25)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    color: '#3D6B4F',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3D6B4F'
                    e.currentTarget.style.color = '#FBF7F3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#3D6B4F'
                  }}
                  aria-label="Próximo depoimento"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
