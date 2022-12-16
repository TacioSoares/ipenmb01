
// Questões abertas

function resposta1() {
    var input = document.querySelector('#textoResposta1').value
    var resp = /\s*\bresposta certa\b\s*/gi
    mostrarResposta(1)
    if (resp.test(input)) {
        respostaCorreta(1)
    } else {
        respostaIncorreta(1)
    }
}

// Questões de complete

function resposta2() {
    var input = document.querySelector('#textoResposta2').value
    var resp = /\s*\bresposta correta\b\s*/gi
    mostrarResposta(2)
    if (resp.test(input)) {
        respostaCorreta(2)
    } else {
        respostaIncorreta(2)
    }
}

// Questões de multipla escolha

function resposta3() {
    var input = document.querySelector('#alternativas1').opção1.value
    mostrarAlternativaCerta(3)
    if (input == 3) {
        respostaCorreta(3)
    } else {
        respostaIncorreta(3)
    }
}

// Questões de verdadeiro

function resposta4() {
    var input = document.querySelector('#verdadeiroOuFalso').VouF1
    correta = ['1','3']
    var ponto = contarPonto(input)
    var rCerta = [document.querySelector('#verdOuFals01'),document.querySelector('#verdOuFals03')]
    validaVouF(ponto, correta, rCerta)
}

// funções chamadas nas questões

function respostaCorreta(n) {
    var feedback = document.querySelector(`#correção${n}`)
    feedback.style.color = 'darkgreen'
    feedback.innerHTML = 'Correto!'
}
function respostaIncorreta(n) {
    var feedback = document.querySelector(`#correção${n}`)
    feedback.style.color = 'darkred'
    feedback.innerHTML = 'Incorreto!'
}

function mostrarResposta(n) {
    var respotaCerta = document.querySelector(`#resp${n}`)
    respotaCerta.style.display = 'block'
}

function mostrarAlternativaCerta(n) {
    var correta = document.querySelector(`#m0${n}`)
    correta.style.backgroundColor = 'lightgreen'
}    

function contarPonto(input) {
    var ponto = 0
    input.forEach(caixa => {
        if(caixa.checked) {
            if((correta.indexOf(caixa.value)) != -1){
                ponto += 1
            } else {
                ponto -= 1
            }
        }
    });
    return (ponto)
}

function validaVouF(ponto, correta, rCerta) {
    if (ponto == correta.length) {
        respostaCorreta(4)
    } else {
        respostaIncorreta(4)
    }
    rCerta.forEach(certa => {
        certa.style.backgroundColor = 'lightgreen'
    })
}