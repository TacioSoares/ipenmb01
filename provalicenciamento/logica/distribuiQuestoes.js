console.log(`Seção A tem ${secaoA.length}`)
console.log(`Seção B tem ${secaoB.length}`)
console.log(`Seção C tem ${secaoC.length}`)
console.log(`Seção D tem ${secaoD.length}`)
console.log(`Seção E tem ${secaoE.length}`)
function sorteiaQuestao(X) {
    numeroDoBanco = []
    if(X == 'A') {
        while (numeroDoBanco.length < 6) {
            var numero = Math.floor(Math.random() * 84)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'B') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.floor(Math.random() * 88)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    } else if (X == 'C') {
        while (numeroDoBanco.length < 4) {
            var numero = Math.floor(Math.random() * 54)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    } else if (X == 'D') {
        while (numeroDoBanco.length < 1) {
            var numero = Math.floor(Math.random() * 11)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    } else if (X == 'E') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.floor(Math.random() * 41)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    }

}



function pegaCampoPergunta(X) {
    if (X == 'A') {
        var pergunta = document.querySelectorAll('.perguntas')
        return pergunta
    } else if (X == 'B') {
        var pergunta = document.querySelectorAll('.perguntasB')
        return pergunta
    } else if (X == 'C') {
        var pergunta = document.querySelectorAll('.perguntasC')
        return pergunta
    } else if (X == 'D') {
        var pergunta = document.querySelectorAll('.perguntasD')
        return pergunta
    } else if (X == 'E') {
        var pergunta = document.querySelectorAll('.perguntasE')
        return pergunta
    }   
}
function pegaCampoResposta(X) {
    if (X == 'A') {
        var resposta = document.querySelectorAll('.resposta')
        return resposta
    } else if (X == 'B') {
        var resposta = document.querySelectorAll('.respostaB')
        return resposta
    } else if (X == 'C') {
        var resposta = document.querySelectorAll('.respostaC')
        return resposta
    } else if (X == 'D') {
        var resposta = document.querySelectorAll('.respostaD')
        return resposta
    } else if (X == 'E') {
        var resposta = document.querySelectorAll('.respostaE')
        return resposta
    }   
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
            i ++
        }
    } else if (X == 'B') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoB[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoB[numeroDoBanco[i]].resposta
            i ++
        }
    } else if (X == 'C') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoC[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoC[numeroDoBanco[i]].resposta
            i ++
        }
    } else if (X == 'D') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoD[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoD[numeroDoBanco[i]].resposta
            i ++
        }
    } else if (X == 'E') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoE[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoE[numeroDoBanco[i]].resposta
            i ++
        }
    }   
}

distribuiQuestao('A')
distribuiQuestao('B')
distribuiQuestao('C')
distribuiQuestao('D')
distribuiQuestao('E')