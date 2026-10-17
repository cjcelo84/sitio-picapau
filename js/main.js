/**
 * PEÇA TEATRAL: AVENTURAS NO SÍTIO DO PICAPAU AMARELO
 * Interações Lúdicas, Contagem Regressiva, Lightbox, Calendário e Folha de Colorir
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCountdown();
  initSmoothScroll();
  initGalleryLightbox();
  initColoringActions();
  initQuiz();
  initCalendarIntegrations();
  initCharacterEasterEggs();
});

/* ==========================================================================
   1. Menu Mobile
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/* ==========================================================================
   2. Contagem Regressiva para a Estreia
   ========================================================================== */
function initCountdown() {
  // Data da estreia: 20 de Novembro de 2026 às 14:30
  const premiereDate = new Date('2026-11-20T14:30:00').getTime();

  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = premiereDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      const headerEl = document.querySelector('.countdown-header span');
      if (headerEl) headerEl.textContent = '🎉 É HOJE! O espetáculo começou!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   3. Rolagem Suave (Smooth Scroll)
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   4. Galeria de Bastidores com Lightbox
   ========================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!modal || !modalImg || !modalDesc || !closeBtn) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-full');
      const caption = item.getAttribute('data-caption') || 'Bastidores da Peça';
      
      modalImg.src = imgSrc;
      modalImg.alt = caption;
      modalDesc.textContent = caption;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. Ações para Colorir (Download e Impressão A4)
   ========================================================================== */
function initColoringActions() {
  const printBtn = document.getElementById('btnPrintColoring');
  const downloadBtn = document.getElementById('btnDownloadColoring');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const printArea = document.getElementById('printableColoringArea');
      if (printArea) {
        printArea.style.display = 'block';
        window.print();
        setTimeout(() => {
          printArea.style.display = 'none';
        }, 1200);
      } else {
        window.print();
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // Cria link para download direto da imagem de colorir
      const link = document.createElement('a');
      link.href = 'assets/images/desenho_colorir_sitio.jpg';
      link.download = 'desenho-colorir-sitio-do-picapau-amarelo.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

/* ==========================================================================
   6. Quiz Interativo: Quem é Você no Sítio?
   ========================================================================== */
function initQuiz() {
  const optionButtons = document.querySelectorAll('.quiz-opt-btn');
  const resultBox = document.getElementById('quizResult');
  const resultTitle = document.getElementById('quizResultTitle');
  const resultDesc = document.getElementById('quizResultDesc');

  if (!optionButtons.length || !resultBox) return;

  const resultsData = {
    emilia: {
      title: '✨ Você é a Boneca Emília!',
      desc: 'Tagarela, cheia de imaginação e com mil ideias por minuto! Você não aceita um "não" fácil e transforma qualquer dia comum em pura aventura!'
    },
    visconde: {
      title: '📚 Você é o Visconde de Sabugosa!',
      desc: 'Curioso, inteligente e apaixonado por livros! Seus amigos sempre procuram você para tirar dúvidas e desvendar os grandes mistérios do mundo.'
    },
    pedrinho: {
      title: '🌳 Você é o Pedrinho!',
      desc: 'Corajoso, aventureiro e adora a natureza! Nada segura a sua vontade de explorar novos caminhos, subir em árvores e liderar expedições!'
    },
    nastacia: {
      title: '🥞 Você é a Tia Nastácia!',
      desc: 'Afetuoso(a), acolhedor(a) e com um coração gigante! Você une as pessoas com seu carinho e sempre sabe como alegrar o dia de todo mundo.'
    }
  };

  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      optionButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      const charKey = btn.getAttribute('data-character');
      const charInfo = resultsData[charKey];

      if (charInfo) {
        resultTitle.textContent = charInfo.title;
        resultDesc.textContent = charInfo.desc;
        resultBox.style.display = 'block';
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

/* ==========================================================================
   7. Calendário (Google Agenda & .ICS iCal Download)
   ========================================================================== */
function initCalendarIntegrations() {
  const btnGoogle = document.getElementById('btnGoogleCal');
  const btnIcs = document.getElementById('btnDownloadIcs');

  // Dados do evento
  const eventDetails = {
    title: 'Peça Teatral: Aventuras no Sítio do Picapau Amarelo (8º Ano)',
    description: 'Espetáculo teatral escolar apresentado pelos alunos do 8º Ano. Entrada Franca! Traga a família para uma tarde mágica no Sítio do Picapau Amarelo. Estacionamento pago com parceiros na rua.',
    location: 'Colégio Anglo Leonardo da Vinci - Unidade Osasco (Rua Euclídes da Cunha, 377, Centro, Osasco - SP)',
    startDate: '20261120T143000',
    endDate: '20261120T160000'
  };

  if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
      e.preventDefault();
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
      window.open(url, '_blank');
    });
  }

  if (btnIcs) {
    btnIcs.addEventListener('click', (e) => {
      e.preventDefault();
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Escola//Peca Sitio Picapau Amarelo//PT',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `SUMMARY:${eventDetails.title}`,
        `DESCRIPTION:${eventDetails.description}`,
        `LOCATION:${eventDetails.location}`,
        `DTSTART:${eventDetails.startDate}`,
        `DTEND:${eventDetails.endDate}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'peca-sitio-picapau-amarelo.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

/* ==========================================================================
   8. Efeitos e Balões dos Personagens ao Clicar
   ========================================================================== */
function initCharacterEasterEggs() {
  const cards = document.querySelectorAll('.character-card');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Se não clicou em um link
      if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        const quoteEl = card.querySelector('.character-quote');
        if (quoteEl) {
          quoteEl.style.transform = 'scale(1.05)';
          quoteEl.style.borderColor = 'var(--color-yellow-dark)';
          setTimeout(() => {
            quoteEl.style.transform = 'scale(1)';
            quoteEl.style.borderColor = 'var(--color-border)';
          }, 350);
        }
      }
    });
  });
}
