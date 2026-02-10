<template>
    <main>
      <GaleriaProdutos :products="products" />
      <QueridinhosProdutos :produtos="produtosEspeciais" />
      <AdicionarProduto 
        titulo="Adicionar Produto de Cabelo"
        :camposAdicionais="['size', 'hairType', 'benefit', 'indication']"
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
  name: 'CabeloView',
  components: {
    GaleriaProdutos,
    QueridinhosProdutos,
    AdicionarProduto
  },
  data() {
    const defaultProducts = [
      {
        name: 'SHAMPOO REPARADOR',
        image: require('@/images/cabelo.webp'),
        price: '35,90',
        size: '300ML',
        hairType: 'DANIFICADO',
        benefit: 'REPARAÇÃO PROFUNDA',
        indication: 'USO DIÁRIO'
      },
      {
        name: 'CONDICIONADOR HIDRATANTE',
        image: require('@/images/cabelo2.jpg'),
        price: '32,90',
        size: '300ML',
        hairType: 'SECO',
        benefit: 'HIDRATAÇÃO INTENSA',
        indication: 'PÓS-LAVAGEM'
      },
      {
        name: 'MÁSCARA DE TRATAMENTO',
        image: require('@/images/cabelo3.webp'),
        price: '42,90',
        size: '250G',
        hairType: 'TODOS OS TIPOS',
        benefit: 'NUTRIÇÃO E BRILHO',
        indication: 'SEMANAL'
      },
      {
        name: 'ÓLEO CAPILAR',
        image: require('@/images/cabelo4.webp'),
        price: '28,90',
        size: '60ML',
        hairType: 'TODOS OS TIPOS',
        benefit: 'FRIZZ CONTROLADO',
        indication: 'FINALIZAÇÃO'
      }
    ]

    return {
      indiceProdutoAtual: 0,
      products: JSON.parse(localStorage.getItem('products')) || defaultProducts,
        {
          name: 'SHAMPOO REPARADOR',
          image: require('@/images/cabelo.webp'),
          price: '35,90',
          size: '300ML',
          hairType: 'DANIFICADO',
          benefit: 'REPARAÇÃO PROFUNDA',
          indication: 'USO DIÁRIO'
        },
        {
          name: 'CONDICIONADOR HIDRATANTE',
          image: require('@/images/cabelo2.jpg'),
          price: '32,90',
          size: '300ML',
          hairType: 'SECO',
          benefit: 'HIDRATAÇÃO INTENSA',
          indication: 'PÓS-LAVAGEM'
        },
        {
          name: 'MÁSCARA DE TRATAMENTO',
          image: require('@/images/cabelo3.webp'),
          price: '42,90',
          size: '250G',
          hairType: 'TODOS OS TIPOS',
          benefit: 'NUTRIÇÃO E BRILHO',
          indication: 'SEMANAL'
        },
        {
          name: 'ÓLEO CAPILAR',
          image: require('@/images/cabelo4.webp'),
          price: '28,90',
          size: '60ML',
          hairType: 'TODOS OS TIPOS',
          benefit: 'FRIZZ CONTROLADO',
          indication: 'FINALIZAÇÃO'
        }
      ],
      produtosEspeciais: [
        {
          name: 'SHAMPOO REPARADOR',
          image: require('@/images/cabelo5.jpg'),
          price: '35,90'
        },
        {
          name: 'CONDICIONADOR HIDRATANTE',
          image: require('@/images/cabelo6.jpg'),
          price: '32,90'
        },
        {
          name: 'MÁSCARA DE TRATAMENTO',
          image: require('@/images/cabelo7.webp'),
          price: '42,90'
        },
        {
          name: 'ÓLEO CAPILAR',
          image: require('@/images/cabelo8.webp'),
          price: '28,90'
        }
      ],
      estruturaNovoProduto: {
        name: '',
        image: '',
        price: '',
        size: '',
        hairType: '',
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
        hairType: '',
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