<template>
  <v-app>
    <v-container>
      <!-- stepper start -->
      <v-dialog v-model="titleWindow" max-width="80%">
        <v-card class="p-4">
          <h4>Set new Title for : {{ currentTitle }}</h4>
          <v-text-field v-model="newTitle"></v-text-field>
          <v-btn color="success" @click="saveTitle">save</v-btn>
        </v-card>
      </v-dialog>
      <v-stepper v-model="e1" vertical>
        <template v-for="(sec, n) in sections">
          <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable>
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

            <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>
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
    <CvComponent />
  </v-app>
</template>

<script>
import PersonalElem from "./components/FormComponents/PersonalElem";
import SummaryElem from "./components/FormComponents/SummaryElem";
import EducationElem from "./components/FormComponents/EducationElem";
import WorkElem from "./components/FormComponents/WorkElem";
import LanguageElem from "./components/FormComponents/LanguageElem";
import SkillsElem from "./components/FormComponents/SkillsElem";
import BarSkillsElem from "./components/FormComponents/BarSkillsElem";
import LinksElem from "./components/FormComponents/LinksElem";
import BlocksElem from "./components/FormComponents/BlocksElem";
import ProjectsElem from "./components/FormComponents/ProjectsElem";

import { mapState } from "vuex";

import "./assets/css/all.min.css";

import CvComponent from "./components/CvComponent";

export default {
  name: "app",
  data: function() {
    return {
      e1: 0,
      steps: 3,
      titleWindow: false,
      currentTitle: "",
      targetTitle: "",
      newTitle: ""
    };
  },
  components: {
    PersonalElem,
    SummaryElem,
    EducationElem,
    WorkElem,
    LanguageElem,
    SkillsElem,
    LinksElem,
    BarSkillsElem,
    BlocksElem,
    ProjectsElem,
    CvComponent
  },
  computed: {
    ...mapState({
      titles: "titles"
    }),
    sections() {
      return Object.values(this.titles);
    }
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
    getKeyOfValue(name) {
      return Object.keys(this.titles).find(key => this.titles[key] === name);
    },
    editTitle(title) {
      this.currentTitle = title;
      this.targetTitle = this.getKeyOfValue(title);
      this.titleWindow = true;
    },
    saveTitle() {
      this.$store.dispatch("updateVar", [
        "titles." + this.targetTitle,
        this.newTitle
      ]);
      this.newTitle = "";
      this.titleWindow = false;
    }
  }
};
</script>