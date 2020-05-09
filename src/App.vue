<template>
  <v-app>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-12">
          <v-dialog v-model="titleWindow" max-width="80%">
            <v-card class="p-4">
              <h4>Set new Title for : {{ currentTitle }}</h4>
              <v-text-field v-model="newTitle"></v-text-field>
              <v-btn color="success" @click="saveTitle">save</v-btn>
              <v-btn color="red" @click="titleWindow = false">cancel</v-btn>
            </v-card>
          </v-dialog>
          <v-container>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step v-for="n in titles" :key="`${n}-step`" :step="n" editable complete>
                  {{ n }}
                  <v-btn text color="success" @click.stop="editTitle(n)">edit title</v-btn>
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content v-for="n in titles" :key="`${n}-content`" :step="n">
                  <keep-alive>
                    <component :is="getKeyOfValue(n) + 'Elem'"></component>
                  </keep-alive>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-container>
        </div>
        <div class="col-lg-6 col-12">
          <CvComponent />
        </div>
      </div>
    </div>
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
<style>
.v-stepper__label {
  display: inline !important;
}
.v-stepper__header {
  display: flex;
  height: auto;
}
.v-stepper__step--editable {
  flex: 33.333%;
}
.v-stepper__step--active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>