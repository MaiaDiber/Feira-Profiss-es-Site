
import { Link } from "react-router";
import { useEffect, useState } from "react";
import slides from './scipts.js'
import "./complementado.scss";
import { cursos, selecionarCurso, voltarInicio } from "./cursos.js";

export default function Complemento() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const startSlider = slides();
      startSlider();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
    

    const [cursoSelecionado, setCursoSelecionado] = useState('');
  

    const handleSelecionarCurso = selecionarCurso(setCursoSelecionado);
    const handleVoltarInicio = voltarInicio(setCursoSelecionado);


    {/* INFORMÁTICA */}
    const getCursoContent = (curso) => {
      switch (curso) {
        case 'Informática': 
        return (
          <section className="Cartão-Informática">
              <div className="text-info">
              <h1 className="h1-info">Informática</h1>
              <div className="linha-info"></div>
              </div>
              <div className="doisconteudos">
                <div className="img-info">
                  <img src="WhatsApp-Image-2025-08-30-at-17.39.06.png" alt="" />
                </div>
                <div className="sobre-info">
                  <div className="tudo-hardware">
                  <div className="hardware">
                    <h1>HARDWARE</h1>
                    <img className="seta-mouse" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

                    </div>
                      <div className="text-hardware">
                        <p>Hardware é toda a parte física do <br />computador, 
                         ou seja, tudo aquilo que <br />podemos tocar: peças, cabos, placas,<br /> tela, teclado, etc.
                         <br /> O que irá aprender aqui no Frei? <br />
                         Veja abaixo:
                        </p>
                       
                        <div className="ul-li">
                        <ul>
                          <li>Explorar Componentes Internos</li>
                          <li>Montagem e Desmontagens de Compiutadores</li>
                          <li>Cuidadados e Segurança</li>
                          <li>Manutenção e Diagnóstico</li>
                          <li>Preparação para o Futuro</li>
                          <li>Comandos de CMD</li>
                          <li>Redes e Conexões</li>
                          <li>Tendencias e Inovações</li>
                        </ul>
                        </div>
                        
                  </div>
                  </div>
                 <div className="tudo-software">
                 <div className="software">
                    <h1>SOFTWARE</h1>
                    <img className="seta-mouse2" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />
                    </div>
                    <div className="lg-software">

                      <div className="text-software">
                        <p>Software é a parte lógica do <br /> computador, formada 
                         por todos os programas e instruções que fazem o 
                         hardware funcionar. Se compararmos <br /> um 
                         computador com o corpo humano, <br /> o hardware 
                          seria o corpo físico e o <br /> software seria a mente, que 
                          dá <br /> comandos e define o que deve ser feito. <br /> O que irá aprender durande o curso: </p>
                      </div>

                   
                        <div className="parte1">
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>JS</p>
                        </div>
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>MYSQL</p>
                        </div>
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>HTML</p>
                        </div>
                        </div>
                        <div className="parte2">
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>CSS</p>
                        </div>
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>REACT</p>
                        </div>
                        <div className="blocos-software">
                          <div className="bola"></div>
                          <p>API</p>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
              
                 </div>
          </section>
        );

        {/* COMUNICAÇÃO VISUAL */}
        case 'Comunicação Visual' :
          return (
            <section className="Cartão-Comunicacao_Visual">
              <div className="h1-CV">
              <h1>Comunicação Visual</h1>
              <div className="linha-CV"></div>
              </div>
            <div className="doisconteudos-CV">
              <div className="img-CV">
              <img src="IMG_4805.jpg" alt="" />
              </div>
              
              <div className="tudo-CV">
                <h2>CV</h2>

                <img className="seta-3" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

              <div className="sobre-CV">
                <div className="text-CV">
                  <h1>O que é a Comunicação Visual?</h1>
                  <p>É a área que transmite ideias e informações por meio de imagens, cores, tipografias e <br />
                   símbolos. Está presente em logotipos, propagandas, embalagens, sites, redes sociais e <br /> materiais 
                    impressos, unindo criatividade e tecnologia para comunicar de forma clara e atrativa.</p>
                
                  </div>
                <div className="tópicos-CV">
                  <h1>O que vai aprender?</h1>
                  <ul>
                    <li>Softwares de design <em>Photoshop, Illustrator, CorelDRAW, InDesign</em>;</li>
                    <li>Edição de imagens e criação de layouts digitais;</li>
                    <li>Desenho, teoria das cores e tipografia;</li>
                    <li>Fotografia aplicada ao design;</li>
                    <li>Produção gráfica impressa cartazes, panfletos, embalagens;</li>
                    <li>Identidade visual e criação de logotipos;</li>
                    <li>Desenvolvimento de projetos e portfólio profissional;</li>
                  </ul>
                
                </div>
              </div>
              </div>
              </div>
            </section>
          );

          {/* ADMINISTRAÇÃO */}
        case 'Administração' :
          return (
            <section className="Cartão-Administração">
              <div className="h1-Admin">
              <h1>Administração</h1>
              <div className="linha-Admin"></div>
              </div>
            <div className="doisconteudos-Admin">
              <div className="img-Admin">
              <img src="IMG_4897.jpg" alt="" />
              </div>
              
              <div className="tudo-Admin">
                <h2>Admin</h2>

                <img className="seta-3" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

              <div className="sobre-Admin">
                <div className="text-Admin">
                  <h1>O que é a Administração?</h1>
                  <p>A Administração é a área que ensina a gerenciar recursos humanos, financeiros <br />
                   e materiais de empresas ou projetos, visando eficiência, produtividade e tomada <br />
                    de decisões estratégicas.</p>
                
                  </div>
                <div className="tópicos-Admin">
                  <h1>O que vai aprender?</h1>
                  <ul>
                    <li>Fundamentos de gestão e planejamento estratégico;</li>
                    <li>Administração financeira e controle de custos;</li>
                    <li>Liderança, gestão de equipes e motivação;</li>
                    <li>Marketing e vendas;</li>
                    <li>Processos organizacionais e tomada de decisão;</li>
                    <li>Ferramentas de produtividade e organização empresarial;</li>
                    <li>Elaboração de relatórios e apresentações gerenciais;</li>
                  </ul>
                
                </div>
              </div>
              </div>
              </div>
            </section>
          );
          {/* ELETROMECÂNICA */}
        case 'Eletromecânica' :
          return (
            <section className="Cartão-Eletromecânica">
              <div className="h1-Eletro">
              <h1>Eletromecânica</h1>
              <div className="linha-Eletro"></div>
              </div>
            <div className="doisconteudos-Eletro">
              <div className="img-Eletro">
              <img src="IMG_4761 (1).jpg" alt="" />
              </div>
              <div className="tudo-Eletro">
                <h2>Eletro</h2>

                <img className="seta-3" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

              <div className="sobre-Eletro">
                <div className="text-Eletro">
                  <h1>O que é a Eletromecânica?</h1>
                  <p>A Eletromecânica integra conhecimentos de mecânica e eletricidade, ensinando a construir, manter e reparar sistemas eletromecânicos em residências, indústrias <br /> e veículos.</p>
                
                  </div>
                <div className="tópicos-Eletro">
                  <h1>O que vai aprender?</h1>
                  <ul>
                    <li>Fundamentos de mecânica aplicada a robôs;</li>
                    <li>Eletrônica básica e sensores;</li>
                    <li>Programação de microcontroladores e robôs;</li>
                    <li>Automação e controle de movimentos;</li>
                    <li>Projetos de robôs móveis, manipuladores e autônomos;</li>
                    <li>Integração de hardware e software;</li>
                    <li>Desenvolvimento de protótipos funcionais e testes;</li>
                  </ul>
                
                </div>
              </div>
              </div>
              </div>
            </section>
          );
          {/* ROBÓTICA */}
        case 'Robótica' :
          return (
            <section className="Cartão-Robótica">
              <div className="h1-Robo">
              <h1>Robótica</h1>
              <div className="linha-Robo"></div>
              </div>
            <div className="doisconteudos-Robo">
              <div className="img-Robo">
              <img src="FEI_2024_CEDESP16-_1_.jpg" alt="" />
              </div>
              <div className="tudo-Robo">
                <h2>Robo</h2>

                <img className="seta-3" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

              <div className="sobre-Robo">
                <div className="text-Robo">
                  <h1>O que é a Robótica?</h1>
                  <p>A Robótica envolve o estudo e a criação de robôs e sistemas automatizados, <br />
                   combinando mecânica, eletrônica e programação para desenvolver soluções <br />
                    tecnológicas.</p>
                
                  </div>
                <div className="tópicos-Robo">
                  <h1>O que vai aprender?</h1>
                  <ul>
                    <li>Conceitos básicos de eletricidade e segurança elétrica;</li>
                    <li>Instalações elétricas residenciais (tomadas, interruptores, lâmpadas);</li>
                    <li>Sistemas elétricos automotivos (bateria, alternador, iluminação);</li>
                    <li>Motores e máquinas elétricas (CC e CA);</li>
                    <li>Comandos elétricos e automação básica;</li>
                    <li>Diagnóstico e manutenção de equipamentos eletromecânicos;</li>
                    <li>Integração elétrica e mecânica em projetos práticos;</li>
                  </ul>
                
                </div>
              </div>
              </div>
              </div>
            </section>
          );
          {/* INGLÊS */}
        case 'Inglês' :
          return (
            <section className="Cartão-Inglês">
              <div className="h1-ing">
              <h1>Inglês</h1>
              <div className="linha-ing"></div>
              </div>
            <div className="doisconteudos-ing">
              <div className="img-ing">
              <img src="IMG_4752.JPG" alt="" />
              </div>
              <div className="tudo-ing">
                <h2>Inglês</h2>

                <img className="seta-3" src="ChatGPT Image 1 de set. de 2025, 21_41_56.png" alt="" />

              <div className="sobre-ing">
                <div className="text-ing">
                  <h1>O que é a Inglês?</h1>
                  <p>O Inglês é a língua internacional de comunicação, negócios e tecnologia. O curso <br />
                   ensina a compreender, falar, ler e escrever em inglês, preparando você para <br />  situações do cotidiano, trabalho, estudos e viagens com confiança e clareza.</p>
                
                  </div>
                <div className="tópicos-ing">
                  <h1>O que vai aprender?</h1>
                  <ul>
                    <li>Conversação em inglês para interações cotidianas e profissionais;</li>
                    <li>Vocabulário amplo e contextualizado, incluindo negócios e tecnologia;</li>
                    <li>Estrutura gramatical sólida, com foco em comunicação eficaz;</li>
                    <li>Compreensão de textos, artigos, e materiais multimídia em inglês;</li>
                    <li>Produção de textos e apresentações em inglês;</li>
                    <li>Pronúncia e fluência para falar com naturalidade;</li>
                    <li>Desenvolvimento da capacidade de se comunicar de forma confiante em diferentes contextos;</li>
                  </ul>
                
                </div>
              </div>
              </div>
              </div>
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
                    <button onClick={() => {document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); }} className="argumentos"> Contato</button>
            
                    </div>
                    <div className="underline">
                    <button onClick={() => {document.getElementById('SobreNos').scrollIntoView({ behavior: 'smooth' }); }} className="argumentos"> Quem Somos?</button>
                    </div>
                    <div className="underline">
                    <button onClick={() => {document.getElementById('imagens').scrollIntoView({ behavior: 'smooth' }); }} className="argumentos"> Imagens</button>
                    </div>
                    </div>

                    <div className="img-central">
                        <img src="21 de set. de 2025, 13_02_18.png" alt="" />
                    </div>

                    <div className="bem-vindo">
                        <h1>Seja Bem-Vindo</h1>
                    </div>
                </section>
            </header>

        <main>
            <section id="imagens" className="central-topo">
                <div >
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

           
                <section   className='slider-container'>
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
      <div id="SobreNos" className="conteudo-area">
  {/* Vídeo */}
  <div  className={`video ${cursoSelecionado ? 'oculto' : 'visivel'}`}>
    <div  className="img-véio">
    <img src="_MG_0398 editada (1).jpg" alt="" />
    </div>
    <div className="text-véio">
    <h1>Bem-Vindo</h1>
    <p>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda, oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, o instituto oferece vários cursos, capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens, promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</p>
    <p className="ggpp">font: acaonsfatima.org.br</p>
    </div>
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

           <footer id="footer" >
            <section className="tudo-footer">

             <div className="end-cont">
              <div className="endereco">
              <p>endereço: </p>
             <Link className="Link-endereco" to={'https://www.google.com/maps/place/Instituto+Social+Nossa+Senhora+de+F%C3%A1tima/@-23.6803284,-46.7105058,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'} >
                <p>
                Instituto Social Nossa Senhora de Fátima

Av. Cel. Octaviano de Freitas Costa, <br/> 463 

Veleiros - São Paulo - SP 04773-000</p>
             </Link>
              </div>
              <div className="contato">
                <p>contatos:</p>
                <p>(11) 3798-5037 - secretaria</p>
                <p>(11) 96398-6252 - secretaria - whatsapp</p>
                <p>(11) 96398-6254 - encomendas da padaria do Frei - whatsapp</p>
                <p>(11) 96398-6253 - CEDESP Ave Maria</p>
                  <p>font:</p>
                  <Link to="https://www.acaonsfatima.org.br/" >
                    <p>acaonsfatima.org.br</p>
                  </Link>
              </div>
             </div>
             <div className="patrocionadores">

              <h1>Apoio/Patrocionadores</h1>
              <div className="imgs-patro">
              <div className="patro-1">
              <img src="BISCOITÊ-removebg-preview.png" alt="" />
              <img src="patrocinador_espaço-forcione-removebg-preview.png" alt="" />
              <img src="Logo_STB_-_Azul-removebg-preview.png" alt="" />
              <img src="patrocinador_1-removebg-preview.png" alt="" />
              <img src="prefeitura_são_paulo_assis_e_desenv_centralizado_1358260362-removebg-preview.png" alt="" />
              <img src="patrocinador_mcs-removebg-preview.png" alt="" />
              <img src="patrocinador_ICA-removebg-preview.png" alt="" />
              <img src="patrocinador 3 VIAÇÃO GRAJAU QUALIDADE MELHOR.png" alt="" />
              </div>
              <div className="patro-2">
              <img src="oticas-carol-site-removebg-preview.png" alt="" />
              <img src="patrocinador rms.png" alt="" />
              <img src="patrocinador 74265983_1120727043086044_7089293127499361057_n.jpg" alt="" />
              <img src="patrocinador 2 LOGO BRUNO SILVA[1].png" alt="" />
              <img src="voluntarios FM18_PT_VR.jpg" alt="" />
              <img src="CASA DA MULHER PAULISTANA LOGO BRANCO PNG.png" alt="" />
              <img src="CONEXÃO_BEM_MAIOR-removebg-preview.png" alt="" />
              <img src="SÃO PAULO OPEN CENTRE.jpg" alt="" />
              <img src="APS-removebg-preview.png" alt="" />
              </div>
              </div>
             </div>

             <div className="Último">
              <div className="f"><h1>F</h1></div>
              <div className="r"><h1>R</h1></div>
              <div className="e"><h1>E</h1></div>
              <div className="i"><h1>I</h1></div>
             </div>
            </section>
           </footer>
        </>
    )
}