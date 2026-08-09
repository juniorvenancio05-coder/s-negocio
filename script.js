let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou voltar (usada nas setas prev e next)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para ir para um slide específico (usada nos dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Remove a classe active de todos os círculos (dots)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Mostra o slide atual e ativa o dot correspondente
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
<!-- JavaScript do Menu Dropdown por Clique -->

  document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.getElementById('botaoMenu');
    const listaPaginas = document.getElementById('listaPaginas');

    if (botaoMenu && listaPaginas) {
      // Abre e fecha o menu ao clicar no ícone de três barras
      botaoMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se espalhe pela página
        listaPaginas.classList.toggle('show');
      });

      // Fecha a caixinha se o usuário clicar em qualquer outro lugar branco do site
      document.addEventListener('click', function(event) {
        const dentroDoDropdown = event.target.closest('.menu-dropdown');
        if (!dentroDoDropdown) {
          listaPaginas.classList.remove('show');
        }
      });
    }
  });
