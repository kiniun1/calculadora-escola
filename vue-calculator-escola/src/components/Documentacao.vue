<template>
    <div id="a" class="p-3" style="max-width: 500px; margin: 20px auto auto 100px;">
        <h1 style="color: white;">Como usar</h1>
        <br>
        <ul>
            <li id="limpa">
                <h4>C : Limpar e reiniciar a calculadora.</h4>   
                <br>
            </li>
            <li id="igual">
                <h4>= : Resultado</h4>
            </li>
        </ul>
        <br>
        <h2>Operações básicas</h2>
        <br>
        <ul id="operacoesBasicas">
            <li>
                <h4>± : Inverter o sinal do número.</h4>
                - Exemplo: 5 ± --> -5
                <br>
                <br>
            </li>
            <li>
                <h4>+ : Adição</h4>
                - Exemplo: 2 + 2 = 4.
                <br>
                <br>
            </li>
            <li>
                <h4>- : Subtração</h4>
                - Exemplo: 4 - 2 = 2.
                <br>
                <br>
            </li>
            <li>
                <h4>* : Multiplicação</h4>
                - Exemplo: 2 * 3 = 6.
                <br>
                <br>
            </li>
            <li>
                <h4>/ : Divisão</h4> 
                - Exemplo: 4 / 2 = 2.
                <br>
                <br>
            </li>
        </ul>
        <h2 style="color:#18bad6">Operações avançadas</h2>
        <ul id="operacoesAvançadas">
            <li>
                <h4>% : Porcentagem.</h4>
                - Exemplo: 10 % de 80 = 8.
                <br>
                <br>
            </li>
            <li>
                <h4>√ : Raiz.</h4>
                - Exemplo: 25 √ 2 = 5. Exemplo 2: 64 √ 3 = 4. 
                <br>
                <br>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Documentacao',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
    #a {
        color: rgb(255, 172, 64);
        font-weight: bold;
        display: table-cell;
        float: right;
    }
    #operacoesBasicas {
        text-align: left;
        font-size: large;
    }
    #operacoesAvançadas {
        text-align: left;
        font-size: large;
        color: #18bad6;
    }
    #limpa {
        text-align: left;
        font-size: large;
        color: #e71313;
    }
    #igual {
        text-align: left;
        font-size: large;
        color: #0ea81b;
    }
</style>
