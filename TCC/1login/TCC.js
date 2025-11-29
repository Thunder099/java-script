let nome = document.getElementById("texto")

function Nome() {
    // link do meu outro html, ? procura, pt vira uma variavel com a quantidade de pontos da variavel points
    window.location.href = `../2Congratulação/Cong.html?nome=${nome.value}`
}