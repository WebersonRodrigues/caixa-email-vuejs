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
                    email: {{emailSelecionado}}
                <v-data-table
                  :headers="headers"
                  :items="listaEmail"
                  v-model="selecionados"
                  :single-select="false"
                  item-key="id"
                  show-select
                  @click:row="abrirModal"
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
      <ModalResposta v-model="emailSelecionado" @onClose="alterarDialog" :dialog="dialog"/>

      <input type="text">
    </v-row>
  </div>
</template>

<script>

import ModalResposta from '@/components/ModalResposta'
import apiEmail from '@/api/email-api.js'
import EmailModel from '@/model/email-model';

export default {
  name: "CaixaDeEntrada",
  components:{
    ModalResposta
  },
  data() {
    return {
      tabs: null,
      dialog: false,
      selecionados: [],
      headers: [
        { text: "De", align: "start", value: "cabecalho.de" },
        { text: "Assunto", align: "start", value: "cabecalho.assunto" },
        { text: "Resumo", align: "start", value: "corpo.resumo" },
        { text: "Data e hora", align: "start", value: "cabecalho.dataHora" }
      ],
      listaEmail: [],
      emailSelecionado: new EmailModel()
    };
  },
  
  created(){

    apiEmail.obterTodosEmails()
    .then(resposta => this.listaEmail = resposta.map(e => new EmailModel(e)))
    .catch(error => console.log(error));
  },

  methods: {
    abrirModal(item) {
      console.log(item);
      this.emailSelecionado = new EmailModel(item);
      this.dialog = true;
    },
    alterarDialog(valor){
      this.dialog = valor;
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
