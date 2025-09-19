import { useEffect, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  let [caixa, setCaixa] = useState()
  let [email, setEmail] = useState()
  let [senha, setSenha] = useState()

  useEffect(() => {
      const timer = setTimeout(() => {
        const startSlider = slides();
        startSlider();
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
      
  return (
    <>
    <div className="login-page">

      <div className="login-container">

      <Link to={'/'} className="Voltar">
        <img src="seta-voltar.webp" alt="" />
        <h1>Voltar</h1>
      </Link>

        <h1>Login</h1>

        <div className="input-group">
            <h3>E-mail</h3>

            <label htmlFor="nome"></label>
            <input type="text" id="nome" placeholder="Digite seu nome completo" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
            <h3>Senha</h3>

            <label htmlFor="senha"></label>
            <input type="password" id="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          
           <Link className="EMS" to={'/Cadastro'} ><p>Esqueci minha senha</p></Link>
        </div>

        <button className="cadastrar">Entrar</button>
      </div>
    </div>
    </>
  );
}