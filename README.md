# Calculadora
Este é um projeto de uma calculadora, sendo utilizado NodeJS no backend e VUE no frontend.

Foi utilizado TDD como base de desenvolvimento, e DDD para distribuição por camadas, assim como conceitos de clean architecture.

# Sobre a calculadora

Tendo 6 operações, as 4 básicas de soma, subtração, multiplicação e divisão. Mais porcentagem e raiz.

# Como rodar o projeto

Basta clonar/baixar o projeto, executar: 

```bash
npm install 
```

Para executar os testes, após o comando acima:

```bash
npm test
```

E para executar e começar a aplicação:

```bash
npm start
```

E estará rodando na porta 3080. Para ter acesso a calculadora basta digitar no navegador o seguinte endereço:
```bash
localhost:3080
```

# Estrutura das pastas

Sobre a estrutura do projeto, foi divido nas pastas:

<li>Application

<li>Commons

<li>Domain

<li>Interface

<li>Test

# Application
<details>

  ### Função canalizador-validação-operação
  ```bash
  const canalizadorValidacaoOperacao = async(primeiroValor, operador, segundoValor) => {
      try {
          const resultadoValidacao = await validacaoDados([primeiroValor, operador, segundoValor]);
          if(resultadoValidacao[2] === 'ok'){
              let resultadoOperacao = await controllerOperacao(resultadoValidacao[0], operador, resultadoValidacao[1]);
              if(resultadoOperacao === 'Calculo não reconhecido'){
                  const erroValidacao = await httpStatusResponse(500, 'erro interno', 'canalizador-validacao-operacao');
                  return erroValidacao;
              }else{
                  resultadoOperacao = resultadoOperacao.toFixed(15);
                  resultadoOperacao = resultadoOperacao.toString();
                  const resultadoFinal = await httpStatusResponse(200, resultadoOperacao, 'canalizador-validacao-operacao');
                  return resultadoFinal;
              }
          }else {
              const erroValidacao = await httpStatusResponse(400, 'Entrada inválida', 'canalizador-validacao-operacao');
              return erroValidacao;
          }
      } catch (erro) {
          const erroValidacao = await httpStatusResponse(500, (erro.message), 'canalizador-validacao-operacao');
          return erroValidacao;
      };
  };
  ```
  <details>

    Descrição
        Recebe os dados da rota POST, e canaliza para enviar para o controller de validação dos dados, e 
        se retornar tudo válido envia os valores para o controller de operações

    Parametros
        primeiroValor: O primeiro valor da calculadora. Ex: 2 + 3, nesse caso seria o 2
        operador: O operador que foi passado. Ex: 2 + 3, nesse caso seria o +
        segundoValor: O segundo valor da calculadora. Ex: 2 + 3, nesse caso seria o 3

    O que a função retorna
        Retorna o resultado se a operação for válida, e Entrada inválida se por acaso for uma operação impossivel.

  </details>  

  ### Função controller-operação
  ```bash
  const controllerOperacao = async(primeiroValor, operador, segundoValor) => {
    try {
        const actions = {
            '+': (a, b) => funcaoDeAdicao(a, b),
            '-': (a, b) => funcaoDeSubtracao(a, b),
            '*': (a, b) => funcaoDeMultiplicacao(a, b),
            '/': (a, b) => funcaoDeDivisao(a, b),
            '%': (a, b) => funcaoDePorcentagem(a, b),
            '√': (a, b) => funcaoDeRaiz(a, b),
        };
        return actions[operador]?.(primeiroValor, segundoValor) ?? "Calculo não reconhecido";
    } catch (erro) {
        console.log(erro);
    };
  };
  ```
  <details>

    Descrição
        Recebe os dados da função canalizadora de validação e operações. E checa qual é a operação que deve fazer, e chama a função correta.

    Parametros
        primeiroValor: O primeiro valor da calculadora. Ex: 2 + 3, nesse caso seria o 2
        operador: O operador que foi passado. Ex: 2 + 3, nesse caso seria o +
        segundoValor: O segundo valor da calculadora. Ex: 2 + 3, nesse caso seria o 3

    O que a função retorna
        Retorna o resultado se a operação for válida, e Calculo não reconhecido se por acaso for uma operação impossivel.

  </details>

  ### Função conversão de string para numero
  ```bash
  const conversaoStringNumero = async(valor)=>{
    try {
        return parseFloat(valor);
    } catch (erro) {
        const erroConversao = await httpStatusResponse(500, (erro.message), 'conversao-string-numero');
        return erroConversao;
    };
  };
  ```
  <details>

    Descrição
        Recebe os parametros que forem string, e retorna como float

    Parametros
        valor: O parametro que for string.

    O que a função retorna
        Retorna o parametro com um tipo de numero.

  </details>
