function resposta() {
    var botao = document.querySelector('#someeaparece')
    var res = document.querySelector('#res')
    if (botao.value == 'Ver Resposta') {
        res.style.display = 'block'
        botao.value = 'Ocultar Resposta'
    } else {
        res.style.display = 'none'
        botao.value = 'Ver Resposta'
    }
}