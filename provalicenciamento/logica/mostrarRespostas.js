
var botaoDeResposta = document.querySelectorAll('.chamaResposta')
var campoResposta = pegaCampoResposta()
for (let i = 0; i < botaoDeResposta.length; i++) {
    botaoDeResposta[i].addEventListener('click', function(){
        if (botaoDeResposta[i].value == 'Responder') {
            campoResposta[i].style.display = 'block'
            botaoDeResposta[i].value = 'Ocultar'
        } else {
            campoResposta[i].style.display = 'none'
            botaoDeResposta[i].value = 'Responder'
        }    
    })    
}
