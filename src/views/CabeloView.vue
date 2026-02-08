<template>
    <main>
      <div class="galeria-produtos">
        <div class="miniaturas">
          <div 
            v-for="(product, index) in products" 
            :key="index"
            :class="['miniatura', { ativa: indiceProdutoAtual === index }]"
            @click="selecionarProduto(index)"
          >
            <img :src="product.image" :alt="product.name" />
            <span class="numero-miniatura">{{ index + 1 }}</span>
          </div>
        </div>
        
        <div class="imagem-principal">
          <img :src="products[indiceProdutoAtual].image" :alt="products[indiceProdutoAtual].name" />
        </div>
        
        <div class="informacoes-produto">
          <h1>{{ products[indiceProdutoAtual].name }}</h1>
          <div class="detalhes-produto">
            <div class="item-detalhe">
              <span class="rotulo">TAMANHO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].size }}</span>
            </div>
            <div class="item-detalhe">
              <span class="rotulo">TIPO DE CABELO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].hairType }}</span>
            </div>
            <div class="item-detalhe">
              <span class="rotulo">BENEFÍCIO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].benefit }}</span>
            </div>
            <div class="item-detalhe">
              <span class="rotulo">INDICAÇÃO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].indication }}</span>
            </div>
          </div>
          <div class="secao-preco">
            <span class="preco-antigo">R$ 45,00</span>
            <span class="preco-atual">R$ {{ products[indiceProdutoAtual].price }}</span>
          </div>
          <button class="botao-saiba-mais">Saiba mais</button>
        </div>
      </div>
      <div class="adicionar-produto">
        <h2>Adicionar Produto de Cabelo</h2>

        <input v-model="novoProduto.name" type="text" placeholder="Nome"><br>
        <input v-model="novoProduto.image" type="text" placeholder="Imagem"><br>
        <input v-model="novoProduto.price" type="text" placeholder="Preço"><br>
        <input v-model="novoProduto.size" type="text" placeholder="Tamanho"><br>
        <input v-model="novoProduto.hairType" type="text" placeholder="Tipo de cabelo"><br>
        <input v-model="novoProduto.benefit" type="text" placeholder="Benefícios"><br>
        <input v-model="novoProduto.indication" type="text" placeholder="Indicação de uso"><br>

        <button @click="enviarProduto">Enviar Novo Produto</button>

      </div>
    </main>
</template>

<script>
export default {
  name: 'CabeloView',
  data() {
    return {
      indiceProdutoAtual: 0,
      products: [
        {
          name: 'SHAMPOO REPARADOR',
          image: '/images/cabelo.webp',
          price: '35,90',
          size: '300ML',
          hairType: 'DANIFICADO',
          benefit: 'REPARAÇÃO PROFUNDA',
          indication: 'USO DIÁRIO'
        },
        {
          name: 'CONDICIONADOR HIDRATANTE',
          image: '/images/cabelo2.jpg',
          price: '32,90',
          size: '300ML',
          hairType: 'SECO',
          benefit: 'HIDRATAÇÃO INTENSA',
          indication: 'PÓS-LAVAGEM'
        },
        {
          name: 'MÁSCARA DE TRATAMENTO',
          image: '/images/cabelo3.webp',
          price: '42,90',
          size: '250G',
          hairType: 'TODOS OS TIPOS',
          benefit: 'NUTRIÇÃO E BRILHO',
          indication: 'SEMANAL'
        },
        {
          name: 'ÓLEO CAPILAR',
          image: '/images/cabelo4.webp',
          price: '28,90',
          size: '60ML',
          hairType: 'TODOS OS TIPOS',
          benefit: 'FRIZZ CONTROLADO',
          indication: 'FINALIZAÇÃO'
        }
      ],
      novoProduto: {
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
    adicionarProduto(produto){
      this.products.push(produto)
    },
    enviarProduto() {
      this.adicionarProduto({ ...this.novoProduto })

      this.novoProduto = {
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
.div {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main {
  margin: 40px 0;
}

.galeria-produtos {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
}

.miniaturas {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.miniatura {
  width: 80px;
  height: 80px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #e0e0e0;
}

.miniatura:hover {
  border-color: #6b46c1;
}

.miniatura.ativa {
  border-color: #6b46c1;
  border-width: 3px;
}

.miniatura img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.numero-miniatura {
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.imagem-principal {
  flex: 1;
  max-width: 500px;
  border: 2px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: white;
}

.imagem-principal:hover {
  transform: scale(1.02);
}

.imagem-principal img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.informacoes-produto {
  flex: 1;
  max-width: 300px;
}

.informacoes-produto h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.detalhes-produto {
  margin-bottom: 30px;
}

.item-detalhe {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.rotulo {
  font-weight: bold;
  color: #555;
}

.valor {
  color: #333;
}

.secao-preco {
  margin-bottom: 20px;
  text-align: center;
}

.preco-antigo {
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
  margin-right: 10px;
}

.preco-atual {
  font-size: 32px;
  font-weight: bold;
  color: #6b46c1;
}

.botao-saiba-mais {
  width: 100%;
  padding: 15px;
  background: #6b46c1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.botao-saiba-mais:hover {
  background: #5a3a9e;
}

@media (max-width: 768px) {
  .galeria-produtos {
    flex-direction: column;
  }
  
  .miniaturas {
    flex-direction: row;
    justify-content: center;
  }
  
}
</style>