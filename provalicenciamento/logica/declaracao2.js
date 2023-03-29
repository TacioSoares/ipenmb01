const secaoF = [
    {
        pergunta: `O núcleo de referência do Reator IPEN/MB-01 é constituído por 680 varetas combustíveis arranjados numa configuração retangular 26x28. Ela pode ser alterada para outras geometrias ou também por inserção de materiais experimentais, que geralmente são absorvedores ou espalhadores de nêutrons, exemplo do Gd<sub>2</sub>O<sub>3</sub>, Cd, Cu, Aço inox, etc. <br>Pergunta-se:<br>
        Quais os procedimentos administrativos e operacionais para tais alterações?
        `,
        resposta: `Para se alterar a geometria do núcleo por remanejamento de varetas combustíveis, ou por remoção de varetas combustíveis ou por troca ou adição de elementos especiais, tais como varetas de materiais diversos, é necessário efetuar os seguintes procedimentos: <br><br>
        1)	O interessado deve fazer uma proposta de trabalho ao responsável pela Instalação, que deve ser aprovada esclarecendo o motivo e o escopo deste trabalho.<br><br>
        2)	O interessado deve fazer um relatório esclarecendo o escopo da alteração fornecendo detalhadamente informações teóricas baseadas em cálculos ou metodologias de cálculos já consagrados.<br><br>
        3)	Este relatório pode ser feito por uma pessoa (por exemplo, um pesquisador ou por um aluno orientado por um pesquisador da Área, ou mesmo por um membro do grupo de operação que deseja fazer a alteração).<br><br>
        4)	Este relatório passa por um comitê de revisão de segurança que poderá aprovar ou solicitar esclarecimentos adicionais ao autor.<br><br>
        5)	O relatório se aprovado é informado ao interessado.<br><br>
        6)	As alterações e manuseios que serão efetuados, só poderão ser feitos pela equipe de operação coordenada por um operador sênior do Reator.<br>
        Quando as alterações envolvem condições não pertinentes às especificações técnicas de projeto o processo é mais complexo e envolve autorização da CNEN e o procedimento para tal deve seguir os passos da “Autorização para Alteração de Projeto”.
        `
    },
    {
        pergunta: `Quais os procedimentos iniciais para ligar o Reator IPEN/MB-01 ou “fazer o start up” em condições normais de operação?`,
        resposta: `Os procedimentos iniciais para ligar o Reator são os seguintes: <br><br>
        a)	Preencher a capa da “Lista de verificação inicial e final de operação do reator IPEN/MB-01” colocando o número da operação, o número da configuração do núcleo a potência da respectiva operação, a data, a finalidade da operação e as assinaturas dos supervisores do reator e da proteção radiológica.<br>
        b)	Preencher todos os itens da “Verificação Inicial” rubricando cada item e identificando tais rubricas claramente no rodapé da folha.<br>
        c)	Preencher o cabeçalho da “Folha de Dados de Operação do Reator IPEN/MB-01”, indicando a data, potência, número da operação e configuração os nomes do supervisor, operador 1 e operador 2.<br>
        d)	Dar o aviso de início de operação através do alto-falante, proceder às anotações adequadas na folha de dados das principais ações operacionais do operador.
        `
    },
    {
        pergunta: `Quais os procedimentos para se criticalizar o Reator em condições normais de operação?`,
        resposta: `a)	Uma vez concluído a lista de verificação inicial, efetuar os itens a seguir. <br><br>
        b)	Subir uma barra de controle até 64,23%, de acordo com o roteiro experimental previamente definido<br><br>
        c)	Subir uma segunda barra de controle até 64,23%, de acordo com o roteiro experimental previamente definido<br><br>
        d)	Encher o tanque do moderador TQ-201 até o nível operacional.<br><br>
        e)	Subir uma terceira barra de controle até 64,23%, de acordo com o roteiro experimental previamente definido<br><br>
        f)	Subir a última barra de controle até a posição de criticalidade, de acordo com o roteiro experimental previamente definido.<br><br>
        g)	Efetuar a passagem da faixa de partida para potência mediante aos procedimentos específicos.<br><br>
        h)	Ao atingir a potência desejada criticalizar o reator deixando o crítico nesta potência por intermédio da movimentação “fina” da BC#2.<br><br>
        i)	Colocar o Reator em controle automático se necessário.<br><br>
        j)	Dar o aviso da criticalidade informando o horário e a potência.
        `
    },
    {
        pergunta: `Qual o procedimento para se variar a potência do Reator em condições normais de operação?`,
        resposta: `a)	Dar aviso no alto falante do início da operação <br><br>
        b)	“Tirar” o Reator do controle automático se assim ele o estiver.<br><br>
        c)	Retirar a barra uma das barras controle de um pequeno trecho observando a evolução do período nos canais nucleares apropriados para subir a potência ou Inserir uma das barras de um pequeno trecho para reduzir a potência.<br><br>
        d)	Uma vez atingida a potência desejada criticalizar o reator através do ajuste fino de uma destas barras de controle.<br><br>
        e)	Colocar o Reator em controle automático se assim se fizer necessário.<br><br>
        f)	Registrar estas atividades adequadamente na “Folha de Dados de Operação do Reator IPEN/MB-01”.<br><br>
        g)	Dar o aviso pelo alto falante informando o horário e a nova potência alcançada.
        `
    },
    {
        pergunta: `Qual o procedimento para desligar o Reator?`,
        resposta: `a)	Dar o aviso pelo alto falante informando o horário do desligamento.<br><br>
        b)	Tirar o Reator do controle automático se o Reator estiver em automático.<br><br>
        c)	Apertar um dos botões de SCRAM, localizado na mesa de controle.<br><br>
        d)	Efetuar a Lista de Verificação Final ou “check list” de desligamento. 
        `
    },
    {
        pergunta: `Quais os procedimentos para desligar o Reator em condições de emergência?`,
        resposta: `a)	Dar o aviso pelo alto falante informando o horário do desligamento e o motivo do desligamento, convocando todos a se reunirem na sala de emergência radiológica.<br><br>
        b)	Acionar os alarmes pertinentes usando a condição de alerta ou perigo.<br><br>
        c)	Tirar o Reator do controle automático, se o Reator estiver em automático.<br><br>
        d)	Apertar um dos botões de SCRAM, localizado na mesa de controle.<br><br>
        e)	Ligar o Sistema de Recirculação de Ar da Célula Crítica.
        `
    },
    {
        pergunta: `O que se entende por excesso de reatividade?`,
        resposta: `É a quantidade de reatividade que existirá no caso em que todas as barras de controle e segurança estejam totalmente retiradas do núcleo a partir da posição em que o reator estava crítico à temperatura de 20°C.`
    },
    {
        pergunta: `O que se entende por margem de desligamento?`,
        resposta: `É a quantidade de reatividade negativa possível de ser inserida no reator mesmo que a barra mais reativa esteja completamente retirada do núcleo `
    },
    {
        pergunta: `O que é um reator seguro (contra a criticalidade). Quais as condições que ele deve atender?`,
        resposta: `É um reator que atende as seguintes condições: <br><br>
        a)	Os eletroímãs das barras de controle e segurança estão desenergizados e as barras encontram-se inseridas no núcleo do reator, garantindo uma criticalidade com keff<0,98.<br><br>
        b)	As válvulas de esvaziamento rápido (VVRA) estão na condição “aberta” garantindo que o tanque do moderador esteja “vazio”.<br><br>
        c)	Não está sendo realizado qualquer trabalho envolvendo manuseio de combustível, manutenções nas barras de controle ou de seus mecanismos de acionamento, a menos que estes estejam fisicamente desacoplados das barras.<br><br>
        d)	Não há movimentação ou utilização de experimentos próximos ou no núcleo do reator que possam causar variações de reatividade superior a 500 pcm.
        `
    },
    {
        pergunta: `Como é constituída a primeira barreira física no reator IPEN/MB-01 e como esta “barreira” pode ser danificada?`,
        resposta: ` É constituída pelo revestimento de alumínio (cladding) que é um elemento estrutural das placas combustíveis e isola o núcleo do combustível composto de siliceto de urânio e alumínio. Este revestimento poderá ser danificado por qualquer um dos seguintes processos:<br><br>
        a) Corrosão No Reator IPEN/MB-01, os danos por corrosão são desprezíveis, visto que o material estrutural é o alumínio e a água de processo, sendo desmineralizada, não contém nenhum agente agressivo. <br><br>
        b) Danos Mecânicos. Danos mecânicos são minimizados com a utilização de ferramentas especiais que protegem os elementos combustíveis durante seu manuseio que é realizado somente pôr operadores treinados e de acordo com procedimentos específicos.<br><br>
        c) Elevação da Temperatura Apesar dos resultados da Análise de Acidentes (Capítulo 15), demonstrar que mesmo ocorrendo o Acidente Básico de Projeto, a temperatura do revestimento do elemento combustível ficará abaixo da temperatura de fusão do material estrutural, o projeto do Reator IPEN/MB-01 incorpora sistemas de proteção e de segurança visando impedir que este limite de segurança seja atingido quando núcleos mais reativos forem montados na instalação.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores de atuação dos canais de potência.`,
        resposta: `•	Aplicabilidade: Aplica-se aos Limites de potência para os canais nucleares. <br><br>
        •	Objetivo: Desligar o reator por sobrepotência.<br><br>
        •	Especificação: <br>
            a) Os canais nucleares 1, 2 e 9, que operam na Faixa de Partida, desligam o reator por sobrepotência em 2,2 miliwatts, por “SCRAM de Magnetos” e em 2,4 miliwatts, por “SCRAM de Magnetos e SCRAM de Válvulas”.
            b) Os canais nucleares 3, 4, 7, 8 e 10, que operam na Faixa de Potência, desligam o reator por sobrepotência em 110 watts, por “SCRAM de Magnetos” e em 120 watts, por “SCRAM de Magnetos e SCRAM de Válvulas”.
            <br><br>
        •	Base: Assegurar o desligamento do reator por sobrepotência, minimizando a energia total liberada durante acidentes de excursão de potência
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores de atuação dos canais de período.`,
        resposta: `•	Aplicabilidade: Se aplica aos limites de atuação dos canais nucleares 1,2 e 9 da faixa de partida e canais 3,4,e 10 na faixa de potência que geram sinais de período.<br><br>
        •	Objetivo: Desligar o reator por quando o período atingir os valores estabelecidos em projeto.<br><br>
        •	Especificação: Quando o período do reator for igual ou menor que 17 segundos em qualquer um destes canais nucleares, o reator deve ser desligado por SCRAM dos Magnetos (1º Nível). Quando o período do reator for igual ou menor que 14 segundos, em qualquer um destes canais nucleares, o reator deve ser desligado por SCRAM de Magnetos e Válvulas.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores de atuação sinal de pressão na Célula Crítica`,
        resposta: `•	Aplicabilidade: Se aplica ao Valor Limite de Pressão na Célula Crítica para habilitar a partida do reator.<br><br>
        •	Objetivo: Assegurar que durante a operação do reator, todo o ar exaurido do interior da Célula Crítica passe pelos filtros do Sistema de Exaustão.<br><br>
        •	Especificação: A depressão no interior da Célula Crítica deve ser igual ou maior que 5 mm de coluna de água (depressão ≥ 5 mm CA), para habilitar a partida do reator.<br><br>
        •	Base: Evitar liberação não controlada de material radioativo para o meio externo
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores de atuação do Monitor de Dutos da Chaminé - RITH-156.`,
        resposta: `•	Aplicabilidade: Se aplica ao Valor Limite de atuação do Monitor de Dutos RITH-156, localizado na linha de exaustão da Célula Crítica (chaminé).<br><br>
        •	Objetivo: Assegurar o desligamento dos ventiladores dos subsistemas de exaustão e de insuflamento e o fechamento dos “dampers” de isolamento da Célula Crítica. <br><br>
        •	Especificação: O monitor de duto RITH-156 ao atingir o ponto de ajuste de “perigo” (104 cpm), deve enviar sinal para desligamento automático dos ventiladores do subsistema de exaustão da Célula Crítica, e para fechamento dos “damper's de isolamento da Célula Crítica, provocando por intertravamento, as seguintes ações subsequentes:<br><br>
        a)	Desligamento dos ventiladores do subsistema de insuflamento para a Célula Crítica<br>
        b)	Desligamento do reator por “alta pressão” no interior da Célula Crítica.<br><br>
        •	Base: Evitar liberação não controlada de material radioativo para o meio externo.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base do valor limite para o excesso de reatividade.`,
        resposta: `•	Aplicabilidade: Se aplica ao excesso de reatividade do núcleo do reator.<br><br>
        •	Objetivo: Assegurar o controle da operação do reator assim como o seu desligamento seguro, sempre que necessário.<br><br>
        •	Especificação: O excesso de reatividade total do núcleo sem experimentos e na temperatura de 20°C não deverá exceder 4000 pcm para a configuração padrão com 19 elementos combustíveis, e 6500 pcm para a configuração com 20 elementos combustíveis<br><br>
        •	Base: Manter o excesso de reatividade do núcleo dentro de limites que atenda os seguintes critérios de segurança: “margem de desligamento”, que estabelece que a soma das reatividades das barras de controle e segurança sejam no mínimo, 100% superior ao máximo excesso de reatividade do núcleo e, o “critério da barra presa” seja atendido. Este critério estabelece que o reator esteja na condição de “reator desligado” (keff<0,98) ainda que a barra mais reativa fique presa em posição totalmente retirada do núcleo.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base do valor limite de taxa de inserção de reatividade.`,
        resposta: `•	Aplicabilidade: Se aplica a máxima taxa de reatividade dos elementos de controle e de segurança. <br><br>
        •	Objetivo: Evitar a inserção de reatividade que não possam ser controlados pelo sistema de controle e instrumentação do reator.<br><br>
        •	Especificação: A máxima taxa de inserção de reatividade pela movimentação de um elemento de controle ou de segurança deve ser inferior a 20 pcm/s.No caso de violação desta taxa, o reator não poderá entrar em operação.<br><br>
        •	Base: Assegurar que a taxa de reatividade inserida pela retirada da barra do núcleo do reator, não possa provocar um transiente de potência indesejado.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores limites para reatividade inserida por Experimento.`,
        resposta: `•	Aplicabilidade: Se aplica aos experimentos realizados no Reator IPEN/MB-01.<br><br>
        •	Objetivo: Assegurar que mesmo ocorrendo uma anormalidade nos arranjos experimentais, estes não irão provocar uma inserção de reatividade no núcleo, superior ao estipulado por projeto.<br><br>
        •	Especificação: <br>
        a)	O valor da reatividade total (somatória da reatividade de todos os experimentos montados simultaneamente no núcleo do reator), não deve ser superior a 500 pcm.<br>
        b)	O projeto do dispositivo experimental deve garantir sua fixação e sua resistência mecânica para suportar forças hidráulicas, pneumáticas ou outras forças a que o experimento fique submetido.<br>
        c)	O projeto do dispositivo experimental deve garantir que não haja falhas na sua estrutura, principalmente para evitar inundação de possíveis vazios em seu interior.<br><br>
        
        •	Base: Assegurar que o valor de reatividade inserido pelos experimentos e a 			taxa de mudança de reatividade não possa provocar um transiente de potência indesejado..
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores limites para a qualidade da água`,
        resposta: `•	Aplicabilidade: Se aplica aos valores limites para a qualidade da água do Moderador.<br><br>
        •	Objetivos: Permitir ao Operador Sênior fazer uma avaliação dos parâmetros indicativos da qualidade da água do moderador.<br><br>
        •	Especificação: <br>
        A condutividade, o pH e a concentração de cloretos na água do moderador devem atender aos limites seguintes:<br>
        -Condutividade: Valor limite antes de entrar em operação C≤5,0 μS/cm.<br>
        - Condutividade: Valor limite durante a operação C≤6,0 μS/cm.<br>
        - pH:   Valor limite antes de entrar em operação de 5,5 a 6,5<br>
        - pH:   Valor limite durante a operação de 5,0 a 7,0<br>
        - Valor limite antes de entrar em operação ≤0,2 ppm<br>
        - Valor limite durante a operação de ≤0,3 ppm<br><br>
        Caso um destes limites for ultrapassado, o reator não poderá entrar em operação ou, deverá ser desligado.<br><br>
        •	Base: Minimizar a corrosão no encamisamento das varetas combustíveis e nos elementos estruturais do núcleo do reator e os níveis de contaminação devido à ativação de impurezas contidas na água de processo.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base do valor limite para o confinamento do Prédio do Reator.`,
        resposta: `•	Aplicabilidade: Se aplica aos requisitos de confinamento da Célula Crítica do Reator IPEN/MB-01. <br><br>
        •	Objetivo: Manter a depressão mínima no interior da Célula Crítica.<br><br>
        •	Especificação: <br>
        A depressão da célula crítica deve ser igual ou superior a 5 mm de coluna de água. Caso a depressão seja inferior a 5 mm de coluna de água, o reator é desligado pelo sistema de proteção.<br><br>
        •	Base: Evitar a liberação não controlada de materiais radioativos para o meio ambiente, em caso de acidente.

        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base dos valores limites para operação do sistema de ventilação.`,
        resposta: `•	Aplicabilidade: Se aplicam aos subsistemas de Exaustão e de Recirculação de Ar da Célula Crítica. <br><br>
        •	Objetivos: Assegurar que todo o ar da célula crítica, seja filtrado e monitorado antes de ser lançado para o meio ambiente externo e remover contaminantes radioativos em suspensão no ar do interior da Célula Crítica, mantendo ou promovendo sua habitabilidade.<br><br>
        •	Especificação: <br>
        O reator somente poderá entrar em operação quando:
        a)	Pelo menos um dos subsistemas de exaustão esteja operando e mantendo a depressão igual ou superior à 5 mm de C.A. no interior da Célula Crítica.<br>
        b)	Pelo menos um dos subsistemas de recirculação de ar da Célula Crítica esteja operando ou em condições para entrar em operação.<br><br>
        •	Base: <br>
        a)	Assegurar que todo o ar exaurido da Célula Crítica passe por filtros e seja monitorado antes de ser liberado na atmosfera.<br>
        b)	A qualquer momento, durante a operação do reator, o subsistema de recirculação de ar esteja em condições de purificar o ar da Célula Crítica.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base das condições limites para operação dos monitores de ar e de Dutos.`,
        resposta: `•	Aplicabilidade: Se aplica aos Monitores de Ar e ao monitor de duto RITH-156, localizado na linha de exaustão de ar da Célula Crítica- “Chaminé”. <br><br>
        •	Objetivos: <br>
        a)	Assegurar a monitoração dos efluentes gasosos para a atmosfera.<br>
        b)	O isolamento da Célula Crítica (desligamento dos ventiladores de exaustão e fechamento dos “damper's”).<br><br>
        •	Especificação: <br>
        O monitor de duto RITH-156 localizado após os filtros do subsistema de exaustão da Célula Crítica (chaminé), Deve estar disponível para que o reator entre em operação. Caso não esteja disponível, o reator não poderá ser ligado, ou se em operação o reator deverá ser desligado no máximo em 2 horas.<br><br>
        •	Base: <br>
        Assegurar o funcionamento destes monitores uma vez que se encontra em lugares estratégicos capazes de detectar qualquer anormalidade que envolva a liberação de materiais radioativos para a atmosfera. O monitor de dutos MR156 é responsável pelo desligamento dos subsistemas de exaustão e de insuflamento e pelo fechamento dos “damper's” de isolamento da Célula Crítica, desligando o reator por pressão superior à 5 mm CA na Célula Crítica.
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base das condições limites para os Mecanismos de Movimentação das Barras.`,
        resposta: `•	Aplicabilidade: Se aplica às barras de controle e de segurança. <br><br>
        •	Objetivos: Definir o número de barras de controle e de segurança necessário para operação do reator e especificar o tempo necessário para se realizar o desligamento do reator.<br><br>
        •	Especificação: <br>
        a)	O reator será operado somente quando estiverem disponíveis todas as barras de controle/segurança.<br>
        b)	O tempo máximo de desligamento do reator (queda das barras no núcleo) é de 1 s a partir do sinal de desligamento até o início do trecho de amortecimento da mesma no núcleo<br><br>
        •	Base: <br>
        A especificação (a) assegura que os critérios de barras de controle e de segurança para a margem de desligamento sejam satisfeitos. A especificação (b), tempo de desligamento de 1 s, permite interromper qualquer transiente inesperado no reator na sua fase inicial com bastante folga 
        `
    },
    {
        pergunta: `Dê a aplicabilidade, o objetivo, especificação e a base das condições limites para Manuseio e Transporte de Varetas Combustíveis.`,
        resposta: `•	Aplicabilidade: Se aplica às operações de manuseio e transporte de varetas combustíveis.<br><br>
        •	Objetivo: Definir o número de varetas combustíveis que poderão ser colocadas simultaneamente em um mesmo cesto para transporte e armazenamento.<br><br>
        •	Especificação: O número máximo de varetas combustíveis que poderão ser transportadas ou armazenadas em um único cesto é de 170 varetas.<br><br>
        •	Base: Evitar o acidente de criticalidade na região das covas de armazenamento, mesmo que haja uma inundação de todas as covas e não ultrapassar as doses calculadas no capítulo XV do RAS - Análise de Segurança para o caso do “Acidente com Queda de varetas Combustíveis Durante Manuseio”.
        `
    },
    {
        pergunta: `Quais são as atribuições do chefe do Reator IPEN/MB-01?`,
        resposta: `Ele é responsável pela operação e manutenção do reator, pelo controle do material nuclear existente no reator, pelas montagens dos experimentos no reator e pelo cumprimento das exigências estabelecidas no Relatório de Análise de Segurança (RAS) e no Plano de Emergência Local (PEL). É também responsável pela coordenação de todo o treinamento e retreinamento do pessoal lotado no Reator IPEN/MB-01 de modo a assegurar os requisitos mínimos de qualificação e de licenciamento para cada uma das funções exercidas.`
    },
    {
        pergunta: `Quais são as atribuições do Operador Sênior do Reator (OSR)?`,
        resposta: `Ele é responsável pela condução da operação, manutenção e montagens de experimentos no Reator IPEN/MB-01. Está subordinado ao chefe do reator, podendo assumir na falta deste, a responsabilidade de tomar decisões em casos de emergência de acordo com normas e regulamento da CNEN.`
    },
    {
        pergunta: `Quais são as atribuições do Operador do Reator (OR)?`,
        resposta: `O Operador de Reator (OR) é o responsável pela operação do reator em condições normais. Em casos excepcionais, nos quais os OSR estejam impossibilitados de atuarem, o operador assume imediatamente o controle do reator. Neste caso, avisando aos seus superiores e desligando o reator, segundo os procedimentos normais ou de emergência, de acordo com a situação.`
    },
    {
        pergunta: `Quais são as atribuições do Operador em Treinamento (OT)?`,
        resposta: `Não possui responsabilidade nem permissão para operar o reator, exceto quando autorizado pelo (OSR) responsável pela operação. Neste caso específico, as ações do operador em treinamento devem ser acompanhadas por um operador licenciado e por um OSR, caso o reator esteja em operação que exija variações de potência. No caso de operação em potência estável o operador em treinamento poderá ser acompanhado apenas por um OR licenciado.`
    },
    {
        pergunta: `Qual é o documento oficial que trata sobre o licenciamento de OR e OSR? A licença obtida pelo operador no licenciamento vale para qualquer reator?`,
        resposta: `É a Norma CNEN NN 1.01 (Resolução CNEN 170/14 de abril de 2014 publicada no D.O.U.em 07.05.2014).<br>
        Não, a licença é intransferível e limitada exclusivamente ao reator nela especificado.
        `
    },
    {
        pergunta: `Qual a validade de uma licença de OR e OSR? Quais as condições mínimas para manter esta licença?`,
        resposta: `Dois (2) anos.<br>
        Para manter uma licença ativa, o OR ou OSR deve realizar suas funções, no mínimo, por 60 horas a cada três meses, em período não inferior a seis horas contínuas, tendo, efetivamente, uma posição na equipe de turno, sendo responsável por executar a atividade inerente a esta função. Para reatores de pesquisa (que é o caso dos operadores do Reator IPEN/MB-01), o OSR ou OR deve realizar suas funções, no mínimo, por seis horas a cada três meses (Art.35). O artigo 35 diz que a CNEN pode, desde que motivadamente, exigir que o detentor da licença a ser renovada seja submetido a qualquer prova do exame de qualificação.
        `
    },
    {
        pergunta: `Qual a finalidade das auditorias externas e internas que são realizadas periodicamente no reator? Cite as entidades que fazem tais auditorias.`,
        resposta: `Analisar quaisquer modificações em procedimentos operacionais, instrução de trabalho, procedimentos experimentais ou modificações em sistemas e/ou estruturas da Instalação, que podem afetar a segurança desta Instalação.<br><br>
        a)	Auditorias Internas<br>
        -Realizadas pelo CASI (Comitê de Avaliação de Segurança da Instalação).<br>
        -Realizadas pelo SGI (Sistema de Gestão Integrada).<br>
        -Realizada pelo CEN (Centro de Engenharia Nuclear do IPEN)<br><br>
        O Comitê Interno de Revisão de Segurança (CIRS) do Reator IPEN/MB-01 é um órgão colegiado que visa proporcionar uma análise de todas as questões relativas à segurança da Instalação, de modo a fornecer subsídios ao chefe da Instalação para a adoção e verificação da implementação de uma sistemática operacional segura e confiável.<br><br>
        b)	Auditorias Externas<br>
        É realizada pela Coordenação Geral de Licenciamento e Controle (CGLC) da CNEN e é responsável pelo licenciamento da Instalação e dos operadores. O CGLC pode realizar auditorias nas áreas de Condução da Operação, Retreinamento de operadores licenciados, Proteção Radiológica, Proteção contra incêndios etc.
        `
    },
    {
        pergunta: `O que é o REDO?`,
        resposta: `O REDO (Relatório de Eventos de Operação) é um relatório especial que reporta uma ocorrência não usual na instalação que, embora aparentemente sem grandes consequências, poderiam afetar a segurança desta instalação `
    },
    {
        pergunta: `O “Manual de Operação, Manutenção, Inspeção e Testes do Reator IPEN/MB-01”, contêm os principais procedimentos e instruções de trabalho e procedimentos operacionais do Reator IPEN/MB-01. Cite estes procedimentos.`,
        resposta: `•	Operacional <br><br>
        •	Combate a Incêndios<br><br>
        •	Proteção Radiológica<br><br>
        •	Emergência Radiológica<br><br>
        •	Proteção Física<br><br>
        •	Manutenção Inspeção e Testes<br><br>
        •	Administrativo<br><br>
        •	Controle de Material Nuclear<br><br>
        `
    },
    {
        pergunta: `Quem são as pessoas que escrevem os procedimentos operacionais e as rotinas experimentais no Reator IPEN/MB-01?`,
        resposta: `-Procedimentos Operacionais: <br>
        Operadores Licenciados do Reator IPEN/MB-01.<br><br>
        
        -Procedimentos Experimentais:<br> 
        Experimentadores interessados que recebem apoio do corpo técnico do Reator IPEN/MB-01.
        `
    },
    {
        pergunta: `Como são aprovados os procedimentos operacionais e experimentos no Reator IPEN/MB-01?`,
        resposta: `1.	Aprovação inicial pela área técnica do Reator IPEN/MB-01 que avalia a viabilidade da execução destas atividades sem violar as especificações técnicas do reator (descritas no Cap. 16 do RAS).<br><br>
        2.	Em seguida o documento é avaliado pelo Comitê Interno de Revisão de Segurança (CIRS), que identifica os procedimentos experimentais que podem afetar a segurança da Instalação.<br><br>
        3.	Caso não haja unanimidade dos membros do CIRS, é solicitada uma nova avaliação buscando-se, se necessário, a ajuda do Comitê de Avaliação de Segurança da Instituição (CASI) e outros especialistas.<br><br>
        4.	Finalmente o documento é aprovado para a execução.
        `
    },
    {
        pergunta: `Como são feitas as manutenções no Reator IPEN/MB-01?`,
        resposta: `É conduzida de forma adequada com frequência tal que seja garantida a operação segura do reator.
        O chefe do reator é o responsável pela correta, contínua e eficiente manutenção mecânica, elétrica, eletrônica e instrumental dos equipamentos, linhas, tubulações, estruturas e instrumentações. <br>
        Basicamente há três tipos de manutenção, a saber:<br><br>
        
        Preventiva: São manutenções quinzenais sempre procurando alternar os sistemas A/B observando e anotando as anormalidades e registrando-as em planilhas específicas de manutenção. Este tipo de manutenção é feita, pelos OR.<br><br>
        
        Preditiva: São manutenções específicas que se fazem em cada instrumento, dispositivo ou sistema com periodicidade que variam em função das características de cada componente ou sistema. São manutenções que podem ser quinzenais, mensais, trimestrais, semestrais e anuais e que são baseadas em previsões que possa ocorrer um dano ou mau funcionamento, sempre baseado em informações do manual do fabricante. São feitas pelos OR dentro de um cronograma anual.<br><br>
        
        Corretiva: São manutenções que são feitas quando ocorre um mau funcionamento ou avaria de um componente de sistema.
        Inicialmente o OR tenta solucionar o problema, porém ele pode solicitar serviços externos especializados caso ele não tenha êxito na solução do problema.
        Os registros destas manutenções ficam arquivados em pastas apropriadas na Instalação.
        `
    },
    {
        pergunta: `Cite os registros do Reator IPEN/MB-01.`,
        resposta: `•	Registros mantidos por um período mínimo de 5 anos <br><br>
        1)	Operação Normal<br>
        -Lista de verificação inicial e final (“check list”) e controle do reator; partida, variações de potência e desligamento do reator.<br>
        -Inclusão ou remoção de elementos combustíveis, elementos de segurança e controle ou experimentos que possam afetar a reatividade do núcleo do reator (rotinas experimentais aprovadas adequadamente).<br>
        -Alterações operacionais temporárias ou não em itens de segurança do reator.<br>
        -Calibração das barras de controle.<br>
        2)	Atividades de manutenção.<br>
        3)	Ocorrências anormais.<br>
        4)	Anotações de Dose.<br>
        5)	Experiências realizadas no reator (rotinas e relatórios experimentais).<br>
        6)	Mudança de configuração do núcleo.<br>
        7)	Mudanças nos procedimentos de operação.<br><br>
        •	Registros mantidos durante a vida do reator <br><br>
        1)	Efluentes radioativos liberados para o ambiente.<br>
        2)	Inventário e transferência de Elementos Combustíveis.<br>
        3)	Dados de monitoração ambiental.<br>
        4)	Certificados médicos e exposição à radiação.<br>
        5)	Desenhos atualizados da Instalação.<br>
        6)	Registro de treinamento e retreinamento da Instalação.<br>
        7)	Registros de Revisões e Auditorias.
        `
    },
    {
        pergunta: `Cite os relatórios do Reator IPEN/MB-01.`,
        resposta: `•	Relatórios de Operação <br><br>
        1)	Números de horas de operação.<br>
        2)	Atividades de manutenção preventivas e corretivas.<br>
        3)	Alterações importantes não descritas no RAS.<br>
        4)	Resumo da natureza e quantidade de efluentes radioativos lançados externamente à área do IPEN/CNEN/SP ( a cargo do Departamento Ambiental).<br>
        5)	Levantamento ambiental dosimétrico.<br>
        6)	Resumo de doses de radiação recebidas pelo pessoal da Instalação.<br><br>
        
        •	Relatórios Especiais (eventos não planejados ou mudanças administrativas), que devem ser comunicados imediatamente à CNEN por FAX ou meio eletrônico.<br><br>
        1)	Violações dos limites de segurança operacionais.<br>
        2)	Liberação radioativa acima dos máximos permissíveis.<br>
        3)	Operações fora das especificações técnicas ou que podem comprometer a segurança da Instalação.
        `
    },
]

