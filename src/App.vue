<template>
  <v-app>
    <div class="container-fluid">
      <div class="row">
        <v-dialog v-model="titleWindow" max-width="80%">
          <v-card class="p-4">
            <v-text-field label="title" v-model="newTitle"></v-text-field>
            <button class="btn btn-primary" @click="saveTitle">save</button>
            <button class="btn btn-danger ml-2" @click="titleWindow = false">cancel</button>
          </v-card>
          <v-card class="p-4" v-if="!this.prevented.includes(this.curentSelectedSection)">
            <button
              v-if="this.sectionHidden"
              class="btn btn-success"
              @click="showSection()"
            >Show the section</button>
            <button v-else class="btn btn-danger" @click="hideSection()">Delete this section</button>
          </v-card>
        </v-dialog>
        <v-container>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step
                v-for="n in titles"
                :key="`${n}-step`"
                :target-id="getKeyOfValue(n)"
                :step="n"
                :class="headerClasses[getKeyOfValue(n)]"
                complete
                editable
                @click="scrollToContent($event)"
              >
                <div class="stepper-label text-primary">{{ n }}</div>
                <button
                  class="btn btn-success w-100 edit-button d-block mt-5"
                  style="z-index: 10"
                  @click.stop="editTitle($event, n)"
                >edit</button>
              </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items id="stepper-content">
              <div class="d-flex justify-content-between p-3">
                <div>
                  <div class="toTop btn btn-primary" @click="scrollToTop()">back</div>
                  <div class="toTop btn btn-primary ml-2" @click="scrollToTop(0)">to top</div>
                </div>
                <div>
                  <div class="toTop btn btn-primary ml-2" @click="scrollToResume()">preview</div>
                </div>
              </div>
              <v-stepper-content v-for="n in titles" :key="`${n}-content`" :step="n">
                <keep-alive>
                  <component :is="getKeyOfValue(n) + 'Elem'"></component>
                </keep-alive>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-container>
        <div class="overflow-scroll">
          <div class="overflow-wrapper">
            <CvComponent />
          </div>
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
  data: function () {
    return {
      e1: 1,
      steps: 3,
      titleWindow: false,
      scrollTo: 0,
      currentTitle: "",
      targetTitle: "",
      newTitle: "",
      curentSelectedSection: "",
      sectionHidden: false,
      prevented: ['Personal', 'Summary'],
      headerClasses: {
        Personal: "",
        Blocks: "",
        Work: "",
        Summary: "",
        Education: "",
        Work: "",
        Skills: "",
        BarSkills: "",
        Language: "",
        Links: "",
        Blocks: "",
        Projects: "",
      },
      isOperaBrowser:
        (!!window.opr && !!opr.addons) ||
        !!window.opera ||
        navigator.userAgent.indexOf(" OPR/") >= 0,
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
    CvComponent,
  },
  computed: {
    ...mapState({
      titles: "titles",
    }),
    sections() {
      return Object.values(this.titles);
    },
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
    scrollToTarget(number) {
      if (this.isOperaBrowser) {
        window.scrollTo(0, number);
      } else {
        window.scrollTo({ top: number, behavior: "smooth" });
      }
    },
    scrollToContent(event) {
      const stepperContent = document.getElementById("stepper-content");
      this.scrollTo = event.target.parentElement.parentElement.offsetTop;
      this.scrollToTarget(stepperContent.offsetTop);
    },
    scrollToTop(number = null) {
      let target = number == null ? this.scrollTo : number;
      this.scrollToTarget(target);
    },
    scrollToResume() {
      const resume = document.getElementById("cvbody");
      this.scrollToTarget(resume.offsetTop);
    },
    setSectionNull() {
      this.titleWindow = false;
      this.curentSelectedSection = null;
      this.sectionHidden = null;
    },
    hideSection() {
      document.getElementById(this.curentSelectedSection).style.display =
        "none";
      this.headerClasses[this.curentSelectedSection] = "hidden";
      this.setSectionNull();
    },
    showSection() {
      document.getElementById(this.curentSelectedSection).style.display = "";
      this.headerClasses[this.curentSelectedSection] = "";
      this.setSectionNull();
    },
    getKeyOfValue(name) {
      return Object.keys(this.titles).find((key) => this.titles[key] === name);
    },
    editTitle(event, title) {
      const targetId = event.target.parentElement.parentElement.getAttribute(
        "target-id"
      );
      this.curentSelectedSection = targetId;
      this.sectionHidden =
        document.getElementById(targetId).style.display === "none"
          ? true
          : false;
      this.currentTitle = title;
      this.newTitle = title;
      this.targetTitle = this.getKeyOfValue(title);
      this.titleWindow = true;
    },
    saveTitle() {
      this.$store.dispatch("updateVar", [
        "titles." + this.targetTitle,
        this.newTitle,
      ]);
      this.newTitle = "";
      this.titleWindow = false;
    },
  },
};
</script>
<style>
@media (max-width: 576px) {
  .overflow-scroll {
    overflow: scroll;
  }
  .overflow-scroll > .overflow-wrapper {
    transform: scale(0.7);
  }
  .overflow-scroll > .overflow-wrapper > * {
    float: left;
    border: 2px solid black;
    padding: 10px;
  }
  .v-stepper__step--editable {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    min-width: 50%;
  }
  .v-stepper__step--editable:last-of-type {
    border-bottom: unset;
  }
}
.v-stepper__label {
  display: inline !important;
  margin: auto;
  text-align: center !important;
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
.overflow-scroll {
  margin: auto;
}
.v-stepper__step__step {
  display: none;
}
.stepper-label {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 15px;
}
.fa-arrows-alt {
  font-size: 20px;
}
.cv-left .fa-arrows-alt {
  color: white !important;
}
.edit-button {
  z-index: 10;
  position: relative;
}
.hidden::before {
  background-color: red;
  content: "hidden";
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
}
.cv-left .drag-item.from-right ul {
  padding-left: 25px;
}
.cv-left .drag-item.from-right .exp {
  margin: 0 10px;
}
.list-group {
  height: 100%;
}
.link {
  padding-bottom: 10px;
}
.link a {
  padding-left: 10px;
}
.project-item {
  padding-bottom: 10px;
}
p {
  margin-bottom: 0 !important;
}
</style>