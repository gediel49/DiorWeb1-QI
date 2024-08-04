let navbar = document.querySelectorAll('.navbar a')
let carrinhoH1Primario = document.querySelectorAll('.carrinhoH1Carrinho')
let carrinhoH1Second = document.querySelectorAll('.carrinhoH1Product')
let carrinhoH3Desc = document.querySelectorAll('.carrinhoH3Desc')
let carrinhoH2Price = document.querySelectorAll('.carrinhoH2Price')


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


const fontSizesNavbar = {
  'A1': 18,
  'A2': 20,
  'A3': 25,
};


const fontSizescarrinhoH1Primario = {
  'A1': 32,
  'A2': 42,
  'A3': 52,
};



const fontSizescarrinhoH1Second = {
  'A1': 32,
  'A2': 42,
  'A3': 52,
};

const fontSizescarrinhoH3Desc = {
  'A1': 20,
  'A2': 30,
  'A3': 40,
};

const fontSizescarrinhoH2Price = {
  'A1': 24,
  'A2': 34,
  'A3': 44,
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

    const fontSizecarrinhoH1Primario = fontSizescarrinhoH1Primario[button.classList[0]];
    carrinhoH1Primario.forEach((link) => {
      link.style.fontSize = `${fontSizecarrinhoH1Primario}px`;
    });

    const fontSizecarrinhoH1Second = fontSizescarrinhoH1Second[button.classList[0]];
    carrinhoH1Second.forEach((link) => {
      link.style.fontSize = `${fontSizecarrinhoH1Second}px`;
    });


    const fontSizecarrinhoH3Desc = fontSizescarrinhoH3Desc[button.classList[0]];
    carrinhoH3Desc.forEach((link) => {
      link.style.fontSize = `${fontSizecarrinhoH3Desc}px`;
    });


    const fontSizecarrinhoH2Price = fontSizescarrinhoH2Price[button.classList[0]];
    carrinhoH2Price.forEach((link) => {
      link.style.fontSize = `${fontSizecarrinhoH2Price}px`;
    });

  });
});