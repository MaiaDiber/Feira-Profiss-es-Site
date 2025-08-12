const originalSlides = [
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

let currentSlide = 0;
let totalSlides = originalSlides.length;
let autoplayInterval;
let isAutoplayActive = true;
const autoplayDelay = 4000;

// Criar slides infinitos
function createInfiniteSlides() {
  const wrapper = document.getElementById('carouselWrapper');
  
  // Criar slides com mais clones para mostrar imagens dos dois lados sempre
  const cloneCount = 5;
  const allSlides = [
      ...originalSlides.slice(-cloneCount), // últimos slides no início
      ...originalSlides,                     // slides originais
      ...originalSlides.slice(0, cloneCount) // primeiros slides no final
  ];
  
  allSlides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'carousel-slide';
      slideElement.onclick = () => goToSlideByClick(index);
      
      slideElement.innerHTML = `
          <img src="${slide.img}" alt="${slide.title}">
          <div class="slide-overlay">
              <div class="slide-title">${slide.title}</div>
              <div class="slide-description">${slide.description}</div>
          </div>
      `;
      wrapper.appendChild(slideElement);
  });
  
  // Posicionar no primeiro slide real com mais clones
  currentSlide = cloneCount;
  updateCarouselPosition();
}

// Ir para slide clicado
function goToSlideByClick(index) {
  currentSlide = index;
  updateCarouselPosition();
}

// Criar indicadores
function createIndicators() {
  const indicatorsContainer = document.getElementById('indicators');
  for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement('div');
      indicator.className = i === 0 ? 'indicator active' : 'indicator';
      indicator.onclick = () => goToSlide(i);
      indicatorsContainer.appendChild(indicator);
  }
}

// Atualizar posição do carrossel
function updateCarouselPosition() {
  const wrapper = document.getElementById('carouselWrapper');
  const slideWidth = 330; // 300px + 30px margin
  const centerOffset = (wrapper.parentElement.offsetWidth / 2) - (slideWidth / 2);
  
  wrapper.style.transform = `translateX(${centerOffset - (currentSlide * slideWidth)}px)`;
  
  updateSlideStates();
  updateIndicators();
}

// Atualizar estados dos slides
function updateSlideStates() {
  const allSlides = document.querySelectorAll('.carousel-slide');
  
  allSlides.forEach((slide, index) => {
      slide.classList.remove('active', 'adjacent');
      
      if (index === currentSlide) {
          slide.classList.add('active');
      } else if (index === currentSlide - 1 || index === currentSlide + 1) {
          slide.classList.add('adjacent');
      }
  });
}

// Atualizar indicadores
function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  const realSlideIndex = getRealSlideIndex();
  
  indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === realSlideIndex);
  });
}

// Obter índice do slide real
function getRealSlideIndex() {
  const cloneCount = 5;
  if (currentSlide >= cloneCount && currentSlide < cloneCount + totalSlides) {
      return currentSlide - cloneCount;
  } else if (currentSlide < cloneCount) {
      return totalSlides - (cloneCount - currentSlide);
  } else {
      return currentSlide - totalSlides - cloneCount;
  }
}

// Próximo slide
function nextSlide() {
  const wrapper = document.getElementById('carouselWrapper');
  const maxSlides = totalSlides + 10; // slides originais + 10 clones
  const cloneCount = 5;
  
  currentSlide++;
  
  if (currentSlide >= maxSlides - cloneCount) {
      updateCarouselPosition();
      
      setTimeout(() => {
          wrapper.classList.add('no-transition');
          currentSlide = cloneCount;
          updateCarouselPosition();
          
          setTimeout(() => {
              wrapper.classList.remove('no-transition');
          }, 50);
      }, 600);
  } else {
      updateCarouselPosition();
  }
}

// Slide anterior
function previousSlide() {
  const wrapper = document.getElementById('carouselWrapper');
  const cloneCount = 5;
  
  currentSlide--;
  
  if (currentSlide < cloneCount) {
      updateCarouselPosition();
      
      setTimeout(() => {
          wrapper.classList.add('no-transition');
          currentSlide = totalSlides + cloneCount - 1;
          updateCarouselPosition();
          
          setTimeout(() => {
              wrapper.classList.remove('no-transition');
          }, 50);
      }, 600);
  } else {
      updateCarouselPosition();
  }
}

// Ir para slide específico
function goToSlide(index) {
  currentSlide = index + 5; // +5 por causa dos clones iniciais
  updateCarouselPosition();
}

// Controles de autoplay
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}



// Reiniciar carrossel
function resetCarousel() {
  const wrapper = document.getElementById('carouselWrapper');
  wrapper.classList.add('no-transition');
  currentSlide = 5;
  updateCarouselPosition();
  
  setTimeout(() => {
      wrapper.classList.remove('no-transition');
  }, 50);
}

// Pausar ao passar mouse
const carousel = document.getElementById('carousel');
carousel.addEventListener('mouseenter', () => {
  if (isAutoplayActive) {
      stopAutoplay();
  }
});

carousel.addEventListener('mouseleave', () => {
  if (isAutoplayActive) {
      startAutoplay();
  }
});

// Controle por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
      previousSlide();
  } else if (e.key === 'ArrowRight') {
      nextSlide();
  } else if (e.key === ' ') {
      e.preventDefault();
      toggleAutoplay();
  }
});

// Redimensionar carrossel quando a janela mudar
window.addEventListener('resize', () => {
  updateCarouselPosition();
});

// Suporte a touch/swipe
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  
  if (Math.abs(diff) > 50) {
      if (diff > 0) {
          nextSlide();
      } else {
          previousSlide();
      }
  }
}, { passive: true });

// Inicializar
createInfiniteSlides();
createIndicators();
startAutoplay();

// Animação de entrada
window.addEventListener('load', () => {
  const container = document.querySelector('.carousel-container');
  container.style.opacity = '0';
  container.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
      container.style.transition = 'all 0.8s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
  }, 100);
});