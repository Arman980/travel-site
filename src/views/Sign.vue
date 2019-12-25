<template>
<v-container>
  <div class="Sign">
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-tabs background-color="deep-purple accent-4" grow dark>
            <v-tab>Login</v-tab>
            <v-tab-item>
              <Login />
            </v-tab-item>

            <v-tab>Register</v-tab>
            <v-tab-item>
              <Register />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

export default {
  name: "sign",
  components: {
    Login,
    Register
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>
