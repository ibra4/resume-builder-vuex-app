<template>
<v-app>
  <v-container>
    <!-- stepper start -->
    <v-dialog v-model="titleWindow" max-width="80%">
      <v-card class="p-4">
        <h4>Set new Title for : {{ currentTitle }} </h4>
        <v-text-field
            v-model="newTitle"
          ></v-text-field>
        <v-btn color="success" @click="saveTitle">save</v-btn>
      </v-card>
    </v-dialog>
    <v-stepper v-model="e1" vertical>

        <template v-for="(sec, n) in sections">
          
          <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable >
            <div>
              {{ sec }}
              <v-btn text color="success" @click.stop="editTitle(sec)">edit title</v-btn>
            </div>
          </v-stepper-step>
          
          <v-stepper-content :key="`${n}-c`" :step="n">

          <v-card class="mb-12">
            <keep-alive>
              <component :is="getKeyOfValue(sec) + 'Elem'"></component>
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
  </v-container>
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
import linksElem from './components/formComponents/linksElem.vue'

import { mapState } from 'vuex'

import './assets/css/all.min.css'

import cvComponent from './components/cvComponent.vue'


export default {
  name: 'app',
  data: function() {
    return {
      e1: 1,
      steps: 3,
      titleWindow: false,
      currentTitle: '',
      targetTitle: '',
      newTitle: ''
    }
  },
  components: {
    personalElem,
    summaryElem,
    educationElem,
    workElem,
    languageElem,
    skillsElem,
    linksElem,
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
    },
    editTitle(title) {
      this.currentTitle = title
      this.targetTitle = this.getKeyOfValue(title)
      this.titleWindow = true;
    },
    saveTitle() {
      this.$store.dispatch('updateVar', ['titles.' + this.targetTitle, this.newTitle])
      this.newTitle = ''
      this.titleWindow = false
    }
  }
}
</script>

<style>
.carousel-inner .carousel-item {
  min-height: 300px;
}
</style>
