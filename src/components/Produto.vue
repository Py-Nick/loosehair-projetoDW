<template>
    <div class="produto">
        <aside class="aside">
            <img :src="imagem1", alt="Imagem pequena do produto" class="img" />
            <img :src="imagem2", alt="Imagem pequena do produto" class="img" />
            <img :src="imagem3", alt="Imagem pequena do produto"  class="img" />
            <img :src="imagem4", alt="Imagem pequena do produto" class="img" />
        </aside>

        <article class="article">
            <img :src="imagem1", alt="Imagem principal do produto" class="img-1" />
            <h2>{{ titulo }}</h2>
            <p>{{ especificacao }}</p>
            <p>{{ palavraChave }}</p>

            <p>{{ precoHabitual }}</p>
            <p>{{ precoDescontado }}</p>

        </article>
  </div>
</template>

<script setup>
const props = defineProps({
        titulo:{
            type: String,
            required: true
        },
        especificacao:{
            type: String,
            default: 'Sem Descrição'
        },
        palavraChave:{
            type: String,
            required: true
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
