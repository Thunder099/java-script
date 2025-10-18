let points = 0
let counter = 0

let questions = [
    ["Qual a maior montanha do sistema solar?", "Monte everest", "Makalu", "Monte olimpo", "Kangphu Kang"],
    ["Quantos planetas existem no sistema solar?", "6", "8", "9", "7"],
    ["Qual a profundidade da fossa das marianas?", "10.984 metros", "11.687 metros", "9.312 metros", "14.983 metros"],
    ["Oque é um horizonte de eventos?", "Horizonte de eventos é o ponto onde o tempo para completamente ao redor de um buraco negro.", "É a camada de gás e poeira que envolve o buraco negro, responsável por esconder a luz que tenta sair.", "É a distância máxima em que um buraco negro pode sugar objetos ao seu redor.", "É o ponto em que nem a luz escapa da sua gravidade"]
]

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

}