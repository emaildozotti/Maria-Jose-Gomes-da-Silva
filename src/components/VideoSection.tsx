import { FadeIn } from './FadeIn'

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: '#1C2E24', position: 'relative', overflow: 'hidden' }} className="section-padding">
      {/* Aurora subtle */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: '#3D6B4F59',
          filter: 'blur(100px)',
          opacity: 0.5,
        }} />
      </div>

      <div className="container-ultra" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Pré-vídeo — 1ª pessoa */}
        <FadeIn>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'rgba(251,247,243,0.85)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}>
            Gravei esse vídeo para você entender de onde falo, antes de qualquer coisa. Não como especialista que leu sobre dependência emocional. Mas como alguém que atravessou o mesmo deserto e escolheu transformar a dor em ferramenta.
          </p>
        </FadeIn>

        {/* Container vídeo 9:16 */}
        <FadeIn delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              width: '100%',
              maxWidth: '300px',
              aspectRatio: '9/16',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(181,132,58,0.3)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            }}>
              <iframe
                src="https://www.youtube.com/embed/2v3elqvISwc"
                title="Mensagem de Maze Gomes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder={0}
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Âncora pós-vídeo */}
        <FadeIn delay={0.3}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            lineHeight: 1.7,
            color: 'rgba(251,247,243,0.55)',
            fontStyle: 'italic',
            maxWidth: '480px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            O que eu mostro aqui não é teoria: é o mapa de um caminho que eu mesma precisei encontrar.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
