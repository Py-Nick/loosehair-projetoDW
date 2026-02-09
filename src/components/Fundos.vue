<template>
    <footer>
        <div class="conteudo-rodape">
        <div class="metodos-pagamento">
            <img src="@/images/cartao.svg" alt="Cartão 1" style="height: 40px;">
            <img src="@/images/cartao2.svg" alt="Cartão 2" style="height: 40px;">
            <img src="@/images/cartao3.svg" alt="Cartão 3" style="height: 40px;">
            <img src="@/images/cartao4.svg" alt="Cartão 4" style="height: 40px;">
            <img src="@/images/pix.png" alt="Pix" style="height: 40px;">
        </div>
        <div class="redes-sociais">
            <a href="#"><img src="@/images/facebook.png" alt="Facebook" style="width: 24px; height: 24px;"></a>
            <a href="#"><img src="@/images/whatsapp.png" alt="WhatsApp" style="width: 24px; height: 24px;"></a>
            <a href="#"><img src="@/images/instagram.png" alt="Instagram" style="width: 24px; height: 24px;"></a>
        </div>
        <div class="informacoes-rodape">
            <p>Feito por: IFRN/CNAT/DIATINF/Juliana Vianna e Nicole de Aquino</p>
            <address>Rua dos Bobos, 0 - Casa Muito Engraçada - RN. CEP: 0 | CNPJ: 0</address>
        </div>
        </div>
    </footer>
</template>

<style scoped>
.div {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
footer {
  background: #6b46c1;
  padding: 30px 40px;
  margin-top: 60px;
  color: #333;
  width: 100%;
}

.conteudo-rodape {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 80px;
}

.metodos-pagamento {
  display: flex;
  gap: 15px;
  align-items: center;
}

.metodos-pagamento img {
  object-fit: contain;
}

.redes-sociais {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.redes-sociais a {
  display: flex;
  text-decoration: none;
  align-items: center;
}

.informacoes-rodape {
  text-align: right;
}

.informacoes-rodape p {
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
}
@media (max-width: 768px) {
  footer {
    padding: 20px;
  }
  .conteudo-rodape {
    flex-direction: column;
    text-align: center;
    padding: 0;
    gap: 15px;
  }
  
  .informacoes-rodape {
    text-align: center;
  }
}

</style>