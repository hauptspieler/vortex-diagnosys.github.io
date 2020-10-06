const data = [
	{
		question: ' Qual o nível de pitch você possui do seu negócio hoje?',
		choices: [
			{
				choice: 'Consigo explicar minha idéia durante uma conversa.',
				choiceNumber: 1,
			},
			{
				choice:
					'Tenho um pitch padrão pronto, com slides com design profissional.',
				choiceNumber: 2,
			},
			{
				choice: 'Tenho vários modelos de pitch, um para cada ocasião.',
				choiceNumber: 3,
			},
			{
				choice:
					'Tenho vários modelos de pitch e um investidor deck prontos.',
				choiceNumber: 4,
			},
			{
				choice:
					'Tenho um pitch e um investor deck prontos para captação de Série A.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Onde está o seu foco como empreendedor neste momento?',
		choices: [
			{ choice: 'Descobrir como começar uma startup.', choiceNumber: 1 },
			{
				choice:
					'Fazer meu negócio (que hoje tem pouquíssimos clientes pagantes) dar certo.',
				choiceNumber: 2,
			},
			{
				choice:
					'Organizar meu modelo, pois eu tenho muitos clientes e os processos estão me sobrecarregando.',
				choiceNumber: 3,
			},
			{
				choice:
					'Tracionar a minha empresa, pois eu já tenho muitos clientes e modelo organizado para aguentar a alta demanda que tenho hoje.',
				choiceNumber: 4,
			},
			{ choice: 'Captação de investimento', choiceNumber: 5 },
		],

		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: ' Onde está o foco do seu negócio agora?',
		choices: [
			{
				choice: 'Entender as dores dos meus possíveis clientes.',
				choiceNumber: 1,
			},
			{
				choice: 'Definir um caminho para conseguir mais clientes.',
				choiceNumber: 2,
			},
			{
				choice:
					'Gestão das operações da empresa, com foco em objetivos de 1 a 3 meses.',
				choiceNumber: 3,
			},
			{
				choice:
					'Gestão do crescimento da empresa, com foco em objetivos de 3 a 5 anos.',
				choiceNumber: 4,
			},
			{
				choice:
					'Internacionalização e sustentação de crescimento exponencial.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Qual a principal coisa que estão validando neste momento?',
		choices: [
			{
				choice:
					'Estamos fazendo as primeiras validações para entender nosso público.',
				choiceNumber: 1,
			},
			{
				choice:
					'Já fizemos algumas validações e descobrimos uma dor clara que já atendemos com um MVP. Estamos validando melhor nosso público para tirar insights para a construção de um modelo de negócios e um produto.',
				choiceNumber: 2,
			},
			{
				choice:
					'Estamos validando com profundidade todas as variáveis que mais impactam nossa startup e estamos consolidando nosso modelo de negócio com base nessas validações.',
				choiceNumber: 3,
			},
			{
				choice:
					'As incertezas relativas ao nosso modelo já estão claras para nós. Estamos validando como crescer de forma a manter a qualidade e difundir a cultura para os novos funcionários.',
				choiceNumber: 4,
			},
			{
				choice:
					'Estamos validando em quais outros países nossa solução mais faz sentido agora e qual a melhor forma de entrar nessas regiões',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'O quão consolidado/validado está seu modelo de negócios agora?',
		choices: [
			{
				choice:
					'Tenho um plano de como meu modelo de negócios pode funcionar, mas sem clientes.',
				choiceNumber: 1,
			},
			{
				choice:
					'Pouco clientes. Eles têm características diferentes entre si, então para alguns eu tive que abrir concessões e atender ou cobrar de forma diferente para não perder vendas.',
				choiceNumber: 2,
			},
			{
				choice:
					'Tenho um bom volume de clientes. Atendo e cobro todos da mesma forma. Só preciso ajustar algumas coisas para conseguir atender um volume maior de pessoas.',
				choiceNumber: 3,
			},
			{
				choice:
					'Meus número de clientes cresce todo mês de forma consistente. Meu modelo possui atratividade de mercado e consigo crescer com poucos problemas operacionais.',
				choiceNumber: 4,
			},
			{
				choice:
					'Tenho um modelo que já funciona bem em mais de um país e continua a crescer de forma consistente.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'Qual o principal resultado que seu negócio já atingiu até o momento?',
		choices: [
			{ choice: 'Ainda não começamos.', choiceNumber: 1 },
			{ choice: 'Conseguimos as primeiras vendas!', choiceNumber: 2 },
			{
				choice: 'Chegamos ao nosso Product/Market fit!',
				choiceNumber: 3,
			},
			{
				choice: 'Conseguimos começar a escalar a empresa!',
				choiceNumber: 4,
			},
			{
				choice: 'Conseguimos os primeiros clientes internacionais.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Qual a estrutura de vendas que sua empresa possui hoje?',
		choices: [
			{ choice: 'Estamos tentando a primeira venda.', choiceNumber: 1 },
			{
				choice:
					'Já fizemos algumas vendas e temos uma estrutura mínima de vendas.',
				choiceNumber: 2,
			},
			{
				choice:
					'Temos um processo de vendas bem estruturado e estamos batendo metas.',
				choiceNumber: 3,
			},
			{
				choice:
					'Temos um funil de vendas otimizado que gera tração de alto resultado e baixo custo.',
				choiceNumber: 4,
			},
			{
				choice:
					'Temos um funil otimizado gerando vendas em diversos países.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'Qual o nível de maturidade do seu produto (software, hardware, aplicativo, plataforma, sistema e etc) atual?',
		choices: [
			{
				choice: 'Produto manual que simula uma entrega tecnológica.',
				choiceNumber: 1,
			},
			{
				choice:
					'Uso plataformas de serviços de terceiros de forma integrada para entregar minha solução ao mercado.',
				choiceNumber: 2,
			},
			{
				choice: 'Tenho um MVP desenvolvido internamente',
				choiceNumber: 3,
			},
			{
				choice:
					'Tenho um produto robusto com alta capacidade de escala.',
				choiceNumber: 4,
			},
			{
				choice:
					'Tenho um produto global pronto para entrar em diversos países.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Como está a composição do seu time atualmente?',
		choices: [
			{ choice: 'O time está em formação.', choiceNumber: 1 },
			{
				choice:
					'Faltam completar apenas uma ou duas posições de sócio.',
				choiceNumber: 2,
			},
			{ choice: 'Temos um time completo de sócios.', choiceNumber: 3 },
			{
				choice: 'Temos um time completo de sócios e temos funcionários',
				choiceNumber: 4,
			},
			{
				choice: 'Temos diversos times distribuídos em alguns países.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'Qual o nível de maturidade das operações da empresa no momento atual?',
		choices: [
			{ choice: 'Ainda não estamos em operação.', choiceNumber: 1 },
			{
				choice:
					'início de operações, tentando trabalhar de forma ágil.',
				choiceNumber: 2,
			},
			{
				choice:
					'Operação robusta, agile aplicado em todas as áreas e processos bem definidos.',
				choiceNumber: 3,
			},
			{
				choice:
					'Escalando operações para atender o volume maior de clientes que estamos adquirindo. ',
				choiceNumber: 4,
			},
			{
				choice: 'Operações rodando em mais de um país.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'Qual o nível de maturidade da gestão da empresa neste momento?',
		choices: [
			{
				choice:
					'Não temos nenhuma forma de gestão pois não estamos em operação.',
				choiceNumber: 1,
			},
			{
				choice: 'Início da gestão, tentando trabalhar de forma lean',
				choiceNumber: 2,
			},
			{
				choice:
					'Modelo de gestão eficiente, toda a empresa trabalha de forma lean e temos KPIs em todas as áreas chave.',
				choiceNumber: 3,
			},
			{
				choice:
					'Temos um modelo consolidado de gestão orientada a dados e estamos montando um board de investidores',
				choiceNumber: 4,
			},
			{
				choice:
					'Fazemos uma gestão eficiente de equipes em diversos países.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Há quanto tempo sua empresa possui faturamento?',
		choices: [
			{ choice: 'Não faturamos.', choiceNumber: 1 },
			{ choice: 'Um mês ou menos.', choiceNumber: 2 },
			{ choice: 'De um à seis meses.', choiceNumber: 3 },
			{ choice: 'De seis meses à um ano.', choiceNumber: 4 },
			{ choice: 'Mais de um ano.', choiceNumber: 5 },
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question: 'Como é seu padrão de faturamento atual?',
		choices: [
			{ choice: 'Não faturamos.', choiceNumber: 1 },
			{ choice: 'Vendas esporádicas.', choiceNumber: 2 },
			{
				choice:
					'Vendas constantes, mas sem grandes aumentos no volume vendido a cada mês.',
				choiceNumber: 3,
			},
			{
				choice:
					'Todo mês nossas vendas crescem ao menos 15% e isso já vem acontecendo há mais de três meses de forma constante',
				choiceNumber: 4,
			},
			{
				choice:
					'Estamos crescendo de forma constante em mais de um país simultaneamente.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'Qual o nível de estruturação do seu backoffice (áreas: legal, jurídica, fiscal e contábil da empresa) neste momento?',
		choices: [
			{ choice: 'Não temos nada disso.', choiceNumber: 1 },
			{
				choice:
					'Realizamos algumas dessas atividades pontualmente, sem muita estrutura.',
				choiceNumber: 2,
			},
			{
				choice:
					'Nosso backoffice está em fase de organização e estruturação.',
				choiceNumber: 3,
			},
			{
				choice: 'Todo nosso backoffice está estruturado e organizado. ',
				choiceNumber: 4,
			},
			{
				choice:
					'Trabalhamos com base num modelo de governança corporativa que cobre essas áreas.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
	{
		question:
			'O time de sócios consegue fazer uso dos seu networking atual para abrir portas estratégicas que possam ajudar o negócio a crescer mais rápido?',
		choices: [
			{ choice: 'Não pensamos sobre isso.', choiceNumber: 1 },
			{
				choice:
					'Temos um time com bons contatos, mas não estamos fazendo uso disso agora.',
				choiceNumber: 2,
			},
			{
				choice:
					'Estamos começando a ativar nossa rede de forma estratégica, porém sem grandes resultados.',
				choiceNumber: 3,
			},
			{
				choice:
					'Nossa rede está nos ajudando a captar investimentos e a tracionar.',
				choiceNumber: 4,
			},
			{
				choice:
					'Nossa rede de investimentos está nos ajudando no nosso processo de internacionalização.',
				choiceNumber: 5,
			},
		],
		answers: [
			{ answer: 1 },
			{ answer: 2 },
			{ answer: 3 },
			{ answer: 4 },
			{ answer: 5 },
		],
	},
];

let optionClicked = {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
	e: 0,
};

const questionMarkTextArray = ['A', 'B', 'C', 'D', 'E'];

let answers = [];

let finalAnswers = {
	a: 'Você está na fase de IDEAÇÃO! Neste momento você deve se focar em fazer suas validações iniciais para ter clareza da dor que irá resolver e com isso poder construir seu MVP CONCIERGE e fazer sua primeira venda! Nessa fase é importante tomar cuidado para não planejar demais, gastar com coisas desnecessárias ou mesmo criar algo que ninguém vai comprar por não existir demanda (Esse é o motivo Nº 1 pelo qual startups quebram nesta fase!) Quer ajuda para lançar seu negócio com tranquilidade? Fale conosco no Instagram! @startadora',
	b: 'Você está na fase de PRÉ-OPERAÇÃO! Nesta fase é essencial que você desenvolva muito bem a visão e estratégia do seu negócio! Você já conseguiu ter seus primeiros resultados mais precisa se aprofundar no entendimento do seu cliente até que consiga fazer a melhor solução para o pior problema dele. Mas muito cuidado para não se perder neste momento! Existe um grande risco de você fazer vendas para clientes muito diferentes, fazendo com que você tenha que se adaptar um pouco a cada um deles e com isso criar um modelo que não seja repetível e escalável. (Esse é o motivo Nº 1 pelo qual startups quebram nesta fase!) Quer ajuda para criar uma estratégia matadora? Fale conosco no Instagram! @startadora',
	c: 'Você está na fase de OPERAÇÃO! Agora você precisa consolidar o seu modelo de negócios através de analises qualitativas aprofundadas da sua base de clientes. Você precisa identificar padrões e relações de causa e efeito. Precisa criar processos que suportem a fase de tração que virá para o seu negócio logo em seguida! Cuidado para não fazer uma validação superficial e com isso prejudicar sua capacidade de crescer rapidamente por não entender com profundidade os seus clientes (Esse é o motivo Nº 1 pelo qual startups quebram nesta fase!) Quer ajuda para fazer suas validações com os maiores especilistas disso no mercado? Fale conosco no Instagram! @startadora',
	d: 'Você está na fase de TRAÇÃO! Agora você precisa consolidar todoas as informações que você já tem sobre os seus clientes para que você possa construir um funil de vendas eficiente com alta taxa de conversão. Também é um bom momento para você criar um dashboard de gestão orientado a dados onde você poderá observar as métricas e indicadores corretos para acompanhar se sua startup está crescendo de forma sólida. Cuidado para não queimar dinheiro com estratégias de crescimento que não estão validadas, que não funcionam para o seu modelo ou mesmo construir aquele balde furado cheio de leads no topo do funil, mas que saem quase todos ao longo do processo. (Esse é o motivo Nº 1 pelo qual startups quebram nesta fase!) Quer ajuda para construir uma estratégia de tração eficiente baseada em dados e validação? Fale conosco no Instagram! @startadora',
	e: 'Você está na fase de EXPANSÃO! Você está em um bom momento para começar a captar grandes investimentos, como uma série A. Para isso você precisa estar com toda a sua empresa organizada para que você possa mostrar o máximo de previsibilidade com o mínimo de risco para o investidor. Cuidado com todo o seu backoffice (partes legal, jurídica, fiscal e contábil da empresa). Para um investimento desse nível, qualquer investidor profissional irá analisar tudo isso minuciosamente e se você não passar na análise, nada de investimento (Esse é o motivo Nº 1 pelo qual startups quebram nesta fase!) Quer ajuda para organizar seu negócio para uma captação de investimentos? Fale conosco no Instagram! @startadora',
};

let resultDisplay = {
	a: "Ideação",
	b: "Pré-Operação",
	c: "Operação",
	d: "Tração",
	e: "Expansão",
};

