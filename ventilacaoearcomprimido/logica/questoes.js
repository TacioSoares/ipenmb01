
var q1 = document.querySelector('#um')
var q2 = document.querySelector('#dois')
var q3 = document.querySelector('#tres')
var q4 = document.querySelector('#quatro')
var q5 = document.querySelector('#cinco') 
var q6 = document.querySelector('#seis')
var q7 = document.querySelector('#sete')
var q8 = document.querySelector('#oito')
var q9 = document.querySelector('#nove')
var q10 = document.querySelector('#dez')
var q11 = document.querySelector('#onze')
var q12 = document.querySelector('#doze')
var q13 = document.querySelector('#treze')
var q14 = document.querySelector('#quatorze')
var q15 = document.querySelector('#quinze')
var q16 = document.querySelector('#deseseis')
var q17 = document.querySelector('#desessete')
var q18 = document.querySelector('#dezoito')
var q19 = document.querySelector('#dezenove')
var q20 = document.querySelector('#vinte')
var q21 = document.querySelector('#vinteeum')
var q22 = document.querySelector('#vinteedois')
var q23 = document.querySelector('#vinteetres')
var q24 = document.querySelector('#vinteequatro')
var q25 = document.querySelector('#vinteecinco')
var q26 = document.querySelector('#vinteeseis')
var q27 = document.querySelector('#vinteesete')
var q28 = document.querySelector('#vinteeoito')
var q29 = document.querySelector('#vinteenove')
var q30 = document.querySelector('#trinta')
var q31 = document.querySelector('#trintaeum')
var q32 = document.querySelector('#trintaedois')



var questao = [document.querySelector('#quest01'), document.querySelector('#quest02'), document.querySelector('#quest03'), document.querySelector('#quest04'), document.querySelector('#quest05'), document.querySelector('#quest06'), document.querySelector('#quest07'), document.querySelector('#quest08'), document.querySelector('#quest09'), document.querySelector('#quest10'), document.querySelector('#quest11'), document.querySelector('#quest12'), document.querySelector('#quest13'), document.querySelector('#quest14'), document.querySelector('#quest15'), document.querySelector('#quest16'), document.querySelector('#quest17'), document.querySelector('#quest18'), document.querySelector('#quest19'), document.querySelector('#quest20'), document.querySelector('#quest21'), document.querySelector('#quest22'), document.querySelector('#quest23'), document.querySelector('#quest24'), document.querySelector('#quest25'), document.querySelector('#quest26'), document.querySelector('#quest27'), document.querySelector('#quest28'), document.querySelector('#quest29'), document.querySelector('#quest30'), document.querySelector('#quest31'), document.querySelector('#quest32')]


function embaralha(lista) {
    var c = lista.length - 1
    for (c;c>0;c--) {
        var i = Math.floor(Math.random() * c+1);
        [lista[c], lista[i-1]] = [lista[i-1], lista[c]];
    }
    q1.innerHTML = questao[0].innerHTML
    q2.innerHTML = questao[1].innerHTML
    q3.innerHTML = questao[2].innerHTML
    q4.innerHTML = questao[3].innerHTML
    q5.innerHTML = questao[4].innerHTML
    q6.innerHTML = questao[5].innerHTML
    q7.innerHTML = questao[6].innerHTML
    q8.innerHTML = questao[7].innerHTML
    q9.innerHTML = questao[8].innerHTML
    q10.innerHTML = questao[9].innerHTML
    q11.innerHTML = questao[10].innerHTML
    q12.innerHTML = questao[11].innerHTML
    q13.innerHTML = questao[12].innerHTML
    q14.innerHTML = questao[13].innerHTML
    q15.innerHTML = questao[14].innerHTML
    q16.innerHTML = questao[15].innerHTML
    q17.innerHTML = questao[16].innerHTML
    q18.innerHTML = questao[17].innerHTML
    q19.innerHTML = questao[18].innerHTML
    q20.innerHTML = questao[19].innerHTML
    q21.innerHTML = questao[20].innerHTML
    q22.innerHTML = questao[21].innerHTML
    q23.innerHTML = questao[22].innerHTML
    q24.innerHTML = questao[23].innerHTML
    q25.innerHTML = questao[24].innerHTML
    q26.innerHTML = questao[25].innerHTML
    q27.innerHTML = questao[26].innerHTML
    q28.innerHTML = questao[27].innerHTML
    q29.innerHTML = questao[28].innerHTML
    q30.innerHTML = questao[29].innerHTML
    q31.innerHTML = questao[30].innerHTML
    q32.innerHTML = questao[31].innerHTML
    return 
} 




