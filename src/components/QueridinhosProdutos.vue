<template>
  <section class="queridinhos">
    <h2>Os Queridinhos da Loose Hair</h2>
    <div class="produtos-grid">
      <div v-for="(produto, index) in produtos" :key="index" class="produto-card">
        <img :src="produto.image" :alt="produto.name" />
        <h3>{{ produto.name }}</h3>
        <p class="preco">R$ {{ produto.price }}</p>
        <button class="botao-comprar">Comprar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QueridinhosProdutos',
  props: {
    produtos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
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
</style>
