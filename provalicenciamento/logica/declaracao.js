const secaoA = [
    {
        pergunta: 'O que são Número Atômico e Número de Massa? Como são representados?',
        resposta: 'O NÚMERO ATÔMICO é igual ao número de prótons no núcleo. Ele é representado pela letra “Z”. Vale ressaltar que, sendo um átomo eletricamente neutro, o número de prótons no núcleo é igual ao número de elétrons em órbita, então o número dado a Z serve como representação de ambos. O NÚMERO DE MASSA é igual ao número de prótons mais o número de nêutrons no núcleo. O número de massa é representado pela letra “A”.'
    },
    {
        pergunta: 'O que são isótopos?',
        resposta: 'Isótopos são nuclídeos (elementos químicos), que possuem o mesmo número de prótons divergindo entre si na quantidade de nêutrons.'
    },
    {
        pergunta: 'O que é abundância isotópica?',
        resposta: 'Abundância Isotópica é a porcentagem em peso dos isótopos constituintes de um elemento químico.'
    },
    {
        pergunta: 'Explique porque isótopos de um mesmo elemento químico possuem propriedades químicas semelhantes.',
        resposta: 'As propriedades químicas são regidas essencialmente pelo número de elétrons no átomo, como os isótopos possuem o mesmo número de prótons, e por consequência o mesmo número de elétrons, logo se conclui que os isótopos possuem as mesmas propriedades químicas.'
    },
    {
        pergunta: 'O que é um elétron excitado?',
        resposta: 'Elétron excitado é um elétron que se encontra em níveis de energia superiores (E2, E3....En), ou seja, não se encontra no seu estado fundamental (nível de energia fundamental E1 = nível de energia mais baixo e vale -13,6 eV) e, sendo assim, ele é dito instável e decairá para o estado fundamental.'
    },
    {
        pergunta: 'O que é “Densidade Atômica” de um elemento químico (ou substância química)?',
        resposta: `Densidade atômica de um elemento químico (ou de uma substância química) é o número de átomos (ou moléculas) existentes por unidade de volume deste elemento (ou substância). Sua unidade de medida normalmente utilizada é (átomos/cm3) ou (moléculas/cm3).
        A densidade atômica de um elemento químico (ou de uma substância química) pode ser determinada pela seguinte equação:<br><br>
        
        N=n<sub>0</sub> x &rho;/A <br><br>
        
        onde:
        n<sub>0</sub> = Número de Avogadro, que é igual a 6,02x1023 átomos/MOL para elemento químico ou 6,02x1023 moléculas/MOL.<br><br>
	    &rho; = Peso específico do elemento ou substância em g/cm<sup>3</sup>.<br><br>
        A = Massa Atômica (gramas) para elementos químicos, ou molécula grama (gramas) para substâncias químicas.`
    },
    {
        pergunta: `O que é radiação? Quais são os tipos de radiação e como se constitui cada tipo?`,
        resposta: `Radiação é uma forma propagação de energia. 
        Os tipos de radiação são:<br><br>
        -Corpuscular que é constituída de feixes de partículas elementares ou núcleos atômicos tais como elétrons, prótons, nêutrons, partículas alfa, etc.<br><br>
        -Eletromagnéticas são constituídos por campos elétricos e magnéticos oscilantes e se propagam com velocidade constante no vácuo, exemplo das ondas de rádio, ondas luminosas (luz), raios infravermelhos, raios ultravioletas, raios X e raios gamas.
        `
    },
    {
        pergunta: `O que são a energia de ionização e energia de excitação de um átomo?`,
        resposta: `Energia de Ionização é a energia necessária para separar o elétron do átomo. <br><br>
        Energia de Excitação é a energia necessária para levar o elétron do estado fundamental a qualquer estado excitado (órbitas superiores a original).
        `
    },
    {
        pergunta: `O que é um núcleon?`,
        resposta: `É uma partícula do núcleo atômico, podendo ser tanto um próton quanto um nêutron`
    },
    {
        pergunta: `Quais são as forças que interagem no núcleo de um átomo? Explique cada uma delas e coloque as em ordem crescente de suas respectivas intensidades.`,
        resposta: `Gravitacional: Atua entre massas. No núcleo estas massas são representadas por núcleons.<br><br>
        Elétrica ou Coulombiana: Atua entre cargas elétricas e é proporcional ao inverso do quadrado da distância entre elas. No núcleo ocorre repulsão entre os prótons, visto que os nêutrons não têm carga.<br><br>
        Nuclear: É uma força desconhecida que atua no núcleo e tem as seguintes características:<br><br>
        a)	Curto alcance.<br>
        b)	Muito intensa.<br>
        c)	Não depende das cargas do núcleon.<br>
        d)	São atrativas.<br>
        e)	São dependentes do “spin” do núcleon.<br><br>
        Magnética: É uma força fraca causada por cargas elétricas em movimento sob influência de um campo magnético criado por outras cargas em movimento. No núcleo ela é fraca.<br><br>
        A ordem crescente em termos de intensidades destas forças é:<br>
        F<sub>Gravitacional</sub>&lt;F<sub>Magnética</sub>&lt;F<sub>Elétrica</sub>&lt;F<sub>Nuclear</sub>.
        `
    },
    {
        pergunta: `Qual a diferença entre raios-X e radiações gama quanto às suas origens?`,
        resposta: `Ambas as radiações são eletromagnéticas, no entanto, a radiação X se origina nas camadas eletrônicas do átomo por desexcitação, ao passo que a radiação gama se origina no núcleo também por desexcitação nuclear.`
    },
    {
        pergunta: `O que é energia de excitação do núcleo? Qual a diferença entre energia de excitação do átomo (explicitamente do elétron) e do núcleo? O que os difere sob o ponto de vista quantitativo`,
        resposta: `Energia de excitação do núcleo é o excesso de energia acima do estado fundamental do núcleo.<br>
        A energia de excitação do elétron se refere ao excesso de energia deste elétron na eletrosfera, enquanto a energia do núcleo se refere ao excesso de energia do núcleo.
        A energia de excitação do elétron é da ordem de eV e do núcleo é da ordem de MeV, portanto bem distintas.
        `
    },
    {
        pergunta: `Relacione as origens e os valores das energias liberadas em uma reação de fissão?`,
        resposta: `<table>
        <thead>
            <tr>
                <td>ORIGEM</td>
                <td>ENERGIA</td>
            </tr>
        </thead>    
        <tbody>
            <tr>
                <td>Energia cinética dos fragmentos de fissão</td>
                <td>165 Mev</td>
            </tr>
            <tr>
                <td>Energia das radiações gama instantâneas</td>
                <td>7 MeV</td>
            </tr>
            <tr>
                <td>Energia cinética dos nêutrons de fissão</td>
                <td>5 MeV</td>
            </tr>
            <tr>
                <td>Partículas beta provenientes dos produtos de fissão</td>
                <td>7 Mev</td>
            </tr>
            <tr>
                <td>Radiações gama oriundas dos produtos de fissão</td>
                <td>6 Mev</td>
            </tr>
            <tr>
                <td>Neutrinos</td>
                <td>10MeV</td>
            </tr>
        </tbody>
        <tfoot>    
            <tr>
                <td>Total</td>
                <td>200MeV</td>
            </tr>
        </tfoot>
        
    </table>`
    },
    {
        pergunta: `O calor gerado numa fissão é proveniente na maior parte de qual produto de fissão?`,
        resposta: `O calor gerado numa fissão é proveniente, em cerca de 80% dos fragmentos de fissão (Energia cinética transformada em calor).`
    },
    {
        pergunta: `O que se entende por “calor de decaimento”?`,
        resposta: `É o calor que continua a ser gerado, mesmo após o processo de fissão ter sido consumado (por exemplo, após o desligamento do Reator), calor este gerado por produtos radioativos que continuam decaindo.`
    },
    {
        pergunta: `Quais são as características dos fragmentos de fissão e qual sua importância num reator de potência?`,
        resposta: `São partículas altamente carregadas: em média de 20 a 22 unidades de cargas positivas. Estas partículas (P.F) produzem em seu caminho fortes ionizações e perdem praticamente toda sua energia próxima ao local onde foi gerada. Este calor concentrado é removido por um circuito primário e transformado em energia elétrica através de turbinas e geradores.`
    },
    {
        pergunta: `Quais os mecanismos de interação da radiação gama com a matéria?`,
        resposta: `Efeito fotoelétrico.<br><br>
        Efeito Compton.<br><br>
        Produção de pares.
        `
    },
    {
        pergunta: `Explique qual a condição para que ocorra o mecanismo de produção de pares na interação da radiação gama com a matéria?`,
        resposta: `E > massa de repouso do par (e<sup>+</sup> e<sup>-</sup>).<br>
        Ou,<br>
        E &gt; 2m<sub>e</sub>c<sup>2</sup>, portanto maior que 1,02 MeV.
        `
    },
    {
        pergunta: `O que diferencia uma interação da radiação alfa dos fragmentos de fissão com a matéria?`,
        resposta: `O alcance dos fragmentos de fissão é menor que a partícula alfa visto que, tendo os fragmentos de fissão muito mais carga que as partículas Alfa, eles estarão sujeitos às interações de Coulomb muito mais intensas.`
    },
    {
        pergunta: `Quais as principais reações nucleares induzidas por nêutrons?`,
        resposta: `Reações de absorção:<br><br>
        -captura radioativa (n, &gamma;).<br>
        -captura com ejeção (n, &alpha;).<br>
        -fissão (n, f).<br><br>
        Reações de espalhamento:<br><br>
        -elástico.<br>
        -inelástico.<br>
        `
    },
    {
        pergunta: `O que é um nuclídeo físsil e um nuclídeo fissionável? Qual a diferença entre eles?`,
        resposta: `Nuclídeo físsil é o nuclídeo que fissiona com nêutron de qualquer energia inclusive zero. Nuclídeo fissionável é aquele que só se fissiona com nêutrons de maior energia.`
    },
    {
        pergunta: `O que se entende por seção de choque de um átomo? Qual a sua unidade?`,
        resposta: `Seção de choque é probabilidade de interação entre um nêutron e um núcleo alvo. Essa probabilidade e expressa em unidade de área (cm2), porém devido às reduzidas dimensões do alvo (núcleo) criou-se uma unidade específica denominada “barn” que equivale a 10<sup>-24</sup> cm<sup>2</sup>`
    },
    {
        pergunta: `O que é seção de choque macroscópica de absorção? Qual a é sua relação com a seção de choque microscópica e qual a sua unidade?`,
        resposta: `Seção de choque macroscópica de absorção é o produto N&sigma; onde N é o número de átomos por cm3 e &sigma; é seção de choque microscópica de absorção do elemento.

        &sum; = N x &sigma; <br><br>
        
        Sua unidade é o cm<sup>-1</sup>.
        `
    },
    {
        pergunta: `O que se entende por livre caminho médio de um nêutron em um material particular? Qual a sua relação com a seção de choque macroscópica deste material? Qual a sua unidade?`,
        resposta: `Livre caminho médio é a distância média percorrida por um nêutron em um material particular sem sofrer uma reação. <br><br>

        &lambda; = 1/&sum; <br><br>
        
        Sua unidade é o cm.
        `
    },
    {
        pergunta: `A seção de choque microscópica de um material depende da energia do nêutron incidente?`,
        resposta: `Sim.<br>
        &sigma; = &sigma;(E)`
    },
    {
        pergunta: `O que são as regiões de ressonâncias nas curvas de seção de choque microscópicas de um elemento em função da energia do nêutron incidente?`,
        resposta: `São regiões onde a seção de choque exibe grandes variações em sua magnitude e cada uma delas está relacionada com os níveis de energia de excitação do núcleo.`
    },
    {
        pergunta: `27)	O livre caminho médio de absorção de um nêutron é dado por &lambda;<sub>a</sub> = 1/&sum;<sub>a</sub>, onde:
        &sum;<sub>a</sub> é a seção macroscópica de absorção. Calcular o livre caminho médio de um nêutron térmico no cádmio. <br>
        Dados: <br> 
        &rho;<sub>Cd</sub> = 8,6g/cm<sup>3</sup> <br>
        A<sub>Cd</sub> = 113 <br>
        &sigma;<sub>aCd</sub> = 2600 barn <br>
        `,
        resposta: `113g &rarr; 6,02x10<sup>23</sup> <br>
        8,6g &rarr; N <br>
        Portanto: <br>
        N = 4,58x10<sup>22</sup> at/cm<sup>3</sup>. <br>
        Como: <br><br>
        &lambda; = 1/&sum; <br>
        &sum; = N x &sigma; <br>
        &lambda; =1/(N x &sigma;) <br>
        &lambda; =1/(4,58 x 10<sup>22</sup> x 2600 x 10<sup>-24</sup> ) <br>
        
        &lambda; &asymp; 0,008 cm
        `
    },
    {
        pergunta: `O que são nêutrons prontos e nêutrons atrasados e o que os diferem entre si?`,
        resposta: `Nêutrons prontos são aqueles originados no instante da fissão. Nêutrons atrasados são aqueles originados posteriormente por decaimento dos produtos de fissão.
        Os nêutrons atrasados geralmente tem energia menor.
        `
    },
    {
        pergunta: `O que são nêutrons térmicos?`,
        resposta: `São nêutrons que estão em equilíbrio térmico com o meio.`
    },
    {
        pergunta: `Defina fluxo de nêutrons. `,
        resposta: `Fluxo de nêutrons é o comprimento total do caminho percorrido por todos os nêutrons em um centímetro do material em um segundo. <br>
        Outra definição equivalente é: <br>
        Fluxo de nêutrons é o número de nêutrons atravessando uma unidade de área (cm<sup>2</sup>) por unidade de tempo, ou seja, &Phi; = nêutrons/cm<sup>2</sup>xs.
        `
    },
    {
        pergunta:`O que é moderação de nêutrons?`,
        resposta: `Moderação de nêutrons é o processo de perda de energia dos nêutrons de fissão por meio de espalhamentos elásticos e inelásticos até que a energia do nêutron entre em equilíbrio térmico com o meio.`
    },
    {
        pergunta:`Qual o número médio de nêutrons que ocorre nas fissões em geral?`,
        resposta: `O número médio de nêutrons que ocorre nas fissões é de v = 2,5 e pode variar em torno deste valor em função do elemento físsil considerado.`
    },
    {
        pergunta:`O que é massa crítica?`,
        resposta: `Massa crítica é a massa mínima de combustível necessária para manter uma reação em cadeia em um determinado arranjo experimental.`
    },
    {
        pergunta:`Qual o significado do fator de multiplicação K?`,
        resposta: `O fator de multiplicação K é a relação entre o número de nêutrons de uma dada geração pelo número de nêutrons da geração anterior.`
    },
    {
        pergunta:`O que se entende por reator crítico, subcrítico e supercrítico, considerando apenas o fator de multiplicação?`,
        resposta: `No reator crítico K é igual a 1.
        No reator subcrítico K é menor que 1.
        No reator supercrítico K é maior que 1.
        `
    },
    {
        pergunta:`O que é a fórmula dos seis fatores? Defina e explique cada um dos fatores desta fórmula e diga se a magnitude de cada um destes fatores é maior ou menor que 1.`,
        resposta: `A fórmula dos seis fatores é dada por K<sub>ef</sub> = ηεpfP<sub>F</sub>P<sub>T</sub>, e o significado de cada termo é o seguinte: <br><br>
        η = Fator de Reprodução.<br>
        É a razão entre o número de nêutrons rápidos produzidos por fissões térmicas e o número de nêutrons térmicos absorvidos no combustível. Seu valor é sempre maior que 1.<br><br>

        ε = Fator de Fissão Rápida.<br>

        É a razão entre o número de nêutrons rápidos produzidos por fissões em todas as energias e o número de nêutrons rápidos produzidos por fissões térmicas. Seu valor é sempre maior que 1.<br><br>

        p = Probabilidade de Escape à Ressonância.<br>
        É a razão entre o número de nêutrons rápidos que saem da região de ressonância e o número de nêutrons rápidos que entram na ressonância. Seu valor é sempre menor que 1.<br><br>

        f = Fator de Utilização Térmica.<br>
        É a razão entre o número de nêutrons térmicos absorvidos no combustível e o número de nêutrons térmicos absorvidos em todos os materiais existentes no reator. Seu valor é sempre menor que 1.<br><br>

        P<sub>T</sub> = Probabilidade de Não Fuga Térmica.<br>

        É a razão entre o número de nêutrons térmicos que permanecem no núcleo do reator após a fuga e o número de nêutrons térmicos existentes no núcleo do reator antes da fuga. Seu valor é sempre menor que 1.<br><br>

        P<sub>F</sub> = Probabilidade de Não Fuga Rápida.<br>
        É a razão entre o número de nêutrons rápidos que permanecem no núcleo do reator após a fuga e o número de nêutrons rápidos existentes no núcleo do reator antes da fuga. Seu valor é sempre menor que 1.
        `
    },
    {
        pergunta:`O que é K<sub>∞</sub>? Como ele se relaciona com K<sub>ef</sub>?`,
        resposta: `É o fator de multiplicação de um reator de dimensões muito grande podendo para efeitos práticos ser considerado como infinito. Assim sendo não há possibilidades de fugas térmicas ou rápidas de nêutrons. O K infinito assim chamado se relaciona com K<sub>ef</sub> da seguinte forma:<br><br>
        K<sub>ef</sub> = K<sub>∞</sub>P<sub>T</sub>P<sub>F</sub>
        `
    },
    {
        pergunta:`Defina Multiplicação Subcrítica e dê sua expressão matemática.`,
        resposta: `Multiplicação Subcrítica M é relação entre o número total de nêutrons no núcleo do reator (nêutrons da fonte e nêutrons de fissão) e o número de nêutrons no núcleo do reator devido somente a fonte de nêutrons.<br><br>
        A relação entre M e K<sub>eff</sub> é expressa por meio da seguinte relação:<br><br>
        
        M =  1/(1-k<sub>eff</sub> )
        `
    },
    {
        pergunta:`O que acontece com uma única família de 100 nêutrons incidente em um meio cujo K<sub>ef</sub>=0,5.`,
        resposta: `N<sub>0</sub>⟶N<sub>0</sub>K<sub>ef</sub><sup>1</sup>⟶ N<sub>0</sub>K<sub>ef</sub><sup>2</sup>⟶ N<sub>0</sub>K<sub>ef</sub><sup>3</sup>⟶ N<sub>0</sub>K<sub>ef</sub><sup>4</sup>⟶.................⟶N<sub>0</sub>K<sub>ef</sub><sup>n-1</sup>⟶ N<sub>0</sub>K<sub>ef</sub><sup>n</sup>⟶
        /---1---/-----2-----/-----3-----/----4----/................................./-----7-----/ <br><br>
        
        Exemplo: Com N<sub>0</sub> = 100 e K<sub>ef</sub> = 0,5 <br><br>
        
        Temos 100⟶50⟶25⟶12⟶6⟶3⟶1⟶0, ou seja vai desaparecer após 6 famílias ou gerações.
        `
    },
    {
        pergunta:`Por que se utiliza a curva 1/M ao invés da curva “M” em função de K<sub>ef</sub> ou equivalentemente em função do número de varetas combustíveis? Qual o máximo valor desta curva 1/M? Onde este máximo ocorre?`,
        resposta: `Porque quando K<sub>ef</sub> tende a 1 na expressão M = 1/1-K<sub>ef</sub> , M tende ao infinito.
        O valor máximo de 1/M ocorre quando M for igual a 1 ou seja, para K<sub>ef</sub> = 0 ou equivalentemente sem varetas combustíveis.
        `
    },
    {
        pergunta:`Quais as variáveis que afetam os gráficos 1/M?`,
        resposta: `As variáveis que afetam o gráfico 1/M são:<br><br>
        -Geometria entre o núcleo e o detector.<br>
        -Localização relativa entre fonte e detector.
        `
    },
    {
        pergunta: `Por que nas medidas 1/M para o carregamento do núcleo não podemos confiar num detector muito próximo à fonte de nêutrons em relação ao núcleo que está sendo carregado? O que devemos fazer para se ter confiança com relação à segurança neste carregamento?`,
        resposta: `Porque este detector está fortemente influenciado pelos nêutrons vindos da fonte e não do combustível como é desejado.<br>
        Devemos colocar o detector mais próximo do combustível do que da fonte. O melhor ainda seria utilizar vários detectores e coletar informações daquele que indicar que a criticalidade vai ser atingida com menor número de elementos, ou seja, uma situação conservativa.
        `
    },
    {
        pergunta: `Explique como você utiliza o gráfico 1/M para criticalidade usando barras de controle?`,
        resposta: `Anota-se a contagem inicial (C<sub>0</sub>) e posteriormente as contagens em cada elevação da barra de controle (C<sub>i</sub>) (Aguardando devidamente a estabilização das contagens em cada posição) e em seguida marcando-se os pontos num gráfico C<sub>0</sub>/C<sub>i</sub> ou 1/M versus posição desta barra.`
    },
    {
        pergunta: `Por que durante a partida do reator quanto mais próximo da criticalidade, maior será o tempo necessário para estabilização da taxa de contagem dos nêutrons?`,
        resposta: `Através da equação que determina o número total de nêutrons N, presentes em um reator subcrítico, ou seja:

        N<sub>t</sub> = S<sub>0</sub>(1 + K + K<sup>2</sup> + ..............k<sup>n</sup>), verifica-se que quanto mais K se aproxima de 1, mais gerações são requeridas para estabilização da população neutrônica.
        `
    },
    {
        pergunta: `Se um núcleo possui K<sub>ef</sub> = 0,92 com uma taxa de contagem de 20cps, e se por algum artifício a taxa de contagem passa para 80 cps, qual seria o novo valor de K<sub>ef</sub>?`,
        resposta: `Da relação C<sub>i</sub>/C<sub>i-1</sub> temos: <br><br>
        C<sub>2</sub>/C<sub>1</sub> = 1-K<sub>1</sub>/1-K<sub>2</sub>       ⟶80/20 = 1-0,92/1-K2 <br>
        Portanto K<sub>2</sub> = 1-0,25[1-0,92] = 0,98 <br>
        O novo valor de K<sub>ef</sub> seria 0,98, ou seja, bem mais próximo da criticalidade
        `
    },
    {
        pergunta: `Retirando-se um absorvedor de cádmio do núcleo, a taxa de contagem em um detector dobra. Sabendo que o K<sub>ef</sub> é de 0,99 qual seria o valor de K<sub>ef</sub> inicial?`,
        resposta: `C<sub>2</sub>/C<sub>1</sub> = 1-K<sub>1</sub>/1-K<sub>2</sub> <br>
        Para C<sub>2</sub> = 2C<sub>1</sub> e K<sub>2</sub> = 0,99 tem-se <br>
        K<sub>1</sub> = 1- C<sub>2</sub>/C<sub>1</sub>(1-K<sub>2</sub>) = 1-2(1-0,99) = 0,98
        `
    },
    {
        pergunta: `A população neutrônica de um conjunto subcrítico num dado instante t devido a uma fonte de nêutrons é C<sub>0</sub>. Ao remover a fonte o que ocorreria com esta população?`,
        resposta: `Ao remover a fonte, a população neutrônica deste conjunto subcrítico tenderá a zero.`
    },
    {
        pergunta: `Defina reatividade e seu significado.`,
        resposta: `&rho; = ΔK/K <br>
        Representa um desvio da criticalidade.`
    },
    {
        pergunta: `Quais as unidades de reatividade? Quais as relações entre elas?`,
        resposta: `1⟶ ΔK/K <br>
        2⟶ %ΔK/K <br>
        3⟶ pcm <br>
        1.ΔK/K = 100% ΔK/K = 10<sup>5</sup> pcm.
        `
    },
    {
        pergunta: `Um reator tem K<sub>ef</sub>, num instante t<sub>0</sub>, igual a 0,9 e num instante t>t<sub>0</sub> igual a 1,01. Quais são os sinais das reatividades em ambos os instantes, positivo ou negativo?`,
        resposta: `&rho;<sub>1</sub> = ΔK<sub>1</sub>/K<sub>1</sub> = K1-1/K1 = 0,9-1/0,9 = -0,11 <br>
        &rho;<sub>2</sub> = ΔK<sub>2</sub>/K<sub>2</sub> = K<sub>2</sub>-1/K<sub>2</sub> = 1,01-1/1,01 = 0,0099 <br>
        Portanto &rho;<sub>1</sub> &lt; 0   e   &rho;<sub>2</sub> &gt; 0   
        `
    },
    {
        pergunta: `Quais os sinais da reatividade para um reator crítico, subcrítico e supercrítico?`,
        resposta: `Crítico &rho; = 0 <br>
        Subcrítico &rho; &lt; 0 <br>
        Supercrítico &rho; &gt; 0
        `
    },
    {
        pergunta: `O que significa K<sub>ex</sub> ?`,
        resposta: `K<sub>ex</sub> = K<sub>ef</sub>-1`
    },
    {
        pergunta: `Para um reator cujo elemento combustível é predominante o U<sub>235</sub> qual a porcentagem de nêutrons prontos e atrasados no reator? Qual a proporção entre eles?`,
        resposta: `Para o U<sub>235</sub> <br>
        Prontos⟶99,35% <br>
        Atrasados⟶0,65% <br>
        Proporção &asymp; 1/150
        `
    },
    {
        pergunta: `Qual o intervalo de tempo de geração dos nêutrons prontos?`,
        resposta: `Δt = 10<sup>-14</sup> segundos.`
    },
    {
        pergunta: `O que são os precursores?`,
        resposta: `São produtos cujos núcleos estão sujeitos a uma desintegração beta seguida de emissão de 1 nêutron chamado nêutrons atrasados.`
    },
    {
        pergunta: `Por que normalmente se classifica os nêutrons em seis grupos? Justifique.`,
        resposta: `Os nêutrons são classificados em seis grupos por proximidades energéticas. Poderiam ser mais grupos porque existem muitos precursores, cada um com T<sub>1/2</sub> característico.
        Portanto podemos ter quantidades de grupo maiores que 6, por exemplo 100.
        `
    },
    {
        pergunta: `As frações de nêutrons atrasados do U<sub>235</sub> e Pu2<sub>39</sub> são respectivamente: <br>
        β<sub>U235</sub> = 0,0065 <br>
        β<sub>Pu239</sub> = 0,0021 <br>
        Pergunta-se:
        Qual destes elementos físseis contribui mais com nêutrons atrasados e qual deles se poderia ter melhor controle no reator?
        `,
        resposta: `β<sub>U235</sub> = 0,0065⟶1 em 150 <br>
        β<sub>Pu239</sub> = 0,0021⟶1 em 476 <br><br>
        O U<sub>235</sub> possui maior proporção de nêutrons atrasados em relação aos nêutrons prontos do que o Pu<sub>239</sub>. Como são os nêutrons atrasados que exerce controle de um reator então o U<sub>235</sub> exerce maior controle.
        `
    },
    {
        pergunta: `Qual a relação entre potência e fluxo de nêutrons de um reator?`,
        resposta: `P é proporcional a φ e, portanto <br> 
        P = Kφ, onde K é uma constante.`
    },
    {
        pergunta: `Escreva a equação de Inhour identificando as parcelas de contribuições de nêutrons prontos e atrasados, em seguida identifique cada um dos termos ou parâmetros desta equação.`,
        resposta: ` <svg id="Camada_1" data-name="Camada 1" class="formula" xmlns="http://www.w3.org/2000/svg" width="180" height="70.01" viewBox="0 0 144 46.01"><defs><style>.cls-1,.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}.cls-1{stroke:lime;}.cls-2{font-size:16.65px;font-family:MyriadPro-Regular, Myriad Pro;}.cls-3,.cls-4{stroke:#000;}.cls-3{stroke-width:1.39px;}.cls-4{stroke-width:1.01px;}</style></defs><path class="cls-1" d="M-683.5,249.5" transform="translate(-105 -159.38)"/><text class="cls-2" transform="translate(39.29 21)">1</text><text class="cls-2" transform="translate(108.67 39.03)">1</text><line class="cls-3" x1="28.14" y1="24.66" x2="57.28" y2="24.66"/><line class="cls-3" x1="108.62" y1="23.97" x2="144" y2="23.97"/><text class="cls-2" transform="translate(28.42 39.2)">K</text><text class="cls-2" transform="translate(38.85 43.58) scale(0.58)">ef</text><text class="cls-2" transform="translate(46.62 38.92)">T</text><text class="cls-2" transform="translate(134.04 38.92)">T</text><line class="cls-3" x1="64.22" y1="24.66" x2="76.7" y2="24.66"/><line class="cls-3" x1="70.46" y1="30.21" x2="70.46" y2="19.8"/><line class="cls-4" x1="115.56" y1="34.09" x2="123.88" y2="34.09"/><line class="cls-4" x1="119.72" y1="38.54" x2="119.72" y2="30.21"/><text class="cls-2" transform="translate(95.91 8.13) scale(0.58)">6</text><path class="cls-3" d="M199.74,183.34H187.25L193.5,175l-6.25-6.94h12.49" transform="translate(-105 -159.38)"/><text class="cls-2" transform="translate(96.57 24) scale(0.58)">i=1</text><text class="cls-2" transform="translate(121.77 18.89)">β</text><text class="cls-2" transform="translate(131.59 22.71) scale(0.58)">i</text><text class="cls-2" transform="translate(132.98 40.75) scale(0.58)">i</text><text class="cls-2" transform="translate(124.88 38.59)">λ</text><text class="cls-2" transform="translate(0 27.21)">ρ =</text></svg> <br>
Onde: <br><br>
&rho; = Reatividade ΔK/K. <br>
l<sup>*</sup> = Tempo de vida média dos nêutrons prontos. <br>
K<sub>ef</sub> = Fator de multiplicação efetiva. <br>
T = Período do reator. <br>
β<sub>i</sub> = Fração dos nêutrons atrasados do grupo “i”. <br>
λ<sub>i</sub> = Constante de decaimento representativo dos precursores dos nêutrons atrasados do grupo “i”.
`
    },
    {
        pergunta: `O que é período do reator?`,
        resposta: `É o tempo necessário para a potência de um reator seja multiplicada por um fator “e” onde e é base do logaritmo natural, e vale 2,7.`
    },
    {
        pergunta: `Qual a relação entre período e potência de um reator?`,
        resposta: `P=P<sub>o</sub> e<sup>(t/T)</sup>`
    },
    {
        pergunta: `Escreva a equação de Inhour simplificada quando &rho; &lt; β<sub>ef</sub>.`,
        resposta: `<svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" class="formula" width="120.78" height="70.13" viewBox="0 0 65.78 29.13"><defs><style>.cls-1{font-size:12px;font-family:MyriadPro-Regular, Myriad Pro;}.cls-2,.cls-3{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-3{stroke-width:0.73px;}</style></defs><text class="cls-1" transform="translate(40.32 26.13)">1</text><line class="cls-2" x1="40.28" y1="15.27" x2="65.78" y2="15.27"/><text class="cls-1" transform="translate(58.6 26.05)">T</text><line class="cls-3" x1="45.28" y1="22.57" x2="51.28" y2="22.57"/><line class="cls-3" x1="48.28" y1="25.77" x2="48.28" y2="19.77"/><text class="cls-1" transform="translate(29.12 5.86) scale(0.58)">6</text><path class="cls-2" d="M156,191.5h-9l4.5-6-4.5-5h9" transform="translate(-127.72 -174.23)"/><text class="cls-1" transform="translate(29.6 19.3) scale(0.58)">i=1</text><text class="cls-1" transform="translate(49.76 11.61)">β</text><text class="cls-1" transform="translate(56.84 14.37) scale(0.58)">i</text><text class="cls-1" transform="translate(57.84 27.37) scale(0.58)">i</text><text class="cls-1" transform="translate(52 25.81)">λ</text><text class="cls-1" transform="translate(0 17.61)">ρ =</text></svg>`
    },
    {
        pergunta: `O que é um reator pronto crítico? Qual a condição de pronto criticalidade em pcm do Reator IPEN/MB-01? <br>
        Dados:
        β<sub>IPEN/MB-01</sub> = 0,0078
        `,
        resposta: `É o reator que se torna crítico apenas com a contribuição dos nêutrons prontos. <br>
        IPEN/MB-01:Condição de pronto crítico é &rho; = 780 pcm.
        `
    },
    {
        pergunta: `Explique por que ao se inserir certa quantidade de reatividade positiva num reator crítico ele dá um salto repentino, estabilizando-se alguns segundo após num determinado período.`,
        resposta: `Quando uma reatividade positiva é inserida no núcleo, a população neutrônica devido apenas aos nêutrons atrasados não sofrerá aumento imediato. O aumento se deve inicialmente aos prontos e posteriormente aos atrasados. Por isso a taxa de aumento de nêutrons será reduzida quando estes nêutrons atrasados participarem do processo.`
    },
    {
        pergunta: `Por que não podemos utilizar a equação de Inhour para obter a criticalidade imediatamente após uma inserção de reatividade?`,
        resposta: `Não podemos utilizar a equação de “INHOUR” para obter a criticalidade imediatamente após uma inserção de reatividade porque temos que esperar o período se tornar estável.`
    },
    {
        pergunta: `Explique porque quando ocorre um SCRAM no reator há um súbito decréscimo do fluxo neutrônico e posteriormente uma contínua diminuição deste fluxo, porém lenta e suave.`,
        resposta: `Inicialmente o fluxo neutrônico sofrerá uma queda instantânea devido à falta de nêutrons atrasados, pois os precursores não decaem instantaneamente, o que ocorrerá gradativamente em função das meias vidas dos grupos precursores.<br> O período negativo estável para o decaimento da potência será, pois uma função de meia vida dos grupos precursores de nêutrons atrasados.`
    },
    {
        pergunta: `Explique o mecanismo do processo de fissão.`,
        resposta: `O mecanismo do processo de fissão pode ser explicado pelo modelo da gota líquida. Tal modelo diz que ao aplicar uma tensão superficial, a gota deforma e tenta restaurar sua forma original. A estabilidade do núcleo é semelhante a esta situação, onde as tensões superficiais são representadas pelas forças nucleares. <br>
        Inicialmente a gota sofre ação de forças radiais e diametralmente opostas que a deformam dando origem a uma elipsoide. Se a distorção for muito intensa, a gota assume a forma de um haltere que oscila até o pescoço tornar tão estreito e romper em dois fragmentos
        `
    },
    {
        pergunta: `O que é energia crítica num processo de fissão?`,
        resposta: `É uma energia necessária para romper um núcleo a partir do seu estado fundamental.`
    },
    {
        pergunta: `Escreva a reação de fissão para U<sub>235</sub> e descreva seus componentes.`,
        resposta: `U<sub>235</sub> + n ⟶(U<sub>236</sub>)* <br>
        (U<sub>236</sub>)* ⟶ FP1 + FP2 + 2,43n + Energia <br>
        FP = Produto de Fissão <br>
        n = nêutron <br>
        (*) = indica que o núcleo está excitado e, portanto instável. <br>
        2,43 = é valor de v (número médio de nêutrons por fissão para o U<sub>235</sub>).
        `
    },
    {
        pergunta: `Qual a porcentagem de nêutrons prontos que ocorre na fissão do U<sub>235</sub> e qual intervalo de tempo em que eles são produzidos.`,
        resposta: `99,3% e 10<sup>-14</sup> s`
    },
    {
        pergunta: `Os nêutrons gerados nas fissões são monoenergéticos?`,
        resposta: `Não são monoenergéticos.<br> Num gráfico a distribuição fracional dos nêutrons n(E) em função da energia, constata-se que é ampla esta faixa de energia indo desde o grupo térmico até cerca de 15 MeV.<br>
        A energia média é aproximadamente 2 MeV.
        `
    },
    {
        pergunta: `Quem tem maior probabilidade de fissionar o U<sub>235</sub>, nêutrons prontos ou nêutrons atrasados? Justifique o fato`,
        resposta: `São os nêutrons atrasados, porque a seção de choque de fissão do U<sub>235</sub> aumenta com a diminuição da energia do nêutron e como os nêutrons atrasados são geralmente menos energéticos que os prontos o fato fica justificado.`
    },
    {
        pergunta: `Entre nêutrons prontos e atrasados oriundos de uma mesma fissão quem requer menos colisões para se tornar térmico? Justifique.`,
        resposta: `Os nêutrons atrasados requerem menos colisões. Porque a energia média dos nêutrons atrasados é menor do à energia média dos nêutrons prontos, necessitando, portanto menos colisão para se tornarem térmicos.`
    },
    {
        pergunta: `74)	Determinar as energias e as velocidades de nêutrons à temperatura ambiente e a 300°C. <br>
        Dados:<br>
        Constante de Boltzmann = K = 8,6x10<sup>-5</sup> eV/K <br>
        1 eV = 1,602x10<sup>-19</sup> J <br>
        T(K) = t(°C) + 273 <br>
        Massa do nêutron = 1,674x10<sup>-27</sup> kg
        `,
        resposta: `E<sub>1</sub> = KT<sub>1</sub> = 8,6x10<sup>-5</sup>x(20,4 + 273) = 0,025 eV <br>
        E<sub>2</sub> = KT<sub>2</sub> = 8,6x10<sup>-5</sup>x(300,0 + 273) = 0,049 eV <br>
        v<sub>1</sub> = (2E<sub>1</sub>/m)1/2 = (2x0,025x1,602x10<sup>-19</sup>/1,674x10<sup>-27</sup>)<sup>1/2</sup> = 2200m/s <br>
        v<sub>2</sub> = (2E<sub>2</sub>/m)1/2 = (2x0,049x1,602x10<sup>-19</sup>/1,674x10<sup>-27</sup>)<sup>1/2</sup> = 3080m/s
        `
    },
    {
        pergunta: `O que se entende pelo efeito Doppler numa interação nêutron-núcleo? Qual a implicação deste efeito nos picos de ressonância do U<sub>238</sub>? Este efeito é sentido no caso do Reator IPEN/MB-01? `,
        resposta: `É um efeito que aparece na interação nêutron-núcleo devido à contínua movimentação dos átomos decorrente de suas energias térmicas, causando uma alteração na velocidade relativa entre um nêutron e um núcleo, aumentando com isso a probabilidade de interação. Este fenômeno é similar com o que ocorre em óptica e acústica. O efeito líquido deste efeito nas ressonâncias é o de alarga-las. No Reator IPEN/MB-01, o coeficiente de temperatura do moderador é bem maior que o coeficiente de temperatura do combustível e além do mais o número de interações é baixo devido ao reduzido fluxo neutrônico, desta forma este efeito não é fortemente sentido neste reator.`
    },
    {
        pergunta: `Determine quantas fissões do U<sub>235</sub> são necessárias para gerar 1 W de potência. <br>
        Dados: <br>
        1 W = 1 J/s <br>
        1 MeV = 1,602x10<sup>-13</sup> J <br>
        1 fissão = 200 Mev
        `,
        resposta: `1 fissão = 200 MeV = 200x1,6x10<sup>-13</sup> J = 3,2x10<sup>-11</sup> J <br>
        Portanto 1 fissão/s = 3,2x10<sup>-11</sup> J/s ⟶1 W = 3,12x10<sup>12</sup> fissões/s.
        `
    },
    {
        pergunta: `77)	Quantas colisões um nêutron nascido com 2 MeV de energia precisa para atingir seu equilíbrio a 20,4°C e a 300°C? <br>
        Dados: <br>
        Constante de Boltzmann = K = 8,6x10<sup>-5</sup> eV/K <br>
        T(K) = t(°C) + 273 <br>
        ξ= 0,92 para a água.
        `,
        resposta: `N = ln(E<sub>0</sub>/E<sub>1</sub>)/ξ <br>
        N<sub>1</sub> = ln(2x10<sup>6</sup>/0,025)/0,92 = 20 colisões. <br>
        N<sub>2</sub> = ln(2x10<sup>6</sup>/0,049)/0,92 = 10 colisões
        `
    },
    {
        pergunta: `	Prove que em um reator de núcleo esférico de raio igual a 1 metro, a probabilidade de não fuga rápida (probabilidade dos nêutrons que permanecem no sistema após as fugas rápidas) é maior do que num reator cúbico contendo a mesma massa de combustível. <br>
        Dados: <br>
        Volume de um cubo = V = a<sup>3</sup>           onde a é a aresta deste cubo. <br>
        Volume de uma esfera = V = (4/3)πR<sup>3</sup>        onde R é o raio da esfera. <br>
        Probabilidade de não fuga rápida = P<sub>f</sub>=e<sup>(-B<sup>2</sup> τ)</sup> onde τ é a idade de Fermi e B<sup>2</sup> é o “Buckling” geométrico. <br>
        “Buckling” geométrico da esfera B<sup>2</sup>=π<sup>2</sup>/R<sup>2</sup> <br>
        “Buckling” geométrico do cubo B<sup>2</sup>=3 π<sup>2</sup>/a<sup>2</sup> 
        `,
        resposta: `Como o material é o mesmo então as idades de Fermi serão as mesmas, então só haverá dependência do “Buckling” geométrico de ambos os núcleos. <br>
        Como as massas são iguais e o material é o mesmo, então os volumes deverão ser iguais. <br>
        O volume de uma esfera de 1 metro de raio é igual a 4,19 m<sup>3</sup> 
        O mesmo volume de um cubo, corresponde a um cubo de aresta igual a    a = (4,19)<sup>1/3</sup>
        Portanto a = 1,61 m.
        Assim sendo, o  “Buckling”  geométrico da esfera de raio igual a 1metro é igual a 9,87 m-2, e o  “Buckling”  geométrico do cubo de aresta igual a 1,61 m será igual a 11,42 m<sup>-2</sup>.
        “Buckling” menor de acordo com a fórmula acima para P<sub>f</sub>, significa probabilidade de não fuga maior, ou seja o no núcleo esférico haverá menos fuga de nêutrons do sistema do que um núcleo cúbico de igual volume.
        `
    },
    {
        pergunta: `Quais os valores de Kef e &rho; = ΔK/K para um reator exatamente crítico?`,
        resposta: `K<sub>ef</sub> = 1 e <br>
        &rho; = ΔK/K = 0
        `
    },
    {
        pergunta: `Estando o reator com K<sub>ef</sub> = 0,985 quanto de reatividade deve ser adicionada ao reator para torná-lo crítico?`,
        resposta: `0,01523 ou 1,52%ΔK/K ou 1523 pcm.`
    },
    {
        pergunta: `Quando um reator se tornará pronto crítico`,
        resposta: `Quando o reator estiver crítico e, por alguma razão, for inserida uma reatividade igual, em magnitude, à fração efetiva média de nêutrons atrasados.`
    },
    {
        pergunta: `Durante o “start-up” do Reator, a potência subiu de 10<sup>-8</sup> % a 2x10<sup>-8</sup> % em 2 minutos. Qual foi o período do Reator?`,
        resposta: `P = P<sub>o</sub>e<sup>t/T</sup> <br>
        Com P = 2x10<sup>-8</sup>, Po = 10<sup>-8</sup> e t = 120s tem-se que: <br>
        T = 173s
        `
    },
    {
        pergunta: `Considerem que num dado instante existam 100 nêutrons num reator onde os valores de ε, P<sub>F</sub>, p, P<sub>T</sub>, f, η, são dados por: <br>
        ε = 1,175; P<sub>F</sub> = 0,98; P<sub>T</sub> = 0,98; p = 0,87; η = 2,05; f = 0,498 e que por efeito didático os fatores atuam na forma sequencial como aqui foram apresentados. <br>
        Pergunta-se: <br>
        Quantos nêutrons são ganhos devido ao fator ε?<br>
        Quantos nêutrons são perdidos devido ao fator P<sub>F</sub>?<br>
        Quantos nêutrons são perdidos devido ao fator p?<br>
        Quantos nêutrons são perdidos devido ao fator P<sub>T</sub>?<br>
        Quantos nêutrons são perdidos devido ao fator f?<br>
        Quantos nêutrons são ganhos devido ao fator η?
        `,
        resposta: `São ganhos devido ao fator ε, 175 nêutrons.
        São perdidos devido ao fator P<sub>F</sub>, 24 nêutrons.
        São perdidos devido ao fator p, 150 nêutrons.
        São perdidos devido ao fator P<sub>T</sub>, 20 nêutrons.
        São perdidos devido ao fator f, 492 nêutrons.
        São ganhos devido ao fator η, 513 nêutrons.
        `
    },
    {
        pergunta: `Defina coeficiente de reatividade para um reator em geral? No caso do Reator IPEN/MB-01, qual deste fator é significativo? `,
        resposta: `É definido como a mudança de reatividade por unidade de mudança em algum parâmetro do núcleo. No caso do Reator IPEN/MB-01, os fatores mais importantes são os coeficientes de temperatura do moderador e coeficiente de vazio.`
    },
    {
        pergunta: `O que é um veneno para um reator nuclear? Dê exemplos.`,
        resposta: `São elementos que possuem alta seção de choque de absorção de nêutrons (sobretudo sobre nêutrons térmicos) e que não fissionam com a absorção destes nêutrons.
        Exemplos são: <br>
        Boro dissolvido no moderador
        Cádmio e Índio componentes da liga das barras de controle
        Xe-135 e Sm-149 como produtos originados no núcleo devido a fissões e decaimentos dos produtos de fissão.
        `
    },
    {
        pergunta: `O que significa calibração de uma barra de controle?`,
        resposta: `Para um dado reator e para um dado núcleo é importante saber a magnitude da reatividade dos elementos absorvedores de controle. Por isso a calibração de uma barra deve sempre ser refeita quando se altera as características do núcleo incluindo combustível, moderador e estruturas.
        A calibração de um elemento de controle fornecerá o valor da reatividade por unidade de comprimento deste elemento.
        `
    },
    {
        pergunta: `Nas ações de carregamento e descarregamento do núcleo ou qualquer outro tipo de manuseio de uma vareta combustível são utilizadas ferramentas especiais pelos operadores. Descreva o funcionamento de tais ferramentas.`,
        resposta: `Estas ferramentas se acoplam no tampão superior da vareta, que possui um perfil reentrante próprio para fixação, ou no próprio tubo de revestimento da vareta, ao longo de seu comprimento. As ferramentas de manuseio de varetas combustíveis dispõem de detalhes construtivos adequados de forma a não arranhar nem causar tensões acentuadas no revestimento da vareta.`
    },
    {
        pergunta: `Como é feito o manuseio de uma vareta combustível?`,
        resposta: `Qualquer movimentação de vareta combustível no conjunto crítico é individual, não sendo manuseada mais que uma vareta por vez, utilizando ferramentas de manuseio apropriadas.`
    },
    {
        pergunta: `Cite os procedimentos para manuseio no núcleo (os dez mandamentos).`,
        resposta: `Para qualquer manuseio no núcleo com movimentação ou não de varetas os procedimentos são os seguintes: <br><br>
        1)	Quando se tratar de uma montagem experimental no núcleo, deve se ter uma rotina do experimento que será realizado com as devidas aprovações, indicando passo a passo as etapas das atividades.<br>
        2)	A mesa de controle deve estar ligada e o sistema de ventilação e condicionamento em operação.
        3)	Todos os monitores de radiação devem estar ligados e de prontidão.<br>
        4)	A fonte de nêutrons de partida do reator deve estar na sua blindagem apropriada.<br>
        5)	O manuseio no núcleo só pode ser feito por um operador licenciado ou acompanhado deste.<br>
        6)	O manuseio nunca pode ser feito apenas por uma só pessoa, deve se ter pelo menos duas pessoas no manuseio.<br>
        7)	A proteção radiológica deve ter sido avisada com antecedência e, durante o manuseio ela deve estar presente com seus respectivos aparatos de medição da radiação.<br>
        8)	Todas as pessoas participantes bem como os observadores devem na entrada da célula crítica, trocar o seu crachá o qual é substituído por um dosímetro de bolso individual apropriado fornecido pela Proteção Radiológica.<br>
        9)	O sistema de incêndio e de comunicação devem estar operáveis.<br>
        10)	Uso de luvas apropriadas quando houver manuseio em material de potencial de contaminação
        `
    },
    {
        pergunta: `Como é atendido o critério de armazenamento de combustível, manuseio e controle de reatividade?`,
        resposta: `A área de estocagem e o equipamento de manuseio de combustível são adequadamente blindados para assegurar que a exposição de pessoal à radiação, seja mantida em doses tão baixas quanto exequíveis. Possíveis contaminações gasosas em suspensão decorrentes do manuseio são removidas pelo sistema de ventilação. <br>
        Ferramentas especiais de manuseios são disponíveis em locais apropriados próximos ao local de manuseio
        `
    },
    {
        pergunta: `Como é obedecido o critério relativo à prevenção de criticalidade indesejada durante o manuseio de combustível nas covas?`,
        resposta: `21 covas existentes no interior da célula crítica podem ser utilizadas para armazenamento de combustível. Estas covas medem 40x40cm e estão separadas entre si de 100 cm. Cada cova suportará no máximo 170 varetas constituídas por um arranjo de 15x15 furos. <br>
        Esta configuração é subcrítica mesmo se as covas forem acidentalmente inundadas.
        `
    },
    {
        pergunta: `Descreva brevemente a Área de Estocagem de combustíveis.`,
        resposta: `•	É composta por 21 covas de dimensões (40x40x230cm) separadas centro a centro por 1 metro. <br>
        •	Somente 5 das 21 covas contém engradados metálico para conter as varetas. <br>
        •	Cada cova estocará “a seco” no máximo 170 varetas combustíveis. <br>
        •	Cada engradado é removível das covas e formado por uma estrutura de aço inox, contendo placas espaçadoras formando um arranjo 15x15 de furos de diâmetro 11 mm e espaçamento centro a centro de 12,9mm. Embora a capacidade seja de 225 varetas a quantidade máxima para transporte é de 170 varetas. <br>
        •	O engradado só pode permanecer: <br>
        -Dentro da cova.
        -Dentro da caixa de blindagem construída em chumbo e revestida de aço inox localizada ao lado do tanque do moderador.
        `
    },
    {
        pergunta: `Justifique a afirmativa “O depósito de estocagem de combustível é seguro quanto à blindagem radiológica".`,
        resposta: `Justificativas <br>
        1.	A atividade radioativa do combustível novo estocado é desprezível. <br>
        2.	A atividade do combustível usado também é desprezível uma vez que sua queima acumulada durante a operação do reator (mesmo em potência máxima de 100 W, é mínima). <br>
        3.	As covas são de concreto e a tampa também de concreto. <br>
        4.	Os monitores acusam quaisquer anormalidades.
        `
    },
    {
        pergunta: `Descreva o processo de carregamento inicial do núcleo do Reator IPEN/MB-01, somente sob o ponto de vista do transporte e manuseio das varetas combustíveis.`,
        resposta: `1)	O carregamento foi feito em dez etapas. <br>
        2)	Todas as varetas combustíveis recebidas na Instalação, vieram alojadas em estojos de Alumínio apropriados e colocadas nas covas existentes na célula crítica em arranjos apropriados de engradados contendo 225 furos identificados de “1” a “15” na vertical e de “A” a “O”, na horizontal. Apesar de haver 225 furos, por critérios de projeto somente 170 no máximo varetas foram colocadas em cada engradado de cada cova. <br>
        3)	O transporte destes engradados contendo, portanto no máximo 170 varetas foram içadas das covas um a um e transportados das covas até uma blindagem em aço inox localizada ao lado do Tanque do Reator. <br>
        4)	As varetas foram então transportadas da blindagem para o núcleo uma a uma até o completo esvaziamento da blindagem e em seguida, esta retornou vazia para a cova original. <br>
        5)	Os engradados seguintes seguiram o mesmo rumo e cuidados até completar o carregamento do completo do núcleo
        `
    },
]
const secaoB = [
    {
        pergunta: 'Qual a fonte de nêutrons utilizada no Reator IPEN/MB-01?',
        resposta: 'A fonte utilizada no Reator IPEN/MB-01 é a fonte de Amerício-Berílio'
    },
    {
        pergunta: 'Qual a magnitude da fonte de nêutrons usada no Reator IPEN/MB-01?',
        resposta: `A fonte de Amerício-Berílio utilizada no Reator IPEN/MB-01 tem a seguinte magnitude: <br> Atividade = 1 Curie <br> Fluxo neutrônico em 4π = 2,5x106 nêutrons/segundo.`
    },
    {
        pergunta: 'Esboce o gráfico da distribuição de fluxo de nêutrons térmicos em uma vareta combustível do Reator IPEN/MB-01.',
        resposta: `<svg id="fluxo-neutrônico-combustivel" xmlns="http://www.w3.org/2000/svg" width="300.12" height="250.6" class="desenho-questao" viewBox="0 0 286.12 196.6"><defs><style>.cls-1{fill:#bfbfbf;}.cls-1,.cls-2{stroke:#0071bc;stroke-width:1.34px;}.cls-1,.cls-2,.cls-4{stroke-miterlimit:10;}.cls-2{fill:#7d7d7d;}.cls-3{font-size:17.22px;font-family:MyriadPro-Regular, Myriad Pro;}.cls-4{fill:none;stroke:#1a1a1a;stroke-width:1.01px;}.cls-5{letter-spacing:-0.01em;}.cls-6{letter-spacing:-0.01em;}.cls-7{letter-spacing:0em;}.cls-8{letter-spacing:0.01em;}.cls-9{letter-spacing:-0.01em;}.cls-10{letter-spacing:-0.01em;}.cls-11{letter-spacing:-0.01em;}.cls-12{letter-spacing:0em;}.cls-13{letter-spacing:-0.02em;}.cls-14{letter-spacing:0.01em;}.cls-15{letter-spacing:-0.03em;}.cls-16{letter-spacing:-0.09em;}</style></defs><rect class="cls-1" x="75.44" y="4.7" width="133.98" height="130.61"/><rect class="cls-1" x="91.72" y="4.7" width="102.68" height="130.61"/><rect class="cls-2" x="101.74" y="4.7" width="83.9" height="130.61"/><text class="cls-3" transform="translate(128.31 65.36) scale(0.87 1)">UO₂</text><path class="cls-4" d="M158,570l75.13,58.85L249.41,669l10,12.92s26.29,21.53,42.57,17.22" transform="translate(-157.69 -569.6)"/><path class="cls-4" d="M443.5,570l-75.13,58.85L352.09,669l-10,12.92s-26.29,21.53-42.57,17.22" transform="translate(-157.69 -569.6)"/><line class="cls-4" x1="83.95" y1="130.65" x2="61.92" y2="169.02"/><line class="cls-4" x1="61.84" y1="153.49" x2="61.92" y2="169.02"/><line class="cls-4" x1="75.44" y1="163.75" x2="61.92" y2="169.02"/><line class="cls-4" x1="188.67" y1="129.65" x2="215.08" y2="164.19"/><line class="cls-4" x1="202.01" y1="160.15" x2="215.08" y2="164.19"/><line class="cls-4" x1="214.25" y1="147.85" x2="215.08" y2="164.19"/><line class="cls-4" x1="142.39" y1="132.58" x2="143.66" y2="178.48"/><line class="cls-4" x1="135.79" y1="165.84" x2="143.66" y2="178.48"/><line class="cls-4" x1="152.06" y1="165.25" x2="143.66" y2="178.48"/><text class="cls-3" transform="translate(26.58 184.48) scale(0.87 1)"><tspan class="cls-5">A</tspan><tspan class="cls-6" x="10.33" y="0">ç</tspan><tspan class="cls-7" x="17.95" y="0">o </tspan><tspan class="cls-8" x="31.05" y="0">I</tspan><tspan x="35.34" y="0">n</tspan><tspan class="cls-9" x="44.9" y="0">o</tspan><tspan x="54.11" y="0">x</tspan></text><text class="cls-3" transform="translate(102.31 192.29) scale(0.87 1)"><tspan class="cls-10">C</tspan><tspan x="9.8" y="0">ombustí</tspan><tspan class="cls-11" x="69.46" y="0">v</tspan><tspan class="cls-12" x="77.57" y="0">el</tspan></text><text class="cls-3" transform="translate(205.8 184.19) scale(0.87 1)"><tspan class="cls-13">“</tspan><tspan class="cls-14" x="5.82" y="0">G</tspan><tspan x="17.08" y="0">a</tspan><tspan class="cls-15" x="25.39" y="0">p</tspan><tspan class="cls-16" x="34.62" y="0">”</tspan><tspan x="39.23" y="0" xml:space="preserve"> de He</tspan></text></svg>`
    },
    {
        pergunta: 'Relacione os principais absorvedores de nêutrons (alguns deles denominados venenos) existentes em reatores nucleares, descrevendo a atuação deles no Reator IPEN/MB-01.',
        resposta: `-Boro: O Reator IPEN/MB-01, não utiliza boro ou composto de boro diluído no moderador para controle da reatividade do núcleo. Ele foi usado na forma de solução de ácido bórico em experimentos apenas.<br><br>
        A barra de segurança possui em sua liga de B<sub>4</sub>C o boro que é usado como absorvedor na barra de se segurança.<br>
        Cádmio e Índio: Constituintes de uma liga de Ag, Cd e In para a barra absorvedora de controle. Eventualmente é utilizado como em experimentos de determinação de fluxo de nêutrons térmicos e epitérmicos.<br><br>
        Xe<sub>135</sub> É produzido direto das fissões bem como pelo decaimento beta do I<sub>135</sub>, que por sua vez é produzido direto das fissões ou por decaimento beta do Te<sub>135</sub>. Sua geração é desprezível no Reator IPEN/MB-01 devido ao baixo fluxo de nêutrons da Instalação.<br><br>
        Sm<sub>149</sub> não é produzido diretamente da fissão mas sim aparece como decaimento do Neodímio-149 que decai para Promécio-149 que por sua vez decai para o samário-149 que é estável. O Promécio-149 também é oriundo direto da fissão.
        Como o Xe<sub>135</sub>, a produção do Sm<sub>149</sub> é desprezível no Reator IPEN/MB-01.
        `
    },
    {
        pergunta: 'Descreva o primeiro núcleo do Reator IPEN/MB-01 também chamado de núcleo de referência',
        resposta: `-Forma paralelepipedal 39x42x54,6 cm.<br><br>
        -4 quadrantes.<br><br>
        -680 varetas combustíveis independentes.<br><br>
        -48 posições contendo tubos guias para receber 2 barras de controle (24 posições) e 2 barras de segurança (24 posições).<br><br>
        -A placa matriz é constituída de 900 furos (30x30) sendo que 680 deles são ocupadas pelos combustíveis e 48 por varetas absorvedoras (24 para as 2 barras de controle e 24 para as barras de segurança). Cada uma destas barras está disposta diagonalmente nos quatro quadrantes deste núcleo.
        `
    },
    {
        pergunta: 'Descreva a constituição de uma vareta combustível do Reator IPEN/MB-01.',
        resposta: `-Conjunto de pastilhas (em média 52 pastilhas) de UO<sub>2</sub> 4,3% enriquecidos em U<sub>235</sub>.<br><br>
        -Encamisamento de aço inox Austenístico.<br><br>
        -Fechada nas extremidades por tampões soldados.<br><br>
        -Pastilhas de Al<sub>2</sub>O<sub>3</sub> para posicionar a coluna de UO<sub>2</sub>.<br><br>
        -Tubo espaçador.<br><br>
        -Mola de fixação.
        Varetas preenchida com Hélio com pressão de 1 bar.
        `
    },
    {
        pergunta: `Como é constituída cada barra de controle do Reator?`,
        resposta: `-12 varetas com aproximadamente 1 metro de material absorvedor constituído de uma liga de Ag-In-Cd. São suportadas por uma aranha que, por sua vez, está ligada a uma haste de acionamento que por sua vez está conectada ao mecanismo de acionamento (MAB) por um dispositivo eletromagnético denominado MAGNETO.`
    },
    {
        pergunta: `Como é constituído o sistema de fixação das varetas combustíveis no núcleo?`,
        resposta: `-Por uma placa suporte de apoio, denominada placa matriz constituída de 900 furos onde são assentadas as varetas. Estes furos distam entre si de centro a centro em 15mm. <br>
        -Por uma placa intermediária também vazada em 900 furos. <br>
        -Por uma placa superior com as mesmas características da intermediária.<br>
        Estas placas foram montadas de forma não interferir na parte ativa do núcleo
        `
    },
    {
        pergunta: `O que são tubos guias das barras de controle e segurança?`,
        resposta: `São colunas fixadas, na placa espaçadora superior e que servem de guias para as varetas absorvedoras.`
    },
    {
        pergunta: `Qual a função dos amortecedores no final de curso das barras (BC e BS)?`,
        resposta: `Amortecer o impacto da queda das barras por gravidade a fim de preservar suas integridades.`
    },
    {
        pergunta: `Descreva a fonte de nêutrons de partida usada no Reator IPEN/MB-01.`,
        resposta: `A fonte utilizada é amerício berílio. Antes da partida do reator ela fica alojada numa blindagem localizada no pavimento inferior, abaixo do tanque do reator. Esta fonte está fixada num carrinho que pode ser movimentado verticalmente desde sua blindagem até um local bem próximo ao núcleo do reator. Este acionamento é feito remotamente da sala de controle.`
    },
    {
        pergunta: `Preencha a Tabela a seguir sobre as principais características do núcleo (de referência) do Reator IPEN/MB-01.`,
        resposta: `<table>
        <thead>
            <tr>
                <td>Descrição</td>
                <td>Valores</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Potência máxima em W
                </td>
                <td>
                    100
                </td>
            </tr>
            <tr>
                <td>
                    Moderador
                </td>
                <td>
                    Água leve
                </td>
            </tr>
            <tr>
                <td>
                    Combustível (material e enriquecimento em U235)
                </td>
                <td>
                    UO<sub>2</sub> e 4,3%
                </td>
            </tr>
            <tr>
                <td>
                    Forma do combustível (revestido em aço inóx) 
                </td>
                <td>
                    Coluna 52 past. Cilind.
                </td>
            </tr>
            <tr>
                <td>
                    transversal do núcleo em mm
                </td>
                <td>
                    420x390
                </td>
            </tr>
            <tr>
                <td>
                    Altura ativa do núcleo em mm
                </td>
                <td>
                    546
                </td>
            </tr>
            <tr>
                <td>
                    Nº total de varetas combustíveis
                </td>
                <td>
                    680
                </td>
            </tr>
            <tr>
                <td>
                    Nº total de varetas absorvedoras
                </td>
                <td>
                    48
                </td>
            </tr>
            <tr>
                <td>
                    Arranjo padrão de varetas no núcleo
                </td>
                <td>
                    26x28
                </td>
            </tr>
            <tr>
                <td>
                    Espaço entre varetas “pitch” em mm
                </td>
                <td>
                    15
                </td>
            </tr>
            <tr>
                <td>
                    Reatividade disponível no núcleo pcm (26x28 limpo a 21°C)
                </td>
                <td>
                    Aprox. 2600
                </td>
            </tr>
        </tbody>
    </table>`
    },
    {
        pergunta: `Existe algum cuidado em relação às varetas combustíveis do Reator IPEN/MB-01 no que se refere ao aumento de temperatura do seu combustível nuclear?`,
        resposta: `Não, devido à baixa potência de operação.`
    },
    {
        pergunta: `Dê as principais características de uma vareta combustível tais como: <br>
        a)	Comprimento Total.<br>
        b)	Comprimento Ativo.<br>
        c)	Diâmetro externo do encamisamento em mm.<br>
        d)	Altura e diâmetro da pastilha combustível em mm.<br>
        e)	Número de Pastilhas.<br>
        f)	Enriquecimento em U<sub>235</sub>.
        `,
        resposta: `a)	Comprimento Total em mm = 1194,0.<br>
        b)	Comprimento Ativo em mm = 546,0.<br>
        c)	Diâmetro externo do encamisamento em mm = 9,8.<br>
        d)	Altura e diâmetro da pastilha combustível em mm = 10,5.<br>
        e)	Número de pastilhas por vareta combustível = 52 (em média).<br>
        f)	Enriquecimento em U235 = 4,3% em peso
        `
    },
    {
        pergunta: `Quais as velocidades normal e reduzida das barras de controle?`,
        resposta: `vN = 1mm/s <br>
        vR = ¼ vN `
    },
    {
        pergunta: `Quais as velocidades normal e reduzida das barras de segurança?`,
        resposta: `vN = 2mm/s <br>
        vR = ¼ vN`
    },
    {
        pergunta: `Quanto se ganha em reatividade quando se transforma o núcleo de referência retangular 26x28 contendo 680 varetas combustíveis para o núcleo cilindrizado com as mesmas varetas combustíveis, inclusive mesmo número de vareta?`,
        resposta: `Se ganha 710 pcm`
    },
    {
        pergunta: `Foram estipulados ou considerados os limites termo-hidráulicos ao núcleo do Reator IPEN/MB-01 nos critérios de projeto?`,
        resposta: `Não, como o reator trabalha em baixas potências, para fins neutrônicos, não ocorre realimentações de temperatura significativas.`
    },
    {
        pergunta: `Qual a composição em porcentagem dos materiais constituintes das barras de controle? Qual o material do encamisamento destas varetas absorvedoras?`,
        resposta: `Ag⟶80% <br>
        In⟶15% <br>
        Cd⟶5% <br>
        O revestimento é em aço inox AISI 304L idêntico aos da vareta combustível.
        `
    },
    {
        pergunta: `O que significa “MAB” e qual a sua função?`,
        resposta: `MAB = Mecanismo de Acionamento das Barras
        É um sistema que propicia a movimentação das barras de controle e das barras de segurança do reator.
        `
    },
    {
        pergunta: `Faça um desenho esquemático do núcleo indicando os posicionamentos das barras absorvedoras.`,
        resposta: `<svg id="Núcleo" class="desenho-questao" xmlns="http://www.w3.org/2000/svg" width="328" height="477.96" viewBox="0 0 328 477.96"><defs><style>.cls-1{fill:#39b54a;stroke:lime;}.cls-1,.cls-14,.cls-15,.cls-2,.cls-25,.cls-3,.cls-5,.cls-6,.cls-7{stroke-miterlimit:10;}.cls-2,.cls-25{fill:blue;stroke:blue;}.cls-2,.cls-3{stroke-width:1.15px;}.cls-12,.cls-3{fill:#fff;}.cls-3{stroke:#000;}.cls-4{font-size:9px;}.cls-10,.cls-12,.cls-16,.cls-24,.cls-4,.cls-8{font-family:MyriadPro-Regular, Myriad Pro;}.cls-5,.cls-6{fill:#ff7bac;stroke:red;}.cls-5{stroke-width:2px;}.cls-6{stroke-width:1.51px;}.cls-7{fill:#009245;stroke:#006837;stroke-width:0.93px;}.cls-10,.cls-12,.cls-8{font-size:14px;}.cls-8{letter-spacing:0em;}.cls-9{letter-spacing:0em;}.cls-11{letter-spacing:0em;}.cls-13{letter-spacing:0.01em;}.cls-14,.cls-15{fill:#29abe2;stroke:aqua;}.cls-15{stroke-width:0.63px;}.cls-16,.cls-24{font-size:21px;}.cls-17{letter-spacing:-0.02em;}.cls-18{letter-spacing:-0.01em;}.cls-19,.cls-24{letter-spacing:-0.01em;}.cls-20{letter-spacing:0em;}.cls-21{letter-spacing:0.02em;}.cls-22{letter-spacing:-0.01em;}.cls-23{letter-spacing:0em;}.cls-25{stroke-width:0.77px;}.cls-26{letter-spacing:0em;}.cls-27{letter-spacing:-0.01em;}.cls-28{letter-spacing:-0.01em;}.cls-29{letter-spacing:0em;}.cls-30{letter-spacing:0em;}.cls-31{letter-spacing:0em;}.cls-32{letter-spacing:-0.01em;}</style></defs><rect class="cls-1" x="75.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="249.5" y="80.48" width="4" height="238"/><rect class="cls-1" x="117.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="119.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="159.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="163.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="204.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="208.5" y="79.48" width="4" height="238"/><rect class="cls-1" x="74" y="258.98" width="178" height="12"/><rect class="cls-1" x="74.5" y="118.48" width="178" height="12"/><rect class="cls-2" x="166.5" y="122.48" width="82" height="4"/><circle class="cls-3" cx="207.5" cy="124.48" r="5"/><rect class="cls-2" x="78.5" y="122.48" width="82" height="4"/><circle class="cls-3" cx="119.5" cy="124.48" r="5"/><rect class="cls-2" x="78.5" y="262.48" width="82" height="4"/><circle class="cls-3" cx="119.5" cy="264.48" r="5"/><rect class="cls-2" x="166.5" y="262.48" width="82" height="4"/><circle class="cls-3" cx="207.5" cy="264.48" r="5"/><text class="cls-4" transform="translate(116.68 127.94) scale(1.15 1)">1</text><text class="cls-4" transform="translate(204.68 126.94) scale(1.15 1)">2</text><text class="cls-4" transform="translate(204.68 266.94) scale(1.15 1)">3</text><text class="cls-4" transform="translate(116.68 266.94) scale(1.15 1)">4</text><rect class="cls-5" x="78.5" y="76.48" width="37" height="42"/><rect class="cls-5" x="122.5" y="76.48" width="37" height="42"/><rect class="cls-5" x="166.5" y="76.48" width="37" height="42"/><rect class="cls-5" x="210.5" y="76.48" width="37" height="42"/><rect class="cls-5" x="78.5" y="130.48" width="37" height="42"/><rect class="cls-5" x="122.5" y="130.48" width="37" height="42"/><rect class="cls-5" x="166.5" y="130.48" width="37" height="42"/><rect class="cls-5" x="210.5" y="130.48" width="37" height="42"/><rect class="cls-5" x="78.5" y="173.48" width="37" height="42"/><rect class="cls-5" x="166.5" y="173.48" width="37" height="42"/><rect class="cls-5" x="210.5" y="173.48" width="37" height="42"/><rect class="cls-5" x="78.5" y="216.48" width="37" height="42"/><rect class="cls-5" x="122.5" y="216.48" width="37" height="42"/><rect class="cls-5" x="166.5" y="216.48" width="37" height="42"/><rect class="cls-5" x="210.5" y="216.48" width="37" height="42"/><rect class="cls-5" x="78.5" y="270.48" width="37" height="42"/><rect class="cls-6" x="69" y="383.98" width="28" height="31.78"/><rect class="cls-7" x="69" y="423.98" width="28" height="31.78"/><rect class="cls-5" x="122.5" y="270.48" width="37" height="42"/><rect class="cls-5" x="166.5" y="270.48" width="37" height="42"/><rect class="cls-5" x="210.5" y="270.48" width="37" height="42"/><rect class="cls-7" x="122.5" y="172.48" width="37" height="43"/><text class="cls-8" transform="translate(86.52 100.78)">A<tspan class="cls-9" x="8.53" y="0">-1</tspan></text><text class="cls-8" transform="translate(86.52 156.78)">A<tspan class="cls-9" x="8.53" y="0">-2</tspan></text><text class="cls-8" transform="translate(86.52 198.78)">A<tspan class="cls-9" x="8.53" y="0">-3</tspan></text><text class="cls-8" transform="translate(86.52 241.78)">A<tspan class="cls-9" x="8.53" y="0">-4</tspan></text><text class="cls-8" transform="translate(86.52 294.78)">A<tspan class="cls-9" x="8.53" y="0">-5</tspan></text><text class="cls-10" transform="translate(130.52 294.78)"><tspan class="cls-11">B</tspan><tspan x="7.66" y="0">-5</tspan></text><text class="cls-10" transform="translate(130.52 240.78)"><tspan class="cls-11">B</tspan><tspan x="7.66" y="0">-4</tspan></text><text class="cls-12" transform="translate(130.52 198.78)"><tspan class="cls-11">B</tspan><tspan x="7.66" y="0">-3</tspan></text><text class="cls-10" transform="translate(130.52 156.78)"><tspan class="cls-11">B</tspan><tspan x="7.66" y="0">-2</tspan></text><text class="cls-10" transform="translate(130.52 100.78)"><tspan class="cls-11">B</tspan><tspan x="7.66" y="0">-1</tspan></text><text class="cls-10" transform="translate(174.52 100.78)">C-1</text><text class="cls-10" transform="translate(174.52 156.78)">C-2</text><text class="cls-10" transform="translate(174.52 198.78)">C-3</text><text class="cls-10" transform="translate(174.52 240.78)">C-4</text><text class="cls-10" transform="translate(174.52 294.78)">C-5</text><text class="cls-10" transform="translate(218.52 294.78)"><tspan class="cls-13">D</tspan><tspan x="9.52" y="0">-5</tspan></text><text class="cls-10" transform="translate(218.52 241.78)"><tspan class="cls-13">D</tspan><tspan x="9.52" y="0">-4</tspan></text><text class="cls-10" transform="translate(218.52 198.78)"><tspan class="cls-13">D</tspan><tspan x="9.52" y="0">-3</tspan></text><text class="cls-10" transform="translate(218.52 156.78)"><tspan class="cls-13">D</tspan><tspan x="9.52" y="0">-2</tspan></text><text class="cls-10" transform="translate(218.52 100.78)"><tspan class="cls-13">D</tspan><tspan x="9.52" y="0">-1</tspan></text><rect class="cls-14" x="0.5" y="316.48" width="327" height="39"/><rect class="cls-14" x="0.5" y="37.48" width="327" height="39"/><rect class="cls-14" x="254.5" y="79.48" width="73" height="237"/><rect class="cls-15" x="44.5" y="79.48" width="29" height="237"/><text class="cls-16" transform="translate(79.96 17.58)"><tspan class="cls-17">P</tspan><tspan x="10.65" y="0">osi</tspan><tspan class="cls-18" x="35.41" y="0">ç</tspan><tspan x="44.69" y="0">ões do Núcleo</tspan></text><text class="cls-16" transform="translate(85.92 63.78)"><tspan class="cls-19">C</tspan><tspan class="cls-20" x="12.03" y="0">aixa D₂0 No</tspan><tspan class="cls-21" x="112.45" y="0">r</tspan><tspan class="cls-18" x="119.82" y="0">t</tspan><tspan x="126.65" y="0">e</tspan></text><text class="cls-16" transform="translate(290.92 253.78) rotate(-90)"><tspan class="cls-19">C</tspan><tspan class="cls-20" x="12.03" y="0">aixa D₂0 </tspan><tspan class="cls-22" x="87.11" y="0">L</tspan><tspan x="96.72" y="0">es</tspan><tspan class="cls-18" x="115.56" y="0">t</tspan><tspan x="122.39" y="0">e</tspan></text><text class="cls-16" transform="translate(64.92 262.78) rotate(-90)"><tspan class="cls-19">C</tspan><tspan class="cls-20" x="12.03" y="0">aixa D₂0 </tspan><tspan class="cls-23" x="87.11" y="0">O</tspan><tspan x="101.66" y="0">es</tspan><tspan class="cls-18" x="120.5" y="0">t</tspan><tspan x="127.32" y="0">e</tspan></text><text class="cls-24" transform="translate(107.92 343.78)">C<tspan class="cls-20" x="12.03" y="0">aixa D₂0 Sul</tspan></text><rect class="cls-25" x="36.5" y="469.91" width="86" height="4.13"/><text class="cls-10" transform="translate(145.68 404.46)">Eleme<tspan class="cls-26" x="35.9" y="0">n</tspan><tspan class="cls-18" x="43.61" y="0">t</tspan><tspan x="48.16" y="0">o </tspan><tspan class="cls-27" x="58.81" y="0">C</tspan><tspan x="66.78" y="0">ombustí</tspan><tspan class="cls-28" x="115.27" y="0">v</tspan><tspan x="121.87" y="0">el</tspan></text><text class="cls-10" transform="translate(145.68 444.46)">Blo<tspan class="cls-18" x="18.58" y="0">c</tspan><tspan x="24.77" y="0">o de alumínio</tspan></text><text class="cls-10" transform="translate(145.68 474.46)">Ba<tspan class="cls-29" x="14.34" y="0">r</tspan><tspan class="cls-30" x="18.97" y="0">r</tspan><tspan class="cls-31" x="23.48" y="0">a de </tspan><tspan class="cls-18" x="51.07" y="0">c</tspan><tspan x="57.26" y="0">o</tspan><tspan class="cls-26" x="64.95" y="0">n</tspan><tspan x="72.66" y="0">t</tspan><tspan class="cls-32" x="77.29" y="0">r</tspan><tspan x="81.73" y="0">ole</tspan></text></svg>`
    },
    {
        pergunta: `Quais são as siglas que identificam os tanques do moderador, tanque de estocagem e tanque de decaimento do Reator IPEN/MB-01?`,
        resposta: `Tanque do Moderador: TQ-201. <br>
        Tanque de Estocagem TQ-202. <br>
        Tanque de Decaimento TQ-203
        `
    },
    {
        pergunta: `Dê as principais características e localizações dos tanques do moderador, estocagem e decaimento (volume total e material estrutural e espessura).`,
        resposta: `Tanque do Moderador: <br>
        -Localização: Térreo da Célula Crítica <br>
        -Volume: Total = 7420 litros <br>
        -Material: Aço inox 304 <br><br>
        Tanque de Estocagem:<br>
        -Localização: Primeiro Subsolo da Célula Crítica <br>
        -Volume: Total = 21800 litros <br>
        -Material: Aço inox 304 <br><br>
        Tanque de Decaimento: <br>
        -Localização: Segundo Subsolo da Célula Crítica <br>
        -Volume: Total = 21600 litros <br>
        -Material: Aço inox 304
        `
    },
    {
        pergunta: `O esvaziamento do Tanque do Moderador é feito por intermédio de duas válvulas (segurança) de abertura rápida no fundo do Tanque. Qual o diâmetro em polegadas e qual o tipo desta válvula?`,
        resposta: `Diâmetro 20 polegadas ou 50,8 cm; Válvula tipo borboleta.`
    },
    {
        pergunta: `A treliça (estrutura metálica que sustenta o núcleo e os sistemas integrados de barras) é apoiada no fundo do Tanque do Moderador? Justifique sua resposta.`,
        resposta: `Não. A treliça como um todo deve ter pelo menos um grau de liberdade para oscilar em caso de um abalo natural ou forçado. Outro motivo é aliviar a carga no fundo do tanque.`
    },
    {
        pergunta: `Qual o volume do Tanque do Moderador?`,
        resposta: `O volume do Tanque do moderador é 7420 litros. `
    },
    {
        pergunta: `Qual a função do difusor existente no fundo do Tanque do Moderador? Qual é o seu formato.`,
        resposta: `Homogeneizar a temperatura do moderador.
        O seu formato é de um anel tubular perfurado uniformemente.
        `
    },
    {
        pergunta: `Quais são os sistemas componentes do Sistema Elétrico do Prédio do Reator IPEN/MB-01?`,
        resposta: `Sistema de Energia Elétrica <br>
        Sistema de Iluminação <br>
        Sistema de Aterramento <br>
        Sistema de Proteção Contra Descargas Elétricas
        `
    },
    {
        pergunta: `As cargas elétricas conectadas ao Sistema de Energia Elétrica e Sistema de Iluminação do Prédio do Reator são classificadas em duas categorias. Cite e exemplifique cada uma delas.`,
        resposta: `a)	Cargas de serviços (não essenciais): São cargas que em caso de interrupção no fornecimento normal de energia elétrica (via rede da concessionária), NÃO serão religadas após a partida e entrada do grupo diesel gerador de emergência da planta. <br>
        b)	Cargas Essenciais: São cargas que em caso de interrupção no fornecimento normal de energia elétrica (via rede da concessionária), serão religadas imediatamente após a partida e entrada do grupo diesel gerador de emergência da planta.
        `
    },
    {
        pergunta: `Com relação ao CCM#1 responda: <br>
        a)	Quem supre energia a ele e como isso é feito? <br> 
        b)	Dê as características do Transformador que o alimenta <br>
        c)	Ele (CCM#1) é considerado um sistema essencial? Por quê? <br>
        d)	Quem ele alimenta? <br>
        e)	Onde ele fica? <br>
        `,
        resposta: `a)	É o transformador TR-02. A alimentação é feita via concessionária pela chave CBT-2 na cabine primária do IPEN, através de um circuito de força instalado em canaletas e banco de dutos subterrâneos na área externa e por leitos de cabos na área abrigada do Prédio do Reator. <br>
        b)	Identificação: TR-02; 1000 kVA; 13,2 kV-380/220 V. <br>
        c)	NÃO, pois é alimentada apenas pela Concessionária e não por um gerador. <br>
        d)	CCM#2 e algumas outras cargas apropriadas. <br>
        e)	Na sala de eletrotécnica.
        `
    },
    {
        pergunta: `Com relação ao CCM#2 responda: <br>
        a)	Quem supre energia a ele e como isso é feito? <br>
        b)	Ele (CCM#2) é considerado um  sistema essencial? Por quê? <br>
        c)	Quem ele alimenta?<br>
        d)	Onde ele fica?
        `,
        resposta: `a-	Ele pode ser alimentado pelo CCM#1 localizado na sala de eletrotécnica ou pelo Gerador GDG-02 através da CTE-02. <br>
        b-	Ele alimenta o CCM#3 e CCM#4 localizados na sala de eletrotécnica e o Quadro de Luz QL-E1 e outras cargas apropriadas.<br>
        c-	SIM, porque ele pode ser alimentado tanto pela Concessionária quanto pelo Gerador GDG-02.<br>
        d-	Na sala de Eletrotécnica.
        `
    },
    {
        pergunta: `Qual a função do Subsistema de Energia Elétrica Essencial?`,
        resposta: `O subsistema de energia elétrica essencial está projetado para suprir eletricidade no caso de falha da fonte externa de energia (via rede da concessionária), sendo constituído por 2 fontes locais de energia elétrica proveniente de dois grupos diesel geradores e são: <br>
        -Grupo Diesel Gerador GDG-01 de 220/127 V; 3φ; 60 Hz <br>
        -Grupo Diesel Gerador GDG-02 de 380/220 V; 3φ; 60 Hz
        `
    },
    {
        pergunta: `Qual a finalidade do Sistema de Aterramento e quais suas características?`,
        resposta: `O sistema de aterramento tem a finalidade de garantir a segurança operacional da Instalação e possibilitar proteção do pessoal contra potenciais perigosos associados às faltas de fase-terra.<br>
        Este sistema é constituído por malhas de terra interligadas que atendem: <br>
        •	Malha de aterramento de Força- Todos os equipamentos <br>elétricos e estruturas metálicas.<br>
        •	Malha de aterramento da Instrumentação.<br>
        •	Todos os equipamentos eletrônicos.<br>
        •	Telefonia.<br>
        •	Descargas Elétricas atmosféricas.
        `
    },
    {
        pergunta: `Qual a finalidade do Sistema de Proteção Contra Descargas Atmosféricas e quais suas características?`,
        resposta: `O sistema de Descargas Atmosféricas tem a finalidade de garantir a segurança operacional da Instalação e possibilitar proteção do pessoal contra potenciais de descargas atmosféricas. <br>
        O sistema é constituído por 4 captores, cabos de cobre de 16mm² e 35mm2 nas descidas às malhas de aterramento, caixas suspensas para a medição da resistência terra e malha de aterramento constituída de cabos de cobre nu.
        `
    },
    {
        pergunta: `Cite pelo menos três cargas alimentadas pelo CCM#1`,
        resposta: `Basta escolher três das cargas dadas a seguir: <br><br>
        * CCM#2 <br>
        * EX-101A/B Ventilador do Insuflamento da Célula Crítica.<br>
        * B112A/B Bomba da Água do Circuito Intermediário do Chiller.<br>
        * B113A/B Bomba de Distribuição da Água Gelada do Chiller.<br>
        * B 101 Bomba de Água bruta.<br>
        * TC-202 Aquecedor do Moderador (3 bancos).<br>
        * UR101 A/B Unidade Resfriadora (Chillers).<br>
        * AQ-201 Aquecedor do Misturador de Boro.<br>
        * AG-201 Agitador do Misturador de Boro.<br>
        * B 203 Bomba da Água de Limpeza.<br>
        * B 205 Bomba da Drenagem do Piso do 2º Subsolo.<br>
        * TC-213 Aquecedor do Sistema de Recirculação S1(Insufl).<br>
        * B-001 Bomba do Esgoto Quente.<br>
        * B-002 Bomba do Esgoto Quente<br>
        * Porta de Concreto
        `
    },
    {
        pergunta: `Cite pelo menos três cargas alimentadas pelo CCM#2.`,
        resposta: `Basta escolher três das cargas dadas a seguir: <br><br>
        * CCM#3<br>
        * CCM#4<br>
        * TC 211 A/B Aquecedor do Sistema de Recirculação de Ar.<br>
        * Alimentação do Painel de Combate a Incêndios.<br>
        * Unidade de Ar Comprimido.<br>
        * Ponte Rolante.<br>
        * QL-E1 Quadro de Luz<br>
        * B 202 A/B Bomba de Enchimento Rápido do Tanque do Moderador.<br>
        * B 201 A/B Bomba de Enchimento Lento do Tanque do Moderador.<br>
        * By-Pass NB2.<br>
        * B 111 A/B Bomba da Água de Condensação do Sistema de Água Gelada.<br>
        * TR-101 A/B motores dos Ventiladores das Torres.<br>
        * Ventiladores A/B da Exaustão S2; S4; <br>
        * SC-301 Self Containned no Edifício de Apoio.<br>
        `
    },
    {
        pergunta: `Cite pelo menos três cargas alimentadas pelo CCM#3.`,
        resposta: `Basta escolher três das cargas dadas a seguir: <br><br>
        * QL-NB1 (Quadro de Luz).<br>
        * SC-101 Self Contained no Edifício Auxiliar (S3).<br>
        * EX-103 A Ventilador da Sala de Baterias (só A).<br>
        * EX-201 A Ventilador de Recirculação de Ar da Célula Crítica (S1).<br>
        * EX-102 A Ventilador de Exaustão de Ar da Célula Crítica (S1).<br>
        * TC 111 A Aquecedor de Proteção dos Filtros Absolutos.<br>
        * TC 111 B Aquecedor de Proteção dos Filtros Absolutos.
        `
    },
    {
        pergunta: `Faça um diagrama unifilar simplificado geral do Sistema Elétrico do Prédio do Reator IPEN/MB-01 (somente as cargas e a iluminação via CCM#2)`,
        resposta: `<img src="./imagens/questoes/diag-unifilar.jpg" class="imgQuestao" alt="diagrama unifilar">`
    },
    {
        pergunta: `Cite pelo menos três cargas alimentadas pelo CCM#4`,
        resposta: `Basta escolher três das cargas dadas a seguir: <br><br>
        <ul>
            * QL-NB2 (Quadro de Luz). <br>
            * TI-1 Disjuntor Geral do Painel da Instrumentação: <br>
                <li>Instrumentação Nuclear (II)</li>
                <li>Monitoração Ambiental</li>
                <li>Proteção Radiológica</li>
                <li>Painel do Esgoto Quente</li>
                <li>Console Instrumentação Nuclear</li>
                <li>Instrumentação Auxiliar</li>
            * TI-2 Disjuntor Geral do Painel da Instrumentação:
                <li>Instrumentação Nuclear (I)</li>
                <li>Instrumentação de Partida</li>
                <li>MAB</li>
                <li>Intertravamento para Barra e Água</li>
                <li>Proteção Radiológica</li>
            * TI-3 Disjuntor Geral do Painel da Instrumentação:
                <li>Aquisição de Dados</li>
                <li>Célula Crítica</li>
            * Fonte de Partida <br>
            * EX-103 B Ventilador da sala de baterias (só B). <br>
            * EX-201 B Ventilador de recirculação de ar da célula critica (S1). <br>
            * EX-102 B Ventilador de Exaustão de ar da célula critica (S1).
        </ul>`
    },
    {
        pergunta: `Qual a função do STAA e quais sistemas ele abastece?`,
        resposta: `Produzir água desmineralizada.
        Abastece: <br>
        •	Tanque de estocagem do Sistema de Controle da Temperatura da Água e Enchimento Rápido. <br>
        •	Sistema de água gelada. <br>
        •	Sistema de Lavagem de equipamentos.
        `
    },
    {
        pergunta: `Faça um desenho esquemático do STAA.`,
        resposta: `<svg id="Camada_1" class="desenho-questao" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" width="355" height="250.12" viewBox="0 0 355 250.12"><defs><style>.cls-1,.cls-10,.cls-14,.cls-15,.cls-20{fill:none;}.cls-1,.cls-11,.cls-14,.cls-15{stroke:#000;}.cls-1,.cls-10,.cls-11,.cls-14,.cls-15,.cls-20{stroke-miterlimit:10;}.cls-2{font-size:10px;}.cls-12,.cls-16,.cls-18,.cls-2,.cls-5{fill:blue;}.cls-12,.cls-16,.cls-18,.cls-2{font-family:MyriadPro-Regular, Myriad Pro;}.cls-3{letter-spacing:-0.03em;}.cls-4{letter-spacing:0.01em;}.cls-6{letter-spacing:-0.03em;}.cls-7{letter-spacing:0em;}.cls-8{letter-spacing:-0.04em;}.cls-9{letter-spacing:0em;}.cls-10{stroke:blue;}.cls-12{font-size:9px;}.cls-13{letter-spacing:0em;}.cls-14{stroke-width:1.22px;}.cls-15{stroke-width:1.02px;}.cls-16,.cls-18{font-size:8px;}.cls-16{letter-spacing:-0.02em;}.cls-17{letter-spacing:0em;}.cls-19{letter-spacing:0.01em;}.cls-20{stroke:gray;stroke-width:0.5px;}.cls-21{letter-spacing:0.01em;}.cls-22{letter-spacing:-0.02em;}</style></defs><path class="cls-1" d="M151.5,575.5h116s27,9,24,30-19,28-29,28h-111s-24-7-23-29S151.5,575.5,151.5,575.5Z" transform="translate(-25.5 -520.88)"/><text class="cls-2" transform="translate(137.86 72.72)"><tspan class="cls-3">T</tspan><tspan class="cls-4" x="4.7" y="0">Q</tspan><tspan x="11.73" y="0">-102</tspan></text><path class="cls-5" d="M143,596.84h-2v-.74h5v.74h-2.06v6H143Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M148.74,602.84l-.07-.61h0a1.8,1.8,0,0,1-1.48.72,1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M150.88,599.31c0-.5,0-.91,0-1.31h.78l0,.8h0a1.78,1.78,0,0,1,1.6-.91c.67,0,1.71.4,1.71,2.06v2.89h-.88v-2.79c0-.78-.29-1.43-1.12-1.43a1.25,1.25,0,0,0-1.18.9,1.27,1.27,0,0,0-.06.41v2.91h-.88Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M159.73,602.09h0a1.72,1.72,0,0,1-1.58.86,2.21,2.21,0,0,1-2-2.45,2.32,2.32,0,0,1,2.19-2.61,1.59,1.59,0,0,1,1.49.84h0l0-.73h.83c0,.41,0,.83,0,1.33v5.49h-.88Zm0-2.13a1.5,1.5,0,0,0,0-.37,1.29,1.29,0,0,0-1.26-1c-.91,0-1.46.77-1.46,1.86s.46,1.8,1.43,1.8a1.31,1.31,0,0,0,1.26-1,1.48,1.48,0,0,0,.07-.42Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M166.11,601.52c0,.5,0,.94,0,1.32h-.78l-.05-.79h0a1.82,1.82,0,0,1-1.6.9c-.76,0-1.67-.42-1.67-2.12V598h.88v2.68c0,.92.28,1.54,1.08,1.54a1.27,1.27,0,0,0,1.16-.8,1.29,1.29,0,0,0,.08-.45v-3h.88Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M168.06,600.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3,2.25,2.25,0,0,1-2.38-2.44,2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M178.88,595.74v5.85c0,.43,0,.92,0,1.25h-.79l0-.84h0a1.79,1.79,0,0,1-1.65,1,2.21,2.21,0,0,1-2.07-2.46,2.32,2.32,0,0,1,2.17-2.6,1.62,1.62,0,0,1,1.46.74h0v-2.89ZM178,600a1.55,1.55,0,0,0,0-.37,1.29,1.29,0,0,0-1.27-1c-.91,0-1.45.8-1.45,1.87s.48,1.79,1.43,1.79a1.32,1.32,0,0,0,1.29-1,1.53,1.53,0,0,0,0-.38Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M180.83,600.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3A2.25,2.25,0,0,1,180,600.5a2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M187.47,599.51c0-.57,0-1.06,0-1.51h.77l0,1h0a1.45,1.45,0,0,1,1.34-1.06,1,1,0,0,1,.25,0v.83a1.32,1.32,0,0,0-.3,0,1.23,1.23,0,0,0-1.18,1.13,2.48,2.48,0,0,0,0,.41v2.58h-.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M191.13,600.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3,2.25,2.25,0,0,1-2.38-2.44,2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M195.53,601.94a2.31,2.31,0,0,0,1.16.35c.64,0,.94-.32.94-.72s-.25-.65-.9-.89c-.87-.31-1.28-.79-1.28-1.37a1.49,1.49,0,0,1,1.67-1.42,2.42,2.42,0,0,1,1.19.3l-.22.64a1.88,1.88,0,0,0-1-.28c-.52,0-.81.3-.81.66s.29.58.92.82c.84.32,1.27.74,1.27,1.46s-.66,1.45-1.81,1.45a2.76,2.76,0,0,1-1.36-.33Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M200.1,600.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3,2.25,2.25,0,0,1-2.38-2.44,2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M204.62,599.51c0-.57,0-1.06,0-1.51h.77l0,1h0a1.45,1.45,0,0,1,1.34-1.06,1,1,0,0,1,.25,0v.83a1.32,1.32,0,0,0-.3,0,1.23,1.23,0,0,0-1.18,1.13,2.48,2.48,0,0,0,0,.41v2.58h-.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M208.48,598l1,2.72a12.45,12.45,0,0,1,.39,1.24h0c.11-.4.25-.8.41-1.24l.94-2.72h.92l-1.9,4.84h-.84L207.54,598Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M215.59,602.84l-.07-.61h0A1.8,1.8,0,0,1,214,603a1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M145.91,607.74v5.85c0,.43,0,.92,0,1.25h-.79l0-.84h0a1.79,1.79,0,0,1-1.65,1,2.21,2.21,0,0,1-2.07-2.46,2.32,2.32,0,0,1,2.17-2.6,1.62,1.62,0,0,1,1.46.74h0v-2.89ZM145,612a1.55,1.55,0,0,0,0-.37,1.29,1.29,0,0,0-1.27-1c-.91,0-1.45.8-1.45,1.87s.48,1.79,1.43,1.79a1.32,1.32,0,0,0,1.29-1,1.53,1.53,0,0,0,0-.38Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M147.86,612.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3A2.25,2.25,0,0,1,147,612.5a2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M157.18,614.84l-.07-.61h0a1.8,1.8,0,0,1-1.48.72,1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Zm.44-4.46-1.22,1.43h-.63l.88-1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M163.49,610c0,.35,0,.74,0,1.33v2.81a2.78,2.78,0,0,1-.69,2.21,2.57,2.57,0,0,1-1.76.58,3.12,3.12,0,0,1-1.61-.4l.22-.67a2.73,2.73,0,0,0,1.42.38c.9,0,1.56-.47,1.56-1.69V614h0a1.73,1.73,0,0,1-1.54.81,2.16,2.16,0,0,1-2.06-2.36,2.32,2.32,0,0,1,2.18-2.57,1.61,1.61,0,0,1,1.51.84h0l0-.73Zm-.91,1.91a1.25,1.25,0,0,0-.05-.4,1.27,1.27,0,0,0-1.23-.93c-.84,0-1.44.71-1.44,1.83,0,1,.48,1.74,1.43,1.74a1.29,1.29,0,0,0,1.22-.9,1.53,1.53,0,0,0,.07-.47Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M169,613.52c0,.5,0,.94,0,1.32h-.78l-.05-.79h0a1.82,1.82,0,0,1-1.6.9c-.76,0-1.67-.42-1.67-2.12V610h.88v2.68c0,.92.28,1.54,1.08,1.54a1.27,1.27,0,0,0,1.16-.8,1.29,1.29,0,0,0,.08-.45v-3H169Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M173.1,614.84l-.07-.61h0a1.8,1.8,0,0,1-1.48.72,1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M148,619.74v5.85c0,.43,0,.92,0,1.25h-.79l0-.84h0a1.79,1.79,0,0,1-1.65,1,2.21,2.21,0,0,1-2.07-2.46,2.32,2.32,0,0,1,2.17-2.6,1.62,1.62,0,0,1,1.46.74h0v-2.89Zm-.88,4.23a1.55,1.55,0,0,0,0-.37,1.29,1.29,0,0,0-1.27-1c-.91,0-1.45.8-1.45,1.87s.48,1.79,1.43,1.79a1.32,1.32,0,0,0,1.29-1,1.53,1.53,0,0,0,0-.38Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M150,624.58a1.55,1.55,0,0,0,1.66,1.68A3.18,3.18,0,0,0,153,626l.15.63a3.92,3.92,0,0,1-1.61.3,2.25,2.25,0,0,1-2.38-2.44,2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43A1.46,1.46,0,0,0,150,624Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M154.38,625.94a2.31,2.31,0,0,0,1.16.35c.64,0,.94-.32.94-.72s-.25-.65-.9-.89c-.87-.31-1.28-.79-1.28-1.37a1.49,1.49,0,0,1,1.67-1.42,2.42,2.42,0,0,1,1.19.3l-.22.64a1.88,1.88,0,0,0-1-.28c-.52,0-.81.3-.81.66s.29.58.92.82c.84.32,1.27.74,1.27,1.46s-.66,1.45-1.81,1.45a2.76,2.76,0,0,1-1.36-.33Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M158.46,623.31c0-.5,0-.91,0-1.31h.77l0,.78h0a1.67,1.67,0,0,1,1.52-.89,1.43,1.43,0,0,1,1.37,1h0a2,2,0,0,1,.54-.63,1.65,1.65,0,0,1,1.07-.34c.64,0,1.59.42,1.59,2.1v2.85h-.86V624.1c0-.93-.34-1.49-1-1.49a1.14,1.14,0,0,0-1,.8,1.45,1.45,0,0,0-.07.44v3h-.86v-2.9c0-.77-.34-1.33-1-1.33a1.31,1.31,0,0,0-1.16,1.31v2.92h-.86Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M167.78,620.64a.55.55,0,0,1-1.09,0,.54.54,0,0,1,.55-.55A.52.52,0,0,1,167.78,620.64Zm-1,6.2V622h.88v4.84Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M169.14,623.31c0-.5,0-.91,0-1.31h.78l.05.8h0a1.78,1.78,0,0,1,1.6-.91c.67,0,1.71.4,1.71,2.06v2.89h-.88v-2.79c0-.78-.29-1.43-1.12-1.43a1.25,1.25,0,0,0-1.18.9,1.27,1.27,0,0,0-.06.41v2.91h-.88Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M175.18,624.58a1.55,1.55,0,0,0,1.66,1.68,3.18,3.18,0,0,0,1.34-.25l.15.63a3.92,3.92,0,0,1-1.61.3,2.25,2.25,0,0,1-2.38-2.44,2.35,2.35,0,0,1,2.27-2.61,2.05,2.05,0,0,1,2,2.28,3.32,3.32,0,0,1,0,.41Zm2.58-.63a1.25,1.25,0,0,0-1.22-1.43,1.46,1.46,0,0,0-1.35,1.43Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M179.7,623.51c0-.57,0-1.06,0-1.51h.77l0,1h0a1.45,1.45,0,0,1,1.34-1.06,1,1,0,0,1,.25,0v.83a1.32,1.32,0,0,0-.3,0,1.23,1.23,0,0,0-1.18,1.13,2.48,2.48,0,0,0,0,.41v2.58h-.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M185.6,626.84l-.07-.61h0A1.8,1.8,0,0,1,184,627a1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M187.74,619.74h.88v7.1h-.88Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M191.08,620.64a.55.55,0,0,1-1.09,0,.54.54,0,0,1,.55-.55A.52.52,0,0,1,191.08,620.64Zm-1,6.2V622H191v4.84Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M191.89,626.33l2.19-2.85.63-.75v0h-2.62V622h3.69v.55l-2.16,2.81c-.2.27-.4.51-.62.76v0h2.83v.7h-3.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M199.4,626.84l-.07-.61h0a1.8,1.8,0,0,1-1.48.72,1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2.05.15-2.05,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,.05-.28Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M205.72,619.74v5.85c0,.43,0,.92,0,1.25H205l0-.84h0a1.79,1.79,0,0,1-1.65,1,2.21,2.21,0,0,1-2.07-2.46,2.32,2.32,0,0,1,2.17-2.6,1.62,1.62,0,0,1,1.46.74h0v-2.89Zm-.88,4.23a1.55,1.55,0,0,0,0-.37,1.29,1.29,0,0,0-1.27-1c-.91,0-1.45.8-1.45,1.87s.48,1.79,1.43,1.79a1.32,1.32,0,0,0,1.29-1,1.53,1.53,0,0,0,0-.38Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M209.86,626.84l-.07-.61h0a1.8,1.8,0,0,1-1.48.72,1.38,1.38,0,0,1-1.48-1.39c0-1.17,1-1.81,2.91-1.8v-.1a1,1,0,0,0-1.1-1.12,2.41,2.41,0,0,0-1.26.36l-.2-.58a3,3,0,0,1,1.59-.43c1.48,0,1.84,1,1.84,2v1.81a6.81,6.81,0,0,0,.08,1.16Zm-.13-2.47c-1,0-2,.15-2,1.09a.78.78,0,0,0,.83.84,1.2,1.2,0,0,0,1.17-.81.92.92,0,0,0,0-.28Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="252" y1="7.62" x2="260" y2="11.62"/><line class="cls-1" x1="252" y1="15.62" x2="260" y2="11.62"/><text class="cls-2" transform="translate(195.22 8.37)"><tspan class="cls-6">P</tspan><tspan x="5.06" y="0">a</tspan><tspan class="cls-7" x="9.88" y="0">r</tspan><tspan x="13.1" y="0">a o</tspan><tspan class="cls-8" x="25.53" y="0"> </tspan><tspan class="cls-9" x="27.24" y="0">TE-02</tspan></text><line class="cls-1" x1="16" y1="38.62" x2="43.5" y2="38.12"/><path class="cls-1" d="M45.76,559.42,45.5,582.5a10.23,10.23,0,0,0,10,7c8,0,10-5,10-5V559.06Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="242" y1="213.62" x2="269.5" y2="213.12"/><path class="cls-1" d="M271.76,734.42l-.26,23.08a10.23,10.23,0,0,0,10,7c8,0,10-5,10-5V734.06Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="301" y1="213.62" x2="328.5" y2="213.12"/><path class="cls-1" d="M330.76,734.42l-.26,23.08a10.23,10.23,0,0,0,10,7c8,0,10-5,10-5V734.06Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M48.64,564.26h3.63V565H49.51v2.24h2.55V568H49.51v3h-.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M54.79,565h-2v-.74h5V565H55.67v6h-.88Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M60,568v.65H57.51V568Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M50.24,577.32h0l-1.13.61-.17-.67,1.42-.76h.75V583h-.85Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M57.78,579.68c0,2.21-.82,3.43-2.26,3.43-1.27,0-2.13-1.19-2.15-3.34s.94-3.38,2.26-3.38S57.78,577.61,57.78,579.68Zm-3.53.1c0,1.69.52,2.65,1.32,2.65s1.33-1,1.33-2.71-.41-2.65-1.32-2.65S54.25,578,54.25,579.78Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M61.31,583v-1.77h-3v-.58l2.9-4.15h1v4h.91v.69h-.91V583Zm0-2.46v-2.17q0-.51,0-1h0c-.2.38-.36.66-.54,1l-1.59,2.21v0Z" transform="translate(-25.5 -520.88)"/><polyline class="cls-1" points="21.17 46.66 0.5 47.12 0.5 222.12"/><path class="cls-10" d="M52.32,743.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M46.71,743.5" transform="translate(-25.5 -520.88)"/><line class="cls-10" x1="21.21" y1="222.62" x2="18.95" y2="222.62"/><line class="cls-1" x1="13.34" y1="222.62" x2="1" y2="222.62"/><path class="cls-10" d="M44.45,743.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M38.84,743.5" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="40" y1="222.62" x2="26.82" y2="222.62"/><polyline class="cls-1" points="13.34 222.62 13.34 225.86 18.95 222.62"/><polyline class="cls-1" points="13.34 222.62 13.34 218.38 19.82 222.12 18.95 222.62"/><polyline class="cls-1" points="26.82 222.62 26.82 218.38 20.34 222.12 21.21 222.62"/><polyline class="cls-1" points="21.21 222.62 26.82 225.86 26.82 222.62"/><polyline class="cls-1" points="72.34 187.62 72.34 190.86 77.95 187.62"/><polyline class="cls-1" points="72.34 187.62 72.34 183.38 78.82 187.12 77.95 187.62"/><polyline class="cls-1" points="85.82 187.62 85.82 183.38 79.34 187.12 80.21 187.62"/><polyline class="cls-1" points="80.21 187.62 85.82 190.86 85.82 187.62"/><polyline class="cls-1" points="141.34 187.62 141.34 190.86 146.95 187.62"/><polyline class="cls-1" points="141.34 187.62 141.34 183.38 147.82 187.12 146.95 187.62"/><polyline class="cls-1" points="154.82 187.62 154.82 183.38 148.34 187.12 149.21 187.62"/><polyline class="cls-1" points="149.21 187.62 154.82 190.86 154.82 187.62"/><polyline class="cls-1" points="160.34 222.62 160.34 225.86 165.95 222.62"/><polyline class="cls-1" points="160.34 222.62 160.34 218.38 166.82 222.12 165.95 222.62"/><polyline class="cls-1" points="173.82 222.62 173.82 218.38 167.34 222.12 168.21 222.62"/><polyline class="cls-1" points="168.21 222.62 173.82 225.86 173.82 222.62"/><polyline class="cls-1" points="92.34 222.62 92.34 225.86 97.95 222.62"/><polyline class="cls-1" points="92.34 222.62 92.34 218.38 98.82 222.12 97.95 222.62"/><polyline class="cls-1" points="105.82 222.62 105.82 218.38 99.34 222.12 100.21 222.62"/><polyline class="cls-1" points="100.21 222.62 105.82 225.86 105.82 222.62"/><polyline class="cls-11" points="72.34 223.62 72.34 226.86 77.95 223.62"/><polyline class="cls-11" points="72.34 223.62 72.34 219.38 78.82 223.12 77.95 223.62"/><polyline class="cls-11" points="85.82 223.62 85.82 219.38 79.34 223.12 80.21 223.62"/><polyline class="cls-11" points="80.21 223.62 85.82 226.86 85.82 223.62"/><polyline class="cls-11" points="141.34 223.62 141.34 226.86 146.95 223.62"/><polyline class="cls-11" points="141.34 223.62 141.34 219.38 147.82 223.12 146.95 223.62"/><polyline class="cls-11" points="154.82 223.62 154.82 219.38 148.34 223.12 149.21 223.62"/><polyline class="cls-11" points="149.21 223.62 154.82 226.86 154.82 223.62"/><polyline class="cls-1" points="142.9 54.62 143 47.62 139.82 47.62"/><line class="cls-10" x1="134.21" y1="47.62" x2="131.95" y2="47.62"/><line class="cls-1" x1="126.34" y1="47.62" x2="40" y2="47.62"/><path class="cls-10" d="M165.32,568.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M159.71,568.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M157.45,568.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M151.84,568.5" transform="translate(-25.5 -520.88)"/><polyline class="cls-1" points="126.34 47.62 126.34 50.86 131.95 47.62"/><polyline class="cls-1" points="126.34 47.62 126.34 43.38 132.82 47.12 131.95 47.62"/><polyline class="cls-1" points="139.82 47.62 139.82 43.38 133.34 47.12 134.21 47.62"/><polyline class="cls-1" points="134.21 47.62 139.82 50.86 139.82 47.62"/><line class="cls-1" x1="133" y1="11.62" x2="131.95" y2="11.62"/><path class="cls-10" d="M159.71,532.5" transform="translate(-25.5 -520.88)"/><path class="cls-10" d="M165.32,532.5" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="260" y1="11.62" x2="139.82" y2="11.62"/><path class="cls-1" d="M157.45,532.5" transform="translate(-25.5 -520.88)"/><path class="cls-1" d="M151.84,532.5" transform="translate(-25.5 -520.88)"/><polyline class="cls-1" points="126.34 11.62 123 11.62 123 47.62"/><polyline class="cls-1" points="126.34 11.62 126.34 14.86 131.95 11.62"/><polyline class="cls-1" points="126.34 11.62 126.34 7.38 132.82 11.12 131.95 11.62"/><polyline class="cls-1" points="139.82 11.62 139.82 7.38 133 11.62"/><line class="cls-1" x1="133" y1="11.62" x2="134.21" y2="11.62"/><polyline class="cls-1" points="139.82 11.62 139.82 14.86 134.21 11.62"/><path class="cls-1" d="M65.5,757.5v-59s-1-12,14-13,15,13,15,13v61s-3,11-15,11S65.5,757.5,65.5,757.5Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="69" y1="187.62" x2="72" y2="187.62"/><line class="cls-1" x1="108" y1="222.62" x2="105" y2="222.62"/><line class="cls-1" x1="89" y1="187.62" x2="89" y2="222.62"/><line class="cls-1" x1="92.5" y1="222.62" x2="89.5" y2="222.62"/><line class="cls-1" x1="89.5" y1="187.62" x2="86.5" y2="187.62"/><path class="cls-1" d="M133.5,756.5v-59s4-12,15-12,15,11,15,11v62s-1,12-15,12S133.5,756.5,133.5,756.5Z" transform="translate(-25.5 -520.88)"/><path class="cls-1" d="M201.5,756.5v-59s4-12,15-12,15,11,15,11v62s-1,12-15,12S201.5,756.5,201.5,756.5Z" transform="translate(-25.5 -520.88)"/><text class="cls-12" transform="translate(42.62 192.04)">V<tspan class="cls-13" x="5.02" y="0">S</tspan><tspan x="9.5" y="0">-103</tspan></text><text class="cls-12" transform="translate(110.62 192.04)">V<tspan class="cls-13" x="5.02" y="0">S</tspan><tspan x="9.5" y="0">-102</tspan></text><path class="cls-5" d="M69.65,723.07h.69v4.81h2.31v.58h-3Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M73.68,726.65A1.25,1.25,0,0,0,75,728a2.6,2.6,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.64,1.64,0,0,1,1.6,1.83,2.33,2.33,0,0,1,0,.32Zm2.06-.5a1,1,0,0,0-1-1.14,1.16,1.16,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M78.08,723.5a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,78.08,723.5Zm-.78,5v-3.87H78v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M80,723.48v1.11h1v.54H80v2.08c0,.48.13.75.52.75a1.86,1.86,0,0,0,.41,0l0,.52a1.59,1.59,0,0,1-.62.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M85.27,726.49a1.9,1.9,0,0,1-1.93,2.06,1.84,1.84,0,0,1-1.85-2,1.89,1.89,0,0,1,1.92-2.06A1.83,1.83,0,0,1,85.27,726.49Zm-3.07,0c0,.85.49,1.49,1.17,1.49s1.18-.63,1.18-1.5c0-.66-.33-1.49-1.16-1.49S82.2,725.8,82.2,726.53Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M69.65,732.74a7.36,7.36,0,0,1,1.33-.11,2.2,2.2,0,0,1,1.56.44,1.35,1.35,0,0,1,.43,1,1.41,1.41,0,0,1-1,1.38v0a1.35,1.35,0,0,1,.79,1.09,9.19,9.19,0,0,0,.42,1.48h-.72a6.7,6.7,0,0,1-.36-1.29c-.16-.74-.45-1-1.08-1h-.66v2.34h-.69Zm.69,2.46h.71c.75,0,1.22-.41,1.22-1s-.5-1-1.24-1a3.17,3.17,0,0,0-.69.06Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M74.35,736.25a1.25,1.25,0,0,0,1.33,1.35,2.57,2.57,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.63,1.63,0,0,1,1.6,1.82,2.38,2.38,0,0,1,0,.33Zm2.06-.5a1,1,0,0,0-1-1.14,1.17,1.17,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M77.87,737.34a1.83,1.83,0,0,0,.93.28c.51,0,.75-.26.75-.58s-.2-.52-.72-.71c-.69-.25-1-.63-1-1.09a1.19,1.19,0,0,1,1.33-1.14,1.89,1.89,0,0,1,1,.24l-.17.51a1.55,1.55,0,0,0-.79-.22c-.42,0-.65.24-.65.53s.23.46.73.65c.68.26,1,.59,1,1.17s-.53,1.16-1.45,1.16a2.18,2.18,0,0,1-1.08-.26Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M81.92,733.1a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,81.92,733.1Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M83,735.24c0-.4,0-.73,0-1h.62l0,.64h0a1.4,1.4,0,0,1,1.27-.73c.54,0,1.37.32,1.37,1.65v2.31h-.7v-2.23c0-.62-.23-1.14-.9-1.14a1,1,0,0,0-.94.72,1,1,0,0,0-.05.32v2.33H83Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M89.59,738.06l-.06-.49h0a1.43,1.43,0,0,1-1.18.58A1.1,1.1,0,0,1,87.14,737c0-.94.84-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.92,1.92,0,0,0-1,.29l-.16-.46a2.4,2.4,0,0,1,1.27-.35c1.19,0,1.48.81,1.48,1.58v1.45a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.13-1.64.88a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M74.19,745.29c0-.75-.09-1.65-.08-2.32h0c-.19.63-.41,1.3-.68,2l-1,2.62h-.52l-.88-2.57c-.25-.76-.47-1.45-.62-2.09h0c0,.67-.06,1.57-.11,2.38l-.14,2.31H69.5l.38-5.39h.89l.92,2.61c.22.66.4,1.25.54,1.81h0c.14-.54.33-1.13.57-1.81l1-2.61h.89l.33,5.39h-.67Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M76.94,742.7a.44.44,0,0,1-.88,0,.44.44,0,0,1,.44-.44A.43.43,0,0,1,76.94,742.7Zm-.79,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M77.93,746.94a1.79,1.79,0,0,0,.92.28c.52,0,.76-.26.76-.58s-.2-.51-.72-.71c-.7-.24-1-.63-1-1.09a1.2,1.2,0,0,1,1.34-1.14,1.92,1.92,0,0,1,1,.24l-.18.51a1.55,1.55,0,0,0-.79-.22c-.41,0-.64.24-.64.53s.23.46.73.65c.67.26,1,.59,1,1.17s-.53,1.16-1.45,1.16a2.22,2.22,0,0,1-1.09-.26Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M82,742.68v1.11h1v.54H82v2.08c0,.48.13.75.53.75a1.75,1.75,0,0,0,.4,0l0,.52a1.69,1.69,0,0,1-.63.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M86,747.66l0-.49h0a1.42,1.42,0,0,1-1.18.58,1.1,1.1,0,0,1-1.18-1.11c0-.94.83-1.45,2.32-1.44v-.08a.8.8,0,0,0-.88-.9,1.86,1.86,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.18,0,1.47.81,1.47,1.59v1.44a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.11-1.64.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M135.65,724.07h.69v4.81h2.31v.58h-3Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M139.68,727.65A1.25,1.25,0,0,0,141,729a2.6,2.6,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.64,1.64,0,0,1,1.6,1.83,2.33,2.33,0,0,1,0,.32Zm2.06-.5a1,1,0,0,0-1-1.14,1.16,1.16,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M144.08,724.5a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,144.08,724.5Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M146,724.48v1.11h1v.54h-1v2.08c0,.48.13.75.52.75a1.86,1.86,0,0,0,.41,0l0,.52a1.59,1.59,0,0,1-.62.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M151.27,727.49a1.9,1.9,0,0,1-1.93,2.06,1.84,1.84,0,0,1-1.85-2,1.89,1.89,0,0,1,1.92-2.06A1.83,1.83,0,0,1,151.27,727.49Zm-3.07,0c0,.85.49,1.49,1.17,1.49s1.18-.63,1.18-1.5c0-.66-.33-1.49-1.16-1.49S148.2,726.8,148.2,727.53Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M135.65,733.74a7.36,7.36,0,0,1,1.33-.11,2.2,2.2,0,0,1,1.56.44,1.35,1.35,0,0,1,.43,1,1.41,1.41,0,0,1-1,1.38v0a1.35,1.35,0,0,1,.79,1.09,9.19,9.19,0,0,0,.42,1.48h-.72a6.7,6.7,0,0,1-.36-1.29c-.16-.74-.45-1-1.08-1h-.66v2.34h-.69Zm.69,2.46h.71c.75,0,1.22-.41,1.22-1s-.5-1-1.24-1a3.17,3.17,0,0,0-.69.06Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M140.35,737.25a1.25,1.25,0,0,0,1.33,1.35,2.57,2.57,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.63,1.63,0,0,1,1.6,1.82,2.38,2.38,0,0,1,0,.33Zm2.06-.5a1,1,0,0,0-1-1.14,1.17,1.17,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M143.87,738.34a1.83,1.83,0,0,0,.93.28c.51,0,.75-.26.75-.58s-.2-.52-.72-.71c-.69-.25-1-.63-1-1.09a1.19,1.19,0,0,1,1.33-1.14,1.89,1.89,0,0,1,1,.24l-.17.51a1.55,1.55,0,0,0-.79-.22c-.42,0-.65.24-.65.53s.23.46.73.65c.68.26,1,.59,1,1.17s-.53,1.16-1.45,1.16a2.18,2.18,0,0,1-1.08-.26Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M147.92,734.1a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,147.92,734.1Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M149,736.24c0-.4,0-.73,0-1h.62l0,.64h0a1.4,1.4,0,0,1,1.27-.73c.54,0,1.37.32,1.37,1.65v2.31h-.7v-2.23c0-.62-.23-1.14-.9-1.14a1,1,0,0,0-.94.72,1,1,0,0,0,0,.32v2.33H149Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M155.59,739.06l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.84-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.92,1.92,0,0,0-1,.29l-.16-.46a2.4,2.4,0,0,1,1.27-.35c1.19,0,1.48.81,1.48,1.58v1.45a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.13-1.64.88a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M136.52,747l-.56,1.7h-.72l1.83-5.39h.84l1.84,5.39H139l-.58-1.7Zm1.77-.54-.53-1.55c-.12-.35-.2-.67-.28-1h0c-.08.32-.17.64-.27,1l-.53,1.56Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M140.5,745.84c0-.4,0-.73,0-1.05h.63l0,.64h0a1.43,1.43,0,0,1,1.28-.73c.54,0,1.37.32,1.37,1.65v2.31h-.7v-2.23c0-.62-.24-1.14-.9-1.14a1,1,0,0,0-.94.72,1,1,0,0,0-.05.32v2.33h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M145.72,743.7a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,145.72,743.7Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M150.31,746.69a1.9,1.9,0,0,1-1.93,2.06,1.84,1.84,0,0,1-1.85-2,1.89,1.89,0,0,1,1.92-2.06A1.83,1.83,0,0,1,150.31,746.69Zm-3.07,0c0,.85.49,1.49,1.18,1.49s1.17-.63,1.17-1.5c0-.66-.33-1.49-1.16-1.49S147.24,746,147.24,746.73Zm1.41-3.61.77,1.14h-.54l-.46-.76h0l-.46.76h-.52l.75-1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M151.2,745.84c0-.4,0-.73,0-1.05h.62l0,.64h0a1.42,1.42,0,0,1,1.28-.73c.53,0,1.36.32,1.36,1.65v2.31h-.7v-2.23c0-.62-.23-1.14-.89-1.14a1,1,0,0,0-1,.72,1,1,0,0,0,0,.32v2.33h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M156.42,743.7a.41.41,0,0,1-.44.43.42.42,0,0,1-.43-.43.44.44,0,0,1,.44-.44A.42.42,0,0,1,156.42,743.7Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M160.27,748.52a2.68,2.68,0,0,1-1.11.22,1.84,1.84,0,0,1-1.93-2,2,2,0,0,1,2.08-2.06,2.33,2.33,0,0,1,1,.2l-.16.54a1.74,1.74,0,0,0-.82-.18,1.46,1.46,0,0,0,0,2.91,2,2,0,0,0,.86-.19Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M163.24,748.66l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.83-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.9,1.9,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.19,0,1.47.81,1.47,1.59v1.44a5.18,5.18,0,0,0,.07.93Zm-.11-2c-.76,0-1.63.11-1.63.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.93-.65.57.57,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><text class="cls-12" transform="translate(177.62 191.04)">V<tspan class="cls-13" x="5.02" y="0">S</tspan><tspan x="9.5" y="0">-101</tspan></text><path class="cls-5" d="M203.65,723.07h.69v4.81h2.31v.58h-3Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M207.68,726.65A1.25,1.25,0,0,0,209,728a2.6,2.6,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.64,1.64,0,0,1,1.6,1.83,2.33,2.33,0,0,1,0,.32Zm2.06-.5a1,1,0,0,0-1-1.14,1.16,1.16,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M212.08,723.5a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,212.08,723.5Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M214,723.48v1.11h1v.54h-1v2.08c0,.48.13.75.52.75a1.86,1.86,0,0,0,.41,0l0,.52a1.59,1.59,0,0,1-.62.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M219.27,726.49a1.9,1.9,0,0,1-1.93,2.06,1.84,1.84,0,0,1-1.85-2,1.89,1.89,0,0,1,1.92-2.06A1.83,1.83,0,0,1,219.27,726.49Zm-3.07,0c0,.85.49,1.49,1.17,1.49s1.18-.63,1.18-1.5c0-.66-.33-1.49-1.16-1.49S216.2,725.8,216.2,726.53Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M203.65,732.74a7.36,7.36,0,0,1,1.33-.11,2.2,2.2,0,0,1,1.56.44,1.35,1.35,0,0,1,.43,1,1.41,1.41,0,0,1-1,1.38v0a1.35,1.35,0,0,1,.79,1.09,9.19,9.19,0,0,0,.42,1.48h-.72a6.7,6.7,0,0,1-.36-1.29c-.16-.74-.45-1-1.08-1h-.66v2.34h-.69Zm.69,2.46h.71c.75,0,1.22-.41,1.22-1s-.5-1-1.24-1a3.17,3.17,0,0,0-.69.06Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M208.35,736.25a1.25,1.25,0,0,0,1.33,1.35,2.57,2.57,0,0,0,1.07-.2l.12.5a3.17,3.17,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-1.95,1.88,1.88,0,0,1,1.81-2.09,1.63,1.63,0,0,1,1.6,1.82,2.38,2.38,0,0,1,0,.33Zm2.06-.5a1,1,0,0,0-1-1.14,1.17,1.17,0,0,0-1.08,1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M211.87,737.34a1.83,1.83,0,0,0,.93.28c.51,0,.75-.26.75-.58s-.2-.52-.72-.71c-.69-.25-1-.63-1-1.09a1.19,1.19,0,0,1,1.33-1.14,1.89,1.89,0,0,1,1,.24l-.17.51a1.55,1.55,0,0,0-.79-.22c-.42,0-.65.24-.65.53s.23.46.73.65c.68.26,1,.59,1,1.17s-.53,1.16-1.45,1.16a2.18,2.18,0,0,1-1.08-.26Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M215.92,733.1a.44.44,0,0,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,215.92,733.1Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M217,735.24c0-.4,0-.73,0-1h.62l0,.64h0a1.4,1.4,0,0,1,1.27-.73c.54,0,1.37.32,1.37,1.65v2.31h-.7v-2.23c0-.62-.23-1.14-.9-1.14a1,1,0,0,0-.94.72,1,1,0,0,0,0,.32v2.33H217Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M223.59,738.06l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.84-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.92,1.92,0,0,0-1,.29l-.16-.46a2.4,2.4,0,0,1,1.27-.35c1.19,0,1.48.81,1.48,1.58v1.45a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.13-1.64.88a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M207.41,747.48a3.35,3.35,0,0,1-1.42.26,2.52,2.52,0,0,1-2.66-2.73,2.68,2.68,0,0,1,2.81-2.83,3,3,0,0,1,1.28.24l-.17.57a2.48,2.48,0,0,0-1.08-.22,2,2,0,0,0-2.11,2.22,2,2,0,0,0,2.07,2.17,2.72,2.72,0,0,0,1.14-.23Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M210.35,747.66l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.84-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.92,1.92,0,0,0-1,.29l-.16-.46a2.41,2.41,0,0,1,1.28-.35c1.18,0,1.47.81,1.47,1.59v1.44a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.11-1.64.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M212.88,742.68v1.11h1v.54h-1v2.08c0,.48.14.75.53.75a1.75,1.75,0,0,0,.4,0l0,.52a1.65,1.65,0,0,1-.63.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M215.46,742.7a.41.41,0,0,1-.44.43.42.42,0,0,1-.43-.43.44.44,0,0,1,.44-.44A.42.42,0,0,1,215.46,742.7Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M220.05,745.69a1.89,1.89,0,0,1-1.92,2.06,1.84,1.84,0,0,1-1.86-2,1.89,1.89,0,0,1,1.92-2.06A1.83,1.83,0,0,1,220.05,745.69Zm-3.07,0c0,.85.49,1.49,1.18,1.49s1.17-.63,1.17-1.5c0-.66-.32-1.49-1.16-1.49S217,745,217,745.73Zm1.42-3.61.77,1.14h-.55l-.46-.76h0l-.46.76h-.52l.75-1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M220.94,744.84c0-.4,0-.73,0-1.05h.63l0,.64h0a1.42,1.42,0,0,1,1.28-.73c.54,0,1.37.32,1.37,1.65v2.31h-.71v-2.23c0-.62-.23-1.14-.89-1.14a1,1,0,0,0-.94.72.77.77,0,0,0,0,.32v2.33h-.71Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M226.17,742.7a.42.42,0,0,1-.45.43.41.41,0,0,1-.42-.43.43.43,0,0,1,.44-.44A.42.42,0,0,1,226.17,742.7Zm-.79,5v-3.87h.71v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M230,747.52a2.68,2.68,0,0,1-1.11.22,1.83,1.83,0,0,1-1.92-2,2,2,0,0,1,2.07-2.06,2.29,2.29,0,0,1,1,.2l-.16.54a1.71,1.71,0,0,0-.82-.18,1.34,1.34,0,0,0-1.36,1.46,1.32,1.32,0,0,0,1.34,1.45,2,2,0,0,0,.86-.19Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M233,747.66l0-.49h0a1.42,1.42,0,0,1-1.18.58,1.1,1.1,0,0,1-1.18-1.11c0-.94.83-1.45,2.32-1.44v-.08a.8.8,0,0,0-.88-.9,1.86,1.86,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.18,0,1.47.81,1.47,1.59v1.44a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.11-1.64.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="138" y1="222.62" x2="142" y2="222.62"/><line class="cls-1" x1="155.5" y1="222.62" x2="159.5" y2="222.62"/><line class="cls-1" x1="173.5" y1="222.62" x2="177.5" y2="222.62"/><line class="cls-1" x1="137.5" y1="187.62" x2="141.5" y2="187.62"/><polyline class="cls-1" points="154.5 187.62 158.5 187.62 158.02 222.62"/><polyline class="cls-1" points="210.34 187.62 210.34 190.86 215.95 187.62"/><polyline class="cls-1" points="210.34 187.62 210.34 183.38 216.82 187.12 215.95 187.62"/><polyline class="cls-1" points="223.82 187.62 223.82 183.38 217.34 187.12 218.21 187.62"/><polyline class="cls-1" points="218.21 187.62 223.82 190.86 223.82 187.62"/><polyline class="cls-1" points="249.34 130.62 249.34 133.86 254.95 130.62"/><polyline class="cls-1" points="249.34 130.62 249.34 126.38 255.82 130.12 254.95 130.62"/><polyline class="cls-1" points="262.82 130.62 262.82 126.38 256.34 130.12 257.21 130.62"/><polyline class="cls-1" points="257.21 130.62 262.82 133.86 262.82 130.62"/><polyline class="cls-1" points="229.34 222.62 229.34 225.86 234.95 222.62"/><polyline class="cls-1" points="229.34 222.62 229.34 218.38 235.82 222.12 234.95 222.62"/><polyline class="cls-1" points="242.82 222.62 242.82 218.38 236.34 222.12 237.21 222.62"/><polyline class="cls-1" points="237.21 222.62 242.82 225.86 242.82 222.62"/><polyline class="cls-14" points="274.5 130.62 274.5 133.86 282.83 130.62"/><polyline class="cls-14" points="274.5 130.62 274.5 126.38 284.11 130.12 282.83 130.62"/><polyline class="cls-14" points="294.5 130.62 294.5 126.38 284.89 130.12 286.17 130.62"/><polyline class="cls-14" points="286.17 130.62 294.5 133.86 294.5 130.62"/><polyline class="cls-1" points="295.58 211.86 298.82 211.86 295.58 206.25"/><polyline class="cls-1" points="295.58 211.86 291.34 211.86 295.08 205.38 295.58 206.25"/><polyline class="cls-1" points="295.58 198.38 291.34 198.38 295.08 204.86 295.58 203.99"/><polyline class="cls-1" points="295.58 203.99 298.82 198.38 295.58 198.38"/><polyline class="cls-1" points="270.58 167.86 273.82 167.86 270.58 162.25"/><polyline class="cls-1" points="270.58 167.86 266.34 167.86 270.08 161.38 270.58 162.25"/><polyline class="cls-1" points="270.58 154.38 266.34 154.38 270.08 160.86 270.58 159.99"/><polyline class="cls-1" points="270.58 159.99 273.82 154.38 270.58 154.38"/><polyline class="cls-1" points="274.34 222.62 274.34 225.86 279.95 222.62"/><polyline class="cls-1" points="266 222.62 274.34 222.62 274.34 218.38 280.82 222.12 279.95 222.62"/><polyline class="cls-1" points="287.82 222.62 287.82 218.38 281.34 222.12 282.21 222.62"/><polyline class="cls-1" points="282.21 222.62 287.82 225.86 287.82 222.62 305 222.62"/><polyline class="cls-1" points="350.66 222.62 350.66 225.86 345.05 222.62"/><polyline class="cls-1" points="334 129.62 354 129.62 354.5 222.62 350.66 222.62 350.66 218.38 344.18 222.12 345.05 222.62"/><polyline class="cls-1" points="337.18 222.62 337.18 218.38 343.66 222.12 342.79 222.62"/><polyline class="cls-1" points="342.79 222.62 337.18 225.86 337.18 222.62 320 222.62"/><polyline class="cls-11" points="210.34 223.62 210.34 226.86 215.95 223.62"/><polyline class="cls-11" points="210.34 223.62 210.34 219.38 216.82 223.12 215.95 223.62"/><polyline class="cls-11" points="223.82 223.62 223.82 219.38 217.34 223.12 218.21 223.62"/><polyline class="cls-11" points="218.21 223.62 223.82 226.86 223.82 223.62"/><line class="cls-1" x1="207" y1="222.62" x2="211" y2="222.62"/><line class="cls-1" x1="224.5" y1="222.62" x2="228.5" y2="222.62"/><line class="cls-1" x1="242.5" y1="222.62" x2="246.5" y2="222.62"/><line class="cls-1" x1="206.5" y1="187.62" x2="210.5" y2="187.62"/><polyline class="cls-1" points="223.5 187.62 227.5 187.62 227.02 222.62"/><path class="cls-5" d="M276.37,742.77h2.9v.58h-2.21v1.8h2v.57h-2v2.44h-.69Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M281.29,743.36h-1.64v-.59h4v.59H282v4.8h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M285.44,745.74v.52h-2v-.52Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M277.65,753.22h0l-.9.49-.14-.54,1.14-.61h.6v5.2h-.68Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M283.68,755.11c0,1.76-.66,2.74-1.81,2.74s-1.7-1-1.72-2.67.75-2.71,1.81-2.71S283.68,753.45,283.68,755.11Zm-2.82.08c0,1.35.41,2.11,1.05,2.11s1.06-.84,1.06-2.16-.32-2.12-1.05-2.12S280.86,753.77,280.86,755.19Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M284.5,757a2.31,2.31,0,0,0,1.15.33c.9,0,1.18-.58,1.17-1,0-.73-.66-1-1.34-1h-.39v-.52h.39c.51,0,1.16-.27,1.16-.88,0-.42-.27-.79-.91-.79a1.89,1.89,0,0,0-1,.35l-.19-.52a2.49,2.49,0,0,1,1.36-.4c1,0,1.49.61,1.49,1.24a1.29,1.29,0,0,1-1,1.23h0a1.36,1.36,0,0,1,1.16,1.34c0,.83-.65,1.56-1.9,1.56a2.74,2.74,0,0,1-1.35-.35Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M336.37,742.77h2.9v.58h-2.21v1.8h2v.57h-2v2.44h-.69Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M341.29,743.36h-1.64v-.59h4v.59H342v4.8h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M345.44,745.74v.52h-2v-.52Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M337.65,753.22h0l-.9.49-.14-.54,1.14-.61h.6v5.2h-.68Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M343.68,755.11c0,1.76-.66,2.74-1.81,2.74s-1.7-1-1.72-2.67.75-2.71,1.81-2.71S343.68,753.45,343.68,755.11Zm-2.82.08c0,1.35.41,2.11,1.05,2.11s1.06-.84,1.06-2.16-.32-2.12-1.05-2.12S340.86,753.77,340.86,755.19Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M344.33,757.76v-.43l.55-.54c1.33-1.26,1.93-1.93,1.93-2.72a.92.92,0,0,0-1-1,1.76,1.76,0,0,0-1.1.44l-.22-.5a2.3,2.3,0,0,1,1.47-.53,1.46,1.46,0,0,1,1.59,1.52c0,1-.7,1.73-1.79,2.79l-.42.38v0h2.34v.58Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="294.7" y1="222.62" x2="294.7" y2="211.86"/><polyline class="cls-1" points="304 196.62 295 196.62 295 198.38"/><polyline class="cls-1" points="333.76 211.86 330.52 211.86 333.76 206.25"/><polyline class="cls-1" points="333.76 211.86 338 211.86 334.26 205.38 333.76 206.25"/><polyline class="cls-1" points="333.76 198.38 338 198.38 334.26 204.86 333.76 203.99"/><polyline class="cls-1" points="333.76 203.99 330.52 198.38 333.76 198.38"/><line class="cls-1" x1="334.64" y1="222.62" x2="334.64" y2="211.86"/><polyline class="cls-1" points="325.34 196.62 334.34 196.62 334.34 198.38"/><ellipse class="cls-15" cx="314.5" cy="196.12" rx="10.5" ry="9.5"/><text class="cls-16" transform="translate(296.86 183.04)">P<tspan class="cls-17" x="4.06" y="0">dSH-108</tspan></text><path class="cls-1" d="M330.5,667.5h29l-4-8s-1,2-10,4-10-4-10-4Z" transform="translate(-25.5 -520.88)"/><path class="cls-1" d="M360.5,650.5a12.31,12.31,0,0,1-5.16,9.81,16.74,16.74,0,0,1-20.25-.45,12.19,12.19,0,0,1-4.59-9.36c0-7.18,6.72-13,15-13S360.5,643.32,360.5,650.5Z" transform="translate(-25.5 -520.88)"/><text class="cls-18" transform="translate(310.58 133.18)"><tspan class="cls-19">B</tspan><tspan x="4.38" y="0">-101</tspan></text><line class="cls-14" x1="285" y1="112.62" x2="285" y2="129.62"/><line class="cls-14" x1="279" y1="112.62" x2="290" y2="112.62"/><line class="cls-14" x1="282" y1="108.62" x2="279" y2="112.62"/><line class="cls-14" x1="288" y1="108.62" x2="290" y2="112.62"/><line class="cls-14" x1="282" y1="108.62" x2="288" y2="108.62"/><rect class="cls-14" x="280" y="98.62" width="10" height="10"/><text class="cls-18" transform="translate(283.57 106.54)">S</text><line class="cls-1" x1="285.5" y1="98.12" x2="285.5" y2="95.12"/><polyline class="cls-14" points="299.37 66.49 296.13 66.49 299.37 74.82"/><polyline class="cls-14" points="299.37 66.49 303.61 66.49 299.87 76.11 299.37 74.82"/><polyline class="cls-14" points="299.37 86.49 303.61 86.49 299.87 76.88 299.37 78.16"/><polyline class="cls-14" points="299.37 78.16 296.13 86.49 299.37 86.49"/><line class="cls-14" x1="317.37" y1="76.99" x2="300.37" y2="76.99"/><line class="cls-14" x1="317.37" y1="70.99" x2="317.37" y2="81.99"/><line class="cls-14" x1="321.37" y1="73.99" x2="317.37" y2="70.99"/><line class="cls-14" x1="321.37" y1="79.99" x2="317.37" y2="81.99"/><line class="cls-14" x1="321.37" y1="73.99" x2="321.37" y2="79.99"/><rect class="cls-14" x="346.87" y="592.87" width="10" height="10" transform="translate(924.24 -274.88) rotate(90)"/><text class="cls-18" transform="translate(323.45 75.56) rotate(90)">S</text><line class="cls-1" x1="331.87" y1="77.49" x2="334.87" y2="77.49"/><line class="cls-1" x1="294" y1="130.62" x2="305" y2="130.62"/><line class="cls-1" x1="300" y1="85.62" x2="300" y2="130.62"/><line class="cls-20" x1="339" y1="77.62" x2="346" y2="77.62"/><line class="cls-20" x1="350" y1="77.62" x2="354" y2="77.62"/><line class="cls-20" x1="354" y1="80.62" x2="354" y2="86.62"/><line class="cls-20" x1="354" y1="91.62" x2="354" y2="94.62"/><line class="cls-20" x1="350" y1="95.62" x2="341" y2="95.62"/><line class="cls-20" x1="335" y1="95.62" x2="329" y2="95.62"/><line class="cls-20" x1="322" y1="95.62" x2="312" y2="95.62"/><line class="cls-20" x1="309.5" y1="95.62" x2="299.5" y2="95.62"/><line class="cls-20" x1="296.5" y1="95.62" x2="286.5" y2="95.62"/><line class="cls-1" x1="231" y1="112.62" x2="231" y2="130.62"/><line class="cls-1" x1="231" y1="130.62" x2="249" y2="130.62"/><line class="cls-1" x1="274" y1="130.62" x2="263" y2="130.62"/><line class="cls-1" x1="271" y1="130.62" x2="271" y2="154.62"/><line class="cls-1" x1="271" y1="167.62" x2="271" y2="186.62"/><line class="cls-1" x1="266" y1="178.62" x2="270" y2="186.62"/><line class="cls-1" x1="276" y1="178.62" x2="270" y2="186.62"/><path class="cls-5" d="M265.49,687a7.43,7.43,0,0,1,1.33-.11,2.2,2.2,0,0,1,1.51.45,1.44,1.44,0,0,1,.48,1.13,1.61,1.61,0,0,1-.42,1.15,2.25,2.25,0,0,1-1.65.59,2.43,2.43,0,0,1-.56,0v2.16h-.69Zm.69,2.59a2.35,2.35,0,0,0,.58.06c.84,0,1.35-.41,1.35-1.15s-.5-1.06-1.27-1.06a3.05,3.05,0,0,0-.66.06Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M271.65,692.28l0-.49h0a1.42,1.42,0,0,1-1.18.58,1.1,1.1,0,0,1-1.18-1.11c0-.94.83-1.45,2.32-1.44v-.08a.8.8,0,0,0-.88-.9,1.86,1.86,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.18,0,1.47.81,1.47,1.59v1.44a6.41,6.41,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.12-1.64.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M273.37,689.62c0-.46,0-.85,0-1.21H274l0,.76h0a1.16,1.16,0,0,1,1.07-.85.64.64,0,0,1,.2,0V689a.9.9,0,0,0-.24,0,1,1,0,0,0-.94.9,1.66,1.66,0,0,0,0,.33v2.06h-.69Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M278.09,692.28l-.06-.49h0a1.44,1.44,0,0,1-1.19.58,1.1,1.1,0,0,1-1.18-1.11c0-.94.83-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.9,1.9,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.18,0,1.47.81,1.47,1.59v1.44a5.18,5.18,0,0,0,.07.93Zm-.11-2c-.77,0-1.64.12-1.64.87a.63.63,0,0,0,.67.67,1,1,0,0,0,.93-.65.57.57,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M283.64,692.28l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.83-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.9,1.9,0,0,0-1,.29l-.16-.46a2.4,2.4,0,0,1,1.27-.35c1.19,0,1.47.81,1.47,1.59v1.44a5.18,5.18,0,0,0,.07.93Zm-.11-2c-.76,0-1.63.12-1.63.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.93-.65.57.57,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M269.25,701.7a3.35,3.35,0,0,1-1.42.26,2.52,2.52,0,0,1-2.66-2.73A2.68,2.68,0,0,1,268,696.4a3,3,0,0,1,1.28.24l-.17.57A2.48,2.48,0,0,0,268,697a2,2,0,0,0-2.11,2.22,2,2,0,0,0,2.07,2.17,2.72,2.72,0,0,0,1.14-.23Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M270.41,700.07a1.24,1.24,0,0,0,1.32,1.35,2.62,2.62,0,0,0,1.08-.2l.12.5a3.21,3.21,0,0,1-1.29.24,1.79,1.79,0,0,1-1.9-2,1.87,1.87,0,0,1,1.81-2.09,1.64,1.64,0,0,1,1.6,1.83c0,.14,0,.25,0,.32Zm2.06-.5a1,1,0,0,0-1-1.14,1.15,1.15,0,0,0-1.07,1.14Zm.17-3.23-1,1.14h-.5l.7-1.14Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M274,696.2h.71v5.68H274Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M279.15,700.82c0,.4,0,.76,0,1.06h-.62l0-.63h0a1.45,1.45,0,0,1-1.28.72c-.61,0-1.33-.34-1.33-1.7V698h.7v2.14c0,.74.22,1.23.86,1.23a1,1,0,0,0,1-1V698h.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M280.32,696.2h.7v5.68h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M284.35,701.88l-.06-.49h0a1.43,1.43,0,0,1-1.18.58,1.1,1.1,0,0,1-1.19-1.11c0-.94.83-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.92,1.92,0,0,0-1,.29l-.16-.46a2.4,2.4,0,0,1,1.27-.35c1.19,0,1.48.81,1.48,1.58V701a5.25,5.25,0,0,0,.06.93Zm-.1-2c-.77,0-1.64.12-1.64.87a.62.62,0,0,0,.66.67,1,1,0,0,0,.94-.65.85.85,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M269.25,711.3a3.35,3.35,0,0,1-1.42.26,2.52,2.52,0,0,1-2.66-2.73A2.68,2.68,0,0,1,268,706a3,3,0,0,1,1.28.24l-.17.57a2.48,2.48,0,0,0-1.08-.22,2,2,0,0,0-2.11,2.22A2,2,0,0,0,268,711a2.72,2.72,0,0,0,1.14-.23Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M270.08,708.82c0-.46,0-.85,0-1.21h.61l0,.76h0a1.17,1.17,0,0,1,1.07-.85.6.6,0,0,1,.2,0v.66a.86.86,0,0,0-.24,0,1,1,0,0,0-.94.9,1.69,1.69,0,0,0,0,.33v2.06h-.7Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M274.16,705.94l-1,1.14h-.5l.7-1.14Zm-1.43,5.54v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M275.45,706.5v1.11h1v.54h-1v2.08c0,.48.13.75.52.75a1.86,1.86,0,0,0,.41,0l0,.52a1.59,1.59,0,0,1-.62.1,1,1,0,0,1-.76-.3,1.41,1.41,0,0,1-.27-1v-2.11h-.6v-.54h.6v-.93Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M278,706.52a.44.44,0,1,1-.87,0,.43.43,0,0,1,.44-.44A.42.42,0,0,1,278,706.52Zm-.78,5v-3.87h.7v3.87Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M281.88,711.34a2.72,2.72,0,0,1-1.11.22,1.84,1.84,0,0,1-1.93-2,2,2,0,0,1,2.08-2.06,2.27,2.27,0,0,1,1,.2l-.16.54a1.67,1.67,0,0,0-.81-.18,1.46,1.46,0,0,0,0,2.91,2,2,0,0,0,.87-.19Z" transform="translate(-25.5 -520.88)"/><path class="cls-5" d="M284.85,711.48l-.06-.49h0a1.45,1.45,0,0,1-1.19.58,1.1,1.1,0,0,1-1.18-1.11c0-.94.83-1.45,2.33-1.44v-.08a.8.8,0,0,0-.88-.9,1.9,1.9,0,0,0-1,.29l-.16-.46a2.37,2.37,0,0,1,1.27-.35c1.18,0,1.47.81,1.47,1.59v1.44a5.18,5.18,0,0,0,.07.93Zm-.11-2c-.77,0-1.64.12-1.64.87a.63.63,0,0,0,.67.67,1,1,0,0,0,.93-.65.57.57,0,0,0,0-.22Z" transform="translate(-25.5 -520.88)"/><line class="cls-1" x1="299.5" y1="66.12" x2="299.5" y2="46.12"/><line class="cls-1" x1="295" y1="39.62" x2="299" y2="46.62"/><line class="cls-1" x1="304" y1="39.62" x2="299" y2="47.62"/><text class="cls-18" transform="translate(275.74 33.82)">Da caixa <tspan class="cls-21" x="29.45" y="0">d</tspan><tspan class="cls-22" x="34.01" y="0">’</tspan><tspan x="35.52" y="0">água</tspan></text><line class="cls-1" x1="69.5" y1="223.12" x2="72.5" y2="223.12"/><line class="cls-1" x1="86.5" y1="222.62" x2="89.5" y2="222.62"/></svg>`
    },
    {
        pergunta: `Qual a função do SCTAER?`,
        resposta: `Sistema de controle de temperatura da água e enchimento rápido. <br><br>
        •	Encher rapidamente o tanque do moderador.<br>
        •	Recircular a água com aquecimento ou resfriamento.<br>
        •	Ajustar a temperatura da água a um valor pré-determinado.<br>
        `
    },
    {
        pergunta: `Esquematize o SCTAER.`,
        resposta: `<img id="branco" class="desenho-questao" src="./imagens/questoes/SCATAER.svg" alt="">`
    },
    {
        pergunta: `Forneça os seguintes dados do SCTAER: <br>
        a)	Volume do Tanque do Moderador TQ-201 (total).<br>
        b)	Volume do Tanque de Estocagem TQ-202.<br>
        c)	Nível máximo no TQ-202. Qual a razão deste limite?<br>
        `,
        resposta: `a.	Volume do Tanque do moderador = 7420 m3. <br><br>
        b.	Volume do Tanque de Estocagem = 21800 m3. <br><br>
        c.	Nível máximo de água no Tanque de Estocagem = 10 m3. Este limite garante que não haverá obstrução das linhas de drenagem rápida do Tanque do moderador durante o SCRAM de válvulas. (As tubulações de drenagem rápida penetram a meia altura deste tanque) e, garante também, nível suficiente para a aspiração das bombas.
        `
    },
    {
        pergunta: `Qual a função da água no Tanque do moderador?`,
        resposta: `Em primeiro lugar como moderador 
        em segundo lugar como blindagem.
        `
    },
    {
        pergunta: `Qual a velocidade do enchimento rápido e lento do Tanque do Moderador? Como estes enchimentos são feitos?`,
        resposta: `V = rápida =9,5cm/min. <br>
        O enchimento é feito com uma das bombas de enchimento rápido (B-202A ou B-202B).<br>
        V = lenta 2,6cm/min. <br>
        O enchimento é feito com uma das bombas de enchimento lento (B-201A ou B-201B).
        `
    },
    {
        pergunta: `Qual a função do STAM?`,
        resposta: `Sistema de Tratamento da Água de Moderação. <br>
        Ele efetua o tratamento da água do moderador para garantir a qualidade da água a um nível similar ao da água proveniente do STAA. É um sistema paralelo ao SCTAER utilizando as mesmas bombas B-202 A/B
        `
    },
    {
        pergunta: `Quais são os componentes do STAM?`,
        resposta: `•	Filtro de carvão ativo do STAM (FT-201). <br>
        •	Leito misto de resinas (VS-201). <br>
        •	Filtro cartucho (FT-202).
        `
    },
    {
        pergunta: `Qual a função do SRA?`,
        resposta: `O Sistema de Recirculação de Água é responsável pela recirculação da água de moderação durante as experiências e, pelo enchimento lento do Tanque Moderador (TQ-201) a partir do Tanque de Estocagem (TQ-202).`
    },
    {
        pergunta: `Qual a função do SAG?`,
        resposta: `Produzir água gelada para ser utilizada no condicionamento de ar da Célula Crítica, nos experimentos de coeficientes de temperatura e para ajustar a temperatura do moderador a um valor apropriado para os experimentos (normalmente em 21°C).`
    },
    {
        pergunta: `Relacione os equipamentos e sistemas que são alimentados com água gelada em ordem de importância para operação do Reator.`,
        resposta: `•	Trocador de calor TC-201 do SCTAER. <br>
        •	Ar condicionado da célula crítica- sistema de recirculação.<br>
        •	Ar condicionado da célula crítica- sistema de insuflamento.<br>
        `
    },
    {
        pergunta: `Qual a função do SDB?`,
        resposta: `Ele fornece solução preparada de ácido bórico em bateladas para a água do moderador.`
    },
    {
        pergunta: `Qual a função do SLE quais são os seus principais componentes?`,
        resposta: `Sistema de Limpeza de Equipamentos. <br>
        Efetua limpeza do Tanque do moderador e tubulações associadas, após a utilização da solução de ácido bórico. <br><br>
        Aquecedor TC-203; Bomba Centrífuga de Recalque B-203; mangueira, esguicho e tubulações apropriadas.
        `
    },
    {
        pergunta: `Qual a função do SAC?`,
        resposta: `Fornecer ar seco para os instrumentos do Reator IPEN/MB-01 que funcionam com ar comprimido.`
    },
    {
        pergunta: `Quais os componentes do SAC?`,
        resposta: `•	2 compressores CP-151 A/B do tipo alternativo de múltiplo estágio, não lubrificado, com pós resfriadores de água. <br><br>
        •	1 tanque acumulador (VS-152) que armazena e também amortece oscilações de pressão. <br><br>
        •	2 unidades de secadores (SA-151 A/B) do tipo refrigeração, compostos por compressores herméticos, condensadores e evaporador. <br><br>
        •	1 tanque de serviço (VS-151) que serve como vaso pulmão para os consumidores finais. <br><br>
        •	Além destes componentes principais existem acessórios tais como: <br><br>
        -pressostatos.<br>
        -manômetros<br>
        -solenóides<br>
        -válvulas<br>
        -termostatos
        `
    },
    {
        pergunta: `Quais são os subsistemas componentes do sistema de Ar e Ventilação do edifício de Apoio Quais suas funções e os locais atendidos por este subsistema?`,
        resposta: `Subsistema da sala de controle S3 <br>
        Subsistema da Área de laboratório e oficina S2/S4). <br><br>
        
        S3: manter as condições ideais para os operadores controlarem a planta com segurança e manter a integridade dos equipamentos de controle, especialmente os instrumentos de medição. <br><br>
        
        S2/S4: É composto de duas unidades, do tipo “self contained” operando em série e com capacidade combinada efetiva de 112,5 kW. Estas unidades insuflam 9900 m3/h de ar nas várias salas a que se destinam estes subsistemas.
        As unidades de resfriamento têm seus condensadores resfriados pela água fria proveniente das torres de resfriamento do Sistema de água gelada. Para aquecimento do ar no inverno, foram incorporados às unidades dois aquecedores elétricos (um de cada unidade).
        Neste sistema não há recirculação; todo ar insuflado será removido por um dos dois ventiladores (EX-301A/B) com objetivo de evitar recircular gases tóxicos.
        Este ar exaurido se junta com o do sistema de exaustão S1 e vão para a chaminé do Reator IPEN/MB-01.
        `
    },
    {
        pergunta: `Qual a função e como é constituído o SDCC?`,
        resposta: `Sistema de drenagem da célula crítica. É utilizado para coletar, armazenar e recircular todos os efluentes líquidos gerados na célula crítica e, posteriormente, viabilizar a liberação adequada conforme preconizado nas normas e regulamentos internos. <br>
        É um sistema composto pelos seguintes equipamentos:<br><br>
        •	Tanque de decaimento (TQ-203), localizado no 2º subsolo da célula crítica.<br>
        •	Rede de drenos.<br>
        •	Poços de coleta.<br>
        •	Bomba de recalque B-205.<br><br>
        Os rejeitos líquidos da célula crítica, originados ou no TQ-202 ou no TQ-201 por qualidade inferior a desejada ou contaminada, ou no SDB ou no SLE, ou por condensação no sistema de recirculação de ar condicionado são coletados no TQ-203.
        `
    },
    {
        pergunta: `Qual a função do SDEA?`,
        resposta: `Sistema de drenagem do edifício de apoio. <br>
        Este sistema está localizado em um abrigo subterrâneo fora do prédio do Reator.<br>
        Ele retém temporariamente efluentes líquidos gerados em alguns dos locais do edifício de apoio onde há possibilidade de contaminação (sala de descontaminação, oficina, laboratório de medidas).<br><br>
        Os efluentes caminham por gravidade até o tanque de retenção (TQ-01). A liberação é feita por recalque para a rede de esgoto sanitário após análise e autorização do Departamento de monitoração ambiental do IPEN. No caso de não ser autorizado o descarte para rede de esgoto é colocado em recipientes apropriadas e encaminhadas para a Gerência de Rejeito Radiológico (GRR) do IPEN.
        `
    },
    {
        pergunta: `Quais são os principais métodos usados na extinção de um incêndio?`,
        resposta: `-RESFRIAMENTO:	quando se retira o calor do material que está queimando; <br><br>
        -ABAFAMENTO:	quando se retira o Comburente (oxigênio);<br><br>
        -ISOLAMENTO:	quando se retira o Combustível.
        `
    },
    {
        pergunta: `Quais são as classes de incêndio? Explique e dê exemplos.`,
        resposta: `Os incêndios podem ser classificados em 4 tipos: <br><br>
        -Classe A: ocorre em materiais sólidos ou fibrosos. Papel, madeira, tecidos, etc.<br>
        -Classe B: ocorre em materiais líquidos inflamáveis. Gasolina, querosene, cera, tinta, etc;<br>
        -Classe C: ocorre em equipamentos elétricos energizados. Máquinas, motores, painéis elétricos, etc.<br>
        -Classe D: ocorre em materiais pirofóricos. Magnésio, potássio, alumínio em pó, zinco, etc.<br>
        `
    },
    {
        pergunta: `Dê a definição de agentes extintores e cite os mais conhecidos (mínimo dois).`,
        resposta: `Agentes extintores são todas as substâncias químicas sólidas, líquidas ou gasosas utilizadas na extinção de um incêndio e os mais conhecidos são: <br><br>
        -Água - nas formas de jato compacto, chuveiro, neblina ou vapor;<br>
        -Espuma química ou mecânica;<br>
        -Pó químico à base de bicarbonato de sódio;<br>
        -Gás carbônico - CO2;<br>
        -Hidrocarbonetos halogenados ou halon.<br>
        `
    },
    {
        pergunta: `Quais os sistemas de combate a incêndio que a Unidade Crítica IPEN/MB-01 dispõe?`,
        resposta: `-Hidrantes; <br>
        -Extintores Portáteis; <br>
        -Sistema Fixo de CO2
        `
    },
    {
        pergunta: `Quantos hidrantes existem na Unidade Crítica IPEN/MB-01 e como são abastecidos?`,
        resposta: `A unidade Crítica IPEN/MB-01 é atendida por 4 hidrantes externos.`
    },
    {
        pergunta: `Quais os tipos de extintores Portáteis que protegem a unidade Crítica IPEN/MB-01?`,
        resposta: `-Extintores de Água Pressurizada (excelente para classe A). <br>
        -Extintor de Pó Químico Seco (excelente para classe B e C). <br>
        -Extintores de CO2 (excelente para classe B e C).
        `
    },
    {
        pergunta: `Qual a finalidade do sistema Fixo de CO2 na Unidade Crítica IPEN/MB-01? Cite três áreas atendidas por este sistema.`,
        resposta: `A finalidade deste sistema é o combate automático de incêndio. <br>
        Áreas atendidas pelo Sistema Fixo de CO2:<br><br>
        -Sala de Eletrotécnica.<br>
        -Sala de Baterias 1 e 2.<br>
        -Galeria de Cabos.<br>
        -2° subsolo da Célula Crítica: Salas dos Filtros de Ar do Sistema de Recirculação.<br>
        -1° subsolo da Célula Crítica Nível 769,02m: Bombas e Aquecedores.<br>
        -Célula Crítica Nível 773,25m: Mecanismos das Barras de Controle e Bandejas.<br>
        -Edifício Auxiliar: Térreo e 1° Andar.<br>
        -Salas dos Filtros de Ar: Insuflamento e Exaustão.<br>
        `
    },
    {
        pergunta: `Como é constituído o Sistema Fixo de CO2?`,
        resposta: `-Duas baterias de 13 cilindros de CO2 cada, sendo uma principal e outra reserva. <br>
        -Elementos de comando para acionamento automático e manual destes cilindros.<br>
        -Painel de controle.<br>
        -Quadros sinótico.
        `
    },
    {
        pergunta: `Qual a finalidade dos tipos de acionadores manuais utilizados na UCRI?`,
        resposta: `-Acionador com a finalidade exclusiva de alarmar. <br>
        -Acionador com a finalidade de alarmar e disparar.
        `
    },
    {
        pergunta: `Qual a função das chaves de bloqueio do Sistema Fixo de CO2?`,
        resposta: `As Chaves de Bloqueio permitem o bloqueio manual do ramal de CO2 que cobre a referida área, quando no caso de disparo do alarme, não for possível o abandono da área.`
    },
    {
        pergunta: `70)	Qual a Potência Nominal do Reator IPEN/MB-01, por que ele é chamado de Reator de Potência Zero?`,
        resposta: `A potência nominal máxima do reator IPEN/MB-01 é de 100 W. <br>
        Por que possui baixo fluxo neutrônico e, portanto baixa potência (quando comparado a outros reatores nucleares de pesquisa ou de potência) e além do mais devido a sua baixa potência o efeito de realimentação termo hidráulica é desprezível.
        `
    },
    {
        pergunta: `Qual a finalidade do Reator IPEN/MB-01, também conhecido como Unidade Crítica?`,
        resposta: `Sua finalidade é realizar experimentos para validação de metodologias de cálculos e de treinamento. Ele é destinado a realizar experimentalmente a validação de metodologias de cálculos neutrônicos, estudos das características de um reator moderado a água leve, testar configurações diferentes de núcleos e treinamento e retreinamento de operadores de reator.`
    },
    {
        pergunta: `Qual o moderador e o combustível utilizado no Reator IPEN/MB-01? Qual o enriquecimento do combustível?`,
        resposta: `O moderador utilizado é a água leve.
        O Combustível utilizado é o UO2 enriquecido a 4,3% em U-235.
        `
    },
    {
        pergunta: `Quais são os materiais absorvedores utilizados nas barras de controle e de segurança do Reator IPEN/MB-01?`,
        resposta: `Barra de Controle: Prata; Cádmio e Índio.
        Barra de Segurança: Carbeto de Boro.
        `
    },
    {
        pergunta: `74)	Com relação à fonte de nêutrons usada para a partida do Reator IPEN/MB-01, pergunta-se: <br><br>
        a)	Qual é o tipo desta fonte?<br>
        b)	Qual a sua atividade em Curie?<br>
        c)	Qual é a sua meia vida?<br>
        d)	Qual é o fluxo de nêutrons emitido em 4π?<br>
        `,
        resposta: `a.	Amerício Berílio <br><br>
        b.	A = 1 Curie ou 3,7x1010 Bequerel. <br><br>
        c.	T<sub>1/2</sub> = 432,6 anos <br><br>
        d.	2,6x106 n/s
        `
    },
    {
        pergunta: `O Sistema de Recirculação e Exaustão da Célula Crítica são barreiras físicas que impedem a liberação de materiais radioativos para o meio ambiente. Qual a redundância existente nestes sistemas?`,
        resposta: `Tanto a recirculação quanto a exaustão possuem dois sistemas independentes (A e B) que podem efetuar as mesmas funções e são alimentados por CCMs independentes, ou seja, na falha de um deles, o outro executa sua função de segurança.`
    },
    {
        pergunta: `Por que o Sistema de Exaustão A e o Sistema de Exaustão B do sistema de ventilação S1 são alimentados pelo CCM#3 e CCM#4 respectivamente, e não por apenas um deles?`,
        resposta: `Para que na falha de um deles a função de segurança (no caso a exaustão e a recirculação) possam manter a suas funções.`
    },
    {
        pergunta: `Por que as Bombas de Enchimento Lento B-201 e Enchimento Rápido B-202 possuem redundâncias (A e B)?`,
        resposta: `Para que o enchimento seja continuado mesmo com a falta de um dos sistemas.`
    },
    {
        pergunta: `O sistema Elétrico do Reator IPEN/MB-01 é dotado de Cargas Essenciais e não Essenciais. O que significa cada uma delas e qual a razão para as suas existências?`,
        resposta: `a)	Cargas de serviços (não essenciais): São cargas que em caso de interrupção no fornecimento normal de energia elétrica (via rede da concessionária), NÃO serão religadas após a partida e entrada do grupo diesel gerador de emergência da planta. <br><br>
        b)	Cargas Essenciais: São cargas que em caso de interrupção no fornecimento normal de energia elétrica (via rede da concessionária), serão religadas imediatamente após a partida e entrada do grupo diesel gerador de emergência da planta.
        `
    },
    {
        pergunta: `Por que o Sistema de Ar comprimido possui redundância (A e B)?`,
        resposta: `Para que na falha de um deles o outro pode ser colocado em operação e também por ocasião de manutenção corretiva `
    },
    {
        pergunta: `O que é o Confinamento do Reator IPEN/MB-01 e quais são as suas funções?`,
        resposta: `É uma estrutura que primariamente tem a função de alojar o Conjunto Crítico e Sistemas Experimentais durante a realização de experimentos críticos. Também ele pode alojar o armazenamento de Elementos Físseis. <br>
        A sua função é a de atuar como uma barreira física contra possíveis escapes de materiais radioativos, para o meio ambiente tanto em condições normais quanto em condições de acidente.
        `
    },
    {
        pergunta: `Descreva o Confinamento do Reator IPEN/MB-01.`,
        resposta: `É uma estrutura de concreto protendido na forma quadrada com dimensões 14 m por 14 m com três pavimentos, 21 metros de altura, paredes de 1,5 m de espessura, até a altura de 6 m acima do nível térreo passando para 0,75 m até a laje de cobertura cuja espessura é de 0,5m.`
    },
]
const secaoC = [
    {
        pergunta: `O operador manuseou a BC#2 (barra de controle dois do Reator IPEN/MB-01), alterando assim o K<sub>ef</sub> de 0,998 para 1,002. Qual a condição de criticalidade do Reator nesta nova condição e qual o valor da reatividade positiva inserida?`,
        resposta: `O reator tornou-se supercrítico.<br>
        A reatividade inserida foi de aproximadamente 0,004 ou 400 pcm.
        `
    },
    {
        pergunta: `Na configuração normal do núcleo (26x28) do Reator IPEN/MB-01, o reator fica crítico a 21°C com as Barras de Controle 1 e 2 igualmente retiradas em 58,7%. Por que não se configura o núcleo com menor número de varetas de tal forma que elas ficassem em 100% retiradas?`,
        resposta: `Porque sempre deve existir excesso de reatividade suficiente para manobra do K<sub>ef</sub> e, portanto da potência.`
    },
    {
        pergunta: `Existe formação do veneno Xe<sub>135</sub> no Reator IPEN/MB-01? Em caso afirmativo, ele exerce influência na reatividade do núcleo do reator?`,
        resposta: `Sim, porque o Xe<sub>135</sub> é produzido tanto direto das fissões quanto da cadeia de decaimento do Te<sub>135</sub> e do I<sub>135</sub> que também são produtos diretos das fissões, no entanto, a quantidade produzida é desprezível e praticamente não altera a reatividade do núcleo em razão do baixíssimo fluxo neutrônico do reator.`
    },
    {
        pergunta: `Quais os principais métodos de calibração de uma barra de controle?`,
        resposta: `Existem vários métodos sendo os mais utilizados os seguintes: <br><br>
        Método do Período Estável.<br>
        Método da Cinética Inversa.<br>
        Método do “Rod Drop”.
        `
    },
    {
        pergunta: `Descreva o método do período estável para calibração das Barras de Controle`,
        resposta: `O método do período estável constitui-se dos seguintes passos: <br><br>
        <ul>
            <li>1 - Criticaliza-se o Reator a uma baixa potência (ex: 100 mW)</li>
            <li>2 - Compensa-se a Barra de Controle BC#1 com a Barra de Controle BC#2 até que uma delas, por exemplo, a BC#1 fique totalmente retirada e a outra BC#2 inserida o suficiente para manter o reator crítico.</li>
            <li>3 - Retira uma extensão da BC#2 até que o período aparente fique em torno de 50s, aguardando por alguns instantes a estabilização do seu valor.</li>
            <li>
                4 - Utilizando a fórmula de INHOUR. <br>
                Onde l*, λi, βi são parâmetros específicos para cada núcleo e para cada configuração obtém-se o valor correspondente da reatividade do trecho da barra considerada.
            </li>
            <li>5 - Imediatamente após a aquisição dos dados novamente criticalizar o reator, agora com inserção da BC#1.</li>
            <li>6 - O procedimento é repetido até a completa remoção da BC#2.</li>
            <li>7 - É feito o “Rod Drop” da BC#1 desde o seu limite inferior até a completa inserção desta Barra e medido então o valor desta reatividade correspondente.</li>
            <li>8 - As reatividades diferenciais são somadas em cada posição, levando em conta na soma o valor da reatividade do rod drop, obtendo-se a reatividade integral da barra em cada ponto</li>
        </ul>`
    },
    {
        pergunta: `Como se obtém o coeficiente de temperatura isotérmico do Reator IPEN/MB-01?`,
        resposta: `1)	Criticaliza-se o Reator a uma baixa potência para evitar interferência do calor gerado no núcleo. <br><br>
        2)	Aquece-se o moderador de um valor ΔT e verifica-se a variação Δl correspondente da barra de controle (BC#1).<br><br>
        3)	Repete-se o experimento até a temperatura desejada (limitada a 80°C).<br><br>
        4)	Para cada ΔT se mede o Δl ou a reatividade Δρ correspondente.<br><br>
        5)	Para cada ponto faz-se a relação entre a variação da reatividade e a variação da temperatura.<br><br>
        6)	Constrói-se a curva de reatividade em função da temperatura 
        Por intermédio desta curva pode-se observar que o coeficiente de temperatura do Reator IPEN/MB-01 é negativo aumentando em valores absolutos a sua magnitude com a temperatura
        `
    },
    {
        pergunta: `Cite algumas aplicações da curva 1/M dada por 1/M = 1-K<sub>ef</sub>.`,
        resposta: `Durante o carregamento do núcleo com combustível nuclear. <br><br>
        Durante a montagem do conjunto crítico.<br><br>
        Aproximação da criticalidade pelo posicionamento as barras de controle.<br><br>
        Aproximação da criticalidade pela diluição de ácido bórico.
        `
    },
    {
        pergunta: `No processo de carregamento do núcleo utilizou-se o gráfico da curva 1/M de vários detectores, montados ao redor do núcleo. Pergunta-se: <br><br>
        a)	Por que se usou “vários” detectores?<br>
        b)	Qual foi o critério seguro usado para a previsão de criticalidade?
        `,
        resposta: `a)	Para se conseguir uma boa estatística, para se conseguir várias informações consideráveis e para minimizar o efeito de posicionamento da fonte detector.<br><br>
        b)	O critério foi o valor mais “conservativo”, ou seja, considerou-se o detector cujo resultado atingiu primeiro a criticalidade.
        `
    },
    {
        pergunta: `O Reator IPEN/MB-01 está sendo ligado e num dado instante K<sub>ef</sub> é igual a 0,90. De que fator será aumentado a população neutrônica aproximadamente no reator quando K<sub>ef</sub> atingir o valor de 0,99.`,
        resposta: `C<sub>2</sub>/C<sub>1</sub> =(1-k<sub>1</sub>)/(1-k<sub>2</sub> ) <br>

        C<sub>2</sub>/C<sub>1</sub> =(1-0,90)/(1-0,99)<br>
        C<sub>2</sub>/C<sub>1</sub> =(0,10)/(0,01)<br>
        
        C<sub>2</sub>/C<sub>1</sub> =10 <br><br>
        Portanto será aumentada de um fator 10.
        `
    },
    {
        pergunta: `As válvulas de abertura rápida é uma segunda opção de desligamento seguro do Reator IPEN/MB-01, conforme filosofias de desligamento da Unidade (a primeira opção é feita por intermédio da queda dos elementos absorvedores). Pergunta-se qual o tempo para o esvaziamento do tanque com a abertura das duas válvulas simultaneamente?`,
        resposta: `O tempo medido de esvaziamento do tanque moderador é menor que 2 segundos.`
    },
    {
        pergunta: `Qual o volume Operacional do Tanque do Moderador? Como é mantido este volume operacional? Existe possibilidade do transbordamento do Tanque? Justifique.`,
        resposta: `O volume operacional é aproximadamente 4500 litros. Este volume é controlado por intermédio de um controlador de nível móvel denominado “ladrão móvel”. Existe quase no topo do tanque outro “ladrão” fixo que em razão de sua dimensão avantajada não permitiria transbordamento do tanque caso o primeiro “ladrão” não atuasse apropriadamente. O primeiro ladrão comporta a vazão da bomba de enchimento lento, mas não a vazão da bomba rápida, portanto o nível operacional pode ser mantido constante somente com o uso da bomba lenta e esta é uma característica fundamental para garantir precisão nos resultados experimentais que dependem da criticalidade do Reator.`
    },
    {
        pergunta: `Quais são as alternativas de acionamento do Grupo Diesel Gerador (GDG-01)?`,
        resposta: `-Partida e parada automática. <br>
        -Partida automática parada manual.<br>
        -Partida e parada manual.<br>
        `
    },
    {
        pergunta: `Explique como funciona o CCM#2`,
        resposta: `O CCM#2 chamado essencial, possui na entrada uma chave de transferência automática constituída por 2 disjuntores, do tipo aberto, de baixa tensão. Normalmente o CCM#2 é alimentado pelo CCM#1, e, em caso de falha da fonte externa (via rede da concessionária e CBT-02), a chave de transferência faz a comutação da alimentação suprida pelo CCM#1 para aquela provida pelo grupo diesel GDG-02 e, a partir do CCM#2 para a alimentação do CCM#3 e CCM#4 também chamados essenciais.`
    },
    {
        pergunta: `Quais os modos de Operação do STAA? Quais os alinhamentos possíveis e em qual modo de operação é mantido o alinhamento deste sistema quando o mesmo está desligado? Por que?`,
        resposta: `Modo Tratamento de Água, para enchimento do tanque de reserva de água desmineralizada (TQ-102). <br>
        Modo Recirculação da Água, para manter a qualidade da água do Tanque de reserva de água desmineralizada (TQ-102).
        São dois modos de alinhamentos possíveis: <br>
        <li>Tratamento de Água.</li>
        <li>Retratamento da água do tanque.</li>
        Quando o desligado o STAA é mantido alinhado no modo de recirculação afim de que não ocorra transbordamento do tanque de reserva de água desmineralizada, uma vez que a alimentação deste tanque é feita por gravidade a partir da caixa d'água que está em nível superior ao tanque de reserva de água desmineralizada.
        `
    },
    {
        pergunta: `Quais são os limites de pH e de condutividade e concentração de cloretos na água do STAA?`,
        resposta: `A qualidade da água do STAA deve ser mantida em:<br>
        <li>pH = 5,5 a 6,5</li>
        <li>Condutividade ≤ 5 μS/cm</li>
        <li>Concentração de cloretos ≤ 0,2 ppm</li>
        `
    },
    {
        pergunta: `Explique porque não é possível “resfriar” a água do Tanque do Moderador durante a operação do Reator`,
        resposta: `Não é possível nem permitido, resfriar a água do tanque do moderador devido ao fenômeno de estratificação da água quente na parte superior do nível de água do tanque quando é injetada água fria pelo difusor existente na base do Tanque moderador (devido ao fenômeno de convecção natural na água). A injeção de água fria provoca também inserção de reatividade positiva podendo provocar o desligamento do reator.`
    },
    {
        pergunta: `Quando se deve operar o STAM?`,
        resposta: `Existe nas linhas do SCTAER e STAM, dois condutivímetros que monitoram a qualidade da água. Caso a condutividade ultrapasse o valor de 5μS/cm é gerado um alarme no painel de processo e o operador deve alinhar o sistema para o STAM e proceder o funcionamento deste sistema. Quando cessar o alarme retorna-se ao sistema SCTAER.`
    },
    {
        pergunta: `Por que o SRA é mantido em funcionamento após o nível da água do Tanque do Moderador ter atingido o nível operacional (para o caso em que o tempo de operação é longo, exemplo maior que uma hora)?`,
        resposta: `Durante a operação do reator o SRA é mantido em funcionamento no modo de recirculação através do tanque de estocagem, para manter o nível do tanque do moderador, suprindo desta forma as pequenas perdas de água que ocorrem pelas válvulas de drenagem rápida (HV-204 e HV-205). Se esta ação não for feita o nível do tanque vai abaixando de forma lenta e contínua, o que não é aceitável.`
    },
    {
        pergunta: `Porque a água do moderador deve ter pureza controlada (pH, condutividade, concentração de cloro, etc.). Cite pelo menos duas razões.`,
        resposta: `•	Para garantir sua qualidade como bom moderador.<br><br>
        •	Não conter impurezas que possam ser ativadas.<br><br>
        •	Minimizar o nível de radiação nos tanques e tubulações de processo.<br><br>
        •	Evitar corrosão no aço por cloretos e fluoretos.
        `
    },
    {
        pergunta: `Utilizando o SCTAER (sistema de controle de temperatura e enchimento rápido) e o SAG (sistema de água gelada), pode-se variar a temperatura do moderador. Pergunta-se:<br><br>
        a)	Quais são os limites, máximo e mínimo, para a temperatura da água de moderação.<br>
        b)	Quais são os fatores que determinam estes limites?
        `,
        resposta: `a.	Temperatura mínima do moderador T=18°C Temperatura máxima do moderador T=90°C.<br>
        b.	Fatores limitantes:
        -Inversão do coeficiente de reatividade, passando a ser positivo e, portanto inseguro.
        `
    },
    {
        pergunta: `Descreva o funcionamento do SDB?`,
        resposta: `A preparação da solução é manual. A água utilizada vem de uma das derivações da linha do STAA. A quantidade de ácido bórico é diluída no tanque TQ-204 mantendo a solução aquecida através do aquecedor AQ-201 e utilizando o agitador AG-201. Até que a solução esteja bem homogênea. Esta solução é desviada ao TQ-202, podendo ser eventualmente enviada para o tanque de decaimento TQ-203.`
    },
    {
        pergunta: `Com relação à utilização de ácido bórico em reatores: <br><br>
        a)	Por que se utilizam soluções de ácido bórico em alguns reatores?<br>
        b)	Qual a vantagem de se utilizar ácido bórico diluído na água (moderador) em relação a outros meios de controle?<br>
        c)	No Reator IPEN/MB-01 é utilizado normalmente ácido bórico diluído para controle do Reator?
        `,
        resposta: `a)	Para que a água de refrigeração também seja usada como absorvedor de nêutrons, realizando um controle uniforme da reatividade em todo volume do núcleo ativo, minimizando os fatores de pico que são produzidos por inserções de barras de controle e permitindo deste modo operar com densidades de potência mais elevadas. <br><br>
        b)	O boro, sendo diluído na água de refrigeração, faz o controle de reatividade de maneira uniforme em todo o núcleo ativo, permitindo operar com praticamente todas as barras de controle retiradas, evitando assim distorções do fluxo neutrônico e picos de potência que poderiam causar pontos quentes que possam vir a danificar as varetas combustíveis.<br><br>
        c)	Não, ele é utilizado somente em experimentos específicos.
        `
    },
    {
        pergunta: `Como funciona o SLE?`,
        resposta: `A água proveniente do TQ-102 (STAA) é bombeada pela bomba B-203, passando pelo aquecedor TC-203 onde será aquecida a cerca de 70 °C e vazão de 0,4 m<sup>3</sup>/h, sendo então distribuída pelas mangueiras para a operação de lavagem.`
    },
    {
        pergunta: `Qual a faixa de pressão operacional do SAC (Sistema de Ar Comprimido)? O que garante que esta pressão não será ultrapassada?`,
        resposta: `Pressão operacional 5,5 a 7,0 kgf/cm<sup>2</sup> e limite de projeto = 8,5 kgf/cm<sup>2</sup>.
        O que garante o limite máximo é a válvula de segurança que está ajustada para atuar quando a pressão atingir 8,5 kgf/cm<sup>2</sup>.
        `
    },
    {
        pergunta: `Relacione a sequência de eventos que irão ocorrer caso haja desligamento do compressor do SAC, (relacione os valores dos sinais de alarmes e os intertravamentos).`,
        resposta: `A pressão irá diminuir ao consumo e perdas, ao chegar a 5kgf/cm<sup>2</sup> teremos um alarme visual no painel de processo e ao atingir 4 kgf/cm<sup>2</sup> teremos um alarme no painel de SCRAM de partida, ocorrendo então um SCRAM de barras (magnetos).`
    },
    {
        pergunta: `Cite alguns dos possíveis modos de operação do SDEA?`,
        resposta: `1.	Recirculação do TQ de Retenção. <br><br>
        2.	Envio do tanque de retenção para rede <br><br>
        3.	Envio do tanque de retenção para o tanque de mistura.<br><br>
        4.	Diluição do tanque de mistura com água proveniente da caixa d'água.
        `
    },
    {
        pergunta: `Quais as formas de operação do Sistema Fixo de CO2?`,
        resposta: `<li>Operação manual-mecânica</li>
        <li>Operação manual-automática</li>
        <li>Operação automática</li>
        `
    },
    {
        pergunta: `Como é feita a operação manual-mecânica do Sistema Fixo de CO2?`,
        resposta: `A operação manual-mecânica do Sistema Fixo de CO2 é feita diretamente na bateria de cilindros seguindo o seguinte procedimento: <br><br>
        -Certifique-se de que não há pessoas na área de risco.<br>
        -Identifique e abra a válvula direcional do setor em risco.<br>
        -Retire o pino de segurança do atuador manual do cilindro de CO2 selecionado e puxe a alavanca.
        `
    },
    {
        pergunta: `Como é feita a operação manual-automática do sistema fixo de CO2?`,
        resposta: `A operação manual-automática do sistema fixo de CO2 é feita a partir do acionamento de qualquer um dos acionadores manuais do tipo "Quebre o Vidro e Aperte o Botão" instalado próximo ao acesso principal das áreas sob proteção.`
    },
    {
        pergunta: `Como é feita a operação-automática do sistema fixo de CO2?`,
        resposta: `A operação automática é feita através dos sensores de fumaça e/ou dos sensores termo-velocimétricos instalados nas áreas de risco.`
    },
    {
        pergunta: `Cite as primeiras providências (no mínimo duas) que devem ser tomadas em caso de incêndio na Unidade Crítica IPEN/MB-01?`,
        resposta: `As primeiras providências que devem ser tomadas em caso de incêndio na Unidade Crítica IPEN/MB-01 são:<br><br>
        -Desligar o reator (se ligado).<br>
        -Emitir avisos gerais.
        `
    },
    {
        pergunta: `Quando se deve combater um incêndio utilizando os hidrantes?`,
        resposta: `Deve-se combater um incêndio utilizando os hidrantes quando ele é de grandes proporções, os circuitos elétricos estejam desenergizados e os extintores portáteis ou o Sistema Fixo de CO<sub>2</sub> não foram suficientes para a extinção.`
    },
    {
        pergunta: `Qual o procedimento em caso de alarme e disparo do sistema Fixo de CO<sub>2</sub>?`,
        resposta: `Em caso afirmativo de disparo automático de CO<sub>2</sub> na área com alarme de incêndio, entrar na área somente depois de decorrido tempo suficiente para atuação do CO<sub>2</sub>. Os elementos que ingressarem na área devem estar munidos com extintores, máscaras, oxímetro e lanternas, para realizarem inspeções e, se necessário, dar continuidade ao combate do incêndio.`
    },
    {
        pergunta: `O que significa faixa de Partida e faixa de Potência do Reator. Quais são os valores em watt?`,
        resposta: `Faixa de partida é a faixa correspondente à região de baixo fluxo nêutrônico da ordem de grandeza da fonte de partida esta região é monitorada por canais nucleares compostos por detectores de pulso (normalmente BF3 e Boro-10). O máximo valor desta faixa corresponde a 100 mW. <br><br>
        Faixa de potência é a faixa correspondente a região de fluxo nêutrônico mais elevado do que a faixa de partida e os detectores dos canais nucleares correspondentes são do tipo corrente (normalmente Câmara de ionização compensada e não compensada) A faixa correspondente a esta região vai de 100 mW até 100 W). 
        `
    },
    {
        pergunta: `Quantos Canais Nucleares existem no Reator IPEN/MB-01?`,
        resposta: `São dez canais nucleares.`
    },
    {
        pergunta: `Qual a temperatura máxima e mínima permitida para o moderador?`,
        resposta: `Máxima 80°C <br>
        Mínima 14°C
        `
    },
    {
        pergunta: `Existe a necessidade de remoção de calor do moderador devido à operação do Reator?`,
        resposta: `Não, pois o calor liberado decorrente de uma operação à potência de 100 W é desprezível.`
    },
    {
        pergunta: `O controle de reatividade no Reator IPEN/MB-01, além ser feito pelas barras de controle e segurança é feito também por adição ou remoção de solução de ácido bórico no moderador? Justifique.`,
        resposta: `Não, o controle da reatividade é apenas feito pelas barras de controle e pelo nível do moderador no tanque TQ-201.<br>
        A utilização de ácido bórico é feita somente em experimentos. A utilização de ácido bórico não foi considerada como um critério de projeto na Instalação.
        `
    },
    {
        pergunta: `Qual o menor período possível (mais curto no jargão de reatores) que o reator pode operar sem se desligar por período e em quais canais é provocado tal desligamento?`,
        resposta: `17 segundos. <br>
        Canais (1;2;9 e 10) na faixa de partida.<br>
        Canais (3;4;7;8 10) na faixa de potência.
        `
    },
    {
        pergunta: `Qual a maior potência possível que o reator pode atingir sem se desligar por potência e em quais canais é provocada tal desligamento?`,
        resposta: `2,2 mW se não houver passagem adequada da função partida para a potência nos Canais 1, 2 e 9 (queda de barras).
        110 W Canais (3;4;7;8 e 10).
        `
    },
    {
        pergunta:`Existe queima no combustível do Reator IPEN/MB-01? Qual a importância desta queima no que se refere à troca de elementos combustíveis (varetas combustíveis)?`,
        resposta: `Sim, se há fluxo neutrônico, há queima, porém esta é desprezível para efeito prático. Mesmo que o Reator operasse continuamente em sua potência nominal levaria décadas para se evidenciar algum efeito de queima de combustível, portanto, não há necessidade de “troca” de elementos combustíveis.`
    },
    {
        pergunta:`4No Sistema de Tratamento da Água de Alimentação (STAA) os valores limites impostos à condutividade, pH e concentração de cloretos são respectivamente <br><br>
        •	pH = 5,5 a 6,5<br>
        •	Condutividade ≤ 5 μS/cm<br>
        •	Concentração de cloretos ≤ 0,2 ppm<br>
        Esses valores limites são os mesmos para o moderador, ou melhor, dizendo do SCTAER?
        `,
        resposta: `Antes da operação estes valores limites são os mesmos, porém durante a operação os valores aceitáveis são respectivamente:<br><br>
        •	pH = 5,0 a 7,0<br>
        •	Condutividade ≤ 6 μS/cm<br>
        •	Concentração de cloretos ≤ 0,3 ppm
        `
    },
    {
        pergunta:`Explique o passo-a-passo para ligar o Reator IPEN/MB-01 e o criticalizar na potência de 100 W.`,
        resposta: `1)	Efetuam-se todos os itens da Lista de Verificação Inicial (“check list”), rubricando os adequadamente.<br><br>
        2)	Dá-se o aviso de início de operação. <br><br>
        3)	Anotam-se em folhas apropriadas todos os passos para iniciar o ligamento do reator (“start-up”).<br><br>
        4)	Acertam-se as posições relativas de todas as barras (“Zerar” as barras). <br><br>
        5)	Fecham-se as válvulas de abertura rápida.<br><br>
        6)	Retira-se a primeira barra de segurança (BS#1) até seu limite máximo de retirada.<br><br>
        7)	Retira-se a segunda barra de segurança (BS#2) até seu limite máximo de retirada.<br><br>
        8)	Inicia-se o enchimento do TQ-201 usando as bombas de enchimento rápido até 75% da parte ativa do núcleo.<br><br>
        9)	Completa o enchimento do tanque utilizando-se as bombas de enchimento lento.<br><br>
        10)	Retira-se a primeira barra de controle (BC#1) até seu limite pré-determinado (normalmente em torno de 57% de retirada).<br><br>
        11)	Retira-se a segunda barra de controle (BC#2) com bastante atenção observando-se os canais de período (normalmente não devem encurtar além de 50 segundos).<br><br>
        12)	Quando o reator se torna supercrítico o aumento de potência deve ser acompanhado cuidadosamente observando os canais de período e potência com boa tolerância (tolerância esta aceita pelo operador sênior de plantão).<br><br>
        13)	Efetua-se a mudança da faixa de partida para potência quando soar o alarme para tal.<br><br>
        14)	Ao chegar próximo da potência de 100 W o período de ser alongado para poder se atingir a potência de 100 W de forma suave.<br><br>
        15)	Ao atingir a potência de 100 W a barra de controle deve ser levemente inserida até que os períodos nos canais se tornem infinito e a potência estável.<br><br>
        16)	Em seguida passa-se o controle manual para o automático mediante botoeira apropriada.<br><br>
        17)	Dá-se o aviso de criticalidade através do alto falante, informando o horário e a potência
        `
    },
    {
        pergunta:`Durante o processo de operação do reator, no “start up”, quais os cuidados o operador deve ter para evitar o seu desligamento?`,
        resposta: `1)	Evitar que o período fique excessivamente curto, isto é, menor que aproximadamente 50 segundos. <br><br>
        2)	Evitar que a contagem mínima nos canais 1; 2 e 9 fiquem abaixo de 5 cps.<br><br>
        3)	Atenção redobrada durante a transferência da função partida para a potência.<br><br>
        4)	Alongar bastante o período próximo à criticalidade.
        `
    },
    {
        pergunta:`Quais as condições que habilita a passagem da “função de segurança” do reator, dos canais de partida para os canais de potência?`,
        resposta: `a.	Primeira condição: Que os canais #3 e #4 tenham atingido os níveis de potência 30, 40 e 50 miliwatts.<br><br>
        b.	Segunda condição: Que a transferência esteja habilitada, o que deverá ocorrer 20 segundos após os canais #3 e #4 terem atingido 50 mW.
        Obs: Uma vez habilitada, a transferência da função de segurança deve ser realizada pelo operador para permitir a elevação da potência. O operador deve também desligar a alta tensão dos canais de partida para que eles não sejam danificados quando submetidos a um maior fluxo de nêutrons, devido ao aumento da potência.
        `
    },
    {
        pergunta:`Durante a redução de potência do reator, descreva como é efetuada a transferência da “função de segurança” dos canais de potência para os canais de partida.`,
        resposta: `Na redução de potência a transferência da função de segurança é feita automaticamente da seguinte forma: <br><br>
        a.	Quando a potência do reator atinge 40 mW, a alta tensão é religada nos detectores dos canais de partida, iniciando-se a transferência da função de segurança para os canais de partida.<br><br>
        b.	Se a potência do reator atingir 30 mW e a função de segurança não for transferida para os canais de partida, ocorrerá desligamento automático do reator.
        `
    },
    {
        pergunta:`O intertravamento de Movimentação de barras, não permite a movimentação simultânea de duas ou mais barras. Explique em que condição poderá ser utilizada a botoeira “desce todas”.`,
        resposta: `A botoeira desce todas é utilizada para inserir simultaneamente todos os mecanismos de acionamento das barras (MAB), após o SCRAM de magnetos. A inserção simultânea das 4 barras não é possível de ser realizada estando os magnetos energizados, (intertravamentos). Neste caso somente a barra que estiver selecionada será movimentada.`
    },
    {
        pergunta:`Com a malha de partida “desabilitada” é possível se movimentar as barras absorvedoras de nêutrons do Reator IPEN/MB-01?`,
        resposta: `Não, pois para movimentar as barras, os magnetos têm de estar energizados e para ter essa condição todos os itens do SCRAM de magnetos nisto incluindo o item partidas habilitadas devem estar satisfeitas.`
    },
    {
        pergunta:`Com a malha de partida “desabilitada” é possível se movimentar a fonte de nêutrons do Reator IPEN/MB-01?`,
        resposta: `Não, por razões de segurança todos os itens da malha de partida devem estar satisfeitos`
    },
    {
        pergunta:`Com a malha de partida “desabilitada” é possível acionar as bombas de enchimento lento B201A/B ou de enchimento rápido B202A/B com a finalidade de encher o tanque do moderador?`,
        resposta: `Não, pois todos os itens da malha de partida, por questão de segurança devem estar satisfeitos.`
    },
    {
        pergunta: `Explique por que é necessário subir totalmente as duas barras de segurança antes de iniciar o enchimento do tanque do moderador.`,
        resposta: `Para que haja um sistema de desligamento ativado e com resposta rápida antes de iniciar o processo de enchimento do tanque do moderador. A taxa de inserção de reatividade por nível de água com bomba rápida é equivalente à subida simultânea de 4 barras, (50 pcm/s). As barras de segurança ficam, portanto prontas para um desligamento rápido (tempo de queda da barra: t<1s), em caso de uma excursão de potência ou outra emergência qualquer`
    },
    {
        pergunta: `Estando a partida do Reator “habilitada”, porém com a fonte de nêutrons inserida na blindagem, é possível energizar os magnetos das barras absorvedoras?`,
        resposta: `Não, é uma condição necessária (partida habilitada), porém não suficiente. Estando a fonte na blindagem, NÃO é possível energizar os magnetos, mesmo que outras condições estejam satisfeitas`
    },
    {
        pergunta: `Quais as condições que devem ser satisfeitas para que os elementos de segurança (BS#1 e BS#2) sejam movimentados?`,
        resposta: `a)	Todos os itens do check list efetuados <br>
        b)	Partida habilitada<br>
        c)	BC inseridas<br>
        d)	Todas as variáveis do intertravamento de magnetos satisfeitas.<br>
        e)	Todas as variáveis do intertravamento de VVRA satisfeitas.<br>
        f)	Tanque do moderador vazio.
        `
    },
    {
        pergunta: `Quais as condições que devem ser satisfeitas para que a malha de intertravamentos dos magnetos ou em outras palavras quais as condições que devem ser satisfeitas para energizar ou manter energizados os magnetos?`,
        resposta: `Que todas as variáveis escritas em cada um dos quadros no painel “SCRAM DOS MAGNETOS”, estejam satisfeitas ou em outras palavras que todas as lâmpadas vermelhas estejam apagadas exceto as que estão necessariamente na condição de desvio. `
    },
    {
        pergunta: `Qual a condição normal de Operação dos Sistemas de Exaustão e Recirculação da Célula Crítica? E em condições de emergência?`,
        resposta: `Em condições normais: Exaustão ligada e recirculação desligada. <br>
        Em condições de emergência: Exaustão ligada e recirculação ligada.
        `
    },   
]

