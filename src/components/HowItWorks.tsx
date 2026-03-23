import { FadeIn } from './FadeIn'

const passos = [
  {
    numero: '1',
    titulo: 'A conversa inicial',
    descricao: 'Na primeira sessão, o meu único objetivo é entender você de verdade, não o diagnóstico, não o problema técnico. Onde está a dor, como ela aparece no dia a dia, o que você já tentou e por que não funcionou. Você fala, eu escuto sem pressa e sem julgamento. Nenhum roteiro engessado.',
  },
  {
    numero: '2',
    titulo: 'Como as sessões funcionam',
    descricao: 'Trabalhamos de forma continuada e progressiva. Cada sessão parte do que veio antes: o que você percebeu, o que foi difícil, o que se moveu. Não repete o mesmo ciclo de desabafo. Avança. As ferramentas do método são introduzidas no seu ritmo, não no meu.',
  },
  {
    numero: '3',
    titulo: 'O que o processo produz',
    descricao: 'Ao longo do tempo, você começa a agir a partir da escolha, não do medo. O diálogo passa a substituir a briga. A insegurança perde parte do espaço que ocupava. Não porque o outro mudou, mas porque você mudou a forma de habitar a si mesma dentro do relacionamento.',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#1C2E24' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn>
          <span className="eyebrow-ultra" style={{ color: '#B5843A', display: 'block', marginBottom: '1rem' }}>
            O PROCESSO
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)',
            lineHeight: 1.2,
            color: '#FBF7F3',
            marginBottom: '4rem',
            maxWidth: '480px',
          }}>
            Como é o processo na prática
          </h2>
        </FadeIn>

        {/* 3 passos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {passos.map((passo, i) => (
            <FadeIn key={passo.numero} delay={i * 0.12}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '2rem',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderTop: '1px solid rgba(251,247,243,0.08)',
                position: 'relative',
              }}>
                {/* Número decorativo grande */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  minWidth: '4rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: '#3D6B4F',
                    opacity: 0.25,
                    userSelect: 'none',
                    position: 'absolute',
                    top: '-0.5rem',
                  }}>
                    {passo.numero}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: '#B5843A',
                    letterSpacing: '0.1em',
                    marginTop: '0.25rem',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    0{passo.numero}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1875rem',
                    color: '#FBF7F3',
                    marginBottom: '0.875rem',
                    fontWeight: 400,
                  }}>
                    {passo.titulo}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.78,
                    color: 'rgba(251,247,243,0.62)',
                    fontWeight: 300,
                  }}>
                    {passo.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Remove ansiedade — objeção parceiro não participar */}
        <FadeIn delay={0.1}>
          <div style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(61,107,79,0.15)',
            border: '1px solid rgba(61,107,79,0.3)',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.78,
              color: 'rgba(251,247,243,0.75)',
              fontWeight: 300,
            }}>
              Se o seu parceiro não quer vir, isso não impede o processo. A dependência emocional é a sua jornada, não a dele. Você não precisa da presença do parceiro para se tornar livre, e o trabalho que fazemos juntas frequentemente muda a dinâmica do relacionamento mesmo quando apenas uma parte está na sessão.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