const secaoG = [
    {
        pergunta: `Quais são os principais objetivos do Sistema de Proteção Radiológica?`,
        resposta: `Os principais objetivos são os de evitar o aparecimento de efeitos determinísticos e limitar a probabilidade de incidência de efeitos estocásticos.`
    },
    {
        pergunta: `O que tem de ser verificado para que uma atividade que origine exposição humana às radiações ionizantes seja justificada`,
        resposta: `Que o benefício líquido resultante da atividade seja positivo e suficientemente grande como para compensar as incertezas`
    },
    {
        pergunta: `O que é uma exposição ocupacional?`,
        resposta: `É aquela que é produzida durante o desenvolvimento do trabalho devido à exposição a fontes de radiação artificiais ou naturais incrementadas por ação humana.`
    },
    {
        pergunta: `Quais são os limites de doses efetivas vigentes e que aparecem no Regulamento de proteção radiológica?`,
        resposta: `Os limites são 20 mSv/a para trabalhadores e 1 mSv/a para o público (média aritmética em 5 anos definidos)`
    },
    {
        pergunta: `O que serão registradas no histórico dosimétrico correspondente a pessoas expostas ocupacionalmente?`,
        resposta: `Deve ser classificado como IOE (Indivíduo Operacionalmente Exposto).`
    },
    {
        pergunta: `Quais são os limites de dose estabelecidos pela CNEN?`,
        resposta: `
        <table>
            <thead>
                <tr>
                    <td colspan="2">
                        Dose Efetiva
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DOSE CORPO INTEIRO</td>
                    <td>100 mSv/ 5 Anos</td>
                </tr>
                <tr>
                    <td>DOSE MÉDIA</td>
                    <td>20 mSv/ Ano</td>
                </tr>
                <tr>
                    <td>DOSE MÁXIMA</td>
                    <td>50 mSv/ Ano</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <td colspan="2">DOSE EQUIVALENTE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DOSE NO CRISTALINO</td>
                    <td>20 mSv/ Ano</td>
                </tr>
                <tr>
                    <td>DOSE NA PELE</td>
                    <td>500 mSv/ Ano</td>
                </tr>
                <tr>
                    <td>DOSE NAS MÃOS E PÉS</td>
                    <td>500 mSv/ Ano</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        pergunta: `Qual a função do sistema de monitoração de radiação no Reator IPEN/MB-01? Como ele é composto?`,
        resposta: `A função do sistema de monitoração de radiação no Reator IPEN/MB-01 é: <br><br>
        -Proteção e segurança do Reator IPEN/MB-01 e do pessoal a ele relacionado. <br>
        Ele é composto por:<br>
        -Monitoração de Área.<br>
        -Monitoração de Dutos de Ar.<br>
        -Monitoração do Ar.
        `
    },
    {
        pergunta: `Cite ao menos três responsabilidades do IOE (Indivíduos Operacionalmente Exposto) do Reator IPEN/MB-01?`,
        resposta: `Basta escolher três entre as citadas a seguir: <br>
        <ul>
            <li>Manter-se atualizado quanto aos procedimentos da instalação;</li>
            <li>Executar as tarefas de acordo com os procedimentos da instalação;</li>
            <li>Utilizar os equipamentos de proteção individual;</li>
            <li>Evitar exposições desnecessárias;</li>
            <li>Comparecer aos treinamentos dados pelo Supervisor de Radioproteção;</li>
            <li>Monitorar-se após realizar tarefas que envolvam materiais radioativos;</li>
            <li>Em áreas sujeitas a contaminação: não fumar, não consumir alimentos, não guardar utensílios utilizados em alimentação e não aplicar cosméticos;</li>
            <li>Lavar as mãos após sair de áreas controladas ou supervisionadas;</li>
            <li>Monitorar a área onde realizou uma tarefa envolvendo material radioativo;</li>
            <li>Identificar claramente equipamentos contaminados e amostras radioativas;</li>
            <li>Segregar e identificar os rejeitos e utilizar os recipientes de coleta de rejeitos de forma correta;</li>
            <li>Informar imediatamente a ERP quando uma contaminação acidental for detectada tendo o cuidado de sinalizar a área para evitar a dispersão da contaminação;</li>
            <li>Realizar as descontaminações, relativas aos seus procedimentos rotineiros após o término da tarefa;</li>
            <li>Utilizar dosímetros de maneira correta;</li>
            <li>Não utilizar roupas de proteção, que foram utilizadas em áreas controladas ou supervisionadas, em áreas livres (principalmente em locais destinados a alimentação);</li>
            <li>Comparecer às monitorações in-vivo quando convocados;</li>
            <li>Ceder amostras para análises biológicas quando requisitado;</li>
            <li>Informar, ao Coordenador Local de Emergência, qualquer evento de seu conhecimento que possa levar a algum tipo de emergência;</li>
            <li>Cumprir os procedimentos e recomendações de radioproteção.</li>
        </ul>
        `
    },
    {
        pergunta: `Cite ao menos duas finalidades dos monitores de área.`,
        resposta: `Basta escolher duas entre as citadas a seguir: <br>
        <ul>
            <li>Fornecer informação contínua dos níveis de radiação das várias áreas da Instalação;</li>
            <li>Sinalizar de forma audível e visual, quando da ocorrência de níveis de radiação anormais;</li>
            <li>Determinar o nível de radiação antes do acesso à área;</li>
            <li>Informar a movimentação inadvertida ou não autorizada de materiais radioativos;</li>
            <li>Fornecer informação dos níveis de radiação em caso de acidente.</li>
        </ul> 
        `
    },
    {
        pergunta: `Cite pelo menos três procedimentos de operação visando à proteção contra a radiação do trabalhador.`,
        resposta: `Basta escolher três entre os citados a seguir: <br>
        <ul>
            <li>-Durante as operações normais, são efetuadas monitorações do nível de radiação nas áreas que compõem a instalação, para verificar a adequação da blindagem e a normalidade da operação;</li>
            <li>-O planejamento de operações e atividades é efetuado com base nas monitorações;</li>
            <li>-As áreas cujos níveis de radiação estejam acima dos limites têm acesso controlado;</li>
            <li>-Todos os materiais radioativos são manuseados á distância, através de equipamentos apropriados;</li>
            <li>-Equipamentos de proteção individual são usados sempre que necessário;</li>
            <li>-Nos trabalhos com radiação, a Proteção Radiológica estabelece um programa de rodízio de pessoal, para minimizar as doses nos trabalhadores. </li>
            <li>-Evita-se a disseminação da contaminação;</li>
            <li>-A leitura dos dosímetros de corpo inteiro e de extremidades é mensal;</li>
            <li>-Durante a permanência na Célula Crítica é obrigatório o uso de dosímetro individual de leitura direta.</li>
            <li>-Após o desligamento do reator, o acesso à Célula Crítica só poderá ser permitido com a autorização da ERP.</li>
            <li>-A retirada de materiais irradiados só poderá ser realizada com autorização da ERP.</li>
        </ul>
        `
    },
    {
        pergunta: `O que deve ser informado a um visitante antes de adentrar as áreas supervisionadas e/ou controladas? Quem é o responsável pelo visitante?`,
        resposta: `Os visitantes devem receber da ERP ou do IOE acompanhante, uma explicação sobre o significado do símbolo internacional da radiação e das sirenes de emergência e informações sobre as rotas de fuga e ponto de encontro, antes de seu acesso. <br>
        Visitantes devem ser acompanhados por um IOE qualificado que será responsável pela visita durante toda a permanência dela na instalação.
        `
    },
    {
        pergunta: `Somente quando pode ocorrer o acesso à Célula Crítica?`,
        resposta: `
        <ul>
            <li>O reator estiver desligado;</li>
            <li>O Tanque Moderador (TQ-201) estiver vazio;</li>
            <li>A taxa de dose na Célula Crítica for compatível com a duração da tarefa a ser realizada;</li>
            <li>For utilizado o equipamento de proteção individual previsto para a área;</li>
            <li>Quando a atividade requerer o uso de dosímetro de leitura direta, é responsabilidade de o IOE informar à ERP os valores iniciais e finais da leitura do dosímetro, quando o dosímetro não for entregue e recolhido pela ERP.</li>
        </ul>
        `
    },
    {
        pergunta: `Quais os procedimentos na saída da área controlada?`,
        resposta: `Na saída das áreas controladas as pessoas devem ser monitoradas por meio de monitores de pés, mãos e roupas. <br>
        É responsabilidade de o IOE acompanhante encaminhar o visitante para a monitoração.<br>
        A leitura dos dosímetros de leitura direta deverá ser registrada no livro de entrada/saída.
        `
    },
    {
        pergunta: `Como é feita a monitoração de Área? Como é constituído cada canal?`,
        resposta: `A monitoração de Área é realizada por intermédio de canais independentes destinados a fazer a monitoração em locais fixos e estratégicos do reator.<br>
        Cada canal é constituído de um detector de radiação, discriminador, indicador, alarmes de nível de radiação (2 níveis) e alarme de falha interna.<br>
        Alguns destes canais são acoplados a registradores. Os indicadores e registradores destes sensores estão localizados em “racks” na sala de controle e na sala da proteção radiológica.
        `
    },
    {
        pergunta: `Como é feita a monitoração dutos de Ar e quais são as suas finalidades?`,
        resposta: `A Monitoração de Dutos de Ar é feita em pontos importantes dos circuitos de Recirculação, Condicionamento e Exaustão de ar, através de monitores de radiação gama.<br><br>
        As finalidades são: <br><br>
        a.	Iniciar algumas ações de controle (acionamento de válvulas).<br><br>
        b.	Acionamento de alarmes.<br><br>
        Uma chave seletora permite a escolha de uma, entre várias medidas, para ser registrada continuamente.<br>
        Alguns destes canais são permanentemente acoplados a um registrador.<br>
        Os sensores deste sistema são representados por detectores do tipo Geiger Muller.
        `
    },
    {
        pergunta: `Como é feita a monitoração de Ar e quais são as suas finalidades?`,
        resposta: `Existem dois conjuntos de monitores que acompanham e registram de forma contínua os níveis de radiação no ar ambiente. <br>
        O ar é aspirado por meio de uma bomba de vácuo, passando através de um filtro, conjugado com um detector de radiação. O sinal é processado por meio de um amplificador analisador monocanal e medidor de taxas de contagem, sendo fornecida a indicação da atividade depositada por meio de um medidor registrador. Um alarme é acionado toda vez que níveis elevados de radiação são detectados.<br>
        O sistema monitora a presença de diversos tipos de isótopos (I-131, gases nobres, etc.). Para o I-131 é possível, também, fazer uma seleção de acordo com a energia da radiação`
    },
    {
        pergunta: `Uma das grandezas que caracteriza um feixe de radiação ionizante é a Exposição. Qual é a unidade corresponde a esta grandeza?`,
        resposta: `A unidade que corresponde esta grandeza é:
        C/kg
        `
    },
    {
        pergunta: `Qual a grandeza usada para estimar a probabilidade de ocorrência de câncer, efeitos estocásticos, para uma exposição à radiação?`,
        resposta: `A grandeza usada é:
        Dose Efetiva.
        `
    },
    {
        pergunta: `No sistema internacional, quais as unidades correspondentes às grandezas; dose efetiva, dose equivalente, atividade e dose absorvida?`,
        resposta: `As unidades correspondentes às grandezas são:
        Sievert, sievert, becquerel e gray.
        `
    },
    {
        pergunta: `Uma dose aguda de 0,25 Sv no corpo inteiro de um indivíduo irá causar:`,
        resposta: `Não causará nenhum efeito clinicamente detectável.`
    },
    {
        pergunta: `A radiação pode danificar uma determinada molécula por dois tipos de mecanismos: direto e indireto. Qual é o mecanismo indireto mais importante?`,
        resposta: `O mecanismo indireto mais importante é a radiólise da água.`
    },
    {
        pergunta: `Por que existe limiar para efeitos determinísticos?`,
        resposta: `Porque é necessário que muitas células morram para o sintoma aparecer.`
    },
    {
        pergunta: `Qual é a estrutura da célula que quando danificada pela radiação, é responsável pelo aparecimento de um efeito estocástico?`,
        resposta: `A estrutura responsável é o cromossomo.`
    },
    {
        pergunta: `Com relação ao Plano de Radioproteção do Reator IPEN/MB-01, dizer o que significa as seguintes siglas:<br>
        CIRS;<br> COLE;<br> CASI;<br> GEL;<br> IOE;<br> ERP.
        `,
        resposta: `CIRS: Comitê Interno de Revisão de Segurança.<br>
        COLE: Coordenador Local de Emergência Radiológica.<br>
        CASI: Comitê de Avaliação de Segurança Interna.<br>
        GEL: Grupo de Emergência Local<br>
        IOE: Indivíduo Ocupacionalmente Exposto
        `
    },
    {
        pergunta: `Quem representa o COLE do Reator IPEN/MB-01?`,
        resposta: `Quem representa é o Supervisor da Radioproteção.`
    },
    {
        pergunta: `Quais são os membros do GEL?`,
        resposta: `Os membros do GEL do Reator IPEN/MB-01 são: <br><br>
        -COLE (Coordenador Local de Emergência Radiológica)<br>
        -Responsável da Instalação.<br>
        -Operadores Licenciados da Instalação.<br>
        -IOE (prestando serviço na Instalação).<br>
        -ERP (Equipe de Radioproteção).<br>
        -Brigada de Incêndio.<br><br>
        GEL: Grupo de Emergência Local, composto pelo COLE, pelo Responsável pela
        Instalação, Operadores do Reator e IOEs qualificados

        `
    },
    {
        pergunta: `O que é o CIRS e qual a sua função?`,
        resposta: `O CIRS é um órgão técnico colegiado que tem o objetivo de assessorar o gerente do Centro de Engenharia Nuclear do IPEN/CNEN/SP.
        Sua função é proporcionar uma análise das questões relativas à segurança de modo a fornecer subsídios para a adoção e verificação de uma sistemática operacional segura e confiável, sem, no entanto, retirar do chefe da Instalação a responsabilidade pela Operação da Instalação. <br>
        O CIRS é formado pelo do chefe do Reator IPEN/MB-01, três Operadores Seniores do Reator (OSR) e por um Operador do Reator (OR) escolhido entre funcionários do IPEN e do CTMSP e por um representante da Proteção Radiológica do Reator IPEN/MB-01. Este representante é o Supervisor da Radioproteção do Reator IPEN/MB-01.
        `
    },
    {
        pergunta: `O que significa Sala de Emergência e onde ela se localiza na Instalação Reator IPEN/MB-01?`,
        resposta: `É o local de encontro da população do Reator IPEN/MB-01, no evento de uma situação de Emergência Radiológica. Ela é a própria sala de controle do Reator.`
    },
    {
        pergunta: `O que é o COLE numa emergência radiológica e qual sua função?`,
        resposta: `É o coordenador local de Emergência Radiológica.<br>
        Ele é responsável por centralizar e controlar a documentação durante a situação de Emergência de maneira a permitir a reconstituição do histórico de emergência, avaliar a situação real ou potencial de emergência, juntamente com o responsável pela Instalação, acionar o GRP e dar suporte e assessoria de radioproteção aos grupos responsáveis pelo atendimento de emergência não radiológica (exemplo a brigada de incêndio etc.).
        `
    },
    {
        pergunta: `Qual a responsabilidade do chefe do Reator numa emergência radiológica?`,
        resposta: `Em caso de situação potencial ou real de emergência, solicitar relatórios técnicos aos grupos envolvidos no PER do IPEN e elaborar relatório final para encaminhamento à Superintendência; manter as condições que assegurem a aplicabilidade e o acionamento do PEL; designar um técnico para acompanhamento de manutenção interno ou externo; manter a Superintendência informada sobre a evolução da situação após a avaliação realizada pelos grupos envolvidos e manter o local da Instalação as condições de aplicação dos procedimentos de emergência nuclear.`
    },
    {
        pergunta: `Qual a responsabilidade do ERP numa emergência radiológica?`,
        resposta: `Triagem do pessoal na Instalação; avaliações preliminares das taxas de dose pessoais e locais; interdição das áreas de emergência; envio de documentos individuais para leitura; procedimentos de descontaminação; encaminhamento de pessoas para medidas de corpo inteiro.`
    },
    {
        pergunta: `O que são áreas controladas? Quais são as áreas controladas do Reator IPEN/MB-01 e quais as características das atividades desenvolvidas nestas áreas?`,
        resposta: `São áreas onde o nível de radiação externa podem resultar em doses individuais iguais ou superiores a 3,0μSv/h, ou iguais ou superiores a 6 mSv acumuladas em um ano.<br>
        No Reator IPEN/MB-01, as áreas controladas são:<br>
        <ul>
            <li>-Célula Crítica e seus subsolos.</li>
            <li>-Ala quente dos Laboratórios.</li>
        </ul>
        As características de atividade são:<br>
        <ul>
            <li>-Ter procedimento escrito no Manual de Operação ou procedimento aprovado por escrito pelo CIRS.</li>
            <li>-Só podem ser exercidos pelo IOE devidamente treinados.</li>
            <li>-Atividades próximas ao núcleo só podem ser realizados no mínimo por dois IOE.</li>
            <li>-Ser planejada (para evitar doses desnecessárias).</li>
        </ul>
        `
    },
    {
        pergunta: `O que são áreas supervisionadas? Quais são elas? Qualquer pessoa pode executar atividades nessas áreas?`,
        resposta: `A área supervisionada é qualquer área sob vigilância não classificada como controlada, mas onde as condições de exposição necessitam ser mantidas sob supervisão. Esta área é caracterizada pelo laboratório de Medida de Material Irradiado.
        A máxima taxa de dose nesta área é inferior a 1,0 µSv/h. O pessoal envolvido na operação e pesquisadores do Reator IPEN/MB-01 pode ocupar a área supervisionada, contanto que não excedam os limites de dose para corpo inteiro segundo as Diretrizes Básicas de Proteção Radiológica.
        
        `
    },
    {
        pergunta: `O que são áreas livres?`,
        resposta: `São áreas onde a taxa de dose e o risco de contaminação por material radioativo é baixo o suficiente para assegurar que em condições normais, o nível de proteção para aqueles que trabalham no local seja comparável com o nível de proteção exigido para exposição ao público. Nestas áreas as doses individuais são inferiores a 0,5μSv/h.`
    },
    {
        pergunta: `Quais são as classes de emergência do Reator IPEN/MB-01?`,
        resposta: `a)	Evento não usual <br>
        b)	Alerta<br>
        c)	Emergência ou classe I<br>
        `
    },
    {
        pergunta: `O que é um evento não usual?`,
        resposta: `É uma classe de acidente onde não há possibilidade de liberação de material radioativo para o meio ambiente.`
    },
    {
        pergunta: `O que é um evento de alerta?`,
        resposta: `É uma classe de acidente onde houve liberação significativa de material radioativo no interior da célula crítica, podendo haver liberação para o meio ambiente.`
    },
    {
        pergunta: `O que é um evento classe I?`,
        resposta: `Eventos que causam inserção positiva de reatividade no núcleo do Reator IPEN/MB-01.`
    },
    {
        pergunta: `Cite exemplos de eventos não usuais.`,
        resposta: `Queda de objetos ou ferramentas no Tanque do Reator, porém fora do núcleo. <br><br>
        Queda moderada de uma vareta combustível sem rompimento do encamisamento.<br><br>
        Fenômenos naturais intensos (chuva, ventos etc.).
        `
    },
    {
        pergunta: `Cite exemplos de condições de alerta`,
        resposta: `Linha de Alimentação do Tanque do Moderador - 2,5 10-1 mGy/h <br><br>
        Tanque de Decaimento - 2,5 10-2 mGy/h <br><br>
        Tanque do Moderador - (Plataforma) - 2,5 101 mGy/h <br><br>
        Linha de Exaustão (Chaminé) - 103 cpm
        .
        `
    },
    {
        pergunta: `Cite exemplos de condições de emergência.`,
        resposta: `Qualquer um dos eventos de alerta com ocorrência de níveis de radiação indicados nos detectores fixos de área que ultrapasse 1000μGy/h.<br><br>
        Impacto de míssil ou aeronave.<br><br>
        Sabotagem completada com sucesso.<br><br>
        Explosões na área do prédio afetando a integridade física.
        `
    },
    {
        pergunta: `Quais os objetivos do PER?`,
        resposta: `a)	Atendimento a um acidente radioativo<br>
        b)	Retorno às condições de normalidade.
        `
    },
    {
        pergunta: `Cite os principais locais do Reator IPEN/MB-01, onde há perigos de radiação.`,
        resposta: `a)	Ao redor do Tanque do Moderador.<br><br>
        b)	Na sala de fontes da ala quente do edifício de Apoio.<br><br>
        c)	Na sala de fonte de partida do Reator IPEN/MB-01.<br><br>
        d)	Na “glove box” de manuseio de montagens e desmontagens de varetas combustíveis e varetas especiais.
        `
    },
    {
        pergunta: `Qual é taxa de dose ao redor do Tanque do Reator quando este operou durante uma hora a 100 W, no instante zero após seu desligamento? Nesta condição é possível que um operador receba esta taxa de dose?`,
        resposta: `A taxa de dose neste instante é de 18 R/h ou 180 mSv/h.<br>
        Não, pois ele só poderá emergencialmente entrar na Célula Crítica uma hora após o desligamento quando a taxa de dose já caiu para 1,4 R/h e mesmo assim monitorado pela radioproteção obedecendo todos os critérios de dose mínima.
        `
    },
    {
        pergunta: `Qual é a taxa de dose de radiação na Célula Crítica durante uma operação a 100 W de potência durante uma hora? Ela é maior que a taxa de dose logo após o desligamento do Reator no instante zero? Por quê?`,
        resposta: `A taxa de dose durante a operação a 100 W após uma hora de operação é de 0,6 µSv/h. <br>
        Não, ela é menor em virtude da blindagem que o moderador exerce durante a operação. Segundo medidas experimentais realizadas, a taxa de dose no instante zero após a queda das barras e esvaziamento do tanque do moderador, a taxa de dose é de 50 µSv/h.
        `
    },
    {
        pergunta: `Qual é a taxa de dose de radiação na sala de controle em condições normais de operação, isto é com o reator operando a 100 W de potência?`,
        resposta: `A taxa de dose é aproximadamente 7,5μSv/h.`
    },
    {
        pergunta: `Qual é a taxa de dose da fonte de partida medida na entrada do compartimento que a abriga (Sala da Fonte de Partida)?`,
        resposta: `10,0 μSv/h para nêutrons e 1,0 μSv/h para gama.`
    },
    {
        pergunta: `Qual a dose aguda teórica devido aos nêutrons e gama na sala de controle após um acidente básico de projeto (retirada incontrolada da barra de controle)?`,
        resposta: `Devido a nêutrons é de 0,0005 Sv (5 mSv)  e devido a gama é de 0,021 Sv(21 mSv)..`
    },
    {
        pergunta: `Qual a dose teórica nos limites da área de exclusão (cerca da Instalação) devido à retirada incontrolada da barra de controle?`,
        resposta: `Inferior a 5 mSv/h`
    },
    {
        pergunta: `O que significa termo fonte?`,
        resposta: `São tipos, quantidades e formas químicas de radionuclídios que compreendem a fonte de potencial de exposição à radioatividade.`
    },
    {
        pergunta: `Quais são os termos fontes na célula crítica em operação normal e em acidentes?`,
        resposta: `a)	Em operação normal: <br><br>
        -Produtos de ativação da água e dos materiais ativados que ficam retidos nas resinas do STAM.<br>
        -Radionuclídeos gerados pela ativação do ar da célula crítica.<br>
        -Radionuclídeos gerados nos experimentos.<br><br>
        b)	Em condição de acidente:<br><br>
        A análise efetuada para o termo fonte em acidentes postula um acidente que poderá ocorrer durante a operação de troca e estocagem de varetas combustíveis. Este acidente é analisado no capítulo XV do RAS. Na ocorrência deste evento, o sistema de ventilação S1 opera em regime de exaustão e recirculação havendo liberação de material radioativo para a atmosfera até o momento em que os dampers são fechados. O fechamento dos dampers ocorre quando a concentração de I-131 atinge o valor de perigo 10⁴ CPM detectável pelo RITH-156 Detector de Dutos da Chaminé.
        `
    },
    {
        pergunta: `Quais são os termos fonte referente aos experimentos nos laboratórios?`,
        resposta: `Os termos fontes ligados à preparação de experimentos e as atividades de laboratórios são identificados, avaliados e tratados conforme exigências específicas de cada experimento, devido ser atendidos os requisitos estabelecidos nos procedimentos de proteção radiológica da Instalação.`
    },
    {
        pergunta: `Como são feitos os tratamentos de rejeitos líquidos gerados no Reator IPEN/MB-01?`,
        resposta: `
        a)	Gerados na célula crítica.<br>
        Os rejeitos gerados na célula crítica são oriundos do sistema de drenagem do tanque do moderador e tanque de estocagem. Estes materiais juntamente com os produtos oriundos do Subsistema de Drenagem da Célula Crítica (SDCC), provenientes dos drenos das covas dos elementos combustíveis, ralos do piso do segundo subsolo da célula crítica são encaminhados para o tanque de decaimento. A liberação de efluentes do tanque de decaimento pode ser feita na rede de esgotos do IPEN, ou acondicionado em bombonas, isso tudo em função de uma análise prévia de amostra e da autorização do Departamento de Monitoração Ambiental(NA) do IPEN de acordo com a norma (CNEN-NE 3.01).<br><br>
        b)	Gerados nos laboratórios do edifício de apoio.<br>
        Os rejeitos gerados nos laboratórios, sala de descontaminação, lavanderia são encaminhados ao Sistema de Drenagem do Edifício de Apoio (SDEA), para o tanque de retenção e mistura. Neste sistema os rejeitos poderão ser diluídos apropriadamente no tanque de mistura e de acordo com as Diretrizes Básicas da Radioproteção, pode seguir os seguintes rumos:<br><br>
        1)	Liberação direta na rede a partir do tanque de retenção.<br>
        2)	Liberação na rede após diluição no tanque de mistura.<br>
        3)	Coleta em bombonas para envio à Gerência de Rejeitos Radioativos do IPEN.

        `
    },
    {
        pergunta: `Como são feitos os tratamentos de rejeitos gasosos gerados no Reator IPEN/MB-01?`,
        resposta: `a)	Gerados na célula crítica. <br>
        Os gases oriundos de possíveis escapes dos elementos combustíveis ou de algum experimento que possam gerar gases radioativos são retidos no sistema de filtros dos sistemas de Recirculação e Exaustão. Cada um destes sistemas é composto por 2 trens redundantes de filtros absolutos e de carvão. Os filtros de carvão retêm os produtos gasosos radioativos e os filtros absolutos (HEPA) retém os particulados.
        O controle de nível de radioatividade e de contaminantes radioativos é feito por monitores de dutos instalados na exaustão e recirculação e chaminé.<br><br>
        
        b)	Gerados na Capela de Manuseio de materiais radioativos.<br>
        São gerados exclusivamente na capela de manuseio de materiais radioativos que possui um mecanismo de exaustão independente com pressão negativa em relação ao ambiente do laboratório e um conjunto próprio de pré-filtros, filtros absolutos e de carvão ativado. Após a filtragem, o controle dos contaminantes radioativos é feito por monitor com detector cintilador de iodeto de sódio com módulo de leitura local.
        O controle da eliminação na chaminé é efetuado por um monitor de Iodo, tal que não ultrapasse o valor limite estabelecido nas Diretrizes Básicas da Radioproteção (CNEN-NE3.01).
        No histórico de funcionamento do Reator IPEN/MB-01, os rejeitos liberados sempre estiveram abaixo dos limites estabelecidos pela Radioproteção.
        `
    },
    {
        pergunta: `Como são feitos os tratamentos de rejeitos sólidos gerados no Reator IPEN/MB-01?`,
        resposta: `•	Principais rejeitos sólidos gerados: <br><br>
        -papéis<br>
        -toalhas<br>
        -vidrarias<br>
        -materiais de limpeza<br>
        -materiais de proteção individual contaminados.<br>
        -resinas de troca iônica<br>
        -filtros<br><br>
        •	Acondicionamento<br>
        Os materiais são compactáveis quando for o caso, e encaminhados à Gerência de Rejeitos Radioativos do IPEN onde são acondicionados em recipientes metálicos de 200 l revestidos internamente com tinta epóxi, para posterior armazenamento.
        As resinas do Sistema de Água de Moderação (STAM), são previamente analisadas e em função da atividade medida, podem ser armazenadas ou devolvidas aos fornecedores, onde são tomadas as decisões apropriadas.<br>
        Da mesma forma as resinas de troca iônica são acondicionadas em recipientes e encaminhadas ao GRR para estocagem.<br><br>
        •	Histórico
        Dentro do histórico de funcionamento do reator, pode-se desconsiderar a geração de rejeitos sólidos.
        `
    },
    {
        pergunta: `Como é feita a amostragem de resíduos líquidos e gasosos?`,
        resposta: `a)	Rejeitos Líquidos <br>
        Os rejeitos líquidos gerados na célula crítica são coletados adequadamente e enviados à Divisão Ambiental do IPEN onde é realizada uma análise por espectrometria gama. Essa análise quantifica e qualifica os radionuclídios presentes na amostra e especifica a forma de eliminação dos rejeitos de acordo com as Diretrizes Básicas da Radioproteção.<br>
        Os rejeitos gerados nos laboratórios são direcionados ao Sistema de Drenagem do Edifício de Apoio (SDEA).<br>
        Uma amostra é retirada adequadamente do tanque de retenção e encaminhada à Divisão Ambiental do IPEN para análise.<br><br>
        b)	Rejeitos gasosos
        Os monitores de radiação relativos aos circuitos de condicionamento de ar e ventilação estão instalados nos dutos de ar, fixados “on line”.
        `
    },
    {
        pergunta: `Relacione as etapas básicas para remoção dos rejeitos líquidos gerados na Célula Crítica.`,
        resposta: `1.	Após coletada no tanque de decaimento (TQ-203) a água é recirculada para homogeneização  <br><br>
        2.	Uma amostra da água é enviada para o Departamento de Monitoração Ambiental da proteção radiológica do IPEN para análises radio químicas e outra para o laboratório químico da instalação.<br><br>
        3.	Se necessário a água do tanque de decaimento poderá ser “acondicionada” em recipientes apropriados para futuro destino a ser definido pelo serviço de proteção radiológica (ambiental).<br><br>
        4.	Se os resultados das análises químicas e radio químicas estiverem dentro dos limites permissíveis, a drenagem do tanque de decaimento será realizada por recalque para a rede de águas pluviais.
        `
    }
]