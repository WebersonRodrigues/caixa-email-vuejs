<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Caixa de entrada</router-link> |
      <router-link to="/excluidos">Excluidos</router-link>
    </div>
    <router-view/>
  </div>-->

  <v-app id="app">
    <Menu />

    <!-- conteudo principal da tela -->
    <v-main>
      <v-container >
          <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Menu from "./components/Menu";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">

</style>
