<template>
    <v-footer
        dark
        padless
        app
        absolute
    >
        <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        >
        <v-card-text style="text-align: center;background-color: #dc6337;" >
            <v-btn 
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            >
            <v-divider></v-divider >
            <v-icon size="24px">{{icon}}</v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0" style="background-color: #397cbf;">
          Our commitment to our customers has been at the core of who we are for 100 years. We’re relentlessly focused on “Doing it Right” and being a trusted financial services provider to our consumer, commercial, and corporate customers. We are one of the largest full-service automotive finance operations in the country and offer a wide range of financial services and insurance products to automotive dealerships and consumers. That’s why over 8,000,000 people already trust us to help with their bank, auto, invest and other financial needs.
        </v-card-text>

        <hr>

        <v-card-text class="white--text" style="text-align: center ;background-color: #397cbf;">
            {{ new Date().getFullYear() }} — <strong>Yerevan</strong>
        </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
        'mdi-facebook-box',
        'mdi-twitter-box',
        'mdi-linkedin-box',
        'mdi-instagram',
      ]
    })
}
</script>