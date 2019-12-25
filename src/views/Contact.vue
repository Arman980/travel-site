<template>
  <div class="contact">
    <v-row justify="center">
      <v-col cols="10" md="8" class="pt-0">
        <div class="my-2">
          <v-card>
            <v-container>
              <h2 style="text-align: center">Contact</h2>
              <v-form>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field label="Name" v-model="name" :rules="rules"></v-text-field>
                    <v-text-field v-model="email" label="Email" :rules="rules"></v-text-field>
                    <v-text-field v-model="theme" label="Theme" :rules="rules"></v-text-field>
                    <v-text-field v-model="message" label="Message" :rules="rules" counter="50"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
              <v-btn>Button</v-btn>
            </v-container>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {},
  data() {
    return {
      email: null,
      name: null,
      theme: null,
      message: null,
      rules: [
        v => !!v || "Required.",
        v => v.length <= 50 || "Max 50 characters"
      ]
    };
  }
};
</script>
