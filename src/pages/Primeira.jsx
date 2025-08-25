
import { Link } from "react-router";
import { useEffect } from "react";
import slides from './scipts.js'
import "./Primeira.scss";

export default function Primeira() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const startSlider = slides();
      startSlider();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
    
  

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
                        <Link  className="login">
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
                    <div className="opcoes-cursos">
                        <button className="button-cursos" type="button" onClick={''}>Cursos 
                            <img className="seta-baixo" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E" alt="" /></button>   
                    </div>
                    <div className="oculto">
                        <div className="ocultos">
                            <p>Informática</p>
                        </div>
                        <div className="ocultos">
                            <p>Comunicação Visual</p>
                        </div>
                        <div className="ocultos">
                            <p>Administração</p>
                        </div>
                        <div className="ocultos">
                            <p>Eletromecânica</p>
                        </div>
                        <div className="ocultos">
                            <p>Robótica</p>
                        </div>
                        <div className="ocultos">
                            <p>Inglês</p>
                        </div>
                    </div>
                    </div>

                    <div className="video">
                        <img src="https://images.icon-icons.com/936/PNG/512/play-button_icon-icons.com_73457.png" alt="" />
                    </div>
                    </section>
           </main>
        </>
    )
}