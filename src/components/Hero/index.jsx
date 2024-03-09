import Header from "../Header";
import "./styles.css";

export default function Hero() {
  return (
    <section id="hero">
      <Header />
      <div id="container">
        <div id="card">
          <h1>FRASE MOTIVACIONAL DE IMPACTO</h1>
          <span id="call-to-action">Saiba Mais</span>
        </div>
      </div>
    </section>
  )
}