const secaoD = [
    {
        pergunta: `Quais são os subsistemas constituintes do Sistema de Controle do Reator IPEN/MB-01?`,
        resposta: `a.	Controle de Processo <br>
        b.	Controle de Reatividade.
        `
    },
    {
        pergunta: `Quais são as variáveis que compõe os subsistemas de Controle de Processo e Controle da reatividade do Reator IPEN/MB-01? Explique resumidamente cada uma delas.`,
        resposta: `a)	Controle de Processo: <br><br>
        a1. Controle de Temperatura do moderador <br><br>
        É efetuado por alinhamentos apropriados de válvulas e por intermédio das bombas redundantes de enchimento rápido B202A/B e utilizando o aquecedor TC-202, para aquecer, ou trocador TC-201 para resfriar. O acionamento destes componentes (válvulas, bombas, aquecedor e resfriador) é feito por meio de chaves e botões localizados na mesa de controle ou no painel de processo que contempla também informações sobre alarmes. <br><br>
        a2. Controle de Nível<br><br>
        O enchimento do TQ 201 é efetuado inicialmente pelas bombas de enchimento rápido B202 A ou B e posteriormente pelas bombas de enchimento lento B 201 A ou B mediante ao acionamento de chaves no painel de controle. Intertravamento não permite a operação da bomba rápida na região até 75% da parte ativa do núcleo. <br><br>
        
        b)	Controle de Reatividade:<br><br>
        b1. Controle de Reatividade<br><br>
        A reatividade é função dos seguintes itens:<br>
        1.-Nível do tanque do moderador.<br><br>
        2.-Posicionamento das BCs e BSs.<br><br>
        O posicionamento das barras de controle é regido pelo circuito de controle que recebe as informações do canal linear (contanto que a potência esteja entre 0,1 a 100 W).<br>
        A potência é medida e comparada com a potência de referência (% de demanda). O resultado é passado ao controlador do mecanismo de acionamento das barras de controle, mas antes disso ele é comparado com o resultado do processamento de potência por outro algoritmo (canal de inverso de período), cuja finalidade é detectar excursões rápidas de potência (ou período curto) que podem levar ao desligamento do reator pelo sistema de proteção, este segundo sinal de erro é analisado segundo sua amplitude e polaridade e desta análise, são gerados sinais que comandam o mecanismo de acionamento da barra de controle para cima ou para baixo (dependendo da polaridade) e com velocidade adequada. Para colocar o reator em automático deve-se primeiro acertar a potência a um dado nível pré-estabelecido e em seguida deve ser ajustada a potência de referência (% de demanda) desejada selecionando o modo automático.
        `
    },
    {
        pergunta: `Qual a função do Subsistema de Instrumentação Nuclear do Reator IPEN/MB-01 e como ela é constituída?`,
        resposta: `Monitorar o fluxo neutrônico em todas faixas de operação do reator, gerando informações importantes com relação a: <br><br>
        -Potência do reator<br>
        -Período do reator.<br>
        Estas informações subsidiam Subsistema de Intertravamento.
        Este subsistema de instrumentação nuclear é composto por 10 canais cada um deles constituído de detectores e dispositivos eletrônicos associados tais como, fonte de tensão, pré-amplificador, etc.<br>
        Os 10 canais estão identificados na Tabela 7.1 a seguir:
        Tabela: Identificação dos Canais Nucleares do Reator IPEN/MB-01.<br>
        <table>
            <thead>
                <tr>
                    <td>Canal</td>
                    <td>Nome</td>
                    <td>Sinal do detector</td>
                    <td>Escala de medida</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1e2</td>
                    <td>Partida</td>
                    <td>Pulsos</td>
                    <td>Log</td>
                </tr>
                <tr>
                    <td>3e4</td>
                    <td>Potência</td>
                    <td>Corrente</td>
                    <td>Log</td>
                </tr>
                <tr>
                    <td>5e6</td>
                    <td>Linear</td>
                    <td>Corrente</td>
                    <td>Linear (variável)</td>
                </tr>
                <tr>
                    <td>7e8</td>
                    <td>Segurança 1</td>
                    <td>Corrente</td>
                    <td>Linear (fixa)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Segurança 2 (partida)</td>
                    <td>Pulsos</td>
                    <td>Log</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Segurança 2 (potência)</td>
                    <td>Pulsos</td>
                    <td>Log</td>
                </tr>
            </tbody>
        </table> <br>
        Os equipamentos eletrônicos associados estão agrupados em dois armários com o objetivo nítido de redundância.
        `
    },
    {
        pergunta: `Classifique os canais de Instrumentação Nuclear do Reator IPEN/MB-01, segundo a “Faixa Operacional” em que eles atuam`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td>Faixa Operacional</td>
                    <td>Canal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Partida</td>
                    <td>1,2 e 9</td>
                </tr>
                <tr>
                    <td>Potência</td>
                    <td>3,4,7,8 e 10</td>
                </tr>
            </tbody>
        </table>`
    },
    {
        pergunta: `Quais são os canais nucleares utilizados na faixa de Partida e na faixa de Potência do Reator IPEN/MB-01?`,
        resposta: `Canais Nucleares de Partida: Canal 1; Canal 2 e Canal 9. <br>
        Canais de Nucleares de Potência: Canal 3; Canal 4; Canal 7 e Canal 8.<br>
        Canais Nucleares usados na Partida e Potência: Canal 5; Canal 6 e Canal 10.
        `
    },
    {
        pergunta: `Relacione os tipos e modos de operação dos detectores utilizados em cada um dos canais da Instrumentação Nuclear do Reator IPEN/MB-01.`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td>Canais</td>
                    <td>Tipo</td>
                    <td>Modo de Operação</td>
                </tr>                           
            </thead>
            <tbody>
                <tr>
                    <td>Partida #1, #2 e 9</td>
                    <td>BF<sub>3</sub></td>
                    <td>Pulso (cps)</td>
                </tr>
                <tr>
                    <td>Potência # 3 e #4</td>
                    <td>CIC</td>
                    <td>Corrente (Ampères)</td>
                </tr>
                <tr>
                    <td>Potência # 7 e #8</td>
                    <td>CINC</td>
                    <td>Corrente (Ampères</td>
                </tr>
                <tr>
                    <td>Potência #10</td>
                    <td>B<sub>10</sub></td>
                    <td>Pulso (cps)</td>
                </tr>
                <tr>
                    <td>Lineares #5 e #6</td>
                    <td>CINC</td>
                    <td>Corrente (Ampères)</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        pergunta: `Quais as funções exercidas pelos canais nucleares 5 e 6.`,
        resposta: `Os canais lineares #5 e #6 são utilizados para o controle da potência do reator. Ambos podem ser utilizados no sistema de controle automático de potência. Os níveis de potência são ajustados (atualmente) pelo canal #6 o qual está calibrado em função da potência do reator (obs. para mudar para o canal #5 deve-se mudar uma chavinha localizada no módulo de controle automático, situada atrás da mesa de controle).`
    },
    {
        pergunta: `Como é a atuação de um detector termo-velocimétrico do Sistema de Combate a Incêndios?`,
        resposta: `O detector termo-velocimétricos entra em estado de alarme quando a elevação da temperatura em um determinado intervalo de tempo ultrapassa o valor preestabelecido (taxa de elevação) ou a temperatura ambiente ultrapassa a temperatura máxima para a qual o detector foi ajustado.`
    },
    {
        pergunta: `Qual é o princípio do funcionamento de um detector a gás?`,
        resposta: `Eles funcionam através da ionização do gás. A radiação ao atravessar uma câmara contendo gás produz ionizações gerando pares de íons que são coletados, dando origem a uma carga Q em cada um dos eletrodos. Um dispositivo eletrônico associado transforma essa carga Q em pulso que é contado.`
    },
    {
        pergunta: `Qual a razão das redundância dos canais tanto de partida quanto de potência e qual a sua função?`,
        resposta: `Garantir maior confiabilidade pois cada par possui dois canais efetuando a mesma função, no entanto, a falha de um deles provoca desligamento do Reator.`
    },
    {
        pergunta: `Explique a redundância nos monitores de Área, de Ar e de Dutos.`,
        resposta: `Para que na falha ou manutenção de um deles o outro continua exercendo suas funções.`
    },
    {
        pergunta: `Qual a importância de uma fonte de nêutrons em um reator nuclear?`,
        resposta: `Uma fonte de nêutrons serve para assegurar a monitoração dos canais de partida da instrumentação nuclear e garantir que haja uma quantidade razoável de nêutrons no meio multiplicador para possibilitar uma boa estatística de contagem.`
    },   
]

