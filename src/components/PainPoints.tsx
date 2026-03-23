import { FadeIn } from './FadeIn'

const dores = [
  {
    numero: '01',
    titulo: 'A paralisia do celular',
    texto: 'Você fica olhando o celular dele sem conseguir parar. Sabe que é errado. Sente vergonha. Mas o medo de perder tudo é maior do que qualquer consciência, e a paralisia vence mais uma vez.',
  },
  {
    numero: '02',
    titulo: 'O ciclo sem saída',
    texto: 'A gente briga pelas mesmas coisas há anos. Termina, faz as pazes e recomeça. Você já não sabe mais como sair desse ciclo porque toda vez que tenta, algo puxa de volta para o mesmo lugar.',
  },
  {
    numero: '03',
    titulo: 'O comportamento que afasta',
    texto: 'Você sabe que seu comportamento está afastando ele. Mas toda vez que decide confiar, o medo de ser traída de novo engole qualquer boa intenção. E você acaba repetindo o que prometeu que não faria mais.',
  },
  {
    numero: '04',
    titulo: 'O preço do silêncio',
    texto: 'Às vezes você aguenta coisas que não deveria aguentar. Não porque não percebe. Mas porque o pavor de ficar sozinha é tão grande que o silêncio ou a briga parecem melhores do que o vazio. E depois, você se odeia por isso.',
  },
]

export default function PainPoints() {
  return (
    <section id="dores" style={{ backgroundColor: '#F5EDE4' }} className="section-padding">
      <div className="container-ultra">

        {/* Abertura Opção C — história pessoal, 1ª pessoa */}
        <FadeIn className="mb-16">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              lineHeight: 1.65,
              color: '#2D1E10',
            }}>
              Eu busquei terapia para salvar meu próprio casamento. Sentei na cadeira que hoje você senta, senti a frustração de quem pede ajuda e não encontra o que precisa, e vivi a separação de dentro, como terapeuta e como paciente ao mesmo tempo.
            </p>
          </div>
        </FadeIn>

        {/* Grid 2x2 das 4 dores */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '5rem',
        }}>
          {dores.map((dor, i) => (
            <FadeIn key={dor.numero} delay={i * 0.1}>
              <div style={{
                backgroundColor: '#FBF7F3',
                borderRadius: '12px',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(61,107,79,0.08)',
              }}>
                {/* Número decorativo */}
                <span style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  lineHeight: 1,
                  color: '#3D6B4F',
                  opacity: 0.08,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {dor.numero}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1875rem',
                  color: '#2D1E10',
                  marginBottom: '1rem',
                  fontWeight: 400,
                }}>
                  {dor.titulo}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'rgba(45,30,16,0.75)',
                  fontWeight: 300,
                }}>
                  {dor.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição cliffhanger — FadeIn independente */}
        <FadeIn>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: '#3D6B4F',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            O que você está sentindo tem nome. Tem raiz. E tem saída. Mas essa saída não começa onde você imagina.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
