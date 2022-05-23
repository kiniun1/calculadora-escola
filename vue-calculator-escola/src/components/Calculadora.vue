<template>

  <div id="main" class="p-3" style="max-width: 500px; margin: 100px 20px 100px 200px; background: #000;">
    <!-- Visor Calculadora -->
    <div class="w-full m-1 p-3 text-end lead rounded font-weight-bold text-white bg-vue-dark">
      {{ primeiroValorVisual }} {{ operadorVisual }} {{ segundoValorVisual }} 
      <br>
      {{ valorCalculadoraVisual || erroEntrada ||0 }}
    </div>

    <!-- Botões -->
    <div class="row no-gutters">
      <div class="col-3" v-for="elemento in elementosCalculadora" :key="elemento">
        <div class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
          :class="{'bg-vue-red': ['C'].includes(elemento), 
          'bg-vue-green': ['='].includes(elemento), 
          'bg-vue-brown': ['*', '+' ,'-', '/', '±'].includes(elemento), 
          'bg-vue-blue': ['%', '√'].includes(elemento),          
          }"
          @click="action(elemento)"
        >
          {{ elemento }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculadora',
  props: {
    msg: String,
  },

  data() {
    return {
      valorCalculadoraVisual: '',
      primeiroValorVisual: '',
      segundoValorVisual: '',
      primeiroValorRequisicao: '',
      segundoValorRequisicao: '',
      elementosCalculadora: ['C', '%', '√', '±', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/', ],
      operadorRequisicao: null,
      operadorVisual: null,
      respostaIgual: '',
      respostaOperador: '',
      FlagApertarIgualSemDigitarOValor: false, //se apertar igual após apertar em um botão de operação, sem digitar um número, pegar o valor no visor da calculadora como segundo valor de requisição
      FlagDepoisDeUmaOperacao: false, // Após apertar em um botão de operação pela segunda vez, faz o cálculo, atualiza os resultados e zera o segundo valor, na hora de digitar um valor no visor
      FlagLimparDadosApósRetornoalor: false, // Após apertar o botão = e retornar o resultado, se começar a digitar um novo valor, sem apertar em uma operação, limpa todos os dados e reinicia
      erroEntrada: '',
    }
  },

  methods: {
    async action(elemento){

      // Atribuição do valor sendo digitado nos botões
      if(!isNaN(elemento) || elemento === '.'){
        if(this.FlagDepoisDeUmaOperacao === true){

          this.valorCalculadoraVisual = '';
          this.segundoValorRequisicao = '';
          this.FlagDepoisDeUmaOperacao = false;

        } else if (this.FlagLimparDadosApósRetornoalor === true){

          this.limpaDados();
          this.FlagLimparDadosApósRetornoalor = false;

        }
        if(this.primeiroValorVisual === ''){

          this.valorCalculadoraVisual += elemento + '';
          this.primeiroValorRequisicao += elemento + '';

        } else{

          this.valorCalculadoraVisual += elemento + '';
          this.segundoValorRequisicao += elemento + '';

        }
      }

      // Operações
      if(['+', '-', '/', '*', '√', '%'].includes(elemento)){
        if(this.erroEntrada != ''){
          this.erroEntrada = '';
        }
        if(this.respostaIgual != ''){

          this.atualizaOperador(elemento, elemento);
          this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual, this.valorCalculadoraVisual);
          this.atualizaSegundoValorRequisicao('', '');
          this.valorCalculadoraVisual = '';
          this.respostaIgual = '';
          this.FlagLimparDadosApósRetornoalor = false;

        }
        else if(this.operadorRequisicao != null){
          if(this.segundoValorRequisicao === ''){
            this.atualizaOperador(elemento, elemento);
          }else{
            
            try {
              this.respostaOperador = await this.chamaApi(this.primeiroValorRequisicao, this.operadorRequisicao, this.segundoValorRequisicao);
              this.valorCalculadoraVisual = await this.respostaOperador.json();
              this.atualizaOperador(elemento, elemento);
              this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual, this.valorCalculadoraVisual);
              this.FlagApertarIgualSemDigitarOValor = true; // depois de apertar um botão de operação, se não digitar um valor e apertar =, pegar o valor no visor da calculadora como segundo valor
              this.FlagDepoisDeUmaOperacao = true; // depois de uma operacao, zerar o segundo valor, e o visor ao digitar
            } catch (erro) {
              this.erroEntrada = 'ERRO';
              console.log(erro);
            }
          }
        } else{

          this.atualizaOperador(elemento, elemento);
          this.primeiroValorVisual = this.primeiroValorRequisicao;
          this.valorCalculadoraVisual = '';

        }
      }

      // Inverter o sinal
      if(elemento === '±'){
          if(this.valorCalculadoraVisual != ''){
            if(this.valorCalculadoraVisual === this.primeiroValorRequisicao){

              this.valorCalculadoraVisual = this.valorCalculadoraVisual * -1;
              this.primeiroValorRequisicao = this.primeiroValorRequisicao * -1;

            }else if(this.valorCalculadoraVisual === this.segundoValorRequisicao){

              this.valorCalculadoraVisual = this.valorCalculadoraVisual * -1;
              this.segundoValorRequisicao = this.segundoValorRequisicao * -1;

            }
          }
        }

      // Limpando o valor
      if(elemento === 'C'){
        this.limpaDados();
      }

      // Resultado
      if(elemento === '='){
        // se apertar igual após apertar em um botão de operação, sem digitar um número, pegar o valor no visor da calculadora como segundo valor de requisição
        if(this.FlagApertarIgualSemDigitarOValor === true){

          this.segundoValorRequisicao = this.valorCalculadoraVisual;
          this.FlagApertarIgualSemDigitarOValor = false;

        }
        if(this.primeiroValorRequisicao === ''){
          
          this.primeiroValorRequisicao = 0;

        }
        else if(this.segundoValorRequisicao === ''){

          this.segundoValorRequisicao = 0;

        }
        try {
          this.respostaIgual = await this.chamaApi(this.primeiroValorRequisicao, this.operadorRequisicao, this.segundoValorRequisicao);
          this.valorCalculadoraVisual = await this.respostaIgual.json();
          this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual, this.primeiroValorRequisicao);
          this.segundoValorVisual = this.segundoValorRequisicao;
          this.operadorVisual = this.operadorRequisicao;
          this.FlagLimparDadosApósRetornoalor = true;
        } catch (erro) {
          this.erroEntrada = 'ERRO';
          console.log(erro);
        }

      }
    },
    async chamaApi(primeiroValor, operador, segundoValor) {
      
      const response = await fetch(`http://localhost:3080/api`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({primeiroValor, operador, segundoValor}),
        
      })
      return response
    },

    limpaDados() {
      this.valorCalculadoraVisual = '';
      this.primeiroValorVisual = '';
      this.segundoValorVisual = '';
      this.primeiroValorRequisicao = '';
      this.segundoValorRequisicao = '';
      this.operadorRequisicao = null;
      this.operadorVisual = null;
      this.respostaIgual = '';
      this.respostaOperador = '';
      this.erroEntrada = '';
    },

    atualizaPrimeiroValorRequisicao(requisicao, visual) {
      this.primeiroValorRequisicao = requisicao;
      this.primeiroValorVisual = visual;
    }, 
    atualizaSegundoValorRequisicao(requisicao, visual) {
      this.segundoValorRequisicao = requisicao;
      this.segundoValorVisual = visual;
    }, 
    atualizaOperador(requisicao, visual) {
      this.operadorRequisicao = requisicao;
      this.operadorVisual = visual;
    },
  }
}
</script>

<style scoped>
  .bg-vue-dark {
    background: #9765088c;
  }
  .hover-class:hover {
    cursor: pointer;
    background: #71753d;
  }
  .bg-vue-blue {
    background: #0c5764;
  }
  .bg-vue-green {
    background: #0d6e15;
  }
  .bg-vue-red {
    background: #c91414;
  }
  .bg-vue-brown {
    background: #bd5907;
  }
  #main {
    display: table-cell;
    float: left;
  }
</style>
