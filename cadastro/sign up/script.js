const nome = document.getElementById("nome")
const email = document.getElementById("email")

const senha1 = document.getElementById("senha-1")
const senha2 = document.getElementById("senha-2")

const submit = document.getElementById("submit-")

// Verificação se a senha é igual ou nao a cada input
// senha1.addEventListener("input", () => {

//     valor1 = senha1.value
//     valor2 = senha2.value

//     if (valor1 === valor2) {

//         senha1.classList.toggle("selected")
//         senha2.classList.toggle("selected")

//         console.log("É igual")
//     } else {
//         console.log("nao é igual")
//     }
// });

// senha2.addEventListener("input", () => {

//     valor1 = senha1.value
//     valor2 = senha2.value

//     if (valor1 === valor2) {
//         console.log("É igual")
//     } else {
//         console.log("nao é igual")
//     }
// });

// verifica senhas, simplificado

submit.addEventListener("click", () => {

    const p = document.getElementsByTagName("p")[0]

    if (senha1.value != senha2.value) {
        senha1.style.border = "2px solid rgb(255, 0, 0)"
        senha2.style.border = "2px solid rgb(255, 0, 0)"

        p.innerHTML = "As senhas não coincidem"
        p.style.color = "rgb(255, 0, 0)"

        senha1.value = ""
        senha2.value = ""
    } else {
        senha1.style.border = "none"
        senha2.style.border = "none"

        senha1.style.boxShadow = "none"
        senha2.style.boxShadow = "none"

        p.innerHTML = ""
    }

});