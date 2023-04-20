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
        resposta: `São nêutrons que estão em equilíbrio térmico com o meio, na mesma faixa de energia.`
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
        K<sub>1</sub> = 1- (C<sub>2</sub>/C<sub>1</sub>(1-K<sub>2</sub>)) = 1-(2(1-0,99)) = 0,98
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
        resposta: ` <img src="./imagens/questoes/equacao-inhour.svg" class="imgFormula" alt="equação de inhour"> <br>
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
        resposta: `<img src="./imagens/questoes/equacao-inhour-diferente.svg" class="imgFormula" alt="equação de inhour simplificada">`
    },
    {
        pergunta: `O que é um reator pronto crítico? Qual a condição de pronto criticalidade em pcm do Reator IPEN/MB-01? <br>
        Dados:
        β<sub>IPEN/MB-01</sub> = 0,00733
        `,
        resposta: `É o reator que se torna crítico apenas com a contribuição dos nêutrons prontos. <br>
        IPEN/MB-01:Condição de pronto crítico é &rho; = 733 pcm.
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
        Portanto 1 fissão/s = 3,2x10<sup>-11</sup> J/s ⟶1 W = 3,12x10<sup>10</sup> fissões/s.
        `
    },
    {
        pergunta: `Quantas colisões um nêutron nascido com 2 MeV de energia precisa para atingir seu equilíbrio a 20,4°C e a 300°C? <br>
        Dados: <br>
        Constante de Boltzmann = K = 8,6x10<sup>-5</sup> eV/K <br>
        T(K) = t(°C) + 273 <br>
        ξ= 0,92 para a água.
        `,
        resposta: `N = ln(E<sub>0</sub>/E<sub>1</sub>)/ξ <br>
        N<sub>1</sub> = ln(2x10<sup>6</sup>/0,025)/0,92 = 20 colisões. <br>
        N<sub>2</sub> = ln(2x10<sup>6</sup>/0,049)/0,92 = 19 colisões
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
        resposta: `Quando o reator estiver crítico e, por alguma razão, for inserida uma reatividade igual, ou maior, em magnitude, à fração efetiva média de nêutrons atrasados.`
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
        pergunta: `Nas ações de carregamento e descarregamento do núcleo ou qualquer outro tipo de manuseio de combustível são utilizadas ferramentas especiais pelos operadores. Descreva o funcionamento de tais ferramentas.`,
        resposta: `No caso de elementos combustíveis do tipo placa, a movimentação para inserção ou retirada do núcleo acontece via um dispositivo mecânico denominado braço articulado.
        Para operações de manuseio dos ECs durante o carregamento ou descarregamento nas covas de armazenamento e no núcleo do Conjunto é usada uma ferramenta especial. A ferramenta de manuseio se acopla no eixo de içamento do EC.
        Qualquer movimentação de EC no Conjunto Crítico é individual, não sendo manuseado mais que um elemento por vez. O armazenamento de ECs em uma das covas de armazenamento existentes no piso do hall do reator é feito numa estrutura metálica composta por placas perfuradas, na forma de um engradado. Este engradado, carregado com os ECs pode ser movimentado até um suporte localizado próximo ao tanque do moderador, fixado à plataforma metálica da Célula Crítica. O número máximo de ECs que podem ser transportados no engradado é de 8 ECs.
        `
    },
    {
        pergunta: `Como é feito o manuseio de uma vareta combustível?`,
        resposta: `Qualquer movimentação de vareta combustível no conjunto crítico é individual, não sendo manuseada mais que uma vareta por vez, utilizando ferramentas de manuseio apropriadas.`
    },
    {
        pergunta: `Cite os procedimentos para manuseio no núcleo (os dez mandamentos).`,
        resposta: `Para qualquer manuseio no núcleo com movimentação ou não de varetas os procedimentos são os seguintes: <br><br>
        1)	Quando se tratar de uma montagem experimental no núcleo, deve se ter uma rotina do experimento que será realizado com as devidas aprovações, indicando passo a passo as etapas das atividades.<br><br>
        2)	A mesa de controle deve estar ligada e o sistema de ventilação e condicionamento em operação.<br><br>
        3)	Todos os monitores de radiação devem estar ligados e de prontidão.<br><br>
        4)	A fonte de nêutrons de partida do reator deve estar na sua blindagem apropriada.<br><br>
        5)	O manuseio no núcleo só pode ser feito por um operador licenciado ou acompanhado deste.<br><br>
        6)	O manuseio nunca pode ser feito apenas por uma só pessoa, deve se ter pelo menos duas pessoas no manuseio.<br><br>
        7)	A proteção radiológica deve ter sido avisada com antecedência e, durante o manuseio ela deve estar presente com seus respectivos aparatos de medição da radiação.<br><br>
        8)	Todas as pessoas participantes bem como os observadores devem na entrada da célula crítica, trocar o seu crachá o qual é substituído por um dosímetro de bolso individual apropriado fornecido pela Proteção Radiológica.<br><br>
        9)	O sistema de incêndio e de comunicação devem estar operáveis.<br><br>
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
        resposta: `14 covas existentes no interior da célula crítica podem ser utilizadas para armazenamento de combustível. Estas covas medem 40x40x230cm e estão separadas entre si de 100 cm. Cada cova suportará no máximo 170 varetas constituídas por um arranjo de 15x15 furos ou 8 elementos combustíveis do tipo placa. <br>
        Esta configuração é subcrítica mesmo se as covas forem acidentalmente inundadas.
        `
    },
    {
        pergunta: `Descreva brevemente a Área de Estocagem de combustíveis.`,
        resposta: `•	É composta por 14 covas de dimensões (40x40x230cm) separadas centro a centro por 1 metro. <br>
        •	Somente 5 das 14 covas contém engradados metálico para conter as varetas sendo uma das cinco reservada para varetas danificadas. <br>
        •	Cada cova estocará “a seco” no máximo 170 varetas combustíveis ou 8 conjunto de placas. Possuem dreno para evitar alagamento em caso de acidentes. <br>
        •	Cada engradado é removível das covas e formado por uma estrutura de aço inox, contendo placas espaçadoras formando um arranjo 15x15 de furos de diâmetro 11 mm e espaçamento centro a centro de 12,9mm. Embora a capacidade seja de 225 varetas a quantidade máxima para transporte é de 170 varetas ou 8 placas de elemento combustível. <br>
        •	O engradado só pode permanecer: <br>
        -Dentro da cova. <br>
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
        resposta: `O primeiro carregamento de uma configuração do núcleo de um reator é sempre uma operação cercada de rígidos critérios de segurança, principalmente devido a algumas incertezas quanto ao arranjo de elementos combustíveis, moderador e posição das barras de controle que resulta em um reator crítico. Os cálculos do fator de multiplicação efetivo (k-efetivo), são realizados com precisão de ±0,5% em Δk/k.
        O carregamento do núcleo do reator IPEN/MB-01 foi realizado com a introdução de elementos combustíveis. Os resultados apresentados são os resultados previstos da quantidade de combustível necessária para se atingir a criticalidade. A estratégia de carregamento do núcleo do reator IPEN/MB-01 foi dividida em 14 etapas.
        A etapa inicial começou com dois elementos combustíveis, nas etapas seguintes foram acrescentados dois ECs por etapa até a etapa 7 e na etapa 8 foi acrescentado mais um EC. Para as etapas posteriores foram acrescentados os elementos combustíveis desmontáveis nos cantos da configuração, elementos A-1, A-5, D-1 e D-5.
        Nesta fase do carregamento, os EC-Ds permitem a inserção de placas combustíveis individuais. Esta estratégia de carregamento visa inserir uma menor quantidade de reatividade para se determinar com precisão a massa crítica.
        A segunda fase do carregamento começou na etapa 9, onde os quatro EC-Ds foram modelados com apenas uma placa combustível de forma simétrica e nas etapas posteriores foram acrescentadas uma placa por EC-D até a etapa 14. O sentido de inserção das placas nos EC-Ds. Na última etapa o reator ainda está subcrítico, mas muito próximo da criticalidade.
    
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
        pergunta: 'Relacione os principais absorvedores de nêutrons (alguns deles denominados venenos) existentes em reatores nucleares, descrevendo a atuação deles no Reator IPEN/MB-01.',
        resposta: `-Boro: O Reator IPEN/MB-01, não utiliza boro ou composto de boro diluído no moderador para controle da reatividade do núcleo. Ele foi usado na forma de solução de ácido bórico em experimentos apenas.<br><br>
        O controle de reatividade do núcleo é feito por meio da inserção de quatro elementos absorvedores de nêutrons, de Háfnio. Cada elemento absorvedor de nêutrons, também denominado de Barra de Controle (BC), é constituído basicamente por uma placa de háfnio e uma haste de aço inoxidável, a qual servirá de ligação da mesma com o Mecanismo de Acionamento de Barras (MAB).<br>
        Cádmio e Índio: Constituintes de uma liga de Ag, Cd e In para a barra absorvedora de controle. Eventualmente é utilizado como em experimentos de determinação de fluxo de nêutrons térmicos e epitérmicos.<br><br>
        Xe<sub>135</sub> É produzido direto das fissões bem como pelo decaimento beta do I<sub>135</sub>, que por sua vez é produzido direto das fissões ou por decaimento beta do Te<sub>135</sub>. Sua geração é desprezível no Reator IPEN/MB-01 devido ao baixo fluxo de nêutrons da Instalação.<br><br>
        Sm<sub>149</sub> não é produzido diretamente da fissão mas sim aparece como decaimento do Neodímio-149 que decai para Promécio-149 que por sua vez decai para o samário-149 que é estável. O Promécio-149 também é oriundo direto da fissão.
        Como o Xe<sub>135</sub>, a produção do Sm<sub>149</sub> é desprezível no Reator IPEN/MB-01.
        `
    },
    {
        pergunta: 'Descreva o núcleo atual do Reator IPEN/MB-01.',
        resposta: `- é do tipo tanque aberto <br><br>
        - Possui arranjo de 4 x 5 composto por 19 elementos combustíveis tipo placa de Siliceto de Urânio (U3Si2) enriquecido a 19,75 % e um bloco de alumínio central <br><br>
        -  4 caixas refletoras de água pesada (D<sub>2</sub>O).  <br><br>
        - Todo o conjunto crítico está inserido num tanque moderador de água leve, sendo previsto operar a potência nominal máxima de 100 watts. <br><br>
        - 21 placas de combustíveis por elemento (19 móveis e 2 fixas nas extremidades)
        .
        `
    },
    {
        pergunta: 'Descreva a constituição de uma placa combustível do Reator IPEN/MB-01.',
        resposta: `-O cerne de cada placa combustível é constituído por uma dispersão de siliceto de urânio numa matriz de alumínio (U3Si2-Al), enriquecido a 19,75% em peso de U235 e encamisado por um revestimento de alumínio (Al 6061). <br><br>
        -Contaminação superficial da placa combustível: não deve exceder a 10 µg U/placa
        .
        `
    },
    {
        pergunta: `Como é constituída cada barra de controle do Reator?`,
        resposta: `Cada barra de controle é constituída basicamente de uma placa de Háfnio e uma haste de aço inoxidável, a qual servirá de ligação da mesma com o mecanismo de acionamento de barras. `
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
        resposta: `A fonte utilizada é do tipo Amerício-Berílio (241Am-Be) de 1 Ci (3,7x10<sup>10</sup> Bq), que emite nêutrons a uma taxa de aproximadamente 2,2x10<sup>6</sup> nêutrons/s. A fonte utilizada é amerício berílio. Antes da partida do reator ela fica alojada numa blindagem localizada no pavimento inferior, abaixo do tanque do reator. Esta fonte está fixada num carrinho que pode ser movimentado verticalmente desde sua blindagem até um local bem próximo ao núcleo do reator. Este acionamento é feito remotamente da sala de controle.`
    },
    {
        pergunta: `Preencha uma tabela contendo as principais características do núcleo (de referência) do Reator IPEN/MB-01.`,
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
                    Refletor
                </td>
                <td>
                    Água pesada/Água leve
                </td>
            </tr>
            <tr>
                <td>
                    Combustível (material e enriquecimento em U<sub>235</sub>)
                </td>
                <td>
                    U<sub>3</sub>Si<sub>2</sub> 19,75%
                </td>
            </tr>
            <tr>
                <td>
                    Forma do combustível tipo placa (revestido em alumínio) 
                </td>
                <td>
                    Dispersão de siliceto de urânio em matriz de alumínio (U<sub>3</sub>Si<sub>2</sub>-Al)

                </td>
            </tr>
            <tr>
                <td>
                    transversal do núcleo em mm
                </td>
                <td>
                    325x452,5
                </td>
            </tr>
            <tr>
                <td>
                    Altura ativa do núcleo em mm
                </td>
                <td>
                    615
                </td>
            </tr>
            <tr>
                <td>
                    Nº total de elementos combustíveis
                </td>
                <td>
                    19
                </td>
            </tr>
            <tr>
                <td>
                    Nº total barras de controle de neutrôns
                </td>
                <td>
                    4
                </td>
            </tr>
            <tr>
                <td>
                    Arranjo do núcleo
                </td>
                <td>
                    4x5
                </td>
            </tr>
                <td>
                    Reatividade disponível no núcleo pcm
                </td>
                <td>
                    Aprox. 3511
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
        pergunta: `Dê as principais características de uma placa combustível tais como: <br>
        a)	Comprimento Total.<br>
        b)	Comprimento Ativo.<br>
        c)	Número de placas.<br>
        d)	Enriquecimento em U<sub>235</sub>.
        `,
        resposta: `a)	Comprimento Total em mm = 1045,0.<br>
        b)	Comprimento Ativo em mm = 615,0.<br>
        c)	Número de placas combustível = 21 placas por elemento.<br>
        d)	Enriquecimento em U235 = 19,75% em peso
        `
    },
    {
        pergunta: `Quais as velocidades normal e reduzida das barras de segurança?`,
        resposta: `vN = 2mm/s <br>
        vR = ¼ vN`
    },
    {
        pergunta: `Quanto se ganha em reatividade quando se transforma o núcleo de referência retangular 26x28 contendo 680 varetas combustíveis para o núcleo cilindrizado com as mesmas varetas combustíveis, inclusive mesmo número de vareta?`,
        resposta: `Não é mais possível mudar a configuração do núcleo em termos de posicionamento de elementos combustíveis.`
    },
    {
        pergunta: `Foram estipulados ou considerados os limites termo-hidráulicos ao núcleo do Reator IPEN/MB-01 nos critérios de projeto?`,
        resposta: `Não, como o reator trabalha em baixas potências, para fins neutrônicos, não ocorre realimentações de temperatura significativas.`
    },
    {
        pergunta: `Qual a composição em porcentagem dos materiais constituintes das barras de controle? Qual o material do encamisamento destas varetas absorvedoras?`,
        resposta: `Barra de controle com material absorvedor Hf com especificação de teor de Zr < 2% e revestimento de Al (6061). 
        `
    },
    {
        pergunta: `O que significa “MAB” e qual a sua função?`,
        resposta: `MAB = Mecanismo de Acionamento das Barras
        É um sistema que propicia a movimentação das barras de controle em relação ao comprimento ativo do núcleo..
        `
    },
    {
        pergunta: `Faça um desenho esquemático do núcleo indicando os posicionamentos das barras absorvedoras.`,
        resposta: `<img src="./imagens/questoes/nucleo.svg" class="desenho-questao" alt="nucleo-ipenmb01">`
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
        O sistema é constituído por 3 captores, cabos de aço e 35mm<sup>2</sup>  nas descidas às malhas de aterramento, caixas suspensas para a medição da resistência terra e malha de aterramento constituída de cabos de cobre nu.
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
        resposta: `<img src="./imagens/questoes/esquematico-STAA.svg" class="desenho-questao" alt="esquemático do STAA">`
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
        resposta: `Enchimento rápido - 9,5cm/min, pelas bombas de enchimento rápido B202A/B <br><br>
        Enchimento lento - 2,6cm/min, pelas bombas do sistema de recirculação de água B201A/B
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
        resposta: `O conjunto crítico instalado se destina à elaboração de um protótipo neutrônico do núcleo do Reator Multipropósito Brasileiro (RMB). Este conjunto é moderado a água leve, e possibilitará a verificação experimental de métodos de cálculo, estruturas de células e de malhas do reator, da efetividade das barras de controle e segurança além da resposta do núcleo a inserções de reatividade.`
    },
    {
        pergunta: `Qual o moderador e o combustível utilizado no Reator IPEN/MB-01? Qual o enriquecimento do combustível?`,
        resposta: `O moderador utilizado é a água leve.
        O Combustível utilizado é o U<sub>3</sub>Si<sub>2</sub> enriquecido a 19,5%.
        `
    },
    {
        pergunta: `Qual o material absorvedor utilizado nas barras de controle do Reator IPEN/MB-01?`,
        resposta: `Háfnio.
        `
    },
    {
        pergunta: `Com relação à fonte de nêutrons usada para a partida do Reator IPEN/MB-01, pergunta-se: <br><br>
        a)	Qual é o tipo desta fonte?<br>
        b)	Qual a sua atividade em Curie?<br>
        c)	Qual é a sua meia vida?<br>
        d)	Qual é o fluxo de nêutrons emitido em 4π?<br>
        `,
        resposta: `a.	Amerício Berílio <br><br>
        b.	A = 1 Curie ou 3,7x10<sup>10</sup> Bequerel. <br><br>
        c.	T<sub>1/2</sub> = 432,6 anos <br><br>
        d.	2,2x10<sup>6</sup> n/s
        `
    },
    {
        pergunta: `O Sistema de Recirculação e Exaustão da Célula Crítica são barreiras físicas que impedem a liberação de materiais radioativos para o meio ambiente. Qual a redundância existente nestes sistemas?`,
        resposta: `Tanto a recirculação quanto a exaustão possuem dois sistemas independentes (A e B) que podem efetuar as mesmas funções e são alimentados por CCMs independentes, ou seja, na falha de um deles, o outro executa sua função de segurança.`
    },
    {
        pergunta: `Por que o Sistema de Exaustão A e o Sistema de Exaustão B do sistema de ventilação S1 são alimentados pelo CCM#3 e CCM#4 respectivamente, e não por apenas um deles?`,
        resposta: `“Criterio de falha única”. Esta exaustão garante que, na eventualidade de um vazamento da Célula Crítica para a área de laboratório e salas provocadas por uma elevação brusca de pressão, este seja removido pela chaminé sem incorrer no risco de alcançar a Sala de Controle.`
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
        resposta: `É uma estrutura de concreto protendido na forma quadrada com dimensões 14 m por 14 m com três pavimentos, 21 metros de altura, paredes de 1,5 m de espessura, até a altura de 6 m acima do nível térreo passando para 0,75 m até a laje de cobertura cuja espessura é de 0,5m. Essas paredes têm como funções principais a blindagem biológica e o confinamento do ambiente interno para impedir a liberação não controlada de gases radioativos.`
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
        pergunta: `Na configuração normal do núcleo  do Reator IPEN/MB-01, o reator fica crítico a 21°C com todas as Barras de Controle igualmente retiradas em 64,23%. Por que não se configura o núcleo com menor número de placas de tal forma que elas ficassem em 100% retiradas?`,
        resposta: `Porque sempre deve existir excesso de reatividade suficiente para manobra do K<sub>ef</sub> e, portanto da potência.`
    },
    {
        pergunta: `Existe formação do veneno Xe<sub>135</sub> no Reator IPEN/MB-01? Em caso afirmativo, ele exerce influência na reatividade do núcleo do reator?`,
        resposta: `Sim, porque o Xe<sub>135</sub> é produzido tanto direto das fissões quanto da cadeia de decaimento do Te<sub>135</sub> e do I<sub>135</sub> que também são produtos diretos das fissões, no entanto, a quantidade produzida é desprezível e praticamente não altera a reatividade do núcleo em razão do baixíssimo fluxo neutrônico do reator.`
    },
    {
        pergunta: `Quais os principais métodos de calibração de uma barra de controle?`,
        resposta: `Existem vários métodos sendo os mais utilizados os seguintes: <br><br>
        Método do Período Assintótico.<br>
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
        pergunta: `Descreva o funcionamento do Sistema de Dosagem de Boro.`,
        resposta: `Este sistema tem a função de preparar solução de boro para experimentos que necessitem a presença de boro dissolvido na água de moderação. A solução é obtida a partir da água proveniente do Tanque de Estocagem e de ácido bórico adicionado manualmente, até se obter a concentração desejada. Para solubilizar o ácido é usado um tanque de mistura provido de agitador e de resistência elétrica para aquecimento da água. A solução obtida neste tanque de mistura escoa por gravidade para o Tanque de Estocagem, de onde pode ser bombeada para o Tanque do Moderador`
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
        2.	Envio do tanque de retenção para rede de esgotos (águas pluviais).<br><br>
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
        resposta: `Máxima 90°C <br>
        Mínima 18°C
        `
    },
    {
        pergunta: `Existe a necessidade de remoção de calor do moderador devido à operação do Reator?`,
        resposta: `Não, pois o calor liberado decorrente de uma operação à potência de 100 W é desprezível.`
    },
    {
        pergunta: `O controle de reatividade no Reator IPEN/MB-01, além ser feito pelas barras de controle é feito também por adição ou remoção de solução de ácido bórico no moderador? Justifique.`,
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
        pergunta:`Existe queima no combustível do Reator IPEN/MB-01? Qual a importância desta queima no que se refere à troca de elementos combustíveis?`,
        resposta: `Sim, se há fluxo neutrônico, há queima, porém esta é desprezível para efeito prático,pelo fato da potência de operação ser bastante pequena. Mesmo que o Reator operasse continuamente em sua potência nominal levaria décadas para se evidenciar algum efeito de queima de combustível, portanto, não há necessidade de “troca” de elementos combustíveis.`
    },
    {
        pergunta:`No Sistema de Tratamento da Água de Alimentação (STAA) os valores limites impostos à condutividade, pH e concentração de cloretos são respectivamente <br><br>
        •	pH = 6,5 a 7,0<br>
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
        6)	Retira-se a primeira barra de controle até 64,23%.<br><br>
        7)	Retira-se a segunda barra de controle até 64,23%.<br><br>
        8)	Inicia-se o enchimento do TQ-201 usando as bombas de enchimento rápido até 70% do nível do tanque.<br><br>
        9)	Retira-se a terceira barra de controle até 64,23%.<br><br>
        10)	Retira-se a quarta barra de controle com bastante atenção observando-se os canais de período (normalmente não devem encurtar além de 50 segundos).<br><br>
        11)	Quando o reator se torna supercrítico o aumento de potência deve ser acompanhado cuidadosamente observando os canais de período e potência com boa tolerância (tolerância esta aceita pelo operador sênior de plantão).<br><br>
        12)	Efetua-se a mudança da faixa de partida para potência quando soar o alarme para tal.<br><br>
        13)	Ao chegar próximo da potência de 100 W o período de ser alongado para poder se atingir a potência de 100 W de forma suave.<br><br>
        14)	Ao atingir a potência de 100 W a barra de controle deve ser levemente inserida até que os períodos nos canais se tornem infinito e a potência estável.<br><br>
        15)	Em seguida passa-se o controle manual para o automático mediante botoeira apropriada.<br><br>
        16)	Dá-se o aviso de criticalidade através do alto falante, informando o horário e a potência
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
        resposta: `Primeira condição: O nível de potência alcance o valor de 0,1mW (denominado nível W).
        Segunda condição: Aguardar a potência alcançar 1mW (nível Y) e permanecer entre as potências de 1 - 2,2 mW durante 20 segundos até que a mudança de canal seja habilitada.
        Obs: Uma vez habilitada, a transferência da função de segurança deve ser realizada pelo operador para permitir a elevação da potência. O operador deve também desligar a alta tensão dos canais de partida para que eles não sejam danificados quando submetidos a um maior fluxo de nêutrons, devido ao aumento da potência.
        `
    },
    {
        pergunta:`Durante a redução de potência do reator, descreva como é efetuada a transferência da “função de segurança” dos canais de potência para os canais de partida.`,
        resposta: `a) Potencia <  Y (1 mW) apaga a tecla (POT > Y FAIXA POT). <br><br>
        b) Quando a potência do reator atinge o nível Z (1 mW > Z > 0,1 mW ), a alta tensão é religada nos detectores dos canais de partida, iniciando-se a contagem de 30 segundos do temporizador para calibração dos canais de partida. <br><br>
        c) Após os 30 segundos transferência automática para os canais de partida.<br><br>
        d) Se a potência do reator atingir o nível W antes de completar os 30 segundos, ocorrerá desligamento automático do reator por potência mínima nos canais de potência.
        
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
        pergunta:`Com a malha de partida “desabilitada” é possível movimentar a fonte de nêutrons do Reator IPEN/MB-01?`,
        resposta: `Não, por razões de segurança todos os itens da malha de partida devem estar satisfeitos`
    },
    {
        pergunta:`Com a malha de partida “desabilitada” é possível acionar as bombas de enchimento lento B201A/B ou de enchimento rápido B202A/B com a finalidade de encher o tanque do moderador?`,
        resposta: `Não, pois todos os itens da malha de partida, por questão de segurança devem estar satisfeitos.`
    },
    {
        pergunta: `Explique por que é necessário subir totalmente as duas barras de controle antes de iniciar o enchimento do tanque do moderador.`,
        resposta: `Após inserir a fonte de nêutrons, o passo seguinte é erguer duas barras de controle quaisquer, uma por vez, acima de uma posição de referência P1, de modo a assegurar certa margem de desligamento do reator por queda de barras, durante o processo de enchimento do tanque do moderador. Nessa condição, duas barras não inseridas bloqueiam a movimentação das demais barras que permanecem inseridas`
    },
    {
        pergunta: `Estando a partida do Reator “habilitada”, porém com a fonte de nêutrons inserida na blindagem, é possível energizar os magnetos das barras absorvedoras?`,
        resposta: `Não, é uma condição necessária (partida habilitada), porém não suficiente. Estando a fonte na blindagem, NÃO é possível energizar os magnetos, mesmo que outras condições estejam satisfeitas`
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
                    <td>B<sub>10</sub></td>
                    <td>Pulso (cps)</td>
                </tr>
                <tr>
                    <td>Potência # 3 e #4</td>
                    <td>CIC Boro</td>
                    <td>Corrente (Ampères)</td>
                </tr>
                <tr>
                    <td>Potência # 7 e #8</td>
                    <td>CINC Boro</td>
                    <td>Corrente (Ampères</td>
                </tr>
                <tr>
                    <td>Potência #10</td>
                    <td>B<sub>10</sub></td>
                    <td>Pulso (cps)</td>
                </tr>
                <tr>
                    <td>Lineares #5 e #6</td>
                    <td>CINC Boro</td>
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
        resposta: `São sistemas que não permitem que haja uma liberação descontrolada de produtos radioativos para o meio ambiente externo, mesmo havendo perda de integridade do combustível. No Reator IPEN/MB-01, os sistemas de segurança para controle de liberação de materiais radioativos são: <br><br>
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
                    <td>P &ge; 110 mW / P &ge; 2,2 mW</td>
                    <td>Scram de magnetos</td>
                </tr>
                <tr>
                    <td>Desligamento por sobrepotência</td>
                    <td>P &ge; 120 mW / P &ge; 2,4 mW</td>
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
                    <td>0,1 mW (mudança de canais, início da faixa de potência), 1 mW (mudança da faixa de partida para potência), 2,2 mW (SCRAM de magnetos) e 2,4 mW (SCRAM de válvulas</td>
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
        resposta: `Alta tensão nos detectores dos canais 1,2 e 9 insatisfatória.  <br><br>
        Canais de potência não ativados.<br><br>
        Primeira e segunda porta de acesso à célula crítica (aberta).<br><br>
        Porta deslizante (concreto) aberta.<br><br>
        Temperatura do tanque moderador abaixo de 18°C.<br><br>
        Tensão de alimentação dos bastidores 1, 2, 3, 4, 7, 8, 9 e 10 insatisfatória.<br><br>
        Tensão de alimentação do bastidor dos comparadores insatisfatória.  <br><br>
        Alta tensão nos canais de potência 3, 4, 7, 8 e 10 insatisfatória.<br><br>
        Pressão na célula Crítica (alta ≥-50pascal).<br><br>
        Pressão no sistema pneumático (baixa < 4kgf/cm2).<br><br>
        Todas as barras inseridas não satisfeita.
        
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
        pergunta: `Qual é a ordem de grandeza da taxa de reatividade durante o processo de enchimento do tanque do moderador (região 75% da parte ativa do núcleo), nos seguintes modos de operação: <br>
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
        resposta: `O sistema de isolamento da célula crítica, os sistemas de condicionamento de ar e ventilação (S1 e S3) e o sistema de esvaziamento rápido do tanque do moderador são dispositivos técnicos incorporados ao projeto de forma a permitir uma segurança adicional.
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
                    <li>- Carregamento e Operação com elementos Combustíveis em Posições Incorretas.</li>
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
                    <li>- Falha no Revestimento do Elemento Combustível.</li>
                    <li>- Falha no revestimento das placas combustíveis
                    <li>- Manuseio de Elementos Combustíveis.</li>
                    <li>- Manuseio do elemento combustível</li>
                    <li>- Manuseio de varetas combustíveis</li>
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
                        Retirada Incontrolada do Elemento de Controle <br>
                        Retirada Incontrolada de Barras de Controle
                    </td>
                </tr>
                <tr>
                    <td>
                        II - Liberação de Radiação de Sistemas ou Componentes
                    </td>
                    <td>
                        Manuseio do Engradado de Varetas Combustíveis<br>
                        Manuseio de Varetas Combustível
                    </td>
                </tr>
                <tr>
                    <td>
                        III - Eventos Induzidos por Falha Humana
                    </td>
                    <td>
                        Falha ou Operação Incorreta com Aparato Experimental<br>
                        Falha ou Operação Incorreta com Dispositivo Experimental
                    </td>
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
        3)	Para interromper a excursão de potência o sistema de proteção do reator inibe a sustentação das barras de controle, que então são inseridas na região ativa do núcleo, por ação da gravidade. Subsequentemente, o sistema de proteção pode ainda provocar a drenagem da água leve contida no tanque principal do reator.
        Os limiares para atuação do sistema de proteção do reator são:
        <br>
        a)	Com o reator na faixa de partida, o sinal para desligamento dos magnetos das barras de controle é ativado quando a potência nuclear atinge o limiar de 2,2mW;;<br>
        b)	Com o reator na faixa de partida, o sinal para abertura das válvulas de drenagem do tanque de água leve é ativado quando a potência nuclear atinge o limiar de 2,4mW<br>
        c)	Com o reator na faixa de potência, o sinal para desligamento dos magnetos das barras de controle é ativado quando a potência nuclear atinge o limiar de 110W;<br>
        d)	Com o reator na faixa de potência, o sinal para drenagem do tanque de água leve é ativado quando a potência nuclear atinge o limiar de 120W;<br>
        e)	O sinal para desligamento dos magnetos das barras de controle é ativado também quando potência do reator cresce com período menor o igual a 17s;<br>
        f)	O sinal para drenagem do tanque de água leve é ativado também quando a potência do reator cresce com período menor ou igual a 14s. <br><br>
        
        O operador também pode acionar o desligamento do Reator IPEN/MB-01 em qualquer instante do acidente <br><br>
        
        4)	Uma falha de equipamento e/ou de operação provoca a retirada das barras de controle e a inserção de reatividade na taxa inicial de 32 pcm/s. A potência nuclear cresce até atingir o limiar de desligamento por sobrepotência e/ou por período curto. A atuação do sistema de proteção provoca o desligamento do reator e deixa a instalação em condição segura.<br><br>
        
        5)	Conclusão da análise do acidente<br>
        A atuação do sistema de proteção do reator é suficiente para interromper a excursão de potência provocada pela retirada não controlada das barras de controle, mantendo a integridade dos elementos combustíveis e deixando a instalação em condição segura, mesmo na ocorrência falha que impeça a queda da barra de controle mais reativa
        `
    },
    {
        pergunta: `Descreva detalhadamente o evento limitante da classe II quanto: <br><br>
        1)	Denominação do Evento<br>
        2)	Definição do Acidente<br>
        3)	Identificação das Causas e Descrição do Acidente<br>
        4)	Consequências Radiológicas
        `,
        resposta: `1) Falha no Revestimento do Elemento Combustível Tipo Placa devido ao Manuseio do Engradado de Elementos Combustíveis. <br><br>

        2) No processo de carga e descarga do núcleo tipo placa do Reator IPEN/MB-01, será feita a movimentação dos elementos combustíveis via engradados construídos especificamente para esse procedimento. Um acidente durante a operação de troca e estocagem dos elementos combustíveis foi postulado e analisado. Segundo a Instrução de Trabalho “Manuseio de Elementos Combustíveis Tipo Placa” (IT-CEN-CENFU.61-00) /6/, os elementos combustíveis serão acondicionados em engradados com capacidade total para 8 elementos.<br><br>
        
        3) Este acidente com manuseio do combustível no Edifício do Reator IPEN/MB-01 é postulado como sendo decorrente da queda de um engradado com 8 elementos combustíveis, durante o seu transporte para as covas de estocagem de combustível irradiado, resultando na avaria do revestimento das placas combustíveis e a liberação dos produtos de fissão para a Célula Crítica e, posteriormente, através do Sistema de Condicionamento de Ar e Ventilação da Célula Crítica, para a atmosfera.<br><br>
        
        4) As doses estimadas para este acidente são muito inferiores aos limites máximos permissíveis pela norma CNEN-NE 3.01 para exposição interna na tireoide (500 mSv para trabalhador e 50 mSv para indivíduo do público), e para dose equivalente efetiva (50mSv para trabalhador e 1mSv para indivíduo do público. As doses radiológicas a 50 m do Reator IPEN/MB-01 (aproximadamente a distância da cerca de proteção física da planta) são de aproximadamente 6,22x10-3 mSv para doses na tireoide devido a inalação, valores inferiores a 10-3 mSv para a dose equivalente de corpo inteiro devido a inalação, e inferiores a 10-3 mSv para dose por exposição direta devida a imersão na pluma.
        
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
        Cerca de 20 barras do arranjo retangular padrão do núcleo (4x5) foram removidas para montagem de um experimento. Ao concluir esta operação, o operador retornou estas barras para o núcleo. No entanto, ele confundiu a sequência de retorno e as 20 barras foram colocadas em posições diferentes das originais. Pergunta-se:<br><br>
        a)	Qual a classe de acidente que esta desatenção poderia levar?<br>
        b)	Haveria algum risco severo em razão deste equívoco? Justifique.<br>
        c)	Qual seria o evento iniciador limitante desta classe?<br>
        d)	Qual seria a ações que poderia evitar esta situação?<br>

        `,
        resposta: `a)	Ca)	Classe I (Carregamento e Operação com varetas combustíveis em posição incorreta) <br><br>
        b)	Como os EC são idênticos em composição e enriquecimento, eles podem ser colocados em qualquer posição da placa matriz do núcleo. A simples observação visual do núcleo pode indicar uma posição errônea de um elemento combustível durante o carregamento. Qualquer anomalia de reatividade do núcleo é detectada e corrigida via obediência rígida dos procedimentos de carregamento. Não existe possibilidade de se ter anomalias de reatividade ou distribuição de fluxos de nêutrons durante a operação do reator devido a esse acidente.<br><br>

        c)	Retirada incontrolada de elemento de controle.<br><br>

        d)  As ações de proteção contra esse acidente são as vistorias durante o carregamento e os procedimentos de carregamento que monitoram a reatividade do núcleo. Qualquer condição anômala de reatividade do núcleo é detectada durante essas etapas antes da operação do reator.
        `
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Durante o processo para alcançar a criticalidade do reator, a última barra de controle por alguma razão técnica no MAB (mecanismo de acionamento das barras) disparou e o operador não conseguiu detê-la. Pergunta-se:<br><br>
        a)	O que aconteceria com a reatividade do reator?<br>
        b)	Qual a sua classe de evento?<br>
        c)	Quais as proteções existentes que impediriam que esta ação ocorresse?<br>
        d)	Este é um evento limitante?<br>

        `,
        resposta: `a)   Aumentaria constantemente a uma taxa de 8,6 pcm/s e, portanto, abaixo dos 20 pcm/s da especificação técnica de projeto. <br><br>
        b)	Classe I <br><br>
        c)	Este evento pode ocorrer tanto na partida como em potência do reator. 
        As ações de proteção atuam da seguinte forma: <br>
        Na faixa de partida os sistemas de desligamento são potência de primeiro nível ou 2,2 mW ou período de primeiro nível (17s) que provoca a queda das barras absorvedoras e potência de segundo nível 2,4 mW (dreno do TQ201) ou período de segundo nível (14s) que esvazia o TQ-201.<br>
        Na faixa de potência os sistemas de desligamento são potência de primeiro nível ou 110 W ou período de primeiro nível (17s)que provoca a queda das barras absorvedoras e potência de segundo nível 120 W (dreno do TQ201) ou período de segundo nível (14s)que esvazia o TQ-201.<br><br>
        d)	Sim
        
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
        resposta: `O desligamento do Reator ocorre primeiro por período se a potência do reator estiver no início do acidente, a potência estando mais próxima dos 110 W atingirá este valor primeiro do que o período de 17 s. Este valor foi determinado teoricamente e posteriormente constatado experimentalmente.`
    },
    {
        pergunta: `Considere a seguinte situação hipotética, porém possível de ocorrer: <br>
        Suponha que no manuseio de um elemento combustível a cordinha da ferramenta arrebente deixando o elemento combustível escapar para o fundo do tanque ou nos arredores deste tanque. Pergunta-se:<br>
        a)	Qual a classe deste evento iniciador.<br>
        b)	Quais a consequências radiológicas deste evento?<br>
        c)	Ele é um evento limitante?<br>
        `,
        resposta: `a)	Classe II (Manuseio do elemento combustível) <br>
        b)	As doses equivalentes estimadas são muito menores aos limites máximos permissíveis pela norma CNEN-NE 3.01 para a dose equivalente efetiva.<br>
        c)	Não.
        `
    },
    {
        pergunta: `O que é um acidente básico de projeto? Cite 3 um acidente básico de projeto no reator IPEN/MB-01.`,
        resposta: `Em inglês Design Basic Accident (acidente básico de projeto) ou Maximum Credible Accident (máximo acidente crível) É um acidente postulado (teórico) para o qual uma Instalação Nuclear deve ser projetada e construída para resistir sem perdas dos sistemas, estruturas e componentes necessários para assegurar o bem estar e segurança do público.
        Acidentes do reator IPEN/MB-01: <br><br>
        Classe 1: falha no subsistema de controle de reatividade; injeção de água fria no núcleo; aumento de moderação por falha estrutural; carregamento e operação com elementos combustíveis em posição incorreta; e retirada incontrolada da barra de controle.<br><br>
        Classe 2: falha ou vazamento no sistema de esgoto quente; falha em tanques de armazenamento de líquidos; falha no revestimento da vareta combustível; manuseio de varetas combustíveis; falha no revestimento das placas combustíveis; e manuseio do elemento combustível.<br><br>
        Classe 3: movimento incorreto da fonte de nêutrons; presença indevida de pessoas na célula crítica; perda de potência elétrica; e falha ou operação incorreta com aparato experimental.

        `
    },
    {
        pergunta: `Qual o acidente mais provável de ocorrer no Reator IPEN/MB-01?`,
        resposta: `Queda de uma placa durante manuseio no núcleo.`
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