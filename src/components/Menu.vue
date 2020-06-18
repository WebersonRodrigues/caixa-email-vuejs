<template>
  <div>
    <!-- menu lateral -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list shaped>
        <v-list-item-group v-model="item" color="primary">
          <template v-for="item in items">

            <v-list-item :to="item.path" :key="item.name" link>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra azul de cima -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">MyMail</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Pesquise aqui..."
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
 
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import routes from "../router/routes";

export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: []
  }),

  created() {
    this.items = routes;
  }
};
</script>

<style scoped>
</style>