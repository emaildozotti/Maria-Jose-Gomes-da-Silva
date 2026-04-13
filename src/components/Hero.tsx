export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#1C2E24', minHeight: '100svh', position: 'relative', overflow: 'hidden' }}
    >
      {/* Header — desktop sticky */}
      <header className="hidden md:block" style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(28,46,36,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(181,132,58,0.12)',
      }}>
        <div className="container-ultra" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: '#FBF7F3',
            fontSize: '1.125rem',
            letterSpacing: '0.01em',
          }}>
            Maze Gomes
          </span>
          <a
            href="#dores"
            className="btn-shimmer"
            style={{ fontSize: '0.8125rem' }}
          >
            Entenda como funciona
          </a>
        </div>
      </header>

      {/* Aurora blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: '#3D6B4F59',
          filter: 'blur(100px)',
          animation: 'aurora-1 18s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '45vw',
          height: '45vw',
          maxWidth: '560px',
          maxHeight: '560px',
          borderRadius: '50%',
          background: '#B5843A45',
          filter: 'blur(110px)',
          animation: 'aurora-2 22s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '35vw',
          height: '35vw',
          maxWidth: '400px',
          maxHeight: '400px',
          borderRadius: '50%',
          background: '#F5EDE428',
          filter: 'blur(80px)',
          animation: 'aurora-3 14s ease-in-out infinite',
        }} />
      </div>

      {/* Signature element hero — folha SVG canto superior direito */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '6%',
        right: '4%',
        opacity: 0.65,
        zIndex: 1,
        pointerEvents: 'none',
      }}>
        <svg width="72" height="96" viewBox="0 0 72 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 88 C36 88 8 64 8 36 C8 16 20 4 36 4 C52 4 64 16 64 36 C64 64 36 88 36 88Z" stroke="#B5843A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
          <path d="M36 88 L36 4" stroke="#B5843A" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" opacity="0.4"/>
          <path d="M36 50 C28 46 16 42 12 34" stroke="#B5843A" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M36 50 C44 46 56 42 60 34" stroke="#B5843A" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>

      {/* Split layout */}
      <div
        className="container-ultra"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          minHeight: 'calc(100svh - 60px)',
        }}
      >
        <div className="hero-grid">
          {/* Lado esquerdo — copy */}
          <div className="hero-text">
            <div style={{
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0s',
              opacity: 0,
            }}>
              <span className="eyebrow-ultra" style={{ color: '#B5843A', display: 'block', marginBottom: '1.5rem' }}>
                PARA QUEM AMA DEMAIS E SOFRE MAIS
              </span>
            </div>

            <div style={{
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0.15s',
              opacity: 0,
            }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                lineHeight: 1.15,
                color: '#FBF7F3',
                marginBottom: '1.5rem',
                fontWeight: 400,
              }}>
                Você controla porque ama. E é por isso que o amor vai embora.
              </h1>
            </div>

            <div style={{
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0.30s',
              opacity: 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                lineHeight: 1.7,
                color: 'rgba(251,247,243,0.75)',
                marginBottom: '2.5rem',
                fontWeight: 300,
                maxWidth: '520px',
              }}>
                Existe um caminho onde confiar não dói e o diálogo substitui a briga.
              </p>
            </div>

            <div style={{
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0.45s',
              opacity: 0,
            }}>
              <a href="#dores" className="btn-shimmer">
                Entenda como isso funciona
              </a>
            </div>
          </div>

          {/* Lado direito — foto */}
          <div className="hero-photo">
            <div style={{
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0.2s',
              opacity: 0,
            }}>
              <div className="photo-frame" style={{ display: 'inline-block' }}>
                <img
                  src="/hero.jpeg"
                  alt="Maze Gomes, terapeuta especializada em dependência emocional"
                  style={{
                    width: 'clamp(260px, 28vw, 380px)',
                    aspectRatio: '3/4',
                    borderRadius: '16px 4px 16px 4px',
                    border: '1px solid rgba(181,132,58,0.25)',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — apenas desktop */}
        <div className="hero-scroll-indicator" style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          display: 'none',
        }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'rgba(251,247,243,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            continuar
          </span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(181,132,58,0.6), transparent)',
          }} />
        </div>
      </div>
    </section>
  )
}
