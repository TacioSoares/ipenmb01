// embaralhar alternativas

function embaralhar() {
    var questão1 = document.querySelectorAll('.lista1')
    questão1 = embrulha(questão1)
    multiplaEscolha1 = document.querySelectorAll('.multiplaEscolha1')
    multiplaEscolha1 = embrulha(multiplaEscolha1)
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
    ponto = 0
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

function validaçãoDoInput(input) {
    valor = 0
    input.forEach(alternativa => {
        if (alternativa.checked) {
            valor += 1
        } else {
            valor -= 1
        }
    });
    if (valor == -4) {
        return true
    } else {
        return false
    }
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
        var i = Math.floor(Math.random() * c+1);
        [questão[c].innerHTML, questão[i-1].innerHTML] = [questão[i-1].innerHTML, questão[c].innerHTML];
    }
    return questão
}

function mostrarErro(errada) {
    errada.style.backgroundColor = 'rgb(252, 52, 52)'
}

function limpaTudo(todas) {
    todas.forEach(alternativa => {
        alternativa.style.backgroundColor = 'white'
    });
}
