<template>
    <main>
      <GaleriaProdutos :products="products" />
      <QueridinhosProdutos :produtos="produtosEspeciais" />
      <AdicionarProduto 
        titulo="Adicionar Maquiagem"
        :camposAdicionais="['size', 'type', 'benefit', 'indication']"
        :estruturaProduto="estruturaNovoProduto"
        @adicionar-produto="adicionarProduto"
      />
    </main>
</template>

<script>
import GaleriaProdutos from '@/components/GaleriaProdutos.vue'
import QueridinhosProdutos from '@/components/QueridinhosProdutos.vue'
import AdicionarProduto from '@/components/AdicionarProduto.vue'

export default {
  name: 'MaquiagemView',
  components: {
    GaleriaProdutos,
    QueridinhosProdutos,
    AdicionarProduto
  },
  data() {
    const defaultProducts = [
      {
        name: 'BASE LÍQUIDA',
        image: require('@/images/maquiagem.webp'),
        price: '45,90',
        size: '30ML',
        type: 'COBERTURA MÉDIA',
        benefit: 'ACABAMENTO NATURAL',
        indication: 'USO DIÁRIO'
      },
      {
        name: 'MÁSCARA DE CÍLIOS',
        image: require('@/images/maquiagem2.jpg'),
        price: '38,90',
        size: '10ML',
        type: 'VOLUME EXTRA',
        benefit: 'CÍLIOS DEFINIDOS',
        indication: 'PÓS-MÁSCARA'
      },
      {
        name: 'BATOM MATTE',
        image: require('@/images/maquiagem3.webp'),
        price: '32,90',
        size: '4G',
        type: 'ACABAMENTO SECO',
        benefit: 'LONGA DURAÇÃO',
        indication: 'TODOS OS DIAS'
      },
      {
        name: 'BLUSH EM PÓ',
        image: require('@/images/maquiagem4.webp'),
        price: '28,90',
        size: '8G',
        type: 'ACABAMENTO AVELUDADO',
        benefit: 'COR INTENSA',
        indication: 'FINALIZAÇÃO'
      }
    ]

    return {
      indiceProdutoAtual: 0,
      products: JSON.parse(localStorage.getItem('products')) || defaultProducts,
        {
          name: 'BASE LÍQUIDA',
          image: require('@/images/maquiagem.webp'),
          price: '45,90',
          size: '30ML',
          type: 'COBERTURA MÉDIA',
          benefit: 'ACABAMENTO NATURAL',
          indication: 'USO DIÁRIO'
        },
        {
          name: 'MÁSCARA DE CÍLIOS',
          image: require('@/images/maquiagem2.jpg'),
          price: '38,90',
          size: '10ML',
          type: 'VOLUME EXTRA',
          benefit: 'CÍLIOS DEFINIDOS',
          indication: 'PÓS-MÁSCARA'
        },
        {
          name: 'BATOM MATTE',
          image: require('@/images/maquiagem3.webp'),
          price: '32,90',
          size: '4G',
          type: 'ACABAMENTO SECO',
          benefit: 'LONGA DURAÇÃO',
          indication: 'TODOS OS DIAS'
        },
        {
          name: 'BLUSH EM PÓ',
          image: require('@/images/maquiagem4.webp'),
          price: '28,90',
          size: '8G',
          type: 'ACABAMENTO AVELUDADO',
          benefit: 'COR INTENSA',
          indication: 'FINALIZAÇÃO'
        }
      ],
      produtosEspeciais: [
        {
          name: 'BASE LÍQUIDA',
          image: require('@/images/maquiagem5.webp'),
          price: '45,90'
        },
        {
          name: 'MÁSCARA DE CÍLIOS',
          image: require('@/images/maquiagem6.webp'),
          price: '38,90'
        },
        {
          name: 'BATOM MATTE',
          image: require('@/images/maquiagem7.jpg'),
          price: '32,90'
        },
        {
          name: 'BLUSH EM PÓ',
          image: require('@/images/maquiagem8.webp'),
          price: '28,90'
        }
      ],
      estruturaNovoProduto: {
        name: '',
        image: '',
        price: '',
        size: '',
        type: '',
        benefit: '',
        indication: ''
      }
    }
  },
  methods: {
    selecionarProduto(index) {
      this.indiceProdutoAtual = index
    },
    salvarNoLocalStorage() {
      localStorage.setItem('products', JSON.stringify(this.products))
    },
    adicionarProduto(produto) {
      this.products.push(produto)
      this.salvarNoLocalStorage()
    },
    enviarProduto() {
      this.adicionarProduto({ ...this.estruturaNovoProduto })
      this.estruturaNovoProduto = {
        name: '',
        image: '',
        price: '',
        size: '',
        type: '',
        benefit: '',
        indication: ''
      }
    }
  }
}
</script>

<style scoped>
main {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>