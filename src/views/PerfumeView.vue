<template>
  <div class="pagina-perfume">
    <header class="cabecalho">
      <div class="logo">
        <router-link to="/">Loose Hair</router-link>
      </div>
      <div class="barra-pesquisa">
        <input type="text" placeholder="O que você procura hoje?" />
        <button>🔍</button>
      </div>
      <div class="icones-cabecalho">
        <a href="#"><img src="/images/do-utilizador.png" alt="Usuário" style="width: 20px; height: 20px;"></a>
        <a href="#"><img src="/images/contorno-em-forma-de-coracao.png" alt="Favoritos" style="width: 20px; height: 20px;"></a>
        <a href="#"><img src="/images/vista-lateral-vazia-do-carrinho-de-compras.png" alt="Carrinho" style="width: 20px; height: 20px;"></a>
      </div>
    </header>

    <nav class="navegacao-principal">
      <router-link to="/cabelo">Cabelo</router-link>
      <router-link to="/perfume">Perfume</router-link>
      <router-link to="/maquiagem">Maquiagem</router-link>
      <a href="#">Adicionar</a>
    </nav>

    <main class="conteudo-principal">
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
              <span class="rotulo">FAMÍLIA:</span>
              <span class="valor">{{ products[indiceProdutoAtual].family }}</span>
            </div>
            <div class="item-detalhe">
              <span class="rotulo">NOTAS:</span>
              <span class="valor">{{ products[indiceProdutoAtual].notes }}</span>
            </div>
            <div class="item-detalhe">
              <span class="rotulo">OCASIÃO:</span>
              <span class="valor">{{ products[indiceProdutoAtual].occasion }}</span>
            </div>
          </div>
          <div class="secao-preco">
            <span class="preco-antigo">R$ 45,00</span>
            <span class="preco-atual">R$ {{ products[indiceProdutoAtual].price }}</span>
          </div>
          <button class="botao-saiba-mais">Saiba mais</button>
        </div>
      </div>
    </main>

    <footer class="rodape">
      <div class="conteudo-rodape">
        <div class="logo-pix">
          <span>pix</span>
        </div>
        <div class="redes-sociais">
          <a href="#"><img src="/images/facebook.png" alt="Facebook" style="width: 24px; height: 24px;"></a>
          <a href="#"><img src="/images/whatsapp.png" alt="WhatsApp" style="width: 24px; height: 24px;"></a>
          <a href="#"><img src="/images/instagram.png" alt="Instagram" style="width: 24px; height: 24px;"></a>
        </div>
        <div class="informacoes-rodape">
          <p>Feito por: IFRN/CNAT/DIATINF/Juliana Vianna e Nicole de Aquino</p>
          <p>Rua dos Bobos, 0 - Casa Muito Engraçada - RN. CEP: 0 | CNPJ: 0</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PerfumeView',
  data() {
    return {
      indiceProdutoAtual: 0,
      products: [
        {
          name: 'PERFUME FLORAL',
          image: '/images/cabelo.webp',
          price: '125,90',
          size: '50ML',
          family: 'FLORAL',
          notes: 'ROSAS E JASMIM',
          occasion: 'DIÁRIA'
        },
        {
          name: 'PERFUME AMBARIANO',
          image: '/images/cabelo2.jpg',
          price: '98,90',
          size: '75ML',
          family: 'AMBAR',
          notes: 'VANILHA E BAUNILHA',
          occasion: 'NOTURNA'
        },
        {
          name: 'PERFUME CÍTRICO',
          image: '/images/cabelo3.webp',
          price: '85,90',
          size: '100ML',
          family: 'CÍTRICA',
          notes: 'LIMÃO E LARANJA',
          occasion: 'VERÃO'
        },
        {
          name: 'PERFUME MADEIRADO',
          image: '/images/cabelo4.webp',
          price: '150,90',
          size: '30ML',
          family: 'MADEIRADA',
          notes: 'SANDALO E CEDRO',
          occasion: 'ESPECIAL'
        }
      ]
    }
  },
  methods: {
    selecionarProduto(index) {
      this.indiceProdutoAtual = index
    }
  }
}
</script>

<style scoped>
.pagina-perfume {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: white;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.barra-pesquisa {
  display: flex;
  gap: 5px;
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
}

.barra-pesquisa input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: #f5f5f5;
}

.barra-pesquisa button {
  padding: 10px 15px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
}

.icones-cabecalho {
  display: flex;
  gap: 15px;
}

.icones-cabecalho a {
  text-decoration: none;
  font-size: 20px;
  color: #333;
}

.navegacao-principal {
  background: #6b46c1;
  padding: 15px 0;
  text-align: center;
}

.navegacao-principal a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 500;
  font-size: 16px;
}

.navegacao-principal a:hover {
  text-decoration: underline;
}

.conteudo-principal {
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

.rodape {
  background: #f5e6d3;
  padding: 30px 0;
  margin-top: 40px;
  color: #333;
  text-align: center;
  position: relative;
  width: 100%;
}

.conteudo-rodape {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.redes-sociais {
  display: flex;
  gap: 20px;
}

.redes-sociais a {
  font-size: 24px;
  text-decoration: none;
}

.informacoes-rodape {
  text-align: right;
}

.informacoes-rodape p {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}

@media (max-width: 768px) {
  .cabecalho {
    flex-direction: column;
    gap: 20px;
  }
  
  .barra-pesquisa {
    margin: 0;
    max-width: 100%;
  }
  
  .galeria-produtos {
    flex-direction: column;
  }
  
  .miniaturas {
    flex-direction: row;
    justify-content: center;
  }
  
  .conteudo-rodape {
    flex-direction: column;
    text-align: center;
  }
  
  .informacoes-rodape {
    text-align: center;
  }
}
</style>