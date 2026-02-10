<template>
  <div class="adicionar-produto">
    <h2>{{ titulo }}</h2>

    <input v-model="novoProduto.name" type="text" placeholder="Nome"><br>
    <input v-model="novoProduto.image" type="text" placeholder="Imagem"><br>
    <input v-model="novoProduto.price" type="text" placeholder="Preço"><br>
    
    <input v-for="campo in camposAdicionais" :key="campo" 
      v-model="novoProduto[campo]" 
      type="text" 
      :placeholder="formatarPlaceholder(campo)"><br>

    <button @click="enviarProduto">Enviar Novo Produto</button>
  </div>
</template>

<script>
export default {
  name: 'AdicionarProduto',
  props: {
    titulo: {
      type: String,
      required: true
    },
    camposAdicionais: {
      type: Array,
      required: true
    },
    estruturaProduto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      novoProduto: { ...this.estruturaProduto }
    }
  },
  methods: {
    enviarProduto() {
      const produtoParaEnviar = { ...this.novoProduto }
      
      this.$emit('adicionar-produto', produtoParaEnviar)
      
      this.novoProduto = { ...this.estruturaProduto }
    },
    formatarPlaceholder(campo) {
      const placeholders = {
        size: 'Tamanho',
        hairType: 'Tipo de cabelo',
        benefit: 'Benefícios',
        indication: 'Indicação de uso',
        type: 'Tipo de acabamento / Tipo de pele',
        family: 'Família',
        notes: 'Notas de',
        occasion: 'Ocasião'
      }
      return placeholders[campo] || campo.charAt(0).toUpperCase() + campo.slice(1)
    }
  },
  watch: {
    estruturaProduto: {
      handler(novaEstrutura) {
        this.novoProduto = { ...novaEstrutura }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.adicionar-produto {
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

.adicionar-produto input {
  padding: 10px 15px;
  margin: 5px;
  width: 400px;
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.adicionar-produto button {
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
</style>
