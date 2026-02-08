<template>
  <div class="pagina-home">
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

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Loose Hair</h1>
          <p>Produtos de beleza para todos os estilos</p>
        </div>
        <div class="imagens-principais">
          <img src="/images/principal.jfif" alt="Principal 1" class="imagem-hero" />
          <img src="/images/principal2.webp" alt="Principal 2" class="imagem-hero" />
          <img src="/images/principal3.webp" alt="Principal 3" class="imagem-hero" />
        </div>
      </section>

      <section class="categorias">
        <h2>Nossas Categorias</h2>
        <div class="categoria-grid">
          <div class="categoria-card">
            <img src="/images/principal.jpg" alt="Cabelos" />
            <div class="categoria-info">
              <h3>Cabelos</h3>
              <p>Tratamentos e styling para todos os tipos de cabelo</p>
              <router-link to="/cabelo" class="botao-categoria">Ver Produtos</router-link>
            </div>
          </div>
          
          <div class="categoria-card">
            <img src="/images/principal2.jpg" alt="Perfumes" />
            <div class="categoria-info">
              <h3>Perfumes</h3>
              <p>Fragrâncias únicas para sua personalidade</p>
              <router-link to="/perfume" class="botao-categoria">Ver Produtos</router-link>
            </div>
          </div>
          
          <div class="categoria-card">
            <img src="/images/principal3.jpg" alt="Maquiagem" />
            <div class="categoria-info">
              <h3>Maquiagem</h3>
              <p>Realce sua beleza com nossos produtos</p>
              <router-link to="/maquiagem" class="botao-categoria">Ver Produtos</router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="destaques">
        <h2>Produtos em Destaque</h2>
        <div class="produtos-grid">
          <div class="produto-card">
            <img src="/images/cabelo.webp" alt="Shampoo Reparador" />
            <h3>SHAMPOO REPARADOR</h3>
            <p class="preco">R$ 35,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="/images/cabelo2.jpg" alt="Condicionador Hidratante" />
            <h3>CONDICIONADOR HIDRATANTE</h3>
            <p class="preco">R$ 32,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="/images/cabelo3.webp" alt="Máscara de Tratamento" />
            <h3>MÁSCARA DE TRATAMENTO</h3>
            <p class="preco">R$ 42,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="/images/cabelo4.webp" alt="Óleo Capilar" />
            <h3>ÓLEO CAPILAR</h3>
            <p class="preco">R$ 28,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
        </div>
      </section>
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
  name: 'HomeView'
}
</script>

<style scoped>
.pagina-home {
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

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
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

.navegacao-principal a,
.navegacao-principal router-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 500;
  font-size: 16px;
}

.navegacao-principal a:hover,
.navegacao-principal router-link:hover {
  text-decoration: underline;
}

.hero {
  background: white;
  color: #333;
  padding: 40px 20px;
  text-align: center;
  border-radius: 15px;
  margin: 40px 0;
  border: 1px solid #ddd;
}

.hero-content {
  margin-bottom: 40px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-content p {
  font-size: 20px;
  opacity: 0.9;
}

.imagens-principais {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.imagem-hero {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.imagem-hero:hover {
  transform: scale(1.05);
}

.categorias {
  margin: 60px 0;
}

.categorias h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
}

.categoria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.categoria-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.categoria-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.categoria-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.categoria-info {
  padding: 25px;
  text-align: center;
}

.categoria-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.categoria-info p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.botao-categoria {
  display: inline-block;
  background: #6b46c1;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.botao-categoria:hover {
  background: #5a3a9e;
}

.destaques {
  margin: 60px 0;
}

.destaques h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
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

.redes-sociais img {
  width: 24px;
  height: 24px;
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
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .imagens-principais {
    flex-direction: column;
    align-items: center;
  }
  
  .imagem-hero {
    width: 250px;
    height: 250px;
  }
  
  .categoria-grid {
    grid-template-columns: 1fr;
  }
  
  .produtos-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .conteudo-rodape {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .informacoes-rodape {
    text-align: center;
  }
}
</style>
