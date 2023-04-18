<template>
  <div class="home">
    <b-navbar type="dark" class="blue pa-6">
      <b-row class="d-flex align-items-center" style="width: 100vw">
        <b-col cols="8" class="text-left ml-5">
          <b-navbar-brand href="#" style="white-space: normal;">
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
          <h2 class="my-4 font-weight-bold">Valuta la tua esperienza online</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Il
            <span class="font-weight-bold"
              >Dipartimento della funzione pubblica</span
            >
            in collaborazione con <span class="font-weight-bold">Istat</span> ha
            avviato un’ iniziativa di valutazione dei servizi online al fine di
            analizzare l'utilizzo di strumenti digitali da parte dei cittadini,
            la loro facilità d'uso, fruibilità e efficacia. Istat raccoglierà la
            tua valutazione in forma anonima, per le sole finalità di uso
            statistico.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="font-weight-bold mt-4 mb-2">
            Ti chiediamo di valutare la tua esperienza del servizio digitale in
            merito ai seguenti 3 aspetti:
          </h4>
        </b-col>
      </b-row>

      <b-row align-v="center" align-h="start" class="my-4">
        <b-col cols="12" md="auto">
          <img class="mr-5" :src="logoUrl" width="200px" fluid :alt="serviceDescription" />
        </b-col>
        <b-col cols="12" md="8">
          <h4 class="font-weight-bold service-name-title">
            {{serviceDescription}}
          </h4>
        </b-col>
      </b-row>

      <b-form @submit="sendResult">
        <b-row   v-for="question in questions"
              :key="question.number" class="my-4">
          <b-col>
            <b-form-group
              label-size="lg"
              label-class="question-label"
              :label="`${question.number}. ${question.text}`"
              :id="`${question.number}`"
            >
              <b-form-radio-group
              class="radio-group"
              size="lg"
                :id="`${question.number}`"
                @change="selectOption(question)"
                v-model="question.answer"
                required
              >
                <b-form-radio
                  v-for="option in question.values"
                  :key="`${question.number}-${option.key}`"
                  :value="option.key"
                  size="lg"
                  class="form-radio-button"
                  >{{ option.value }}</b-form-radio
                >
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-4" align-h="end">
          <b-col cols="2" style="max-width: none">
            <b-button type="submit" block variant="primary" style="font-weight: 500">Conferma</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <footer class="footer dark-blue mb-0">
      <b-container fluid>
        <b-row align-v="center" class="d-flex justify-content-between">
          <b-col class="footer-logo">
            <h5>progetto di</h5>
            <div class="image-container"><img src="../assets/fp.png" width="200px"></div>
          </b-col>
          <b-col class="footer-logo">
            <h5>con la collaborazione di</h5>
            <div class="image-container"><img src="../assets/LogoIstatDenominazioneNegativo-01.png" width="200px"></div>
          </b-col>
          <b-col class="border-left d-flex align-items-center"><a class="text-white ml-2" style="text-decoration: underline;" href="">Dichiarazione di accessibilità</a></b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
//Services
import { clientService } from "@/services/Client.js";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      currentQuestion: null,
      editing: false,
      formSubmitted: false,
      questions: [],
      result: {
        surveyId: null,
        answers: [],
      },
      recap: false,
      returnUrl: null,
      selected: null,
      surveyId: null,
      logoUrl: "",
      votes: [1, 2, 3, 4, 5],
      serviceDescription: "",
    };
  },
  computed: {
    screenAtLeastLg() {
      const width = window.innerWidth;
      return width >= 1100;
    }
  },
  methods: {
    getSurvey() {
      clientService
        .getSurvey(this.surveyId)
        .then((res) => {
          /* eslint-disable no-debugger */
          debugger;
          console.log(res.data)
          if(res.data.code &&  res.data.code != 200){
            /* eslint-disable no-debugger */
            debugger;
            this.goToSurveyNotFound();
          }else{
          this.questions = res.data.questions;
          this.returnUrl = res.data.returnUrl;
          sessionStorage.setItem('returnUrl', this.returnUrl);
          this.logoUrl = res.data.logoUrl ?? "";
          this.serviceDescription = res.data.serviceDescription ?? "";
          console.log("questions", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          this.goToSurveyNotFound();
        });
    },
    sendResult(event) {
      event.preventDefault();
      clientService
        .sendResult(this.result)
        .then((res) => {
          console.log(res.data)
          if(res.data.sendResult == 'Succeded'){
            this.goToSurveyCompleted();
          }else{
            this.goToSurveyNotFound();
          }
        })
        .catch((err) => {
          console.log(err);
          this.goToSurveyNotFound();
        });
    },
    selectOption(question) {
      let answer = {
        number: question.number,
        value: question.answer,
      };

      this.result.answers.push(answer);
      console.log(this.result);
    },
    /* PATRIZIO goToReturnUrl() {
      window.location.href = this.returnUrl;
    }, */
    goToSurveyNotFound() {
      this.$router.push("/survey/error")
    },
    goToSurveyCompleted() {
      this.$router.push("/survey/success")
    },
  },
  mounted() {
    this.surveyId = this.$route.params.surveyId;
    this.result.surveyId = this.surveyId;
    this.getSurvey();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.blue {
  background-color: #0066cc;
}
.dark-blue {
  background-color: #00264d;
  color: rgba(255, 255, 255, 0.5);
}
.dark-blue-text{
  color: #004080;
  font-size: 22px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.radio-group{
  padding: 10px 0px;
  color: #002E5D;
}

.border-left{
  border-left: 1px solid rgb(168, 167, 167);
  height: 100px;
}
img[src=""], img[src="null"] {
    display: none;
}

.service-name-title {
  color: #0066CC;
  font-size: 24px;
}

.form-radio-button {
  width: 100%;
  margin-bottom: 4px;
}
@media (min-width: 1102px) { 
  .form-radio-button {
    width: auto;
  }
}


.footer-logo {
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  height: 150px;
}

.footer-logo .image-container {
    flex: 1;
    display: flex;
    align-items: center;
}

</style>