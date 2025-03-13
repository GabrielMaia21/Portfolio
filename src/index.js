document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetId = this.getAttribute('href'); // Pega o valor do href (ex: #apresentacao)
    const targetElement = document.querySelector(targetId); // Encontra o elemento alvo

    if (targetElement) {
      // Faz a rolagem suave até o elemento alvo
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animação suave
        block: 'start', // Alinha o topo do elemento com o topo da janela
      });
    }
  });
});