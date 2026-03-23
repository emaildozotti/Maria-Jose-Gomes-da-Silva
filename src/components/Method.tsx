import { FadeIn } from './FadeIn'

const pilares = [
  {
    numero: '01',
    nome: 'Conscientização da Autonomia Emocional',
    descricao: 'Antes de mudar qualquer coisa no relacionamento, o trabalho começa em você. Identificamos juntas de onde vem o padrão de controle, o que ele está protegendo e o que ele está destruindo sem que você perceba.',
  },
  {
    numero: '02',
    nome: 'Desconstrução do Controle',
    descricao: 'Ciúme e insegurança não são falhas de caráter. São respostas a feridas que nunca foram tratadas. Trabalhamos para desconstruir esses padrões sem julgamento, de forma que você passe a agir a partir da escolha, não do medo.',
  },
  {
    numero: '03',
    nome: 'Instalação do Diálogo com Amor',
    descricao: 'O diálogo que transforma não é o que você tem quando está calma e tudo vai bem. É o que acontece quando a dor está presente e você consegue falar sem acusar, sem fechar e sem engolir o que sente. Esse é o diálogo que construímos juntas.',
  },
]

export default function Method() {
  return (
    <section style={{ backgroundColor: '#FAF5EF' }} className="section-padding-lg">
      <div className="container-ultra">

        {/* Heading com signature element — segunda e ultima aparição da folha SVG */}
        <FadeIn>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            {/* Signature element: folha SVG ultra-minimalista dourada */}
            <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.65 }}>
              <path d="M16 40 C16 40 4 30 4 18 C4 8 9 2 16 2 C23 2 28 8 28 18 C28 30 16 40 16 40Z" stroke="#B5843A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M16 40 L16 2" stroke="#B5843A" strokeWidth="0.75" strokeLinecap="round" strokeDasharray="2 3" opacity="0.4"/>
            </svg>
            <span className="eyebrow-ultra" style={{ color: '#B5843A' }}>
              O MÉTODO
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)',
            lineHeight: 1.2,
            color: '#2D1E10',
            marginBottom: '2rem',
            maxWidth: '560px',
          }}>
            Autonomia Emocional com Diálogo Consciente
          </h2>
        </FadeIn>

        {/* Intro método */}
        <FadeIn delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(45,30,16,0.7)',
            maxWidth: '600px',
            marginBottom: '4rem',
            fontWeight: 300,
          }}>
            Desenvolvi esse método porque a terapia convencional não me deu as ferramentas que eu precisava no momento mais difícil do meu casamento. Ele nasceu da lacuna que eu mesma senti, combinada com anos de prática clínica depois que decidi transformar minha dor em propósito.
          </p>
        </FadeIn>

        {/* 3 pilares */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.numero} delay={i * 0.12}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '2.5rem',
                borderRadius: '12px',
                backgroundColor: '#FBF7F3',
                border: '1px solid rgba(61,107,79,0.1)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: '#3D6B4F',
                  opacity: 0.2,
                  userSelect: 'none',
                  minWidth: '3.5rem',
                }}>
                  {pilar.numero}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1875rem',
                    color: '#2D1E10',
                    marginBottom: '0.75rem',
                    fontWeight: 400,
                  }}>
                    {pilar.nome}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    color: 'rgba(45,30,16,0.7)',
                    fontWeight: 300,
                  }}>
                    {pilar.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não prometo — blockquote */}
        <FadeIn>
          <blockquote style={{
            borderLeft: '2px solid #3D6B4F',
            paddingLeft: '2rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              lineHeight: 1.7,
              color: 'rgba(45,30,16,0.75)',
            }}>
              Não prometo um relacionamento perfeito nem que o outro vai mudar porque você mudou. O que prometo é que você vai sair desse processo sabendo habitar a si mesma com mais segurança, seja qual for o caminho que o seu relacionamento tome.
            </p>
          </blockquote>
        </FadeIn>

        {/* Transição para bio */}
        <FadeIn>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1.0625rem',
            color: '#3D6B4F',
          }}>
            Mas de onde vem a autoridade de fazer essa promessa? Não de um diploma na parede.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