const secaoE = [
    {
        pergunta: `Qual é a finalidade e como é constituído sistema de Proteção do Reator?`,
        resposta: `O Sistema de Proteção do Reator IPEN/MB-01 tem por finalidade desligar o reator caso algumas variáveis de processo ultrapassem valores pré-ajustados ou impedir a execução de uma operação insegura. O Sistema de Proteção do Reator IPEN/MB-01 é constituído por:<br><br>
        1-	Subsistema de Intertravamento.<br><br>
        a-	Intertravamento de Segurança (desligam o reator):<br>
        -Partida<br>
        -Magnetos<br>
        -Válvulas<br><br>
        b-	Intertravamento Operacionais (impedem Operações inseguras):<br>
        -Movimentação de barras.<br>
        -Movimentação de fonte de nêutrons.<br>
        -Operação das bombas (enchimento lento).<br><br>
        2-	Subsistema de Instrumentação nuclear: <br>
        a-	Dos Canais de Partida:<br>
        b-	Dos Canais de Potência<br>
        `
    },
    {
        pergunta: `Cite as três principais características do Sistema de Proteção do Reator.`,
        resposta: `-Proteção assumindo critério de falha única. <br>
        -Proteção contra falhas de modo comum e segurança.<br>
        -Redundância e independência.<br>
        `
    },
    {
        pergunta: `O que são sistemas de segurança do Reator? Como eles são constituídos?`,
        resposta: `São sistemas que não permitem que haja uma liberação descontrolada de produtos radioativos para o meio ambiente externo, mesmo havendo perda de integridade das varetas combustíveis. No Reator IPEN/MB-01, os sistemas de segurança para controle de liberação de materiais radioativos são: <br><br>
        - Estrutura da Célula Crítica (paredes e Lajes)<br>
        - Vedação das portas de Acesso à Célula Crítica<br>
        - Penetração de cabos para a Célula Crítica<br>
        - Filtros de Exaustão S1<br>
        - Detector de Radiação da Chaminé RITH-156<br>
        - Damper's de isolamento das linhas de Insuflamento e Exaustão de Ar da Célula Crítica.<br>
        - Válvulas de Isolamento das linhas de Água e Ar comprimido
        `
    },
    {
        pergunta: `Quais são os sistemas de desligamento rápido (SCRAM) do Reator IPEN/MB-01?`,
        resposta: `a.	Scram de magnetos: Inserção, por gravidade, das barras de controle e segurança ao desenergizar os magnetos de sustentação destas barras. <br><br>
        b.	Scram de válvulas: drenagem do tanque do moderador, por meio da abertura de 2 válvulas com diâmetro de 20 polegadas (cerca de 50cm) existentes na parte inferior do tanque do moderador.
        `
    },
    {
        pergunta: `Explique como funciona um intertravamento em geral (se referindo à Instalação Nuclear Reator IPEN/MB-01).`,
        resposta: `a)	A entrada do intertravamento recebe as informações provenientes do campo (contatos de relés abertos ou fechados, chaves ligadas ou desligadas). <br><br>
        b)	A malha do intertravamento que se encarrega de energizar ou desenergizar o respectivo dispositivo de segurança (magnetos dos elementos de controle e segurança, atuadores das válvulas de abertura rápida de água, contatores de motores, etc), tem todos os seus contatos ligados em série (exceto a dos “by pass”). Desta forma, somente quando todas as variáveis analógicas que participam da malha assumirem os valores dentro dos limites estabelecidos e todas as variáveis digitais assumirem o valor lógico correto, é que será possível energizar o atuador final (por exemplo, magnetos, motores, solenoides, etc.), cuja desenergização realiza a respectiva ação de segurança. Caso apenas uma das variáveis ultrapasse os valores estipulados ou modifique seu nível lógico correto, o contato respectivo se abre e o atuador final é desenergizado, ou seja, os elementos de controle e segurança caem, as válvulas abrem os motores não podem partir etc.
        `
    },
    {
        pergunta: `O modelo de operação da malha de intertravamento é do tipo falha segura. O que isto quer dizer?`,
        resposta: `Significa que ocorrendo uma falha nos circuitos que leve, por exemplo, a desenergização de um relé, ou ocorrendo falta de energia elétrica, o respectivo contato se abre e a função de segurança inerente é executada (queda dos elementos de controle e de segurança, abertura das válvulas de vazão rápida da água, etc).`
    },
    {
        pergunta: `Relacione os pontos de atuação para desligamento e/ou para intertravamento de todos os canais de partida.`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td colspan="3">Pontos de atuação dos canais de partida 1,2 e 9</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Intertravamento de partida</td>
                    <td>Contagem mínima &le; 2 cps</td>
                    <td>Desabilita a partida do reator</td>
                </tr>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P &ge; 110 mW</td>
                    <td>Scram de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P &ge; 120 mW</td>
                    <td>Scram de válvulas</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T &le; 17s</td>
                    <td>Scram de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T &le; 14s</td>
                    <td>Scram de válvulas</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        pergunta: `Relacione os pontos de atuação para desligamento e/ou para intertravamento de todos os canais de potência.`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td colspan="3">Pontos de atuação dos canais de potência 3 e 4</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Intertravamento para habilitar passagem da função de segurança do reator dos canais de partida para os canais de potência</td>
                    <td>30 mW, 40 mW, 50 mW nos canais #3 e #4</td>
                    <td>Inicia Habilitação para a transferência</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T &le; 17s</td>
                    <td>SCRAM de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T &le; 14s</td>
                    <td>SCRAM de válvulas</td>
                </tr>
            </tbody>
        </table>
        <br>
        <table>
            <thead>
                <tr>
                    <td colspan="3">Pontos de atuação dos canais de potência 7 e 8</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P &ge; 110 W</td>
                    <td>SCRAM de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P &ge; 120 W</td>
                    <td>SCRAM de válvulas</td>
                </tr>
            </tbody>
        </table>
        <br>
        <table>
            <thead>
                <tr>
                    <td colspan="3">Pontos de atuação dos canais de potência 10</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P ≥ 110 W</td>
                    <td>SCRAM de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P ≥ 120 W</td>
                    <td>SCRAM de válvulas</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T ≤ 17s</td>
                    <td>SCRAM de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por período</td>
                    <td>T ≤ 14s</td>
                    <td>SCRAM de válvulas</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        pergunta: `Explique qual a finalidade do Intertravamento por contagem mínima nos canais de partida.`,
        resposta: `O intertravamento por contagem mínima tem por finalidade impedir a partida do reator caso qualquer um dos canais de partida não seja sensibilizado pela fonte de nêutrons`
    },
    {
        pergunta: `Quais os intertravamentos existentes no STAA?`,
        resposta: `•	Intertravamentos de válvulas. Na falta de ar comprimido, as válvulas de alinhamento do STAA, permanecem no modo operação recirculação, evitando o transbordamento do tanque de reserva, devido a ação da gravidade. No modo tratamento, o STAA é abastecido por gravidade pela caixa de água potável (mesmo com a bomba desligada). <br><br>
        •	Condutividade da água no tanque de reserva >5μS/cm. Não permite abertura de transferência por gravidade (HV-112), da água existente no tanque do STAA para o tanque de estocagem (SCTAER.<br><br>
        •	Nível d'água abaixo do mínimo bloqueia a operação da bomba d'água do STAA.<br><br>
        •	Nível baixo de água na caixa d'água ou no TQ-102: bloqueia a operação da bomba d'água (B-101) do STAA; e <br><br>
        •	Nível alto no tanque de armazenamento (TQ-102): bloqueia a operação da bomba d'água (B-101).
        `
    },
    {
        pergunta: `O que significa a sigla “SCRAM” no jargão de reatores nucleares?`,
        resposta: `Safety Control Rod Axe Man (safety = segurança, control = controle, Rod = barra, Axe = machado, Man = homem) Este acrônimo foi provavelmente cunhado por Enrico Fermi no Chicago Pile 1 (primeira pilha atômica) do Projeto Manhattan.
        Constitui um desligamento de um reator ou uma planta nuclear por intermédio de uma grande inserção de reatividade negativa no núcleo deste reator.
        `
    },
    {
        pergunta: `Quais são e como são compostos os sistemas de intertravamentos do Reator IPEN/MB-01?`,
        resposta: `a.	Intertravamento de segurança: <br><br>
        -Partida<br>
        -Magnetos<br>
        -Válvulas de abertura rápida<br><br>
        b.	Intertravamento operacionais:<br><br>
        -Movimentação das barras<br>
        -Movimentação da fonte de nêutrons e Operação bombas enchimento rápido.
        `
    },
    {
        pergunta: `Relacione pelo menos três variáveis (ou condições) monitoradas pela malha de intertravamento de partida, indicando sua condição para que a partida seja “desabilitada”, causando “SCRAM” de partida.`,
        resposta: `1.	Primeira porta de acesso à célula crítica (aberta). <br><br>
        2.	Segunda porta de acesso à célula crítica (aberta).<br><br>
        3.	Porta deslizante (concreto) aberta.<br><br>
        4.	Alta tensão nos canais de partida (falha) desvio na faixa de potência.<br><br>
        5.	Alta tensão nos canais de potência (falha).<br><br>
        6.	Pressão na célula Crítica (alta ≥-50pascal).<br><br>
        7.	Pressão no sistema pneumático (baixa < 4kgf/cm2).<br><br>
        8.	Tensão nos bastidores de partida (falha).<br><br>
        9.	Tensão bastidores de potência (falha).<br><br>
        10.	Tensão bastidores comparadores (falha).
        `
    },
    {
        pergunta: `Relacione e cite TODOS os botões de “SCRAM MANUAL” do Reator IPEN/MB-01.`,
        resposta: `-2 na mesa de controle <br>
        -1 no painel da instrumentação nuclear-gabinete de magnetos e VVRA.<br>
        -1 no saguão da célula crítica<br>
        -1 no painel de monitoração da radiação (proteção radiológica)
        `
    },
    {
        pergunta: `Com relação ao intertravamento por contagem mínima: <br>
        a)	Em quais canais ele atua? <br>
        b)	Qual o seu valor?<br>
        c)	Em qual ou quais dispositivos ou sistemas ele atua?
        `,
        resposta: `1.	Ele atua nos canais nucleares 1, 2 e 9. <br>
        2.	2 contagens por segundo.<br>
        3.	Sistema de válvulas de abertura rápida e magnetos da barra.
        `
    },
    {
        pergunta: `Qual a finalidade do intertravamento de partida.`,
        resposta: `Atender as condições mínimas de segurança para poder ligar o reator. Durante a partida deve ser realizada uma série de procedimentos operacionais. Alguns destes procedimentos, no entanto, só são permitidos caso seja satisfeitos um conjunto de condições, reunidas no que convencionou chamar intertravamento de partida.`
    },
    {
        pergunta: `Qual o limite máximo da “Taxa de Inserção de Reatividade” em pcm, adotado no projeto e na análise de segurança do Reator IPEN/MB-01?`,
        resposta: `É de 20 pcm/s, limite este definido nas Especificações Técnicas de Projeto.`
    },
    {
        pergunta: `19)	Qual é a ordem de grandeza da taxa de reatividade durante o processo de enchimento do tanque do moderador (região 75% da parte ativa do núcleo), nos seguintes modos de operação: <br>
        a)	Enchimento rápido?<br>
        b)	Enchimento lento?<br>
        Sabendo que taxa de inserção de reatividade positiva devido ao moderador no trecho final da parte ativa é de aproximadamente 30 pcm/s.<br>
        Compare e verifique se estes valores são maiores, menores ou iguais ao valor da taxa de reatividade inserida pela barra de controle que é aproximadamente de 13 pcm/s.
        `,
        resposta: `Sendo a reatividade inserida por nível de água no TQ-201 é de aproximadamente 30 pcm/mm tem-se que: <br><br>
        a.	Enchimento do TQ-201 com bomba rápida = 1,5mm/s
        Taxa de inserção de reatividade com bomba rápida = 30 x 1,5 = 45 pcm/s que é equivalente a taxa de inserção de reatividade aproximadamente a 4 barras de controle (portanto acima do valor da especificação técnica de projeto que é 20 pcm/s).<br><br>
        b.	Enchimento do TQ-201 com bomba lenta = 0,4 mm/s
        Taxa de inserção de reatividade com bomba lenta = 30 x 0,4 = 12 pcm/s que é equivalente a taxa de inserção de reatividade de 1 barra de controle.
        (Em razão dos resultados acima, fica claro porque há intertravamento da bomba rápida nesta região da parte ativa do núcleo).
        `
    },
    {
        pergunta: `Qual é o valor da pressão de intertravamento da Célula Crítica?`,
        resposta: `A depressão no interior da célula crítica deve ser igual ou maior que -5 mm de coluna de água (depressão ≥-5 mm de CA ou -50 Pascal) para habilitar a partida do reator`
    },
    {
        pergunta: `Quais são as outras características adicionais inclusas no projeto relacionado ao Confinamento que garantem a segurança da Instalação?`,
        resposta: `As características adicionais são: <br>
        a)	Sistema de condicionamento de ar e ventilação da Célula Crítica.<br>
        b)	Estanqueidade das portas e penetrações.<br>
        c)	Espessuras das paredes de concreto.
        `
    },
    {
        pergunta: `Qual o objetivo de se ter um Confinamento projetado com os critérios de segurança como foram feitos no Confinamento do Reator IPEN/MB-01?`,
        resposta: `Garantir que os níveis de radioatividade e radiação no meio ambiente permaneçam tão baixo quanto razoavelmente exequível (ALARA = As Low As Reasonably Achievable), conforme a norma CNEN-NE-301.`
    },
    {
        pergunta: `Cite medidas adicionais que foram incorporadas ao projeto do Reator IPEN/MB-01, visando a Segurança da Instalação.`,
        resposta: `a)	Separação física de componentes que exercem mesmas funções. <br>
        b)	Separação física de componentes com funções distintas, mas visando atender ao mesmo objetivo de segurança.<br>
        c)	Testes pré-operacionais.<br>
        d)	Rotinas de Manutenção.
        `
    },
    {
        pergunta: `Dentre os eventos iniciadores postulados na análise de acidentes do Reator IPEN/MB-01, pergunta-se: <br>
        a)	Em quantas classes eles são classificados?<br>
        b)	O que é um evento limitante?<br>
        `,
        resposta: `a)	Três classes <br>
        b)	É o acidente mais severo de uma dada classe
        `
    },
    {
        pergunta: `Descreva sucintamente cada uma das três classes de eventos iniciadores.`,
        resposta: `Classe I: Incluem-se nesta classe os eventos que causam inserção positiva de reatividade no núcleo do Reator IPEN/MB-01. <br><br>
        Classe II: Incluem-se nesta classe os eventos que dão origem a acidentes que podem liberar radiação no ambiente do Edifício da Célula Crítica e, posteriormente, para a atmosfera, via Sistema de Condicionamento de Ar e Ventilação da Célula Crítica.<br><br>
        Classe III: Incluem nesta classe eventos originados por falha de operação.
        `
    },
    {
        pergunta: `Faça uma tabela de classificação dos eventos iniciadores indicando na primeira coluna a classe e a denominação da classe, e na segunda coluna todos os possíveis eventos iniciadores de cada classe.`,
        resposta: `<table>
        <thead>
            <tr>
                <td>CLASSE</td>
                <td>EVENTO INICIADOR</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    I -
                    Inserção de Reatividade e
                    Distribuição Anormal de Potência
                    
                </td>
                <td>
                    <li>- Falha no Sistema de Controle de Reatividade.</li>
                    <li>- Injeção de Água Fria no Núcleo.</li>
                    <li>- Aumento de Moderação por Falha Estrutural.</li>
                    <li>- Carregamento e Operação com Varetas Combustíveis em Posições Incorretas.</li>
                    <li>- Retirada Incontrolada do Elemento de Controle.</li>

                </td>
            </tr>
            <tr>
                <td>
                    II - Liberação de Radiação de Sistemas ou Componentes 
                </td>
                <td>
                    <li>- Falha ou Vazamento no Sistema de Esgoto Quente.</li>
                    <li>- Falha em Tanques de Armazenamento de Líquidos.</li>
                    <li>- Falha no Revestimento da Vareta Combustível.</li>
                    <li>- Manuseio de Varetas Combustíveis.</li>
                </td>
            </tr>
            <tr>
                <td>
                    III - Eventos Induzidos por Falha Humana

                </td>
                <td>
                    <li>- Movimento Incorreto da Fonte de Nêutrons</li>
                    <li>- Presença Indevida de Pessoa na Célula Crítica.</li>
                    <li>- Perda de Potência Elétrica.</li>
                    <li>- Falha ou Operação Incorreta com Aparato Experimental.</li>
                </td>
            </tr>
        </tbody>
    </table>`
    },
    {
        pergunta: `Faça uma tabela de classificação de eventos iniciadores limitantes indicando na primeira coluna a classe e denominação da classe e na segunda o evento iniciador limitante. Coloque cada classe numa linha individual nesta tabela.`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td>CLASSE</td>
                    <td>EVENTO INICIADOR LIMITANTE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        I - Inserção de Reatividade e
                        Distribuição Anormal de Potência
                    </td>
                    <td>
                        Retirada Incontrolada do Elemento de Controle
                    </td>
                </tr>
                <tr>
                    <td>
                        II - Liberação de Radiação de Sistemas ou Componentes
                    </td>
                    <td>
                        Manuseio do Engradado de Varetas Combustíveis
                    </td>
                </tr>
                <tr>
                    <td>
                        III - Eventos Induzidos por Falha Humana
                    </td>
                    <td>Falha ou Operação Incorreta com Aparato Experimental</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        pergunta: `Descreva detalhadamente o evento limitante da classe I quanto: <br><br>
        1)	Denominação do Evento<br>
        2)	Definição do Acidente<br>
        3)	Ações de Proteção<br>
        4)	Cronologia dos eventos<br>
        5)	Conclusão da análise do acidente<br>
        `,
        resposta: `1)	Retirada Incontrolada do Elemento de Controle <br><br>
        2)	Este evento pode ocorrer tanto na partida (1,0x10-<sup>3</sup>W) como em operação (100W). Este acidente tem origem numa falha do mecanismo de acionamento dos elementos de controle, resultando num movimento incessante de retirada de uma delas. A consequência desta falha é a rápida inserção de reatividade positiva, podendo levar a uma excursão de potência.<br><br>
        3)	Os sistemas de proteção que atuam nesse acidente são a queda de elementos de controle e de segurança e o esvaziamento do tanque do moderador. Os sistemas de desligamento do Reator IPEN/MB-01 estão calibrados de forma a impedir a evolução da excursão de potência. Os níveis das variáveis que acionam o sistema de desligamentos são:<br>
        a)	Nível de potência na faixa de operação de partida para queda dos elementos de controle de segurança: 110 mW;<br>
        b)	Nível de potência na faixa de operação de partida para esvaziamento do tanque do moderador: 120 mW;<br>
        c)	Nível de potência na faixa de operação em potência para queda dos elementos de controle e segurança: 110 W (110% da potência nominal); e 120 W para a abertura das válvulas.<br>
        d)	Nível de período para a queda dos elementos de controle e segurança: 17 s<br>
        e)	Nível de período para esvaziamento do tanque do moderador: 14s<br><br>
        
        Dessa forma assim que um desses níveis é ultrapassado, a queda dos elementos de controle e de segurança ou o esvaziamento do tanque do moderador terminam a excursão de potência desligando o Reator. O operador pode também acionar o desligamento do reator em qualquer instante do acidente.<br><br>
        
        4)	Uma das barras dos elementos absorvedores de controle, devido a uma falha técnica ou do operador, é retirada incessantemente do núcleo com uma velocidade de 1 mm/s. Há um início de excursão de potência. O sinal de desligamento pode ser causado por período curto ou nível de fluxo, dependendo das condições iniciais do acidente. O acidente terminará com o desligamento seguro do reator IPEN/MB-01.<br><br>
        
        5)	Conclusão da análise do acidente
        Resultados demonstram que este tipo de acidente é plenamente controlado pelo mecanismo de proteção do reator. A máxima sobre potência é menor que 30% não acarretando elevação de temperatura no núcleo. Os elementos de controle desligarão de forma segura o reator mesmo com um dos elementos de segurança emperrado.
        `
    },
    {
        pergunta: `Descreva detalhadamente o evento limitante da classe II quanto: <br><br>
        1)	Denominação do Evento<br>
        2)	Definição do Acidente<br>
        3)	Identificação das Causas e Descrição do Acidente<br>
        4)	Consequências Radiológicas
        `,
        resposta: `1)	Manuseio do Engradado de Varetas Combustíveis <br><br>

        2)	Durante um carregamento ou um descarregamento do núcleo ou uma mudança de configuração que necessite remoção ou inserção de uma quantidade considerável de varetas, estas deverão ser transportadas do núcleo para as covas e vice versa em quantidades não superiores a 170 varetas por vez, por critérios de projeto, com possibilidade embora remota, de queda deste cesto contendo tais varetas.<br><br>
        
        3)	A queda deste cesto contendo estas varetas, digamos 170 varetas, causam numa situação extrema, porém não impossível, o rompimento de todas as varetas, gerando liberação considerável de produtos de fissão, indo parar inicialmente nos filtros e possivelmente na atmosfera através do sistema de Ventilação da Célula Crítica.<br><br>
        
        4)	As doses estimadas para este acidente são muito inferiores aos limites máximos permissíveis pela norma CNEN-NE 3.01 para exposição interna na tireoide (500 mSv para trabalhador e 50 mSv para indivíduo do público), e para dose equivalente efetiva (50mSv para trabalhador e 1mSv para indivíduo do público).
        `
    },
    {
        pergunta: `Descreva detalhadamente o evento limitante da classe III quanto: <br><br>
        1)	Denominação do Evento<br>
        2)	Definição do Acidente<br>
        3)	Ações de Proteção<br>
        4)	Cronologia dos eventos<br>
        5)	Conclusão da análise do acidente<br>
        `,
        resposta: `
        1)	Falha ou Operação Incorreta com Dispositivos Experimentais. <br><br>
        2)  A movimentação inadvertida de um dispositivo experimental nas proximidades da região ativa do núcleo pode provocar perturbações no fluxo de nêutrons e é uma causa potencial de acidentes de reatividade. Segundo especificações técnicas do Reator IPEN/MB-01, o limite de inserção de reatividade no núcleo está limitado a 500 pcm.<br>
        Esse evento representa a movimentação inadvertida do dispositivo experimental mais reativo que pode ser admitido na vizinhança do núcleo do reator e é o caso limitante da Classe III de eventos iniciadores.<br><br>
        3)  interrupção da excursão de potência o sistema de proteção do reator inibindo a sustentação das barras de controle, que então são inseridas na região ativa do núcleo, por ação da gravidade. Subsequentemente, o sistema de proteção pode ainda provocar a drenagem da água leve contida no tanque principal do reator.<br><br>
        4)  Uma falha de equipamento e/ou de operação provoca a movimentação de um dispositivo experimental na vizinhança do núcleo do reator, provocando inserção de reatividade equivalente a 550 pcm no intervalo de 10 -2 s. A potência nuclear cresce até atingir o limiar de desligamento por sobrepotência e/ou por período curto. A atuação do sistema de proteção provoca o desligamento do reator e deixa a instalação em condição segura. <br><br>
        5)  A atuação do sistema de proteção do reator é suficiente para interromper a excursão de potência provocada pela falha ou operação incorreta de dispositivo experimental, mantendo a integridade dos elementos combustíveis e deixando a instalação em condição segura, mesmo na ocorrência de falha que impeça a queda da barra de controle mais reativa.
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Um operador que estava dando a partida no reator para realizar um experimento com o moderador contendo solução de ácido bórico a 100 ppm, conversava com um colega sobre o resultado do jogo de futebol entre o São Paulo e o Corinthians. Distraído com o assunto alinhou incorretamente para o enchimento do Tanque do Moderador TQ-201, ao invés de recircular a água do Tanque de estocagem TQ-202 passando pelo resfriador TC-201. No momento a temperatura do Tanque TQ-201 era de 80°C e a do Tanque de estocagem 20°C. Pergunta-se:<br><br>
        a)	Qual a classe de acidente que esta desatenção poderia levar?<br>
        b)	Sabendo que nestas condições (vazão 15m3/h com capacidade de resfriamento 3°C/min a inserção de reatividade é de 1pcm/s), haveria alguma violação da especificação técnica? Por quê?<br>
        c)	O que aconteceria se o operador levasse um tempo considerável (digamos 2 minutos) para perceber seu erro?
        `,
        resposta: `a)	Classe I (Injeção de água fria no núcleo) <br>
        b)	Não, pois o limite de inserção de reatividade por especificação técnica é de 20 pcm/s, bem acima, portanto do valor de 1 pcm/s.<br>
        c)	Com inserção de 1 pcm/s em 2 minutos haveria inserção de 120 pcm bem próximo do valor que levaria ao período a 17 s e portanto com a consequente atuação do período nos canais de período.
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Um operador montou para um experimentador uma caixa de Alumínio ao lado do núcleo (face oeste) do reator para estudo de reflexão de nêutrons. Esta caixa possuía um volume interno de 60 litros. A caixa inicialmente estava vazia, isto é, sem o moderador durante a operação do reator à potência de 100W no intervalo de 1 hora. A variação de reatividade do núcleo com a caixa vazia e com ela cheia era menor que 500 pcm. Na pressa o operador deixou de fixar a caixa adequadamente Em razão disso a caixa se afastou repentinamente do núcleo, do reator, porém, permanecendo próximo a este devido a estrutura da treliça, que impede o afastamento completo da caixa do núcleo do reator quando este estava crítico. Pergunta-se:<br><br>
        a)	Qual a classe de acidente que tal fato causaria?<br>
        b)	Haveria uma variação instantânea de reatividade de 500 pcm? Por quê?<br>
        c)	Esse seria um evento iniciador limitante para esta classe de evento?<br>
        `,
        resposta: `a)	Classe III (Falha ou operação incorreta com dispositivos experimentais) <br>
        b)	Não, pois mesmo se caixa tivesse afastado muito do núcleo haveria inserção de reatividade positiva menor que 500 pcm. Levando em conta que a caixa apenas afastou-se um pouco do núcleo esta inserção de reatividade com certeza seria ainda menor que os 500 pcm, não representando assim risco para o reator.<br>
        c)	Sim
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Cerca de 20 varetas do arranjo retangular padrão do núcleo (26x28) foram removidas para montagem de um experimento. Ao concluir esta operação o operador retornou estas varetas para o núcleo, no entanto, ele confundiu a sequência de retorno e as 20 varetas foram colocadas, portanto em posições diferentes das originais. Pergunta-se: <br>
        a)	Em que classe de acidente este evento seria classificado?<br>
        b)	Haveria algum risco severo em razão deste equívoco? Justifique.<br>
        c)	Qual seria o evento iniciador limitante desta classe?<br>
        d)	Qual seria a ações que poderia evitar esta situação?
        `,
        resposta: `a)	Classe I (Carregamento e Operação com varetas combustíveis em posição incorreta) <br>
        b)	Não, como a quantidade de combustível é praticamente a mesma em cada vareta e, portanto a variação de reatividade do núcleo para mais ou para menos seria desprezível.<br>
        c)	Retirada incontrolada de elemento de controle.<br>
        d)	Para evitar este erro de troca, o correto e seria seguir uma planilha adequada com posições do núcleo e do cesto conferindo a identificação de cada vareta disponível no tampão inferior desta e assinalando cada item efetuado.
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Durante o processo para alcançar a criticalidade do reator, a última barra de controle por alguma razão técnica no MAB (mecanismo de acionamento das barras) disparou e o operador não conseguiu detê-la. Pergunta-se:<br>
        a)	O que aconteceria com a reatividade do reator?<br>
        b)	Qual a sua classe de evento?<br>
        c)	Quais as proteções existentes que impediriam que esta ação ocorresse?<br>
        d)	Este é um evento limitante?
        `,
        resposta: `a)	Aumentaria constantemente a uma taxa de 13 pcm/s e, portanto, abaixo dos 20 pcm/s da especificação técnica de projeto. <br>
        b)	Classe I<br>
        c)	Este evento pode ocorrer tanto na partida como em potência do reator.<br>
        As ações de proteção atuam da seguinte forma:
        Na faixa de partida os sistemas de desligamento são potência de primeiro nível ou 110 mW ou período de primeiro nível (17s)que provoca a queda das barras absorvedoras e potência de segundo nível 120 mW (dreno do TQ201) ou período de segundo nível (14s)que esvazia o TQ-201.
        Na faixa de potência os sistemas de desligamento são potência de primeiro nível ou 110 W ou período de primeiro nível (17s)que provoca a queda das barras absorvedoras e potência de segundo nível 120 W (dreno do TQ201) ou período de segundo nível (14s)que esvazia o TQ-201.<br>
        d)	Sim
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Suponha que em um dado instante próximo a criticalidade ocorra uma excursão inesperada de potência. Pergunta-se:
        Quem atuará primeiro no desligamento do Reator, o período ou potência?<br>
        Esta atuação depende da potência do Reator? Justifique.
        `,
        resposta: `O desligamento do Reator ocorre primeiro por período se a potência do reator estiver no início do acidente, isto é, menor que 37 W e, se estiver maior que este valor o desligamento será por potência. Após 37 W enquanto o período está encurtando, a potência estando mais próxima dos 110 W atingirá este valor primeiro do que o período de 17 s. Este valor foi determinado teoricamente e posteriormente constatado experimentalmente.`
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Suponha que no manuseio de uma vareta combustível a cordinha da ferramenta arrebente deixando a vareta combustível escapar para o fundo do tanque ou nos arredores deste tanque. Pergunta-se:<br>
        a)	Qual a classe deste evento iniciador.<br>
        b)	Quais a consequências radiológicas deste evento?<br>
        c)	Ele é um evento limitante?<br>
        `,
        resposta: `a)	Classe II (falha no revestimento do elemento combustível) <br>
        b)	As doses equivalentes estimadas são muito menores aos limites máximos permissíveis pela norma CNEN-NE 3.01 para a dose equivalente efetiva.<br>
        c)	Não.
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Durante o transporte do cesto de varetas combustíveis contendo 170 varetas o engradado despenca de uma altura de 3 metros e todos os encamisamentos das 170 varetas se rompem causando liberação de produtos de fissão na Célula Crítica. Pergunta-se:<br>
        a)	Qual a classe deste evento?<br>
        b)	É um evento limitante?<br>
        c)	Quais as consequências radiológicas deste evento?
        `,
        resposta: `a)	Classe II (falha no revestimento da vareta combustível devido o manuseio do engradado de varetas). <br>
        b)	Sim<br>
        c)	As doses equivalentes estimadas são muito menores aos limites máximos permissíveis pela norma CNEN-NE 3.01 para a dose equivalente efetiva
        `
    },
    {
        pergunta: `O que é um acidente básico de projeto? Qual é o acidente básico de projeto do Reator IPEN/MB-01?`,
        resposta: `Em inglês Design Basic Accident (acidente básico de projeto) ou Maximum Credible Accident (máximo acidente crível) É um acidente postulado (teórico) para o qual uma Instalação Nuclear deve ser projetada e construída para resistir sem perdas dos sistemas, estruturas e componentes necessários para assegurar o bem estar e segurança do público.
        O acidente básico de projeto do Reator IPEN/MB-01 é a retirada incontrolada da barra de controle.
        `
    },
    {
        pergunta: `Qual o acidente mais provável de ocorrer no Reator IPEN/MB-01?`,
        resposta: `Queda de uma vareta combustível durante manuseio no núcleo.`
    },
    {
        pergunta: `O que são limites de segurança?`,
        resposta: `São valores máximos para as variáveis de processo, que excedidos, irão causar a perda da integridade das barreiras físicas que impedem a liberação de produtos radioativos para o meio externo.`
    },
    {
        pergunta: `O que são valores de atuação dos sistemas de Proteção e Segurança?`,
        resposta: `São valores ajustados para dispositivos de ação automática dos sistemas de segurança e intertravamento, que uma vez atingidos, desligam o reator por “SCRAM DE MAGNETOS” e/ou “SCRAM DE VÁLVULAS”, ou inicia ações que evitam, ou minimiza, a liberação de materiais radioativos para o meio ambiente.`
    },
    {
        pergunta: `Qual o local de maior risco de incêndio nas instalações do IPEN/MB-01?`,
        resposta: `O local de maior risco de incêndio nas instalações do Reator IPEN/MB-01 e a Sala de Eletrotécnica devido à quantidade de cabos e equipamentos elétricos energizados concentrados nela.`
    },
    {
        pergunta: `Qual o motivo para a existência de uma grande quantidade de Extintores Portáteis de CO<sub>2</sub> em relação a outros tipos de extintores portáteis?`,
        resposta: `O motivo para a existência de uma grande quantidade de Extintores Portáteis de CO2 é devido ao fato de que a maior probabilidade de ocorrência de incêndios na instalação são os da classe C, equipamentos elétricos energizados, e os extintores de CO2 são os mais indicados para o combate nesta classe.`
    }   
]