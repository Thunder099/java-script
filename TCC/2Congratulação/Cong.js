// pega uma informaçao do search
const pegarInfo = new URLSearchParams(window.location.search)
const nome = pegarInfo.get("nome")

let div = document.getElementsByClassName("container")[0]

div.innerHTML = `<p>Seja bem vindo ${nome}, vamos começar?</p>`


function Começar() {
    // link do meu outro html, ? procura, pt vira uma variavel com a quantidade de pontos da variavel points
    window.location.href = `../3Quiz/Quiz.html?nome=${nome}`
}