<template>
<v-app>
  <div style="margin: 100px auto; width: 70%">
    <!-- stepper start -->
    <v-stepper v-model="e1" vertical>

        <template v-for="(sec, n) in sections">
          
          <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable >
            {{sec}}
          </v-stepper-step>
          
          <v-stepper-content :key="`${n}-step`" :step="n">

          <v-card class="mb-12">
            <keep-alive>
              <component :is="getKeyOfValue(sec) + 'Elem'" :title="titles[getKeyOfValue(sec)]"></component>
            </keep-alive>
          </v-card>

          <v-btn color="primary" @click="nextStep(n)"> Continue </v-btn>
          <v-btn text color="error">Cancel</v-btn>
        
        </v-stepper-content>

          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>

      <!-- stepper items start-->
      <v-stepper-items>

        <!-- stepper content -->

        <!-- stepper content -->

      </v-stepper-items>
      <!-- stepper items end -->

    </v-stepper>
    <!-- stepper end -->
  </div>
  <cvComponent />
</v-app>  
</template>

<script>

import personalElem from './components/formComponents/personalElem.vue'
import summaryElem from './components/formComponents/summaryElem.vue'
import educationElem from './components/formComponents/educationElem.vue'
import workElem from './components/formComponents/workElem.vue'
import languageElem from './components/formComponents/languageElem.vue'
import skillsElem from './components/formComponents/skillsElem.vue'

import { mapState } from 'vuex'

import './assets/css/all.min.css'

import cvComponent from './components/cvComponent.vue'


export default {
  name: 'app',
  data: function() {
    return {
      e1: 1,
      steps: 3,
    }
  },
  components: {
    personalElem,
    summaryElem,
    educationElem,
    workElem,
    languageElem,
    skillsElem,
    cvComponent,
  },
  computed: {
    ...mapState({
      titles: 'titles',
    }),
    sections() {
      return Object.values(this.titles);
    }
  },
  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    getKeyOfValue(name) {
      return Object.keys(this.titles).find(key => this.titles[key] === name)
    }
  }
}
</script>

<style>
.carousel-inner .carousel-item {
  min-height: 300px;
}
</style>
