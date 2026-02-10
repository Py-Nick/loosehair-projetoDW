<template>
    <main>
      <GaleriaProdutos :products="products" />
      <QueridinhosProdutos :produtos="produtosEspeciais" />
      <AdicionarProduto 
        titulo="Adicionar Produto Skin Care"
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
  name: 'SkincareView',
  components: {
    GaleriaProdutos,
    QueridinhosProdutos,
    AdicionarProduto
  },
  data() {
    const defaultProducts = [
      {
        name: 'KIT SKINCARE BÁSICO',
        image: require('@/images/skincare.png'),
        price: '45,90',
        size: '70ML',
        type: 'TODAS AS PELES',
        benefit: 'LIMPEZA PROFUNDA',
        indication: 'USO SEMANAL'
      },
      {
        name: 'PROTETOR SOLAR',
        image: require('@/images/skincare2.webp'),
        price: '38,90',
        size: '100ML',
        type: 'TODAS AS PELES',
        benefit: 'LONGA DURAÇÃO',
        indication: 'TODOS OS DIAS'
      },
      {
        name: 'HIDRATANTE',
        image: require('@/images/skincare3.webp'),
        price: '32,90',
        size: '4G',
        type: 'PELES SENSÍVEIS',
        benefit: 'TOQUE SECO',
        indication: 'TODOS OS DIAS'
      },
      {
        name: 'DEMAQUILANTE',
        image: require('@/images/skincare4.jpg'),
        price: '28,90',
        size: '8G',
        type: 'TODAS AS PELES',
        benefit: 'ADSTRIGENTE',
        indication: 'PÓS MAKE'
      }
    ]

    return {
      indiceProdutoAtual: 0,
      products: JSON.parse(localStorage.getItem('products')) || defaultProducts,
      produtosEspeciais: [
        {
          name: 'ESFOLIANTE',
          image: require('@/images/skincare5.webp'),
          price: '45,90'
        },
        {
          name: 'PROTETOR SOLAR',
          image: require('@/images/skincare6.webp'),
          price: '38,90'
        },
        {
          name: 'HIDRATANTE',
          image: require('@/images/skincare7.webp'),
          price: '32,90'
        },
        {
          name: 'DEMAQUILANTE',
          image: require('@/images/skincare8.webp'),
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