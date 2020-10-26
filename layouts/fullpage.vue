<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <main style="background-color: #f9f9f9 ; min-height: 100vh">
          <nuxt/>
        </main>
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
  .custom {
    box-shadow: none;
    border-top: 2px #1e824c solid !important;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
</style>
