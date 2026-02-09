<template>
  <Navbar />
  <nav class="nav">
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  background: #6b46c1;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  gap: 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.nav a:hover {
  border-bottom: 2px solid white;
}

.nav router-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.nav router-link:hover {
  border-bottom: 2px solid white;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
  }
}
</style>