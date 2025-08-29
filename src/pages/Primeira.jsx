
import { Link } from "react-router";
import { useEffect, useState } from "react";
import slides from './scipts.js'
import "./Primeira.scss";
import { cursos, selecionarCurso, voltarInicio } from "./cursos.js";

export default function Primeira() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const startSlider = slides();
      startSlider();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
    
    // Estado para controlar qual curso está selecionado
    const [cursoSelecionado, setCursoSelecionado] = useState('');
  
    // Criando as funções
    const handleSelecionarCurso = selecionarCurso(setCursoSelecionado);
    const handleVoltarInicio = voltarInicio(setCursoSelecionado);

    const getCursoContent = (curso) => {
      switch (curso) {
        case 'Informática': 
        return (
          <section className="Cartão-Informática">
              <h1>Testando 123... informática</h1>
          </section>
        );

        default: 
        return null;
      }
    };
  
    return(
        <>

            <header>
                <section className="info-header">
                    <div className="underline-textos">
                    <div className="underline">
                        <Link to={'/segunda'} className="argumentos">Andares</Link>
            
                    </div>
                    <div className="underline">
                    <Link to={'/segunda'} className="argumentos">Quem somos?</Link>
                    </div>
                    <div className="underline">
                    <Link to={'/segunda'} className="argumentos">Fale Conosco</Link>
                    </div>
                    </div>

                    <div className="login-cadastrar">
                        <Link to={'/Login'} className="login">
                            <p>Login</p>
                        </Link>
                        <Link to={'/Segunda'} className="cadastrar">
                            <p>Cadastrar</p>
                            <div className="left"></div>
                            <div className="right"></div>
                        </Link>
                    </div>
                </section>
            </header>

        <main>
            <section className="central-topo">
                <div>
                    <img className='imgfrei' src="/public/imgfrei2.svg-removebg-preview.png" alt="Logo"  />
                </div>
                <div className="feira3 infofrei">
                    <div className="primtitulo">
                        <h1 className="quinta2">5ª</h1>
                    <h1 className='quinta'>Feira de Profissões</h1>
                    </div>
                    <div className="linha"></div>
                    <h2 className='subquinta'>
                        Instituto Social nossa Senhora de Fátima
                    </h2>
                    
                </div>
                <div className="feira3 nucleo-orbita">
                    <img className='nucleo' src="/public/nucleo.png" alt=""  />
                    <img className="orbita" src="/public/orbita.png" alt="" />
                </div>
            </section>

           
                <section className='slider-container'>
                    <div className='slider'>
                        <div className='slides'>
                            <input type="radio" name='radio-btn' id='radio1'/>
                            <input type="radio" name='radio-btn' id='radio2'/>
                            <input type="radio" name='radio-btn' id='radio3'/>
                            <input type="radio" name='radio-btn' id='radio4'/>
                            <input type="radio" name='radio-btn' id='radio5'/>

                            <div className="slide primeiro">
                                <img className='img1' src="/public/13_08_2025 16_14_00.png" alt="img1" />
                            </div>

                            <div className="slide">
                                <img className='img2' src="/public/13_08_2025 16_07_31.png" alt="img2"/>
                            </div>

                            <div className="slide">
                                <img className='img3' src="/public/13_08_2025 16_10_04.png" alt="img3"/>
                            </div>

                            <div className="slide">
                                <img className='img4' src="/public/13_08_2025 16_11_35.png" alt="img4"/>
                            </div>

                            <div className="slide">
                                <img className='img5' src="/public/13_08_2025 16_12_50.png" alt="img5"/>
                            </div>
                        </div>
                    </div>

                    {/* Setas fora do slider */}
                    <button className="arrow arrow-prev" type="button">‹</button>
                    <button className="arrow arrow-next" type="button">›</button>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                    </div>
                </section>

                <div className="emotion">
                        <p className="textemotion">ESFORÇO que tranforma, e o ORGULHO permanece</p>
                    </div>


                    <section className="cursos">
      <div className="nu-oculto">
        
        {/* Botão principal - muda o texto baseado no curso selecionado */}
        <div className="button-cursos">
          {cursoSelecionado || 'Cursos'}
          <img 
            className="seta-baixo" 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E" 
            alt="" 
          />
        </div>   
        
        {/* Menu dropdown */}
        <div className="oculto">
          
          {/* Botão voltar - só aparece quando tem curso selecionado */}
          {cursoSelecionado && (
            <button 
              type="button" 
              className="ocultos voltar-inicio"
              onClick={handleVoltarInicio}
            >
              <p>← Voltar ao Início</p>
            </button>
          )}
          
          {/* Lista de cursos - só mostra os que não estão selecionados */}
          {cursos.map((curso) => (
            (!cursoSelecionado || cursoSelecionado !== curso) && (
              <button 
                key={curso}
                type="button" 
                className={`ocultos ${curso === 'Informática' ? 'button-info' : ''}`}
                onClick={() => handleSelecionarCurso(curso)}
              >
                <p>{curso}</p>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Área que muda - ou vídeo inicial ou conteúdo do curso */}
      <div className="conteudo-area">
  {/* Vídeo */}
  <div className={`video ${cursoSelecionado ? 'oculto' : 'visivel'}`}>
    <img src="https://images.icon-icons.com/936/PNG/512/play-button_icon-icons.com_73457.png" alt="" />
  </div>
  
  {/* Curso */}
  <div className={`curso-expandido ${cursoSelecionado ? 'visivel' : 'oculto'} ${cursoSelecionado ? cursoSelecionado.toLowerCase().replace(" ", "-") : ''}`}>
    <div className="curso-info">
      {cursoSelecionado && getCursoContent(cursoSelecionado)}
    </div>
  </div>
</div>

    </section>
           </main>
        </>
    )
}