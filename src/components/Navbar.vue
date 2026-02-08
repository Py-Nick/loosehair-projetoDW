<template>
    <header>
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
</template>

<style scoped>
.div {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.header {
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

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 20px;
  }
  
  .barra-pesquisa {
    margin: 0;
    max-width: 100%;
  }
}
</style>