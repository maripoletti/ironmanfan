// Mensagem de boas-vindas no console (nerdice é cultura!)
console.log("🚀 Bem-vindo à landing page do Homem de Ferro!");

// Pequena animação no título
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1');
  title.style.opacity = '0';
  title.style.transition = 'opacity 1.5s ease-in-out';
  setTimeout(() => {
    title.style.opacity = '1';
  }, 500);
});

