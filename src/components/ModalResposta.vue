<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <!-- Aqui vai ter alguma coisa , resumo logo alguma coisa -->
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-if="email && email.id" cols="12" sm="12">
              <div class="mb-3">
                <h5>Assunto: {{ email.cabecalho.assunto }}</h5>
                <h5>Para: {{ email.cabecalho.para }}</h5>
                <h5>De: {{ email.cabecalho.de}}</h5>
                <h5>Data: {{ email.cabecalho.dataHora }}</h5>
              </div>

              <v-divider></v-divider>
              <div class="corpo-email" v-html="email.corpo.mensagem"></div>
              <v-divider></v-divider>
              
              <div v-if="mostrarEditor" class="caixa-resposta">
              <editor
                api-key="no-api-key"
                v-model="valorEditor"
                :init="init"
              />
              </div>

            </v-col>
          </v-row>
    
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="!esconderBotoes" color="primary" tile outlined  @click="responder">
          <v-icon left>mdi-undo</v-icon>Responder
        </v-btn>
        <v-btn v-if="esconderBotoes" color="primary" tile outlined  @click="enviarMensagem">
          <!-- <v-icon left>mdi-undo</v-icon>Enviar -->
          Enviar
        </v-btn>
        <v-btn v-if="!esconderBotoes" color="primary" tile outlined @click="encaminhar">
          <v-icon left>mdi-redo</v-icon>Encaminhar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

import EmailModel from '@/model/email-model';
import Editor from '@tinymce/tinymce-vue'
import apiEmail from '@/api/email-api.js'


export default {
  model: {
    prop: "emailSelecionado",
    event: "onChange"
  },
  components:{
    'editor': Editor
  },
  props: {
    dialog: { type: Boolean, default: false },
    emailSelecionado: {type: EmailModel}
  },
  data() {
    return {
      email: this.emailSelecionado || new EmailModel,
      valorEditor: '',
      mostrarEditor: false,
      esconderBotoes: false,
      init:{
        height: 300,
        language: "pt_BR",
        plugins: [
          "print advlist autolink lists link image charmap print preview",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code wordcount pagebreak"
        ],
        toolbar: ` undo redo pagebreak print formatselect 
                 fontselect fontsizeselect bold italic underline 
                  alignleft aligncenter alignright 
                 alignjustify outdent indent numlist bullist 
                 forecolor backcolor removeformat table`,
        menubar: "",
        contextmenu: false
      }
    }
  },

  watch: {
      emailSelecionado(val){
        this.email = val || new EmailModel;
        console.log(this.email);
      }
  },

  created(){
      console.log(this.email)
  },

  methods: {
    fecharModal(){
      this.mostrarEditor = false;
      this.esconderBotoes = false;
      this.valorEditor = '';
      this.dialog = !this.dialog;
      this.$emit("onClose", false);
    },
    encaminhar() {
      this.dialog = !this.dialog;
      this.$emit("onChange", this.emailSelecionado);
    },
    responder(){
      this.mostrarEditor = true;
      this.esconderBotoes = true;
    },
    enviarMensagem(){
      var emailResposta = new EmailModel(this.emailSelecionado);

      emailResposta.corpo.mensagem = this.valorEditor;

      apiEmail.enviarEmail(emailResposta)
      .then(resposta => {
          emailResposta.id = resposta.id;
          this.emailSelecionado.respostas.push(emailResposta);
          
          this.fecharModal();
          this.$emit("onChange", this.emailSelecionado);
      });


    }
  }
};
</script>
<style scoped>
.corpo-email{
    min-height: 200px;
}
</style>