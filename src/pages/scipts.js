export default function slides() {
    let count = 1;
    let intervalId;
  
    function startSlider() {
      document.getElementById("radio1").checked = true;
      updateIndicators(); // Atualiza as bolinhas na inicialização
  
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000);
    }
  
    function nextSlide() {
      count++;
      if (count > 5) {
        count = 1;
      }
      updateSlide();
    }
  
    function prevSlide() {
      count--;
      if (count < 1) {
        count = 5;
      }
      updateSlide();
    }
  
    function updateSlide() {
      const radio = document.getElementById("radio" + count);
      if (radio) {
        radio.checked = true;
      }
      updateIndicators(); // Atualiza as bolinhas sempre que muda slide
    }
  
    function updateIndicators() {
      // Remove a cor de todas as bolinhas
      for (let i = 1; i <= 5; i++) {
        const indicator = document.querySelector(`.auto-btn${i}`);
        if (indicator) {
          indicator.style.backgroundColor = '';
        }
      }
      
      // Adiciona cor na bolinha atual
      const currentIndicator = document.querySelector(`.auto-btn${count}`);
      if (currentIndicator) {
        currentIndicator.style.backgroundColor = '#000000';
      }
    }
  
    function goToSlide(slideNumber) {
      count = slideNumber;
      updateSlide();
    }
  
    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000);
    }
  
    function setupArrowNavigation() {
      const prevBtn = document.querySelector('.arrow-prev');
      const nextBtn = document.querySelector('.arrow-next');
      
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          prevSlide();
          resetInterval();
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          nextSlide();
          resetInterval();
        });
      }
  
      // Adiciona listeners para os botões manuais (labels)
      const manualBtns = document.querySelectorAll('.manual-btn');
      manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          goToSlide(index + 1);
          resetInterval();
        });
      });
    }
  
    return function() {
      startSlider();
      // Aguarda um pouco para garantir que o DOM esteja renderizado
      setTimeout(() => {
        setupArrowNavigation();
      }, 100);
    };
  }