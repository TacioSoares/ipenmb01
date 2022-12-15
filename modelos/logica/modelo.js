function resposta1() {
    var input = document.querySelector('#textoResposta1').value
    var resp = /\s*\bresposta certa\b\s*/gi
    var respotaCerta = document.querySelector('#resp1')
    respotaCerta.style.display = 'block'
    if (resp.test(input)) {
        var feedback = document.querySelector('#correção1')
        feedback.style.color = 'darkgreen'
        feedback.innerHTML = 'Correto!'

    } else {
        var feedback = document.querySelector('#correção1')
        feedback.style.color = 'darkred'
        feedback.innerHTML = 'Incorreto!'
    }
}

function resposta2() {
    var input = document.querySelector('#textoResposta2').value
    var resp = /\s*\bresposta correta\b\s*/gi
    var respotaCerta = document.querySelector('#resp2')
    respotaCerta.style.display = 'block'
    console.log(input)
    console.log(resp)
    if (resp.test(input)) {
        var feedback = document.querySelector('#correção2')
        feedback.style.color = 'darkgreen'
        feedback.innerHTML = 'Correto!'

    } else {
        var feedback = document.querySelector('#correção2')
        feedback.style.color = 'darkred'
        feedback.innerHTML = 'Incorreto!'
    }
}

function resposta3() {
    var input = document.querySelector('input[name="opção1"]:checked').value
    console.log(input)
}