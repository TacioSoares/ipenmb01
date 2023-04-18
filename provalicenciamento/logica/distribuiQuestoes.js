console.log(secaoA.length,secaoB.length,secaoC.length,secaoD.length,secaoE.length,secaoF.length,secaoG.length)
const refresh = document.querySelector('#refresh')

function sorteiaQuestao(X) {
    numeroDoBanco = []
    if (X == 'A') {
        while (numeroDoBanco.length < 6) {
            var numero = Math.round(Math.random() * 93)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'B') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.round(Math.random() * 77)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'C') {
        while (numeroDoBanco.length < 4) {
            var numero = Math.round(Math.random() * 53)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'D') {
        while (numeroDoBanco.length < 1) {
            var numero = Math.round(Math.random() * 11)
            console.log(`Seção D = ${numero}`)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'E') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.round(Math.random() * 40)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'F') {
        while (numeroDoBanco.length < 3) {
            var numero = Math.round(Math.random() * 36)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'G') {
        while (numeroDoBanco.length < 7) {
            var numero = Math.round(Math.random() * 57)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    }
}

function pegaCampoPergunta(X) {
    var pergunta = document.querySelectorAll(`.perguntas${X}`)
    return pergunta

}
function pegaCampoResposta(X) {
    var resposta = document.querySelectorAll(`.resposta${X}`)
    return resposta
}


function distribuiQuestao(X) {
    var campoPergunta = pegaCampoPergunta(X)
    var campoResposta = pegaCampoResposta(X)
    var numeroDoBanco = sorteiaQuestao(X)
    i = 0
    if (X == 'A') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoA[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoA[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'B') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoB[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoB[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'C') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoC[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoC[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'D') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoD[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoD[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'E') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoE[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoE[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'F') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoF[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoF[numeroDoBanco[i]].resposta
            i++
        }
    } else if (X == 'G') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoG[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoG[numeroDoBanco[i]].resposta
            i++
        }
    }
}
distribuiQuestao('A')
distribuiQuestao('B')
distribuiQuestao('C')
distribuiQuestao('D')
distribuiQuestao('E')
distribuiQuestao('F')
distribuiQuestao('G')

refresh.addEventListener('click', () => {
    var perguntas = pegaTodasAsQuestoes()
    perguntas.forEach(secao => {
        secao.forEach(pergunta => {
            pergunta.style.opacity = '0'
        })
    });
    
    var respostas = [...pegaCampoResposta('A'),...pegaCampoResposta('B'),...pegaCampoResposta('C'),...pegaCampoResposta('D'),...pegaCampoResposta('E'),...pegaCampoResposta('F'),...pegaCampoResposta('G')]
    var botoes = document.querySelectorAll('.chamaResposta')
    
    setTimeout(() => {
        perguntas.forEach(secao => {
            secao.forEach(pergunta => {
                pergunta.style.opacity = '100'
            })
        });
        respostas.forEach(resposta => {
            resposta.style.display = 'none'
        });
        botoes.forEach(botao => {
            botao.value = 'Resposta'
        });
        distribuiQuestao('A')
        distribuiQuestao('B')
        distribuiQuestao('C')
        distribuiQuestao('D')
        distribuiQuestao('E')
        distribuiQuestao('F')
        distribuiQuestao('G')

    }, 1100);
})

function pegaTodasAsQuestoes() {
    var questoes = [document.querySelectorAll('.perguntasA'), document.querySelectorAll('.perguntasB'), document.querySelectorAll('.perguntasC'), document.querySelectorAll('.perguntasD'), document.querySelectorAll('.perguntasE'), document.querySelectorAll('.perguntasF'), document.querySelectorAll('.perguntasG')]
    return questoes
}