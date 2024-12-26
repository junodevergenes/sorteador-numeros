function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumAleatorio(de, ate);
    }

    intervalo = ate - de;

    while (quantidade >= intervalo) {
      break;
    }

    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
  alterarStatusBotao();

  if (de >= ate) {
    alert("Por favor, verifique se inseriu corretamente os dados.");
  }
}

function obterNumAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
function reiniciar() {
  parseInt((document.getElementById("quantidade").value = ""));
  parseInt((document.getElementById("de").value = ""));
  parseInt((document.getElementById("ate").value = ""));
  parseInt(
    (document.getElementById("resultado").innerHTML =
      '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>')
  );
  alterarStatusBotao();
}
