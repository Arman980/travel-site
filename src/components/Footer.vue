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
            TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project TUMO Project
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