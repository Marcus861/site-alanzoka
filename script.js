// script.js

// Botão principal do menu de acessibilidade
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");

// Ações de acessibilidade
const botaoAumentarFonte = document.getElementById("aumentar-fonte");
const botaoDiminuirFonte = document.getElementById("diminuir-fonte");
const botaoContraste = document.getElementById("alterna-contraste");

// Estado inicial
let tamanhoFonte = 100; // porcentagem
let altoContrasteAtivo = false;

// Abrir/fechar menu acessibilidade
botaoAcessibilidade.addEventListener("click", () => {
  const expandido = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
  botaoAcessibilidade.setAttribute("aria-expanded", !expandido);
  opcoesAcessibilidade.style.display = expandido ? "none" : "block";
});

// Aumentar fonte
botaoAumentarFonte.addEventListener("click", () => {
  if (tamanhoFonte < 150) {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});

// Diminuir fonte
botaoDiminuirFonte.addEventListener("click", () => {
  if (tamanhoFonte > 80) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});

// Alternar alto contraste
botaoContraste.addEventListener("click", () => {
  altoContrasteAtivo = !altoContrasteAtivo;
  document.body.classList.toggle("alto-contraste", altoContrasteAtivo);
});
