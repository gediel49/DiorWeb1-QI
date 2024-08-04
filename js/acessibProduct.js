let navbar = document.querySelectorAll('.navbar a')
let productName = document.querySelectorAll('.produtoH1')
let productDescCurta = document.querySelectorAll('.produtoH3')
let productPrice = document.querySelectorAll('.produtoH2')
let productParcelas = document.querySelectorAll('.produtoH4')

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


const fontSizesproductName = {
  'A1': 47,
  'A2': 57,
  'A3': 67,
};



const fontSizesproductDescCurta = {
  'A1': 28,
  'A2': 38,
  'A3': 48,
};

const fontSizesproductPrice = {
  'A1': 35,
  'A2': 45,
  'A3': 55,
};

const fontSizesproductParcelas = {
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

    const fontSizeproductName = fontSizesproductName[button.classList[0]];
    productName.forEach((link) => {
      link.style.fontSize = `${fontSizeproductName}px`;
    });

    const fontSizeproductDescCurta = fontSizesproductDescCurta[button.classList[0]];
    productDescCurta.forEach((link) => {
      link.style.fontSize = `${fontSizeproductDescCurta}px`;
    });


    const fontSizeproductPrice = fontSizesproductPrice[button.classList[0]];
    productPrice.forEach((link) => {
      link.style.fontSize = `${fontSizeproductPrice}px`;
    });


    const fontSizeproductParcelas = fontSizesproductParcelas[button.classList[0]];
    productParcelas.forEach((link) => {
      link.style.fontSize = `${fontSizeproductParcelas}px`;
    });



  });
});