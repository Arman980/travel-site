<template>
  <v-row justify="center">
    <v-col class="text-center" cols="10">
      <div class="my-2">
        <v-container>
          <h2>Register</h2>
          <v-form>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field v-model="firstname" label="First name"></v-text-field>
                <v-text-field v-model="lastname" label="Last name"></v-text-field>
                <v-text-field v-model="email" label="Email" :rules="emailRules"></v-text-field>
                <v-text-field
                  v-model="c_email"
                  label="Confirm Email"
                  :rules="emailConfirmationRules"
                ></v-text-field>
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
  name: "Register",

  data() {
    return {
      show1: false,
      password: null,
      name: null,
      email: null,
      firstname: null,
      lastname: null,
      c_email: null,
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      rules: [
        value => !!value || "Required.",
        v => (v && v.length >= 8) || "Min 8 characters",
        v => /(?=.*\d)/.test(v) || "Must have one number"
      ],
    };
  },
  computed: {
        emailConfirmationRules() {
          return [
            () => this.email === this.c_email || "E-mail must match",
            v => !!v || "Confirmation E-mail is required"
          ];
        }
      }
};
</script>