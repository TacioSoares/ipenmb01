

function sorteiaQuestao(X) {
    numeroDoBanco = []
    if(X == 'A') {
        while (numeroDoBanco.length < 5) {
            var numero = Math.floor(Math.random() * 6)
            if (numeroDoBanco.indexOf(numero) == -1) {
                numeroDoBanco.push(numero)
            } 
        }
        return numeroDoBanco
    } else if (X == 'B') {
        while (numeroDoBanco.length < 3) {
            var numero = Math.floor(Math.random() * 6)
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
        //pergunta[0].firstElementChild.innerHTML = secaoB[1].pergunta
        return pergunta
    } else if (X == 'B') {
        var pergunta = document.querySelectorAll('.perguntasB')
        console.log(pergunta)
        return pergunta
    }
}
function pegaCampoResposta(X) {
    if (X == 'A') {
        var resposta = document.querySelectorAll('.resposta')
        //pergunta[0].firstElementChild.innerHTML = secaoB[1].pergunta
        return resposta
    } else if (X == 'B') {
        var resposta = document.querySelectorAll('.respostaB')
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
    }   
}

distribuiQuestao('A')
distribuiQuestao('B')