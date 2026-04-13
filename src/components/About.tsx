import { FadeIn } from './FadeIn'

const credenciais = [
  'Psicóloga especializada em Dependência Emocional e Terapia de Casal',
  'Formação em Psicologia das Relações Conjugais e Abordagem Humanista',
  'Atendimento online para todo o Brasil',
]

export default function About() {
  return (
    <section style={{ backgroundColor: '#F5EDE4' }} className="section-padding">
      <div className="container-ultra">

        {/* Layout: mobile stack, desktop side-by-side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="md:grid-cols-2"
        >
          {/* Foto — mobile: aparece depois do texto (order-2), desktop: lado direito (md:order-2) */}
          <FadeIn delay={0.1} className="md:order-2" style={{ order: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="photo-frame"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                }}
              >
                <img
                  src="/bio.jpeg"
                  alt="Maze Gomes"
                  style={{
                    width: 'clamp(220px, 38vw, 340px)',
                    aspectRatio: '3/4',
                    borderRadius: '16px 4px 16px 4px',
                    overflow: 'hidden',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Texto — mobile: aparece primeiro (order-1), desktop: lado esquerdo (md:order-1) */}
          <div style={{ order: 1 }} className="md:order-1">
            {/* Linha decorativa dourada acima do nome */}
            <FadeIn>
              <div style={{
                width: '48px',
                height: '1px',
                backgroundColor: '#B5843A',
                opacity: 0.4,
                marginBottom: '1.5rem',
              }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.375rem, 3vw, 2rem)',
                lineHeight: 1.25,
                color: '#2D1E10',
                marginBottom: '2.5rem',
              }}>
                A terapeuta que sentou no lugar que você ocupa hoje
              </h2>
            </FadeIn>

            {/* Bio Antes */}
            <FadeIn delay={0.1}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: 'rgba(45,30,16,0.72)',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                Houve um tempo em que eu mesma busquei ajuda para salvar meu casamento diante de crises que pareciam maiores do que qualquer técnica terapêutica. Senti a frustração de entrar no consultório esperando respostas e sair com mais perguntas do que antes. Eu estava dos dois lados da cadeira ao mesmo tempo, e nenhum dos dois me preparou para o que viria.
              </p>
            </FadeIn>

            {/* Bio Virada */}
            <FadeIn delay={0.2}>
              <blockquote style={{
                borderLeft: '2px solid #3D6B4F',
                paddingLeft: '1.25rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#2D1E10',
                }}>
                  A separação que não consegui evitar não destruiu minha prática, ela a refundou. Escolhi transformar aquela ruptura em laboratório real: estudei de dentro o que rompe os vínculos e o que, quando existe disponibilidade, ainda pode reconstruí-los.
                </p>
              </blockquote>
            </FadeIn>

            {/* Bio Hoje */}
            <FadeIn delay={0.3}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: 'rgba(45,30,16,0.72)',
                fontWeight: 300,
                marginBottom: '2.5rem',
              }}>
                Hoje trabalho com mulheres e casais porque sei exatamente como é estar exausta de controlar e com medo de perder. Não falo de cima de uma teoria, falo de dentro de uma experiência que conheço na pele. E é esse lugar que me dá a autoridade de caminhar ao seu lado sem julgamento.
              </p>
            </FadeIn>

            {/* Credenciais como badges */}
            <FadeIn delay={0.35}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2.5rem' }}>
                {credenciais.map((cred, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#B5843A',
                      flexShrink: 0,
                      marginTop: '0.4rem',
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'rgba(45,30,16,0.65)',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}>
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Transição */}
            <FadeIn delay={0.4}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: '#3D6B4F',
                lineHeight: 1.6,
              }}>
                Você não precisa entender o caminho inteiro agora. Precisa apenas saber como o primeiro passo funciona.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
