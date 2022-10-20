const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
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

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
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

