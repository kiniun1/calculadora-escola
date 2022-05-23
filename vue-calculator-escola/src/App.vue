<template>
  <div id="alo">
    <Calculadora></Calculadora>
    <Documentacao></Documentacao>
  </div>
</template>

<script>  
import Calculadora from './components/Calculadora.vue'
import Documentacao from './components/Documentacao.vue'

export default {
  name: 'App',
  components: {
    Calculadora,
    Documentacao,
}
}
</script>

<style>
  body {
    background: #291f09;
  }
  #alo {
    display: table-row;
    font-family: sans-serif; 
  }
</style>
