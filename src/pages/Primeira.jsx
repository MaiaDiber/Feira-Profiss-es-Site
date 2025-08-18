import { useEffect } from "react";
import slides from './scipts.js'
import "./Primeira.scss";

export default function Primeira() {
  useEffect(() => {
    const startSlider = slides();
    startSlider();
  }, []);
    
    return(
        <>
            <header>
                <div>
                    <img className='imgfrei' src="/public/imgfrei2.svg-removebg-preview.png" alt="Logo"  />
                </div>
                <div className="feira3 infofrei">
                    <h1 className='quinta'>
                        5ª Feira de Profissões
                    </h1>
                    <h2 className='subquinta'>
                        Instituto Social nossa Senhora de Fátima
                    </h2>
                    <div className='divtitle'>
                        <h1 className='title'>
                            Feira de Profissões
                        </h1>
                    </div>
                    <p>
                        <em><strong>"Esforço que transforma, e o orgulho permanece"</strong></em>
                    </p>
                </div>
                <div className="feira3">
                    <img className='imgfrei2' src="/public/imgfrei.svg-removebg-preview.png" alt="Logo"  />
                </div>
            </header>

           <main>

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

               
                <button className="arrow arrow-prev">‹</button>
                <button className="arrow arrow-next">›</button>
            </div>

            
            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
            </div>

            
            

        </section>

       
           </main>
        </>
    )
}