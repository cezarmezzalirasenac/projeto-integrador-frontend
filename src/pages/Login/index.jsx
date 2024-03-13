import "./styles.css";

export default function Login() {
  return (
    <>
      <form id="form-login">
        <label htmlFor="usuario">Usuário</label>
        <input type="text" name="usuario" id="usuario" className="input" />
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" className="input" />
        <button type="button" className="button button-login">Efetuar Login</button>
        <button type="button" className="button button-forget-password">Esqueceu sua senha?</button>
      </form>
    </>
  )
}