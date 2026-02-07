<!--<template>
    <!--     <produto :titulo="info1" : 
    <article>
        <h2>Adicionar Produto a Página</h2>

        <label id="titulo">Título:<input type="text"></label>
        <label id="especifico">Especificações:<input type="text"></label>
        <label id="palavra">Palavra-chave: <input type="text"></label>
        <label id="imagemUm">Imagem 1: <input type="file"></label>
        <label id="imagemDois">Imagem 2: <input type="file"></label>
        <label id="imagemTres">Imagem 3: <input type="file"></label>
        <label id="imagemQuatro">Imagem 4: <input type="file"></label>
        <label id="precoHabitual">Preço Habitual: <input type="number"></label>
        <label id="precoDescontado">Preço Descontado: <input type="number"></label>
        
        <button id="submeteicion">Submeter Novo Produto</button>
    </article>
</template>

<script setup>
import { ref } from 'vue'
import produto from './componnents/Produto.vue'

info1 = getElementById(1).value;
info2 = getElementById(2).value;
info3 = getElementById(3).value;
info4 = getElementById(4).value;
info5 = getElementById(5).value;
info6 = getElementById(6).value;
info7 = getElementById(7).value;
info8 = getElementById(8).value;
info9 = getElementById(9).value;
input_form = getElementById(submeteicion)

submeteicion.addEventListener("click", function(){
})
</script> -->

<template>
  <article>
    <!-- AQUI é onde entra o <Produto /> -->
    <Produto
      v-for="(produto, index) in produtos"
      :key="index"
      :titulo="produto.titulo"
      :especificacao="produto.especificacao"
      :palavraChave="produto.palavraChave"
      :precoHabitual="produto.precoHabitual"
      :precoDescontado="produto.precoDescontado"
    />

    <h2>Criar Novo Produto de Cabelo</h2>

    <input v-model="titulo" placeholder="Título" />
    <input v-model="especificacao" placeholder="Especificações" />
    <input v-model="palavraChave" placeholder="Palavra-chave" />
    <input v-model="precoHabitual" placeholder="Preço habitual" />
    <input v-model="precoDescontado" placeholder="Preço com desconto" />

    <button @click="adicionar">Submeter Novo Produto</button>
  </article>
</template>

<script setup> 
import { ref } from 'vue'
import Produto from './components/Produto.vue'

const produtos = ref([])

const titulo = ref('')
const especificacao = ref('')
const palavraChave = ref('')
const precoHabitual = ref('')
const precoDescontado = ref('')

function adicionar() {
  produtos.value.push({
    titulo: titulo.value,
    especificacao: especificacao.value,
    palavraChave: palavraChave.value,
    precoHabitual: precoHabitual.value,
    precoDescontado: precoDescontado.value,
  })
}
</script>

<style scoped>
    article{
        background-color: #D9D9D9;
        width: 1019px;
        height: 596px;
    }

</style>