</details>

# Domain
<details>
    
  ### Função adição
  ```bash
  const funcaoDeAdicao = async(...valores) => {
      return valores.reduce((acumulador, proximoValor) => acumulador + proximoValor);
  };
  ```
  <details>

    Descrição
        Recebe um array de valores, e faz a soma.

    Parametros
        valores: Um array dinâmico, podendo ser passado quantos valores necessário. Ex: (2, 3); Ex2: (5, 8, 15).

    O que a função retorna
        Retorna o resultado da soma.

  </details>

  ### Função subtração
  ```bash
  const funcaoDeSubtracao = async(...valores) => {
      return valores.reduce((acumulador, proximoValor) => acumulador - proximoValor);
  };
  ```
  <details>

    Descrição
        Recebe um array de valores, e faz a subtração.

    Parametros
        valores: Um array dinâmico, podendo ser passado quantos valores necessário. Ex: (2, 3); Ex2: (5, 8, 15).

    O que a função retorna
        Retorna o resultado da subtração.

  </details>

  ### Função multiplicação
  ```bash
  const funcaoDeMultiplicar = async(...valores) => {
      return valores.reduce((acumulador, proximoValor) => acumulador * proximoValor);
  };
  ```
  <details>

    Descrição
        Recebe um array de valores, e faz a multiplicação.

    Parametros
        valores: Um array dinâmico, podendo ser passado quantos valores necessário. Ex: (2, 3); Ex2: (5, 8, 15).

    O que a função retorna
        Retorna o resultado da multiplicação.

  </details>

  ### Função divisão
  ```bash
  const funcaoDeDividir = async(...valores) => {
      return valores.reduce((acumulador, proximoValor) => acumulador / proximoValor);
  };
  ```
  <details>

    Descrição
        Recebe um array de valores, e faz a divisão.

    Parametros
        valores: Um array dinâmico, podendo ser passado quantos valores necessário. Ex: (2, 3); Ex2: (5, 8, 15).

    O que a função retorna
        Retorna o resultado da divisão.

  </details>

  ### Função porcentagem
  ```bash
  const funcaoDePorcentagem = async(porcentagem, valor) => {
      return porcentagem * valor / 100;
  };
  ```
  <details>

    Descrição
        Recebe dois parametros, e calcula a porcentagem de um valor.

    Parametros
        porcentagem: A parte que deseja saber de um valor, o primeiro valor passado na calculadora. Ex: o 10% de, 10% de 80.
        valor: O todo que deseja saber a parte quanto é, o segundo valor passado na calculadora. Ex: o 80 de, 10% de 80.

    O que a função retorna
        Retorna o resultado da operação. No caso do exemplo seria 8.

  </details>

  ### Função raiz
  ```bash
  const funcaoDeRaiz = async(radicando, indice) => {
      return mathjs.nthRoot(radicando, indice);
  };
  ```
  <details>

    Descrição
        Recebe 2 parametros, o radicando e o indice, e calcula a raiz.

    Parametros
        radicando: O primeiro valor passado na calculadora, o radicando da raiz. Ex: 4 √ 2, nesse caso seria o 4, ou seja raiz quadrada de 4.
        indice: O segundo valor passado na calculadora, o indice da raiz. Ex: 8 √ 3, nesse caso seria o 3, ou seja raiz cúbica de 8.

    O que a função retorna
        Retorna o resultado da raiz, utilizando a biblioteca mathjs, para fazer o calculo de raizes de vários indices diferentes.

  </details>

</details>


