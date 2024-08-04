let navbar = document.querySelectorAll('.navbar a')
let titleTendencias = document.querySelectorAll('.tend')
let subTitleFragancias = document.querySelectorAll('.fragancias')

// ABRIR JANELA DA ACESSIB



// Pegue o elemento da imagem defic
const deficImg = document.getElementById('defic-img');

// Pegue o elemento do modal
const deficModal = document.getElementById('defic-modal');

// Pegue o elemento do botão de fechar
const closeBtn = document.querySelector('.close');

// Adicione um evento de clique à imagem defic para abrir o modal
deficImg.addEventListener('click', () => {
    deficModal.style.display = 'block';
});

// Adicione um evento de clique ao botão de fechar para fechar o modal
closeBtn.addEventListener('click', () => {
    deficModal.style.display = 'none';
});

// Adicione um evento de clique fora do modal para fechar o modal
window.addEventListener('click', (e) => {
    if (e.target === deficModal) {
        deficModal.style.display = 'none';
    }
});

// ========== AUMENTA PARAGRAFOS ==========

// Tamanhos de fonte definidos para cada botão
const fontSizesNavbar = {
  'A1': 18,
  'A2': 20,
  'A3': 25,
};

const fontSizesTitleTend = {
  'A1': 32,
  'A2': 37,
  'A3': 42,
};

const fontSizesTitleFrag = {
  'A1': 24,
  'A2': 28,
  'A3': 33,
};

// Pegue os botões de aumentar e diminuir fonte
const fontButtons = document.querySelectorAll('.A1, .A2, .A3');

// Adicione eventos de clique aos botões
fontButtons.forEach((button) => {
  button.addEventListener('click', () => {

    const fontSizeNVB = fontSizesNavbar[button.classList[0]];
    navbar.forEach((link) => {
      link.style.fontSize = `${fontSizeNVB}px`;
    });

    const fontSizeTEND = fontSizesTitleTend[button.classList[0]];
    titleTendencias.forEach((link) => {
      link.style.fontSize = `${fontSizeTEND}px`;
    });

    const fontSizeFRAG = fontSizesTitleFrag[button.classList[0]];
    subTitleFragancias.forEach((link) => {
      link.style.fontSize = `${fontSizeFRAG}px`;
    });




  });
});