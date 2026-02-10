<template>
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
        <div v-for="(value, key) in getDetalhes()" :key="key" class="item-detalhe">
          <span class="rotulo">{{ formatarRotulo(key) }}</span>
          <span class="valor">{{ value }}</span>
        </div>
      </div>
      <div class="secao-preco">
        <span class="preco-antigo">R$ 45,00</span>
        <span class="preco-atual">R$ {{ products[indiceProdutoAtual].price }}</span>
      </div>
      <button class="botao-saiba-mais">Saiba mais</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaleriaProdutos',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      indiceProdutoAtual: 0
    }
  },
  methods: {
    selecionarProduto(index) {
      this.indiceProdutoAtual = index
    },
    getDetalhes() {
      const produto = this.products[this.indiceProdutoAtual]
      const detalhes = {}
      
      for (const key in produto) {
        if (!['name', 'image', 'price'].includes(key)) {
          detalhes[key] = produto[key]
        }
      }
      
      return detalhes
    },
    formatarRotulo(chave) {
      const rotulos = {
        size: 'TAMANHO',
        hairType: 'TIPO DE CABELO',
        benefit: 'BENEFÍCIO',
        indication: 'INDICAÇÃO',
        type: 'TIPO',
        family: 'FAMÍLIA',
        notes: 'NOTAS',
        occasion: 'OCASIÃO'
      }
      return rotulos[chave] || chave.toUpperCase()
    }
  }
}
</script>

<style scoped>
.galeria-produtos {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
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
}

.imagem-principal img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.informacoes-produto {
  flex: 1;
  max-width: 300px;
}

.informacoes-produto h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.detalhes-produto {
  margin-bottom: 30px;
}

.item-detalhe {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 6px;
}

.rotulo {
  font-weight: bold;
  color: #555;
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
