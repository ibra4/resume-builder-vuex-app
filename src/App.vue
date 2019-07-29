<template>
  <div id="app">
    
    <div class="cvinput">
      
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner">

          <personal-elem :title="titles.personal"/>

          <summary-elem :title="titles.summary"/>

          <education-elem :title="titles.education" />

          <work-elem :title="titles.work" />

          <language-elem :title="titles.languages" />
          
        </div>

        
        <a class="nextButton" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="">next</span>
        </a>
      </div>
    
    </div>
    <div class="container">
      <cv-component />
    </div>
  </div>
</template>

<script>

import personalElem from './components/formComponents/personalElem.vue'
import summaryElem from './components/formComponents/summaryElem.vue'
import educationElem from './components/formComponents/educationElem.vue'
import workElem from './components/formComponents/workElem.vue'
import languageElem from './components/formComponents/languageElem.vue'

import { mapState } from 'vuex'

import './assets/css/all.min.css'

import cvComponent from './components/cvComponent.vue'


export default {
  name: 'app',
  data: function() {
    return {

    }
  },
  components: {
    personalElem,
    summaryElem,
    educationElem,
    workElem,
    languageElem,
    cvComponent
  },
  computed: {
    ...mapState({
      titles: 'titles',
    })
  }
}
</script>

<style>

</style>
