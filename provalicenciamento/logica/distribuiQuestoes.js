
function sorteiaQuestao(X) {
    numeroDoBanco = []
    if(X == 'A') {
        while (numeroDoBanco.length < 6) {
            var numero = Math.floor(Math.random() * 93)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            }
        }
        return numeroDoBanco
    } else if (X == 'B') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.floor(Math.random() * 79)
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
    } else if (X == 'F') {
        while (numeroDoBanco.length < 3) {
            var numero = Math.floor(Math.random() * 36)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    } else if (X == 'G') {
        while (numeroDoBanco.length < 7) {
            var numero = Math.floor(Math.random() * 56)
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
    } else if (X == 'F') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoF[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoF[numeroDoBanco[i]].resposta
            i ++
        }
    } else if (X == 'G') {
        while (i < campoPergunta.length) {
            // Inserindo perguntas do banco na página
            campoPergunta[i].firstElementChild.innerHTML = secaoG[numeroDoBanco[i]].pergunta

            // Inserindo respostas do banco na página
            campoResposta[i].firstElementChild.innerHTML = secaoG[numeroDoBanco[i]].resposta
            i ++
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