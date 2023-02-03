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
        resposta: `<img src="/provalicenciamento/imagens/questoes/Imagem1.png" id="imgQuestao">`
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
    }
]