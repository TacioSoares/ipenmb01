

function sorteiaQuestao() {
    numeroDoBanco = []
    while (numeroDoBanco.length < 5) {
        var numero = Math.floor(Math.random() * 6)
        if (numeroDoBanco.indexOf(numero) == -1) {
            numeroDoBanco.push(numero)
        } 
    }
    return numeroDoBanco
}



function pegaCampoPergunta() {
    var pergunta = document.querySelectorAll('.perguntas')
    //pergunta[0].firstElementChild.innerHTML = secaoB[1].pergunta
    return pergunta
}
function pegaCampoResposta() {
    var resposta = document.querySelectorAll('.resposta')
    //pergunta[0].firstElementChild.innerHTML = secaoB[1].pergunta
    return resposta
}


function distribuiQuestao() {
    var campoPergunta = pegaCampoPergunta()
    var campoResposta = pegaCampoResposta()
    var numeroDoBanco = sorteiaQuestao()
    i = 0
    while (i < campoResposta.length) {
        // Inserindo perguntas do banco na página
        campoPergunta[i].firstElementChild.innerHTML = secaoA[numeroDoBanco[i]].pergunta

        // Inserindo respostas do banco na página
        campoResposta[i].firstElementChild.innerHTML = secaoA[numeroDoBanco[i]].resposta
        i ++
    }
}

distribuiQuestao()