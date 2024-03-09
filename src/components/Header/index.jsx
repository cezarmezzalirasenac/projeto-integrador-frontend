import "./styles.css";

export default function Header() {
  return (
    <header id="menu">
      <nav id="items-menu">
        <span className="text-right">Home</span>
        <span className="text-right">Agendamento</span>
        <span className="text-right">Contato</span>
        <span className="text-right">Login</span>
      </nav>
    </header>
  )
}
