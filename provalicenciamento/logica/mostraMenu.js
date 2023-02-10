var botaoMenu = document.querySelector('#botaoMenu')
var checkBox = document.querySelectorAll('.filtro')

botaoMenu.addEventListener("click", function() {
    var opcaoMenu = document.querySelector('#janelaMenu')
    
    if (opcaoMenu.style.display == 'flex') {
        opcaoMenu.style.display = 'none'
    } else {
        opcaoMenu.style.display = 'flex'
    }
})

checkBox.forEach(check => {
    // adiciona evento ouvidor em cada input checkbox
    check.addEventListener("click", function(){
        // verifica se cada checkbox está marcada
        checkBox.forEach(elemento => {
            if(elemento.checked == false){
                var questoes = document.querySelectorAll(`.questãoSecao${elemento.name}`)
                questoes.forEach(questao => {
                    questao.style.display = 'none'
                })
            } else {
                var questoes = document.querySelectorAll(`.questãoSecao${elemento.name}`)
                questoes.forEach(questao => {
                    questao.style.display = 'block'
                })
            }
        })
    })
});

