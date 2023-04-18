<template>
  <div>
    <b-navbar type="dark" class="blue pa-6">
      <b-row class="d-flex align-items-center" style="width: 100vw">
        <b-col cols="8" class="text-left ml-5">
          <b-navbar-brand href="#">
            <h5 class="font-weight-normal">
              Questionario di gradimento dei servizi online per la PA
            </h5>
          </b-navbar-brand></b-col
        >
        <b-col></b-col>
      </b-row>
    </b-navbar>

    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <h1 class="my-4 font-weight-bold">404</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="font-weight-bold mb-4">
            Pagina non trovata
          </h2>
        </b-col>
      </b-row>
      <b-row align-h="end" class="my-5">
          <b-col cols="3">
            <b-button block variant="primary" @click="goToReturnUrl">Torna al sito dell'ente</b-button>
          </b-col>
        </b-row>
    </b-container>
    <footer class="footer dark-blue mb-0 mt-5 sticky">
      <b-container fluid>
        <b-row align-v="start" class="d-flex justify-content-between mb-3">
          <b-col><h5>progetto di</h5></b-col>
          <b-col><h5>con la collaborazione di</h5></b-col>
          <b-col></b-col>
        </b-row>
        <b-row align-v="center" class="d-flex justify-content-between">
          <b-col><img src="../assets/fp.png" width="80%"></b-col>
          <b-col><img src="../assets/LogoIstatDenominazioneNegativo-01.png" width="200px"></b-col>
          <b-col class="border-left d-flex align-items-center"><a class="text-white" href="">Dichiarazione di accessibilità</a></b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
    </template>
  
  <script>
  export default {
    name: 'PageNotFound',
     created() {
      console.log("Page not found");
    },
    methods: {
      goToReturnUrl() {
        window.location.href = "https://www.istat.it/";
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  