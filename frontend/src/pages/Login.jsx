import { Link } from "react-router";
import { useEffect } from "react";
import slides from './scipts.js'
import "./Login.scss";

export default function Login() {
    useEffect(() => {
      const timer = setTimeout(() => {
        const startSlider = slides();
        startSlider();
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
      
  return (
    <>

      <header className='container-cabeçalho'></header>
        <menu className='container-principal'>
            <section className='container-dentro'>
                    <h1>Login</h1>
                    
              <div className="container-caixa-entrada-nome">
                <h3>Nome</h3>

                <label htmlFor="nome"></label> 
                    <input type="text" id="nome" placeholder="Digite seu nome completo" />
              </div>

              <div className="container-caixa-entrada-senha">
                  <h3>Senha</h3>

                <label htmlFor="senha"></label> 
                    <input type="text" id="senha" placeholder="Digite sua senha" />
              </div>


            </section>

        </menu>


    </>
  )
}