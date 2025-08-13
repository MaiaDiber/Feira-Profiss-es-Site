import './Primeira.scss'


export default function Primeira(){

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

        <section className='slider'>

       <div className='slides'>

        <input type="radio" name='radio-btn' id='radio1'/>
        <input type="radio" name='radio-btn' id='radio2'/>
        <input type="radio" name='radio-btn' id='radio3'/>
        <input type="radio" name='radio-btn' id='radio4'/>
        <input type="radio" name='radio-btn' id='radio5'/>

        <div className="slide primeiro">
            <img src="" alt="img1" />
        </div>

        <div className="slide">
            <img src="" alt="img2" />
        </div>

        <div className="slide">
            <img src="" alt="img3" />
        </div>

        <div className="slide">
            <img src="" alt="img4" />
        </div>

        <div className="slide">
            <img src="" alt="img5" />
        </div>

        <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
        </div>

       </div>

       <div className="manual-navigation">
        <label htmlFor="radio1" className='manual-btn'></label>
        <label htmlFor="radio2" className='manual-btn'></label>
        <label htmlFor="radio3" className='manual-btn'></label>
        <label htmlFor="radio4" className='manual-btn'></label>
        <label htmlFor="radio5" className='manual-btn'></label>
       </div>

        </section>

        <script src='useCarousel.js'></script>
           </main>
        </>
    )
}