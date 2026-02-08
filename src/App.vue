<template>
  <Navbar />
  <nav>
      <router-link to="/cabelo">Cabelo</router-link>
      <router-link to="/perfume">Perfume</router-link>
      <router-link to="/maquiagem">Maquiagem</router-link>
      <router-link to="/skincare">SkinCare</router-link>
  </nav>

  <router-view></router-view>
  
  <Fundos />
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Fundos from './components/Fundos.vue';
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  background: #6b46c1;
  padding: 15px 0;
  text-align: center;
}
.nav a, .nav router-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 500;
  font-size: 16px;
}

.nav a:hover, .nav router-link:hover {
  text-decoration: underline;
}
</style>
