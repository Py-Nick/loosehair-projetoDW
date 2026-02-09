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
              <span class="rotulo">TIPO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].type }}</span>
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
        <section class="queridinhos">
          <h2>Os Queridinhos da Loose Hair</h2>
          <div class="produtos-grid">
            <div class="produto-card">
              <img src="@/images/maquiagem5.webp" alt="Base Líquida" />
              <h3>BASE LÍQUIDA</h3>
              <p class="preco">R$ 45,90</p>
              <button class="botao-comprar">Comprar</button>
            </div>
          
            <div class="produto-card">
              <img src="@/images/maquiagem6.webp" alt="Máscara de Cílios" />
              <h3>MÁSCARA DE CÍLIOS</h3>
              <p class="preco">R$ 38,90</p>
              <button class="botao-comprar">Comprar</button>
            </div>
          
            <div class="produto-card">
              <img src="@/images/maquiagem7.jpg" alt="Batom Matte" />
              <h3>BATOM MATTE</h3>
              <p class="preco">R$ 32,90</p>
              <button class="botao-comprar">Comprar</button>
            </div>
          
            <div class="produto-card">
              <img src="@/images/maquiagem8.webp" alt="Blush em Pó" />
              <h3>BLUSH EM PÓ</h3>
              <p class="preco">R$ 28,90</p>
              <button class="botao-comprar">Comprar</button>
            </div>
          </div>
        </section>
      <div class="adicionar-produto">
        <h2>Adicionar Maquiagem</h2>

        <input v-model="novoProduto.name" type="text" placeholder="Nome"><br>
        <input v-model="novoProduto.image" type="text" placeholder="Imagem"><br>
        <input v-model="novoProduto.price" type="text" placeholder="Preço"><br>
        <input v-model="novoProduto.size" type="text" placeholder="Tamanho"><br>
        <input v-model="novoProduto.type" type="text" placeholder="Tipo de acabamento"><br>
        <input v-model="novoProduto.benefit" type="text" placeholder="Benefícios"><br>
        <input v-model="novoProduto.indication" type="text" placeholder="Indicação de uso"><br>

        <button @click="enviarProduto">Enviar Novo Produto</button>

      </div>
    </main>
</template>

<script>
export default {
  name: 'MaquiagemView',
  data() {
    return {
      indiceProdutoAtual: 0,
      products: [
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
      novoProduto: {
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

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
  background: #f8f9fa;
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
.adicionar-produto{
  margin-bottom: 20px;
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.adicionar-produto h2 {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}
.adicionar-produto input{
  padding: 10px 15px;
  margin: 5px;
  width: 400px;
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}
.adicionar-produto button{
  width: 400px;
  max-width: 100%;
  padding: 15px;
  background: #6b46c1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;
}
.adicionar-produto button:hover {
  background: #5a3a9e;
}
  .queridinhos {
    margin: 60px 0;
  }

  .queridinhos h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
  }

  .produtos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .produto-card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .produto-card:hover {
    transform: translateY(-3px);
  }

  .produto-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .produto-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .produto-card .preco {
    font-size: 24px;
    font-weight: bold;
    color: #6b46c1;
    margin-bottom: 15px;
  }

  .botao-comprar {
    width: 100%;
    padding: 12px;
    background: #6b46c1;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .botao-comprar:hover {
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