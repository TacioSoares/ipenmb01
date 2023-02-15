var botaoMenu = document.querySelector('#botaoMenu')
var checkBox = document.querySelectorAll('.filtro')

botaoMenu.addEventListener("click", function() {
    var opcaoMenu = document.querySelector('#janelaMenu')
    var listaMenu = document.querySelectorAll('.opcaoMenu')
    if (opcaoMenu.style.display == 'flex') {
        listaMenu.forEach(opcao => {
            opcao.style.opacity = '0'
        })
        setTimeout(() => {
            opcaoMenu.style.display = 'none'
        },1200)
    } else {
        opcaoMenu.style.display = 'flex'
        setTimeout(() => {
            listaMenu.forEach(opcao => {
                opcao.style.opacity = '100'
            })
        },300)
        
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
                    questao.style.opacity = '0'
                    setTimeout(() => {
                        questao.style.display = 'none'
                    }, 1500);
                })
            } else {
                var questoes = document.querySelectorAll(`.questãoSecao${elemento.name}`)
                questoes.forEach(questao => {
                    questao.style.display = 'block'
                    setTimeout(() => {
                        questao.style.opacity = '100'
                    }, 300);
                })
            }
        })
    })
});

