const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}









/*

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")


robotron.addEventListener("click", () => {
    console.log("Cliquei no robo")
})

function dizOi(nome){
    console.log(nome)
    console.log("Bem vindo ao robotron 2000")
}

dizOi("Érico")

1 forma de fazer

somar.addEventListener("click",(evento) => {
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1
})

2 forma de fazer

somar.addEventListener("click", () => {manipulaDados("somar")})
subtrair.addEventListener("click", () => {manipulaDados("subtrair")} )

3 forma de fazer
*porem dessa forma o odigo javascript fica atrelado ao css e pode ocasionar falhas se o desing ou alguem mudar o nome dos ids

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

*/

