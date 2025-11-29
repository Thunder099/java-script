let points = 0
let counter = 0

let questions = [
    ["Qual a maior montanha do sistema solar?", "Monte everest", "Makalu", "Monte olimpo", "Kangphu Kang"],
    ["Quantos planetas existem no sistema solar?", "6", "8", "9", "7"],
    ["Qual a profundidade da fossa das marianas?", "10.984 metros", "11.687 metros", "9.312 metros", "14.983 metros"],
    ["Oque é um horizonte de eventos?", "Horizonte de eventos é o ponto onde o tempo para completamente ao redor de um buraco negro.", "É a camada de gás e poeira que envolve o buraco negro, responsável por esconder a luz que tenta sair.", "É a distância máxima em que um buraco negro pode sugar objetos ao seu redor.", "É o ponto em que nem a luz escapa da sua gravidade"]
]


let lista = [1, 34, 56, 4, 8, 93, 23, 66, 79]

lista.sort(function() {
    return Math.random() - 0.5
})

console.log(lista)


function verificar() {

    let select = document.querySelector("input[name='resposta1']:checked")

    let h1 = document.getElementsByTagName("h1")[0]
    let allLabel = document.getElementsByTagName("label")

    if (select.value == "true") {
        points ++
    }

    counter++
  
    if (counter == 1) {
        h1.innerHTML = questions[0][0]
        allLabel[0].innerHTML = `<input name="resposta1" type="radio" id="rsp1" value="false"> ${questions[0][1]}`
        allLabel[1].innerHTML = `<input name="resposta1" type="radio" id="rsp2" value="false"> ${questions[0][2]}`
        allLabel[2].innerHTML = `<input name="resposta1" type="radio" id="rsp3" value="true"> ${questions[0][3]}`
        allLabel[3].innerHTML = `<input name="resposta1" type="radio" id="rsp4" value="false"> ${questions[0][4]}`
        
    } else if (counter == 2) {
        h1.innerHTML = questions[1][0]
        allLabel[0].innerHTML = `<input name="resposta1" type="radio" id="rsp1" value="false"> ${questions[1][1]}`
        allLabel[1].innerHTML = `<input name="resposta1" type="radio" id="rsp2" value="true"> ${questions[1][2]}`
        allLabel[2].innerHTML = `<input name="resposta1" type="radio" id="rsp3" value="false"> ${questions[1][3]}`
        allLabel[3].innerHTML = `<input name="resposta1" type="radio" id="rsp4" value="false"> ${questions[1][4]}`
        
    } else if (counter == 3) {
        h1.innerHTML = questions[2][0]
        allLabel[0].innerHTML = `<input name="resposta1" type="radio" id="rsp1" value="true"> ${questions[2][1]}`
        allLabel[1].innerHTML = `<input name="resposta1" type="radio" id="rsp2" value="false"> ${questions[2][2]}`
        allLabel[2].innerHTML = `<input name="resposta1" type="radio" id="rsp3" value="false"> ${questions[2][3]}`
        allLabel[3].innerHTML = `<input name="resposta1" type="radio" id="rsp4" value="false"> ${questions[2][4]}`
        
    } else if (counter == 4) {
        h1.innerHTML = questions[3][0]
        allLabel[0].innerHTML = `<input name="resposta1" type="radio" id="rsp1" value="false"> ${questions[3][1]}`
        allLabel[1].innerHTML = `<input name="resposta1" type="radio" id="rsp2" value="false"> ${questions[3][2]}`
        allLabel[2].innerHTML = `<input name="resposta1" type="radio" id="rsp3" value="false"> ${questions[3][3]}`
        allLabel[3].innerHTML = `<input name="resposta1" type="radio" id="rsp4" value="true"> ${questions[3][4]}`
    }


    if (counter == 5) {
        let end = document.getElementsByClassName("finalizar")[0]
        let env = document.getElementsByClassName("enviar")[0]

        end.style.display = "inline-block"
        env.style.display = "none"
    }
}


function finalizar() {

    // pega uma informaçao do search
    const pegarInfo = new URLSearchParams(window.location.search)
    const nome = pegarInfo.get("nome")

    // link do meu outro html, ? procura, pt vira uma variavel com a quantidade de pontos da variavel points
    window.location.href = `pontos.html?nome=${nome}pt=${points}`
}