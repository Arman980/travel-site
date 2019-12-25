<template>
  <v-row justify="center">
    <v-col class="text-center" cols="10">
      <div class="my-2">
        <v-container>
          <h2>Login</h2>
          <v-form>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field v-model="name" label="Email"></v-text-field>

                <v-text-field
                  label="Password"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="rules"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-btn>Button</v-btn>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      show1: false,
      password: null,
      name: null,
      rules: [
        v => !!v || "Required.",
        v => (v && v.length >= 8) || "Min 8 characters"
      ]
    };
  }
};
</script>