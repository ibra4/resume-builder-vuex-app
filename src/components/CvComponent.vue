<template>
  <div>
    <button @click="onPrint()">test</button>
    <div
      class="cvbody"
      id="cvbody"
      ref="test"
      style="font-size: 13px;font-family: 'Josefin Sans', sans-serif;font-size=13px;letter-spacing:1px;word-spacing:2px;border:1px solid #9654d8;width:21cm;height:29.7cm;box-sizing:border-box;position:relative"
    >
      <div
        class="top-line"
        style="position:absolute;backgroud-color:#9654d8;width:100%;height:20px;top:0;background-color: #9654d8;"
      ></div>

      <!-- personal.vue -->
      <Personal :title="titles.Personal" />

      <div class="clearer" style="clear:both;"></div>
      <div class="sections">
        <div class="section-left" style="float:left;width:50%">
          <!-- education.vue -->
          <Education :title="titles.Education" />

          <!-- work.vue -->
          <Work :title="titles.Work" />

          <!-- languages.vue -->
          <Languages :title="titles.Languages" />

          <!-- Projects.vue -->
          <Projects :title="titles.Projects" />
        </div>
        <div class="section-right" style="float:left;width:50%">
          <!-- skills.vue -->
          <Skills :title="titles.Skills" />

          <!-- BarSkills.vue -->
          <BarSkills :title="titles.BarSkills" />

          <!-- Blocks.vue -->
          <Blocks :title="titles.Blocks" />

          <!-- links.vue -->
          <Links :title="titles.Links" />
        </div>
      </div>

      <div
        class="bottom-line"
        style="position:absolute;backgroud-color:#9654d8;width:100%;height:20px;bottom:0;background-color: #9654d8;"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Personal from "./CvParts/Personal";
import Education from "./CvParts/Education";
import Work from "./CvParts/Work";
import Languages from "./CvParts/Languages";
import Skills from "./CvParts/Skills";
import BarSkills from "./CvParts/BarSkills";
import Links from "./CvParts/Links";
import Blocks from "./CvParts/Blocks";
import Projects from "./CvParts/Projects";

export default {
  components: {
    Personal,
    Education,
    Work,
    Languages,
    Skills,
    Links,
    BarSkills,
    Blocks,
    Projects
  },
  computed: mapState(["titles"]),
  methods: {
    onPrint() {
      console.log(this.$refs.test.outerHTML);
    }
  }
};
</script>

<style>

/* .professional {
  width: 95%;
  background-color: #34f61d !important;
}
.medium {
  width: 70%;
  background-color: #ace681 !important;
}
.weak {
  width: 50%;
  background-color: #cddc5d !important;
}
.links .exp {
  text-align: center;
}
.links .link {
  display: inline-block;
  margin: 10px 25px;
}
.links .link p:first-of-type {
  border-bottom: #9654d8 1px solid;
}
.links .link p:last-of-type {
  margin-top: -10px;
}
.links svg {
  font-size: 30px;
} */
</style>