<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col cols="10" sm="4" md="4" lg="4">
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              label="Site Name"
              placeholder="Տեղանքի անունը"
              required
            ></v-text-field>

            <v-textarea
              ref="description"
              v-model="description"
              :rules="[
                (v) => !!v || 'This field is required',
                (v) => !!v && v.length <= 1500 || 'Նկարագրությունը երկար է   '
              ]"
              label="Description"
              placeholder="փաթեթի և տեղանքի նկարագրությունը"
              counter="1500"
              required
            ></v-textarea>

            <v-text-field
              v-model="item"
              @click:append-outer="addLink"
              placeholder="ՆԿարը տեղադրել այստեղ"
              outlined
              :rules="existsLink"
              append-outer-icon="mdi-plus"
            ></v-text-field>
            <v-list>
              <v-list-item v-for="image in images" :key="image">
                <p>
                  <b>URL:</b>
                  {{ image }}
                </p>
              </v-list-item>
            </v-list>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="reset" icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-btn color="primary" text :disabled="!valid" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    images: [],
    item: null,
    name: null,
    description: null,
    valid: true
  }),
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    addLink: function() {
      this.images.push(this.item);
      this.item = null;
    },
    submit: async function () {
      let response = await axios.post('https://armenian-travel.herokuapp.com/postSite', { title: this.title, description: this.description, images: this.images })
      let id = response.data
      this.$router.push(`/display/${id}`)
    }
  },
  computed: {
    existsLink () {
      return [
        () => (this.images && this.images.length > 0) || 'Must provide at least 1 link'
      ]
    }
  }
};
</script>