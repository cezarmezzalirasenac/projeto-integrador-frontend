import Header from "../../components/Header";
import "./styles.css"

function Home() {
  return (
    <>
      <section id="hero">
        <Header/>
        <div id="container">
          <h1>FRASE MOTIVACIONAL DE IMPACTO</h1>
          <span className="botao-saiba-mais">Saiba Mais</span>
        </div>
      </section>
      <section id="details">
        <div className="lista">
          <p>Qualificações Profissionais</p>
          <dl>
            <dt>Técnico em Informática</dt>
            <dd>Colégio Estadual de Pato Branco</dd>
            <dt>Tecnologo em Análise e Desenvolvimento de Sistemas</dt>
            <dd>UTFPR Pato Branco</dd>
            <dt>Especialista Java</dt>
            <dd>UTFPR Pato Branco</dd>
          </dl>
        </div>
        <div className="lista">
          <p>Competências Profissionais</p>
          <dl>
            <dt>Técnico em Informática</dt>
            <dd>Sanepar</dd>
            <dt>Desenvolvedor Senior</dt>
            <dd>Semantix</dd>
            <dt>Especialista em Desenvolvimento de Software</dt>
            <dd>Compass UOL</dd>
          </dl>
        </div>
      </section>
    </>
  )
}

export default Home;