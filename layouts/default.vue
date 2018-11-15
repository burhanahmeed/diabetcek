<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <main style="background-color: #f9f9f9 ; min-height: 100vh">
          <nuxt/>
        </main>
        <v-bottom-nav
          :active.sync="bottomNav"
          :value="true"
          fixed
          color="white"
        >
          <v-btn
            color="teal"
            flat
            value="recent"
            to="/"
          >
            <span>Diabet Cek</span>
            <v-icon>check_circle</v-icon>
          </v-btn>
          <v-btn
            color="teal"
            flat
            value="nearby"
            to="places"
          >
            <span>Find Clinic</span>
            <v-icon>place</v-icon>
          </v-btn>
          <v-btn
            color="teal"
            flat
            value="favorites"
            to="about"
          >
            <span>About Us</span>
            <v-icon>error_outline</v-icon>
          </v-btn>
        </v-bottom-nav>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>

<style scoped>
  span {
    font-family: 'Poppins', sans-serif;
  }
</style>
