<template>
  <aside class="aside">
    <img :src="{{ imagem1 }}" :alt="Imagem pequena do produto" class="img" />
    <img :src="{{ imagem2 }}" :alt="Imagem pequena do produto" class="img" />
    <img :src="{{ imagem3 }}" :alt="Imagem pequena do produto" class="img" />
    <img :src="{{ imagem4 }}" :alt="Imagem pequena do produto" class="img" />

  </aside>
  <article class="produto">
    <img :src="{{ imagem-1 }}" :alt="Imagem principal do produto" class="img-1" />
    <h2>{{ titulo }}</h2>
    <p>{{ especificacao }}</p>
    <p>{{ palavraChave }}</p>

    <p>{{ precoHabitual }}</p>
    <p>{{ precoDescontado }}</p>
      <!-- <span v-if="isAdmin" class="badge">Administrador</span> -->

  </article>
</template>

<script setup>
const props = defineProps({
        titulo:{
            type: String,
            required: True
        },
        especificacao:{
            type: String,
            default: 'Sem Descrição'
        },
        palavraChave:{
            type: String,
            required: True
        },
        imagem1:{
            type: String,
            default: 'https://pin.it/4u88oOL5a'
        },
        imagem2:{
            type: String,
            default: 'https://pin.it/4u88oOL5a'
        },
        imagem3:{
            type: String,
            default: 'https://pin.it/4u88oOL5a'
        },
        imagem4:{
            type: String,
            default: 'https://pin.it/4u88oOL5a'
        },
        precoHabitual:{
            type: String,
            default: '19,99'
        },
        precoDescontado:{
            type: String,
            default: '00,0'
        }
})
</script>
<template>
        <h2>Adicionar Produto a Página</h2>

        <label>Título:<input type="text"></label>
        <label>Especificações:<input type="text"></label>
        <label>Palavra-chave: <input type="text"></label>
        <label>Imagem 1: <input type="image"></label>
        <label>Imagem 2: <input type="image"></label>
        <label>Imagem 3: <input type="image"></label>
        <label>Preço Habitual: <input type="number"></label>
        <label>Preço Descontado: <input type="number"></label>
        
        <button id="submeteicion">Submeter Novo Produto</button>
</template>

<style scoped>
</style>