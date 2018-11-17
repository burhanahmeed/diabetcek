<template>
    <v-container fluid grid-list-xl>
      <v-layout wrap align-center>
        <v-flex xs12 sm6 d-flex>
          <v-select v-bind:items="colors" v-model="a1" label="Select or add Colors" autocomplete @keyup.enter="addValue"></v-select>
        </v-flex>
      </v-layout>
    </v-container>
</template>