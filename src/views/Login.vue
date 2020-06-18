<template>
<v-app id="inspire">
    <v-app id="inspire">
          <v-row
            align="center"
            justify="center"
            
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-spacer></v-spacer>
                  <v-toolbar-title align="center">MyMail</v-toolbar-title>
                  <v-spacer></v-spacer>
                 
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      id="login"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>
  
                    <v-text-field
                      id="senha"
                      label="Senha"
                      name="senha"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="btn-login" color="primary">Login</v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

    </v-app>
  </v-app>
</template>

<script>
export default {
  name: "Importantes",
  data() {
    return {
      teste: "Estou na tela de login"
    };
  }
};
</script>

<style scoped>

.btn-login{
  width: 90px;
}
</style>
