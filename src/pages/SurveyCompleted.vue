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
          <h1 class="my-4 font-weight-bold">Grazie per aver lasciato la tua opinione</h1>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <p>Le tue risposte sono state registrate con successo.</p>
          <p>Tra pochi secondi il tuo browser tornerà al sito dell'ente.</p>
        </b-col>
      </b-row>
      <b-row align-h="end" class="my-5">
          <b-col cols="3">
            <b-button block variant="primary" @click="goToReturnUrl">Torna al sito dell'ente</b-button>
          </b-col>
        </b-row>
    </b-container>
    <footer class="footer dark-blue mb-0 mt-5">
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
    name: 'SurveyCompleted',
    methods: {
      goToReturnUrl() {
      window.location.href = sessionStorage.getItem('returnUrl');
    },
    },
    mounted () {
      setTimeout( () => {
        window.location.href = sessionStorage.getItem('returnUrl')
    }, 5000);
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .footer{
    position: absolute;
    bottom: 0;
  }
  </style>
  