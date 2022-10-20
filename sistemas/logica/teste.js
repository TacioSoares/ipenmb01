var questao = [1,'A',3,'C',5]
embaralha(questao)
function embaralha(lista) {
    var c = lista.length - 1
    for (c;c>0;c--) {
        var i = Math.floor(Math.random() * c+1);
        [lista[c], lista[i-1]] = [lista[i-1], lista[c]];
    }
}