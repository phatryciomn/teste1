function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "Você clicou no botão!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}

function aplicarCorAleatoria () {
  const c = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6, '0')
  document.body.style.background = c
}

const botao = document.getElementById('btn')

botao.addEventListener('click', aplicarCorAleatoria)