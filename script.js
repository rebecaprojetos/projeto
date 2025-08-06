function alternarMenu() {
  const menu = document.getElementById('menuAcessibilidade');
  menu.classList.toggle('d-none');
}

function aumentarFonte() {
  document.body.style.fontSize = 'larger';
}

function diminuirFonte() {  
  document.body.style.fontSize = 'smaller';
}

function alternarContraste() {
  document.body.classList.toggle('contraste-ativo');
}
