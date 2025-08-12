import './Primeira.scss'
import React from 'react';
import { useCarousel, originalSlides } from './useCarousel';

export default function Primeira(){

    const {
        currentSlide,
        wrapperRef,
        allSlides,
        isAutoplayActive,
        nextSlide,
        previousSlide,
        goToSlide,
        goToSlideByClick,
        getRealSlideIndex,
        startAutoplay,
        stopAutoplay
    } = useCarousel();

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

            <main className="carousel-main">
                <div className="carousel-container">
                    <div className="carousel-wrapper">
                        <div 
                            ref={wrapperRef}
                            className="carousel-slides"
                            style={{ 
                                transform: currentSlide !== null ? `translateX(${(wrapperRef.current?.parentElement?.offsetWidth / 2 || 600) - 165 - (currentSlide * 330)}px)` : 'translateX(0)'
                            }}
                            onMouseEnter={() => stopAutoplay()}
                            onMouseLeave={() => isAutoplayActive && startAutoplay()}
                        >
                            {allSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`carousel-slide ${
                                        index === currentSlide ? 'active' : 
                                        index === currentSlide - 1 || index === currentSlide + 1 ? 'adjacent' : 'distant'
                                    }`}
                                    onClick={() => goToSlideByClick(index)}
                                >
                                    <img 
                                        src={slide.img} 
                                        alt={slide.title}
                                        className="slide-image"
                                    />
                                    <div className={`slide-content ${index === currentSlide ? 'show' : ''}`}>
                                        <div className="slide-title">
                                            {slide.title}
                                        </div>
                                        <div className="slide-description">
                                            {slide.description}
                                        </div>
                                    </div>
                                    
                                    {index === currentSlide && (
                                        <div className="slide-shine" />
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {/* Botões de navegação */}
                        <button
                            onClick={previousSlide}
                            className="carousel-btn carousel-btn-prev"
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            className="carousel-btn carousel-btn-next"
                        >
                            ›
                        </button>
                    </div>
                    
                    {/* Indicadores */}
                    <div className="carousel-indicators">
                        {originalSlides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`indicator ${getRealSlideIndex() === index ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
               
            </main>
        </>
    )
}