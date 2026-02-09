<template>
  <div>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Loose Hair</h1>
          <p>Produtos de beleza para todos os estilos</p>
        </div>
        <div class="imagens-principais">
          <img src="@/images/principal.jpg" alt="Principal 1" class="imagem-hero" />
          <img src="@/images/principal2.webp" alt="Principal 2" class="imagem-hero" />
          <img src="@/images/principal3.webp" alt="Principal 3" class="imagem-hero" />
        </div>
      </section>

      <section class="categorias">
        <h2>Nossas Categorias</h2>
        <div class="categoria-grid">
          <div class="categoria-card">
            <img src="@/images/cabelo2.jpg" alt="Cabelos" />
            <div class="categoria-info">
              <h3>Cabelos</h3>
              <p>Tratamentos e styling para todos os tipos de cabelo</p>
              <router-link to="/cabelo" class="botao-categoria">Ver Produtos</router-link>
            </div>
          </div>
          
          <div class="categoria-card">
            <img src="@/images/perfume.webp" alt="Perfumes" />
            <div class="categoria-info">
              <h3>Perfumes</h3>
              <p>Fragrâncias únicas para sua personalidade</p>
              <router-link to="/perfume" class="botao-categoria">Ver Produtos</router-link>
            </div>
          </div>
          
          <div class="categoria-card">
            <img src="@/images/maquiagem2.jpg" alt="Maquiagem" />
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
            <img src="@/images/cabelo.webp" alt="Shampoo Reparador" />
            <h3>SHAMPOO REPARADOR</h3>
            <p class="preco">R$ 35,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="@/images/cabelo2.jpg" alt="Condicionador Hidratante" />
            <h3>CONDICIONADOR HIDRATANTE</h3>
            <p class="preco">R$ 32,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="@/images/cabelo3.webp" alt="Máscara de Tratamento" />
            <h3>MÁSCARA DE TRATAMENTO</h3>
            <p class="preco">R$ 42,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
          
          <div class="produto-card">
            <img src="@/images/cabelo4.webp" alt="Óleo Capilar" />
            <h3>ÓLEO CAPILAR</h3>
            <p class="preco">R$ 28,90</p>
            <button class="botao-comprar">Comprar</button>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.div {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

@media (max-width: 768px) {
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
  
}
</style>
