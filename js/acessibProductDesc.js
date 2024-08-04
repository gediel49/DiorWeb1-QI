let navbar = document.querySelectorAll('.navbar a')
let productDesc = document.querySelectorAll('.produtoDescH1')
let productDescLonga = document.querySelectorAll('.produtoDescP')
let productDescDicaApl = document.querySelectorAll('.produtoDescH2')


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


const fontSizesproductDesc = {
  'A1': 47,
  'A2': 55,
  'A3': 58,
};



const fontSizesproductDescLonga = {
  'A1': 24,
  'A2': 30,
  'A3': 38,
};

const fontSizesproductDescDicaApl = {
  'A1': 35,
  'A2': 38,
  'A3': 43,
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

    const fontSizeproductDesc = fontSizesproductDesc[button.classList[0]];
    productDesc.forEach((link) => {
      link.style.fontSize = `${fontSizeproductDesc}px`;
    });

    const fontSizeproductDescLonga = fontSizesproductDescLonga[button.classList[0]];
    productDescLonga.forEach((link) => {
      link.style.fontSize = `${fontSizeproductDescLonga}px`;
    });


    const fontSizeproductDescDicaApl = fontSizesproductDescDicaApl[button.classList[0]];
    productDescDicaApl.forEach((link) => {
      link.style.fontSize = `${fontSizeproductDescDicaApl}px`;
    });


  });
});