<template>
  <div id="caixa-de-entrada">
    <v-card>
      <v-toolbar flat>
        <template v-slot:extension>
          <v-tabs v-model="tabs" grow>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tabs-1" class="primary--text">
              <v-icon class="mr-2">mdi-email-receive</v-icon>
              <span class="tabs">Principal</span>
            </v-tab>

            <v-tab href="#tabs-2" class="primary--text">
              <v-icon class="mr-2">mdi-heart</v-icon>
              <span class="tabs">Social</span>
            </v-tab>

            <v-tab href="#tabs-3" class="primary--text">
              <v-icon class="mr-2">mdi-account-box</v-icon>
              <span class="tabs">Promoções</span>
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item v-for="i in 3" :key="i" :value="'tabs-' + i">
          <v-card flat>
            <v-card-text>
              <div v-if="tabs == 'tabs-1'">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  v-model="selecionados"
                  :single-select="false"
                  item-key="id"
                  show-select
                  @click:row="mandarAlerta"
                ></v-data-table>
              </div>

              <div v-if="tabs == 'tabs-2'">
                <h1>Estou na tab social</h1>
                <!-- colocar aqui tudo da tab social -->
              </div>

              <div v-if="tabs == 'tabs-3'">
                <h1>Estou na tab promoções</h1>
                <!-- colocar aqui tudo da tab promoções -->
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-row justify="center">
      <!-- Aqui começa o modal -->
      <v-dialog v-model="dialog" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <!-- Aqui vai ter alguma coisa , resumo logo alguma coisa -->
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <div class="mb-3">
                    <h5>Assunto: </h5>
                    <h5>Nome: </h5>
                    <h5>De: </h5>
                    <h5>Para: </h5>
                  </div>
      
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                 
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Enviar</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CaixaDeEntrada",
  data() {
    return {
      tabs: null,
      dialog: false,
      selecionados: [],
      headers: [
        { text: "Nome", align: "start", value: "nome" },
        { text: "Assunto", align: "start", value: "assunto" },
        { text: "Mensagem", align: "start", value: "mensagem" },
        { text: "Hora", align: "start", value: "horaEnvio" }
      ],
      desserts: [
        {
          id: 1,
          nome: "Matheus",
          assunto: "Projeto final",
          mensagem: "Mensagem do email",
          horaEnvio: "19:20"
        },
        {
          id: 2,
          nome: "Matheus",
          assunto: "Projeto final",
          mensagem: "Mensagem do email",
          horaEnvio: "19:20"
        },
        {
          id: 3,
          nome: "Matheus",
          assunto: "Projeto final",
          mensagem: "Mensagem do email",
          horaEnvio: "19:20"
        }
      ]
    };
  },

  methods: {
    mandarAlerta(item) {
      // Aqui vamos chamar um modal e preencher os dados do modal.
      console.log(item);
      this.dialog = true;
    }
  }
};
</script>

<style scoped>
.v-tab {
  text-transform: none;
}

span.tabs {
  color: rgba(0, 0, 0, 0.87);
}
</style>