function resposta(n) {

    var botao = [document.querySelector('#b1'), document.querySelector('#b2'), document.querySelector('#b3'), document.querySelector('#b4'), document.querySelector('#b5'), document.querySelector('#b6'), document.querySelector('#b7'), document.querySelector('#b8'), document.querySelector('#b9'), document.querySelector('#b10'), document.querySelector('#b11'), document.querySelector('#b12'), document.querySelector('#b13'), document.querySelector('#b14'), document.querySelector('#b15'), document.querySelector('#b16'), document.querySelector('#b17'), document.querySelector('#b18'), document.querySelector('#b19'), document.querySelector('#b20'), document.querySelector('#b21'), document.querySelector('#b22'), document.querySelector('#b23'), document.querySelector('#b24'), document.querySelector('#b25'), document.querySelector('#b26'), document.querySelector('#b27'), document.querySelector('#b28'), document.querySelector('#b29'), document.querySelector('#b30'), document.querySelector('#b31'), document.querySelector('#b32')]
    var res1 = document.querySelector('#res1')
    var res2 = document.querySelector('#res2')
    var res3 = document.querySelector('#res3')
    var res4 = document.querySelector('#res4')
    var res5 = document.querySelector('#res5')
    var res6 = document.querySelector('#res6')
    var res7 = document.querySelector('#res7')
    var res8 = document.querySelector('#res8')
    var res9 = document.querySelector('#res9')
    var res10 = document.querySelector('#res10')
    var res11 = document.querySelector('#res11')
    var res12 = document.querySelector('#res12')
    var res13 = document.querySelector('#res13')
    var res14 = document.querySelector('#res14')
    var res15 = document.querySelector('#res15')
    var res16 = document.querySelector('#res16')
    var res17 = document.querySelector('#res17')
    var res18 = document.querySelector('#res18')
    var res19 = document.querySelector('#res19')
    var res20 = document.querySelector('#res20')
    var res21 = document.querySelector('#res21')
    var res22 = document.querySelector('#res22')
    var res23 = document.querySelector('#res23')
    var res24 = document.querySelector('#res24')
    var res25 = document.querySelector('#res25')
    var res26 = document.querySelector('#res26')
    var res27 = document.querySelector('#res27')
    var res28 = document.querySelector('#res28')
    var res29 = document.querySelector('#res29')
    var res30 = document.querySelector('#res30')
    var res31 = document.querySelector('#res31')
    var res32 = document.querySelector('#res32')
    if (botao[n].value == 'Ver resposta') {
        if (n == 0) {
            res1.style.display = 'block'
        } else if (n == 1) {
            res2.style.display = 'block'
        } else if (n == 2) {
            res3.style.display = 'block'
        } else if (n == 3) {
            res4.style.display = 'block'
        } else if (n == 4) {
            res5.style.display = 'block'
        } else if (n == 5) {
            res6.style.display = 'block'
        } else if (n == 6) {
            res7.style.display = 'block'
        } else if (n == 7) {
            res8.style.display = 'block'
        } else if (n == 8) {
            res9.style.display = 'block'
        } else if (n == 9) {
            res10.style.display = 'block'
        } else if (n == 10) {
            res11.style.display = 'block'
        } else if (n == 11) {
            res12.style.display = 'block'
        } else if (n == 12) {
            res13.style.display = 'block'
        } else if (n == 13) {
            res14.style.display = 'block'
        } else if (n == 14) {
            res15.style.display = 'block'
        } else if (n == 15) {
            res16.style.display = 'block'
        } else if (n == 16) {
            res17.style.display = 'block'
        } else if (n == 17) {
            res18.style.display = 'block'
        } else if (n == 18) {
            res19.style.display = 'block'
        } else if (n == 19) {
            res20.style.display = 'block'
        } else if (n == 20) {
            res21.style.display = 'block'
        } else if (n == 21) {
            res22.style.display = 'block'
        } else if (n == 22) {
            res23.style.display = 'block'
        } else if (n == 23) {
            res24.style.display = 'block'
        } else if (n == 24) {
            res25.style.display = 'block'
        } else if (n==25) {
            res26.style.display = 'block'
        } else if (n==26) {
            res27.style.display = 'block'
        } else if (n==27) {
            res28.style.display = 'block'
        } else if (n==28) {
            res29.style.display = 'block'
        } else if (n==29) {
            res30.style.display = 'block'
        } else if (n==30) {
            res31.style.display = 'block'
        } else {
            res32.style.display = 'block'
        }   
        botao[n].value = 'Ocultar resposta' 
        botao[n].style.background = 'darkgray'
    } else {
        if (n == 0) {
            res1.style.display = 'none'
        } else if (n == 1) {
            res2.style.display = 'none'
        } else if (n == 2) {
            res3.style.display = 'none'
        } else if (n == 3) {
            res4.style.display = 'none'
        } else if (n == 4) {
            res5.style.display = 'none'
        } else if (n == 5) {
            res6.style.display = 'none'
        } else if (n == 6) {
            res7.style.display = 'none'
        } else if (n == 7) {
            res8.style.display = 'none'
        } else if (n == 8) {
            res9.style.display = 'none'
        } else if (n == 9) {
            res10.style.display = 'none'
        } else if (n == 10) {
            res11.style.display = 'none'
        } else if (n == 11) {
            res12.style.display = 'none'
        } else if (n == 12) {
            res13.style.display = 'none'
        } else if (n == 13) {
            res14.style.display = 'none'
        } else if (n == 14) {
            res15.style.display = 'none'
        } else if (n == 15) {
            res16.style.display = 'none'
        } else if (n == 16) {
            res17.style.display = 'none'
        } else if (n == 17) {
            res18.style.display = 'none'
        } else if (n == 18) {
            res19.style.display = 'none'
        } else if (n == 19) {
            res20.style.display = 'none'
        } else if (n == 20) {
            res21.style.display = 'none'
        } else if (n == 21) {
            res22.style.display = 'none'
        } else if (n == 22) {
            res23.style.display = 'none'
        } else if (n == 23) {
            res24.style.display = 'none'
        } else if (n == 24) {
            res25.style.display = 'none'
        } else if (n == 25) {
            res26.style.display = 'none'
        } else if (n == 26) {
            res27.style.display = 'none'
        }  else if (n==27) {
            res28.style.display = 'none'
        } else if (n==28) {
            res29.style.display = 'none'
        } else if (n==29) {
            res30.style.display = 'none'
        } else if (n==30) {
            res31.style.display = 'none'
        } else {
            res32.style.display = 'none'
        }
        botao[n].value = 'Ver resposta'
        botao[n].style.background = 'lightgray'
    }
}

