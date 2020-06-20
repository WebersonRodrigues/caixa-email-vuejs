<template>
  <div>
    <!-- menu lateral -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <!-- Botão escrever -->

      <div class="text-center btn-escrever">
        <v-btn rounded>
          <v-icon color="primary">mdi-plus-thick</v-icon>Escrever
        </v-btn>
      </div>

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

      <v-btn icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on">
            <v-avatar size="42px" item>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <!-- aqui eu colocar sei lá um card -->
        <v-card class="mx-auto text-center" max-width="400">
          <v-card-subtitle class="pb-6 pt-8">
            <v-btn icon large v-bind="attrs" v-on="on">
              <v-avatar size="75px" item>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-avatar>
            </v-btn>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <p class="nome-usuario">Weberson Rodrigues</p>
            <p>weberson.r.a@gmail.com</p>

            <div class="container-gerenciar-usuarios">
              <a class="gerenciar-usuarios" href="#">Gerenciar sua Conta do Google</a>
            </div>

            <v-list>
              <v-divider></v-divider>
              <v-list-item 
                  v-if="true"
                  :key="'batata'"
                  @click="() => {}"
                  class="text-center ">
                <v-list-item-action class="acao-conta-usuario">
                  <v-icon size="20">mdi-account-plus-outline</v-icon>
                </v-list-item-action>

                <v-list-item-content class="text-left">
                  <v-list-item-title class="adicionar-conta">Adicionar outra conta</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <a class="ma-5 sair" outlined >Sair</a>

                <v-divider></v-divider>
                <div class="rodape-card-perfil">
                <a href="#">Politica de Pricacidade</a> . 
                <a href="#">Termos de Serviço</a>
                </div>
  
            </v-list>
          </v-card-text>

          <v-card-actions></v-card-actions>
        </v-card>
      </v-menu>
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
 .v-list-item {
  min-height: 35px;
}
.v-list-item__action {
  margin: 0;
}


.btn-escrever {
  margin-top: 20px;
  margin-bottom: 10px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 25px 60px;
}

.nome-usuario {
  font-weight: 500;
}

.v-application p {
  margin: 0px;
}

.v-card__text{
  padding: 0px;
}

.rodape-card-perfil {
  margin-top: 25px;
  
} 

.rodape-card-perfil a {
  font-size: 12px;
  color: #5f6368;
  text-decoration: none;
}  

 .sair {
  background-color: #ffffff;
    border: 1px solid #dadce0;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    display: inline-block;
    font: 500 14px/16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    letter-spacing: .15px;
    margin: 16px;
    outline: 0;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    white-space: normal;
      font-size: 12px;
  color: #5f6368;
} 

.adicionar-conta{
  color: #3c4043;
  font-size: 14px;
}

div.v-list-item__action.acao-conta-usuario {
    margin-right: 16px;
    margin-left: 43px;
    padding-top: 17px;
    padding-bottom: 17px;
}

.gerenciar-usuarios {
    background-color: #ffffff;
    border: 1px solid #dadce0;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    color: #3c4043;
    display: inline-block;
    letter-spacing: .25px;
    margin: 16px 0 0;
    max-width: 254px;
    outline: 0;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
}

.container-gerenciar-usuarios {
  width: 310px;
}

.v-sheet.v-card {
    border-radius: 10px;
}
</style>