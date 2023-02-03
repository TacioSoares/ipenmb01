
var botaoDeResposta = document.querySelectorAll('.chamaResposta')
var campoResposta = pegaCampoResposta()
for (let i = 0; i < botaoDeResposta.length; i++) {
    botaoDeResposta[i].addEventListener('click', function(){
       // console.log(this.parentNode.nextElementSibling)
        
        if (botaoDeResposta[i].value == 'Resposta') {
            this.parentNode.nextElementSibling.style.display = 'block'
            botaoDeResposta[i].value = 'Ocultar'
        } else {
            this.parentNode.nextElementSibling.style.display = 'none'
            botaoDeResposta[i].value = 'Resposta'
        }    
    })    
}
