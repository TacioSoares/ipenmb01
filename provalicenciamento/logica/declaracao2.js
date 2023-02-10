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
        b)	Subir totalmente a barra de segurança 1<br><br>
        c)	Subir totalmente a barra de segurança 2<br><br>
        d)	Encher o tanque do moderador TQ-201 até o nível operacional usando a bomba de enchimento rápido até ¾ da parte ativa do núcleo e o restante com enchimento lento através da bomba de enchimento lento.<br><br>
        e)	Subir a barra de controle 1 (BC#1) até uma determinada posição, especificada pelo, OSR em função das características da configuração considerada e dos arranjos experimentais existentes.<br><br>
        f)	Subir a barra de controle 2 (BC#2) até uma determinada posição, especificada pelo, OSR em função das características da configuração considerada e dos arranjos experimentais existentes de forma cautelosa orientando se pelos níveis de contagens, níveis de correntes, valores de períodos do canais nucleares apropriados até o reator ficar levemente supercrítico.<br><br>
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
        resposta: `•	Aplicabilidade: Se aplica aos Limites de potência para os canais nucleares. <br><br>
        •	Objetivo: Desligar o reator por sobrepotência.<br><br>
        •	Especificação: Canais 1,2 e 9 desligam o reator na faixa de partida em 110 mW por SCRAM dos Magnetos e em 120 mW por SCRAM de Válvulas. Os canais nucleares 3,4,7,8 e 10, que operam na faixa de potência, desligam o reator por sobrepotência em 110 W, por SCRAM de MAGNETOS e em 120 W por SCRAM de MAGNETOS e SCRAM de VÁLVULAS.<br><br>
        •	Base: Assegurar o desligamento do reator por sobrepotência
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
        •	Especificação: O excesso de reatividade total do núcleo sem experimentos e na temperatura de 20°C não deverá exceder a 2500 pcm para a configuração retangular básica de projeto de 28x26 (680) varetas combustíveis, e 3160 pcm para a configuração cilindrizada, mantendo o mesmo número de varetas combustíveis.<br><br>
        •	Base: Manter o excesso de reatividade do núcleo dentro de limites que atenda os seguintes critérios de segurança: “margem de desligamento”, que estabelece que a soma das reatividades das barras de controle e segurança sejam no mínimo, 125% superior ao máximo excesso de reatividade do núcleo e, o “critério da barra presa” seja atendido. Este critério estabelece que o reator esteja na condição de “reator desligado” (keff<0,98) ainda que a barra mais reativa fique presa em posição totalmente retirada do núcleo.
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
        
        •	Base: Assegurar que o valor da reatividade inserido pelos experimentos e a taxa de mudança de reatividade estejam de acordo com os valores considerados no Capítulo XV do RAS (Análise de segurança).
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
        resposta: `O REDO (Relatório de Eventos de Operação) é um relatório especial que reporta uma ocorrência não usual na instalação que, embora aparentemente sem grandes consequências, poderiam afetar a segurança desta instalação. `
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