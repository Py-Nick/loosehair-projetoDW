<template>
    <main>
      <GaleriaProdutos :products="products" />
      <QueridinhosProdutos :produtos="produtosEspeciais" />
      <AdicionarProduto 
        titulo="Adicionar Perfume"
        :camposAdicionais="['size', 'family', 'notes', 'occasion']"
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
  name: 'PerfumeView',
  components: {
    GaleriaProdutos,
    QueridinhosProdutos,
    AdicionarProduto
  },
  data() {
    const defaultProducts = [
      {
        name: 'BODY SPLASH AROMA DE MORANGO',
        image: require('@/images/perfume.webp'),
        price: '35,90',
        size: '50ML',
        family: 'FLORAL',
        notes: 'MORANGO',
        occasion: 'DIÁRIA'
      },
      {
        name: 'PERFUME AMBARIANO',
        image: require('@/images/perfume2.webp'),
        price: '98,90',
        size: '75ML',
        family: 'AMBAR',
        notes: 'VANILHA E BAUNILHA',
        occasion: 'NOTURNA'
      },
      {
        name: 'PERFUME AROMA BAUNILHA',
        image: require('@/images/perfume3.webp'),
        price: '125,90',
        size: '100ML',
        family: 'FLORAL',
        notes: 'FLORES E BAUNILHA',
        occasion: 'VERÃO'
      },
      {
        name: 'PERFUME DOCE',
        image: require('@/images/perfume4.webp'),
        price: '150,90',
        size: '30ML',
        family: 'DOCE',
        notes: 'SANDALO E CEDRO',
        occasion: 'ESPECIAL'
      }
    ]

    return {
      indiceProdutoAtual: 0,
      products: JSON.parse(localStorage.getItem('products')) || defaultProducts,
        {
          name: 'BODY SPLASH AROMA DE MORANGO',
          image: require('@/images/perfume.webp'),
          price: '35,90',
          size: '50ML',
          family: 'FLORAL',
          notes: 'MORANGO',
          occasion: 'DIÁRIA'
        },
        {
          name: 'PERFUME AMBARIANO',
          image: require('@/images/perfume2.webp'),
          price: '98,90',
          size: '75ML',
          family: 'AMBAR',
          notes: 'VANILHA E BAUNILHA',
          occasion: 'NOTURNA'
        },
        {
          name: 'PERFUME AROMA BAUNILHA',
          image: require('@/images/perfume3.webp'),
          price: '125,90',
          size: '100ML',
          family: 'FLORAL',
          notes: 'FLORES E BAUNILHA',
          occasion: 'VERÃO'
        },
        {
          name: 'PERFUME DOCE',
          image: require('@/images/perfume4.webp'),
          price: '150,90',
          size: '30ML',
          family: 'DOCE',
          notes: 'SANDALO E CEDRO',
          occasion: 'ESPECIAL'
        }
      ],
      produtosEspeciais: [
        {
          name: 'PERFUME FLORAL',
          image: require('@/images/perfume5.webp'),
          price: '125,90'
        },
        {
          name: 'PERFUME AMBARIANO',
          image: require('@/images/perfume6.webp'),
          price: '98,90'
        },
        {
          name: 'PERFUME CÍTRICO',
          image: require('@/images/perfume7.webp'),
          price: '85,90'
        },
        {
          name: 'PERFUME MADEIRADO',
          image: require('@/images/perfume8.webp'),
          price: '150,90'
        }
      ],
      estruturaNovoProduto: {
        name: '',
        image: '',
        price: '',
        size: '',
        family: '',
        notes: '',
        occasion: ''
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
        family: '',
        notes: '',
        occasion: ''
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