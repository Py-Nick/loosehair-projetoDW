<template>
    <header>
        <div class="logo">
            <router-link to="/"><img src="@/images/Frame (1).png" alt=""></router-link>
        </div>
        <div class="barra-pesquisa">
            <input type="text" placeholder="O que você procura hoje?" />
            <button>🔍</button>
        </div>
        <div class="icones-cabecalho">
            <a href="#"><img src="@/images/do-utilizador.png" alt="Usuário" style="width: 20px; height: 20px;"></a>
            <a href="#"><img src="@/images/contorno-em-forma-de-coracao.png" alt="Favoritos" style="width: 20px; height: 20px;"></a>
            <a href="#"><img src="@/images/vista-lateral-vazia-do-carrinho-de-compras.png" alt="Carrinho" style="width: 20px; height: 20px;"></a>
        </div>
    </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  justify-self: start;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.barra-pesquisa {
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 400px;
  justify-self: center;
}

.barra-pesquisa input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: #f5f5f5;
  font-size: 14px;
  width: 300px;
}

.barra-pesquisa button {
  padding: 10px 15px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
}

.icones-cabecalho {
  display: flex;
  gap: 20px;
  justify-self: end;
}

.icones-cabecalho a {
  text-decoration: none;
  color: #333;
}

@media (max-width: 768px) {
  header {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px 20px;
  }
  
  .logo {
    justify-self: center;
  }
  
  .barra-pesquisa {
    justify-self: center;
    max-width: 100%;
  }
  
  .barra-pesquisa input {
    width: 200px;
  }
  
  .icones-cabecalho {
    justify-self: center;
  }
}
</style>