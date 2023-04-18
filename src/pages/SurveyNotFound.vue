<template>
  <div class="h-100">
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
          <h2 class="my-4 font-weight-bold">Questionario non disponibile</h2>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col cols="4" class="text-center">
          <img src="../assets/exclamation.png" width="150px" fluid alt="Inail logo" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="font-weight-bold mb-4">
            Il questionario di valutazione non è più disponibile
          </h4>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <p>Siamo spiacenti, il questionario non è più disponibile, é possibile che siano passati più di 30 minuti dal termine della richiesta del servizio. La
invitiamo a ripetere l'operazione di valutazione quando utilizzerà nuovamente uno dei servizi monitorati dall'iniziativa.</p>
        </b-col>
      </b-row>
      <b-row align-h="end">
          <b-col cols="3">
            <b-button block variant="primary" @click="goToReturnUrl">Torna al sito dell'ente</b-button>
          </b-col>
        </b-row>
    </b-container>
    <footer class="footer dark-blue mb-0">
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
    name: 'SurveyNotFound',
     created() {
    },
    methods: {
      goToReturnUrl() {
      window.location.href = "https://www.istat.it/";
    },
    },
  };
  </script>
  
  <style lang="scss" scoped>
    .footer{
    position: absolute;
    bottom: 0;
  }
  </style>
  