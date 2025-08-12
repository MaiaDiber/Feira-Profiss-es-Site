import { useState, useEffect, useRef } from 'react';

export const originalSlides = [
  {
      img: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-proboscis-monkey-NationalGeographic_2684060.webp?w=1600&h=1067",
      title: "Equipe Unida",
      description: "Momentos que marcam nossa jornada"
  },
  {
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
      title: "Celebração",
      description: "Conquistas que nos enchem de orgulho"
  },
  {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHRsONUB8YLpYzUyHbjRZlcmTS9KEPXHCPg&s",
      title: "Reconhecimento",
      description: "O resultado do trabalho em equipe"
  },
  {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
      title: "Parceria",
      description: "Juntos construímos algo especial"
  },
  {
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop",
      title: "Futuro Brilhante",
      description: "Seguimos em frente com determinação"
  },
  {
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop",
      title: "Inovação",
      description: "Sempre buscando novas soluções"
  }
];

export function useCarousel() {
    // Estados e refs
    const [currentSlide, setCurrentSlide] = useState(5);
    const [isAutoplayActive, setIsAutoplayActive] = useState(true);
    const autoplayInterval = useRef(null);
    const wrapperRef = useRef(null);
    
    // Configurações
    const totalSlides = originalSlides.length;
    const cloneCount = 5;
    const autoplayDelay = 4000;

    // Criar slides com clones para efeito infinito
    const allSlides = [
        ...originalSlides.slice(-cloneCount),
        ...originalSlides,
        ...originalSlides.slice(0, cloneCount)
    ];

    // Funções
    const updateCarouselPosition = () => {
        if (wrapperRef.current) {
            const slideWidth = 330;
            const centerOffset = (wrapperRef.current.parentElement.offsetWidth / 2) - (slideWidth / 2);
            wrapperRef.current.style.transform = `translateX(${centerOffset - (currentSlide * slideWidth)}px)`;
        }
    };

    const getRealSlideIndex = () => {
        if (currentSlide >= cloneCount && currentSlide < cloneCount + totalSlides) {
            return currentSlide - cloneCount;
        } else if (currentSlide < cloneCount) {
            return totalSlides - (cloneCount - currentSlide);
        } else {
            return currentSlide - totalSlides - cloneCount;
        }
    };

    const nextSlide = () => {
        const maxSlides = totalSlides + 10;
        
        setCurrentSlide(prev => {
            const newSlide = prev + 1;
            
            if (newSlide >= maxSlides - cloneCount) {
                setTimeout(() => {
                    if (wrapperRef.current) {
                        wrapperRef.current.style.transition = 'none';
                        setCurrentSlide(cloneCount);
                        
                        setTimeout(() => {
                            if (wrapperRef.current) {
                                wrapperRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            }
                        }, 50);
                    }
                }, 600);
            }
            
            return newSlide;
        });
    };

    const previousSlide = () => {
        setCurrentSlide(prev => {
            const newSlide = prev - 1;
            
            if (newSlide < cloneCount) {
                setTimeout(() => {
                    if (wrapperRef.current) {
                        wrapperRef.current.style.transition = 'none';
                        setCurrentSlide(totalSlides + cloneCount - 1);
                        
                        setTimeout(() => {
                            if (wrapperRef.current) {
                                wrapperRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            }
                        }, 50);
                    }
                }, 600);
            }
            
            return newSlide;
        });
    };

    const goToSlide = (index) => {
        setCurrentSlide(index + cloneCount);
    };

    const goToSlideByClick = (index) => {
        setCurrentSlide(index);
    };

    const startAutoplay = () => {
        autoplayInterval.current = setInterval(nextSlide, autoplayDelay);
    };

    const stopAutoplay = () => {
        if (autoplayInterval.current) {
            clearInterval(autoplayInterval.current);
        }
    };

    // Effects
    useEffect(() => {
        if (isAutoplayActive) {
            startAutoplay();
        } else {
            stopAutoplay();
        }

        return () => stopAutoplay();
    }, [isAutoplayActive]);

    useEffect(() => {
        updateCarouselPosition();
    }, [currentSlide]);

    useEffect(() => {
        const handleResize = () => {
            updateCarouselPosition();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Retornar tudo que o componente precisa
    return {
        currentSlide,
        wrapperRef,
        allSlides,
        originalSlides,
        isAutoplayActive,
        nextSlide,
        previousSlide,
        goToSlide,
        goToSlideByClick,
        getRealSlideIndex,
        startAutoplay,
        stopAutoplay
    };
}