# Interface
<details>
    
  ### Função controller-validação-nulo
  ```bash
	const controllerValidacaoNulos = async(dados)=>{
			try {
					let respostaValidacao = [];
					for(let i = 0; i<3; i++){
							respostaValidacao.push(await ValidacaoDadosVaziosOuNulos(dados[i]));
					};
					if(respostaValidacao[0] === 'ok' && respostaValidacao[1] === 'ok' && respostaValidacao[2] === 'ok'){
							return 'ok'
					}else{
							return 'erro'
					}
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
					return erroValidacao;
			};
	};
  ```
  <details>

    Descrição
        Um controller que recebe os dados, e chama função pra checar se cada valor é nulo ou vazio, e retorna se está tudo válido.

    Parametros
        dados: Um array com os 3 parametros de 2 operandos e 1 operador.

    O que a função retorna
        Retorna uma string 'ok' indicando que os dados não são nulos, ou vazios.

  </details>

  ### Função controller validação numeros
  ```bash
	const controllerValidacaoNumeros = async(dados)=>{
			try {
					let respostaNumero = [];
					let resultadoConversao = [];
					for(let i = 0; i<2; i++){
							respostaNumero.push(await ValidacaoValoresSaoNumericos(dados[i]));
					}

					if(respostaNumero[0] === 'ok' && respostaNumero[1] === 'ok'){

							return [dados[0], dados[1], 'ok'];

					}else if(respostaNumero[0] === 'string' && respostaNumero[1] === 'ok'){

							resultadoConversao.push(await conversaoStringNumero(dados[0]));
							return [resultadoConversao[0], dados[1], 'ok'];

					}else if(respostaNumero[0] === 'ok' && respostaNumero[1] === 'string'){

							resultadoConversao.push(await conversaoStringNumero(dados[1]));
							return [dados[0], resultadoConversao[0], 'ok'];

					}else if(respostaNumero[0] === 'string' && respostaNumero[1] === 'string'){

							resultadoConversao.push(await conversaoStringNumero(dados[0]));
							resultadoConversao.push(await conversaoStringNumero(dados[1]));
							return [resultadoConversao[0], resultadoConversao[1], 'ok'];

					}
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-nulo');
					return erroValidacao;
			};
	};
  ```
	
  <details>

    Descrição
        Recebe um array de valores, e chama a função que checa se é string ou numero o tipo do valor. Após se for retornado que um dos parametros é string, chama
				a função que converte de string para float.

    Parametros
        valores: Um array com os 3 parametros da operação.

    O que a função retorna
        Retorna um array, com os valores operandos, em formato de numeral, e um terceiro valor no array, como uma string 'ok' para indicar que tudo ocorreu certo.

  </details>
	
 


  ### Função da rota POST da API
  ```bash
	router
	.post("/api", async (req, res) => {
			try {
					console.log('Rota API - calculo');
					let resultadoFinal
					let primeiroValor = req.body.primeiroValor;
					let segundoValor = req.body.segundoValor;
					let operador = req.body.operador;
					resultadoFinal = await canalizadorValidacaoOperacao(primeiroValor, operador, segundoValor);
					res.status(resultadoFinal.statusCode).send(resultadoFinal.body);
			} catch (error) {
					const finalError = await httpStatusResponse(500, (error.message), 'api-post-routes');
					res.status(finalError.statusCode).send(finalError.body);         
			}  
	});
  ```
  <details>

    Descrição
        Recebe a requisição, atribui a 3 variaveis, os valores das operação enviados no body da requisição, e chama o canalizador de validação e operação.

    Parametros
        req: A requisição da chamada.
        res: A resposta da chamada.

    O que a função retorna
        Retorna o resultado da operação caso for com sucesso, e entrada inválida e erro 400, se for uma operação inválida.

  </details>

  ### Função canalizadora de validação dos dados
  ```bash
	const validacaoDados = async(dados)=>{
			try {
					const resultadoNulo = await controllerValidacaoNulos(dados);

					if(resultadoNulo === 'ok'){
							const resultadoOperador = await ValidacaoOperador(dados[1]);

							if(resultadoOperador === 'ok'){
									const resultadoNumero = await controllerValidacaoNumeros([dados[0], dados[2]]);

									if(resultadoNumero[2] === 'ok'){
											const resultadoValidacaoZero = await validacaoOperacaoZero(dados[1], resultadoNumero[1]);

											if(resultadoValidacaoZero === 'ok'){

													return resultadoNumero;
											}else {

													return 'entrada inválida';
											}
									} else{

											return 'entrada inválida';
									}
							}else{

									return 'entrada inválida';
							}
					}else{

							return 'entrada inválida';
					}
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
					return erroValidacao;
			};
	};
  ```
  <details>

    Descrição
        Recebe um array com os valores da operação, e faz todas as chamadas das funções que vão individualmente fazer a validação dos dados. O objetivo dessa função
				é chamar todas as funções que fazem uma validação individual, e fazer a checagem do retorno dessas funções.

    Parametros
        valores: Um array com os 3 parametros da operação.

    O que a função retorna
        Retorna um array com 3 valores, sendo os 2 parametros operandos, com a conversão de string para numero se for necessário, e uma strin 'ok', indicando
				que a validação voltou que está tudo válido.

  </details>

  ### Função validação nulo
  ```bash
	const ValidacaoDadosVaziosOuNulos = async(dado)=>{
			try {
					const validacaoValores = {
							null: 'nulo',
							"": 'vazio',
							undefined: 'indefinido'
					};
					return validacaoValores[dado] ?? "ok";
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-nulo');
					return erroValidacao;
			};
	};
  ```
  <details>

    Descrição
        Recebe um parametro individual, e checa se é nulo, string vazia, ou indefinido.

    Parametros
        dado: Um dos operandos, ou o operador.

    O que a função retorna
        Se for um dos 3, retorna uma string indicando qual o tipo. E se não for nenhum dos 3, retorna 'ok'.

  </details>

  ### Função validação numero
  ```bash
	const ValidacaoValoresSaoNumericos = async(dado)=>{
			try {
					const validacaoValores = {
							string: 'string',
							number: 'ok',
					};
					return validacaoValores[typeof(dado)];
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-numero');
					return erroValidacao;
			}; 
	};
  ```
  <details>

    Descrição
        Recebe um parametro individual, e checa se é string ou um numero.

    Parametros
        dado: Um dos operandos.

    O que a função retorna
        Se o parametro passado for uma string retorna 'string', se for um numero retorna 'ok'.

  </details>
	
  ### Função validação operação com 0
  ```bash
	const validacaoOperacaoZero = async(operador, segundoValor)=>{
			try {
					if(operador === '√' && segundoValor === 0){
							return 'entrada inválida';
					}
					if(operador === '/' && segundoValor === 0){
							return 'entrada inválida';
					} else {
							return 'ok'
					}
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operacao-zero');
					return erroValidacao;
			};
	};
  ```
  <details>

    Descrição
        Recebe 2 parametros, o operador, e o segundo operando, e checa se o operando é uma Raiz, e o segundo valor 0, para uma raiz com indice 0. Ou se o operando é
				uma divisão, e o segundo valor 0, sendo uma divisão por 0. São duas operações que não são possiveis de fazer.

    Parametros
        operador: O operador passado para calcular.
				segundoValor: O segundo operando, passado para calcular.

    O que a função retorna
        Se por acaso entrar em qualquer um dos 2 casos, de divisão por 0 ou raiz com indice 0, retorna entrada inválida, se não for, retorna 'ok'.

  </details>
	
	
  ### Função validação operador
  ```bash
	const ValidacaoOperador = async(dado)=>{
			try {
					const operadores = {
							'+': 'ok',
							'-': 'ok',
							'*': 'ok',
							'/': 'ok',
							'%': 'ok',
							'√': 'ok',
					};
					return operadores[dado] ?? "inválido";
			} catch (erro) {
					const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
					return erroValidacao;
			};
	};
  ```
  <details>

    Descrição
        Recebe um parametro individual, que é para checar se o operador passado é válido.

    Parametros
        dado: O operador.

    O que a função retorna
        Se for qualquer um dos 6 Operadores disponiveis nessa calculadora, retorna 'ok', se não retorna 'inválido'.

  </details>
	
</details>

