export default function slides() {
  let count = 1;
  let intervalId;

  function startSlider() {
    document.getElementById("radio1").checked = true;
    updateIndicators(); 

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
    updateIndicators(); 
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
      currentIndicator.style.backgroundColor = '#053bebe6';
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
    
    console.log('Botão anterior encontrado:', prevBtn);
    console.log('Botão próximo encontrado:', nextBtn);
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Botão anterior clicado');
        prevSlide();
        resetInterval();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Botão próximo clicado');
        nextSlide();
        resetInterval();
      });
    }

    // Adiciona listeners para os indicadores (bolinhas)
    for (let i = 1; i <= 5; i++) {
      const indicator = document.querySelector(`.auto-btn${i}`);
      if (indicator) {
        indicator.addEventListener('click', () => {
          console.log(`Indicador ${i} clicado`);
          goToSlide(i);
          resetInterval();
        });
      }
    }
  }

  // Função para tentar configurar os listeners várias vezes se necessário
  function trySetupNavigation(attempts = 0) {
    const maxAttempts = 10;
    
    if (attempts >= maxAttempts) {
      console.error('Não foi possível encontrar os botões após', maxAttempts, 'tentativas');
      return;
    }

    const prevBtn = document.querySelector('.arrow-prev');
    const nextBtn = document.querySelector('.arrow-next');
    
    if (prevBtn && nextBtn) {
      console.log('Botões encontrados, configurando navegação...');
      setupArrowNavigation();
    } else {
      console.log(`Tentativa ${attempts + 1}: Botões não encontrados, tentando novamente...`);
      setTimeout(() => {
        trySetupNavigation(attempts + 1);
      }, 100);
    }
  }

  return function() {
    startSlider();
    // Tenta configurar a navegação
    trySetupNavigation();
  };
}