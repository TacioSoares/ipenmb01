
function embaralhar() {
    var questão1 = document.querySelectorAll('.lista1')
    questão1 = embrulha(questão1)
    multiplaEscolha1 = document.querySelectorAll('.multiplaEscolha1')
    multiplaEscolha1 = embrulha(multiplaEscolha1)
}

// Questões abertas

function resposta1() {
    var input = document.querySelector('#textoResposta1').value
   // var resp = new RegExp("ventilador\\s*?\\w{0,3}\\s*?S3",'gi')
    item1 = "ventilador\\s*?\\w{0,3}\\s*?S3"
    item2 = "ventilador\\s*?\\w{0,3}\\s*?S4"
    item3 = "sala\\s*?\\w{0,3}\\s*?eletrotécnica"
    var ponto = verificarResposta(input, item1, item2, item3)
    mostrarResposta(1)
    if (ponto > 0) {
        respostaCorreta(1)
    } else {
        respostaIncorreta(1)
    }
}

// Questões de complete

function resposta2() {
    var input = document.querySelector('#textoResposta2').value
    var resp = /\s*\bar condicionado\b\s*/gi
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

function respostaMeioCerta(n) {
    var feedback = document.querySelector(`#correção${n}`)
    feedback.style.color = 'lightgreen'
    feedback.innerHTML = 'Meio certo!'
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

function verificarResposta(input, item1, item2, item3) {
    var resp1 = new RegExp(item1,'gi')
    var resp2 = new RegExp(item2,'gi')
    var resp3 = new RegExp(item3,'gi')
    var ponto = 0
    if (resp1.test(input) && resp2.test(input) && resp3.test(input)) {
        ponto = 3
        console.log(ponto)
    } else {
        ponto = 0
        console.log(ponto)
    }
    return ponto
}

function embrulha(questão) {
    var c = questão.length - 1
    for (c;c>0;c--) {
        console.log(c)
        var i = Math.floor(Math.random() * c+1);
        [questão[c].innerHTML, questão[i-1].innerHTML] = [questão[i-1].innerHTML, questão[c].innerHTML];
    }
    return questão
}