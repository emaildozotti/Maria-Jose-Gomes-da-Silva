import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5519971455801?text=Ol%C3%A1%2C%20Maria%20Jos%C3%A9.%20Vi%20sua%20p%C3%A1gina%20e%20me%20identifiquei%20com%20o%20que%20voc%C3%AA%20fala.%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20a%20terapia%20com%20voc%C3%AA.'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C2E24', position: 'relative', overflow: 'hidden' }}>
      {/* Aurora CTA */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: '#3D6B4F59',
          filter: 'blur(100px)',
          opacity: 0.6,
          animation: 'aurora-1 20s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background: '#B5843A45',
          filter: 'blur(90px)',
          opacity: 0.4,
          animation: 'aurora-2 25s ease-in-out infinite',
        }} />
      </div>

      <div
        className="container-ultra"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '6rem',
          paddingBottom: '4rem',
          textAlign: 'center',
        }}
      >
        {/* Headline final — 3 frases de permissao */}
        <FadeIn>
          <div style={{ marginBottom: '3rem', maxWidth: '560px', margin: '0 auto 3rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.625rem, 3.5vw, 2.375rem)',
              lineHeight: 1.3,
              color: '#FBF7F3',
              marginBottom: '1.5rem',
            }}>
              Você não precisa ter certeza para dar o primeiro passo.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'rgba(251,247,243,0.62)',
              fontWeight: 300,
              marginBottom: '0.75rem',
            }}>
              Não precisa estar pronta, não precisa ter parado de sentir medo, não precisa saber exatamente o que quer que mude.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'rgba(251,247,243,0.62)',
              fontWeight: 300,
            }}>
              Basta querer tentar um caminho diferente.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.15}>
          <div style={{ marginBottom: '4rem' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Quero conversar com a Maria José
            </a>
          </div>
        </FadeIn>

        {/* Assinatura serifada */}
        <FadeIn delay={0.25}>
          <div style={{
            borderTop: '1px solid rgba(251,247,243,0.08)',
            paddingTop: '2.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.375rem',
              color: 'rgba(251,247,243,0.55)',
              marginBottom: '0.5rem',
            }}>
              Maria José
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: 'rgba(251,247,243,0.3)',
              letterSpacing: '0.06em',
              fontWeight: 300,
            }}>
              Psicóloga · Dependência Emocional e Terapia de Casal · Online para todo o Brasil
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
