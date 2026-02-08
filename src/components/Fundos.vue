<template>
    <footer>
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
.footer {
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
  .conteudo-rodape {
    flex-direction: column;
    text-align: center;
  }
  
  .informacoes-rodape {
    text-align: center;
  }
}

</style>