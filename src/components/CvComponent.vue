<template>
  <div>
    <div class="cvbody" id="cvbody">
      <div class="top-line"></div>

      <!-- personal.vue -->
      <Personal :title="titles.Personal" />

      <div class="clearer"></div>
      <div class="sections">
        <div class="section-left">
          <draggable
            group="test"
            class="list-group"
            @start="drag = true"
            @end="drag = false"
            v-bind="dragOptions"
            handle=".handle"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <!-- education.vue -->
              <div key="education" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Education :title="titles.Education" />
              </div>

              <!-- work.vue -->
              <div key="work" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Work key="work" :title="titles.Work" />
              </div>

              <!-- languages.vue -->
              <div key="languages" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Languages key="languages" :title="titles.Languages" />
              </div>

              <!-- Projects.vue -->
              <div key="projects" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Projects key="projects" :title="titles.Projects" />
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="section-right">
          <draggable
            group="test"
            class="list-group"
            @start="drag = true"
            @end="drag = false"
            v-bind="dragOptions"
            handle=".handle"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <!-- skills.vue -->
              <div key="skills" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Skills key="skills" :title="titles.Skills" />
              </div>

              <!-- BarSkills.vue -->
              <div key="barSkills" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <BarSkills key="barSkills" :title="titles.BarSkills" />
              </div>

              <!-- Blocks.vue -->
              <div key="blocks" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Blocks key="blocks" :title="titles.Blocks" />
              </div>

              <!-- links.vue -->
              <div key="links" class="drag-item">
                <div class="fa fa-arrows-alt handle text-muted">Move</div>
                <Links key="links" :title="titles.Links" />
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>

      <div class="bottom-line"></div>
    </div>
    <button @click="cp()">copys</button>
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

import draggable from "vuedraggable";

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
    Projects,
    draggable,
  },
  data() {
    return {
      drag: false,
    };
  },
  computed: {
    ...mapState({
      titles: "titles",
    }),
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    async handlePrint(htmlText) {
      const response = await fetch("http://127.0.0.1:8000/api/resume", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjc5YzYwN2M2ZmE1NWFjMzgwM2QwYjIzZDQ3NTBiM2FkMTQzMmEyYTZkMzZlZjg5ZDY3MmQ2OTI2ZDlkNmEwMjRhZmE3ZTg2YzRjZDkyODMiLCJpYXQiOjE1OTk0MzY0MTgsIm5iZiI6MTU5OTQzNjQxOCwiZXhwIjoxNjMwOTcyNDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fZ5qRXq69sI31gm2HqAerNlygSa0OP-kAln5bY3l3o8IzOKSX59guzqix9yz2fS2EUpoYGJlOinD0vO1a2fBB6fAEAkdj_rLYud1_meN5__Lz6i3sMfVHKa7TGd17CE5eLBiAqNvX2xr1FPs4b7_MH5CDYheKBKCt5Zr0JuHrOk_OasSfu-uw_nQS9fjj_ik_FXfhXtkxhTlNNIwnUOTE_t0-T2rkHHgBbU2SmZfnjzCSTQl4khlebgjwgWcY3k3LSP3azMHurPFUm412quUHkxCfmjSH4Msm6Yi3Xszd5Gr6e6Fx2BYav1VoHHZhdIa2XDos5_GMhq3xSwyONdJdVcnY6bnuIluZUXwg8vG5oHK-PZ22PvUbTCZ36sHKHxkXS_trfK_gm8uWZAYkNV4mXCrzvaJkBAsDGlpZv4Z8IDJ7dci1YUhplxh04tRD5bjzdj0SD0k8C7OHp1xvmGIYF7uYM5oOI76I87-qs1z8cMe0-JZVKR8r9AIJDWPn_RY_0fXd5_gAdpiZut0qduHl4CXqiZ_INqYcv8hK7XxtgYytcLQtQp3_LBL4LCPD3CdJNmUyp4Fhw2WpG_THTyrywgIKnYd9MdrSR_rS1OsdpEkviWHrqN-X1jUAhSYECuciZF2tZMeR5bb1kc_qy2bIduG_NKBoSopQkZdjlyYSJI",
          Accept: "application/json",
        },
        body: JSON.stringify({
          jsonData: htmlText,
          templateId: 1
        }),
      });
    },
    async cp() {
      var move = document.getElementsByClassName("fa-arrows-alt");
      for (let el of document.querySelectorAll(".appBanner"))
        el.style.visibility = "hidden";
      var htmlText = document.getElementById("cvbody");
      await this.handlePrint(htmlText.outerHTML);
      const el = document.createElement("textarea");
      el.value = htmlText.outerHTML;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>

<style>
/* 
    purple  = #9654d8;
    gray    = #e4e9ed;
*/
body {
  /* font-family: 'Source Code Pro', monospace; */
}
body * {
  box-sizing: border-box;
}
.drag-item {
  position: relative;
}
.drag-item .handle {
  position: absolute;
  right: 10px;
  top: 3px;
  z-index: 2;
  cursor: move;
  font-size: 18px;
}
.cvbody {
  font-family: "Josefin Sans", sans-serif;
  perspective: 1000;
  font-size: 13px;
  letter-spacing: 1px;
  word-spacing: 2px;
  border: 1px solid #9654d8;
  width: 21cm;
  height: 29.7cm;
  box-sizing: border-box;
  position: relative;
}
.top-line,
.bottom-line {
  position: absolute;
  background-color: #9654d8;
  width: 100%;
  height: 20px;
}
.top-line {
  top: 0;
}
.bottom-line {
  bottom: 0;
}
/************************   header   ************************/
.header {
  margin-top: 30px;
}
.sections {
  display: flex;
}
.sections .list-group,
.list-group span {
  height: 100%;
}
.header > div,
.sections > div {
  float: left;
  /* display: inline-block; */
  /* border: #f00 1px solid */
}
.header .header-left {
  width: 65%;
  display: flex;
}
.header .header-right {
  width: 35%;
  background-color: #e4e9ed;
}
.image-container {
  height: 150px;
  width: 150px;
  margin-left: 15px;
}
.summary {
  width: 60%;
}
.summary .full-name {
  color: #9654d8;
  font-size: 28px !important;
}
.image-container,
.summary {
  display: inline-block;
  overflow: hidden;
}
.summary {
  padding-left: 20px;
}
.image-container img {
  width: 100%;
}
/************************   info   ************************/

.header .information {
  padding: 10px;
  background-color: #e4e9ed !important;
}
.information > div {
  margin-top: 10px;
}
.information i {
  color: #e4e9ed;
  background-color: #9654d8;
  padding: 5px;
  border-radius: 50%;
}
.information span {
  color: #212529;
  margin-left: 5px;
}
.information h3 {
  margin-left: 5px;
}
/************************   global   ************************/
.title {
  text-transform: uppercase;
  letter-spacing: 1px;
}
h1.title {
  font-size: 20px;
}
h2.title {
  font-size: 18px;
}
h3.title {
  font-size: 16px;
}
.clearer {
  clear: both;
}
.no-style {
  list-style: none;
}
a,
a:hover {
  color: inherit;
  text-decoration: none;
}
/************************   sections   ************************/
.sections > div {
  /* display: inline-block; */
  float: left;
  width: 50%;
}
.sections .para {
  position: relative;
}
.title span {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
  font-size: 16px;
}
.section-left .title span {
  color: #e4e9ed;
  background-color: #9654d8;
}
.section-right .title span {
  color: #9654d8;
  /* border-left: #9654d8 2px solid; */
}
.section-right .title span:not(.first-right) {
  border-left: #9654d8 2px solid;
}
.sections .para .title {
  padding-left: 35px;
  display: inline-block;
}
/************************   para (work and education)   ************************/
.para {
  padding-right: 5px;
  margin-top: 10px;
}
.para .title {
  border-bottom: 2px solid #9654d8;
  width: 100%;
  line-height: 30px;
  vertical-align: middle;
  font-size: 14px;
  font-weight: bold;
}
.para .exp.first {
  background-color: #e4e9ed;
}
.para .exp {
  padding: 10px 10px;
  /* margin-right: 20px; */
}
.edu .exp div:first-of-type {
  font-size: 12px;
  color: #2e3131;
  font-weight: bold;
}
.edu .exp div:nth-of-type(2) {
  font-weight: bold;
  margin-top: 3px;
}
.edu .exp div:nth-of-type(2),
.para .exp .spec {
  text-transform: capitalize;
}
.para .exp .spec {
  border-bottom: 1px solid #9654d8;
  color: #9654d8;
  display: inline-block;
  font-weight: bold;
}
.edu .exp p {
  color: #2e3131;
  font-size: 12px;
  margin-top: 2px;
}
.para .work-list {
  list-style: circle;
  margin-top: 10px;
}
.para .work-list li {
  margin-top: 10px;
}
/************************   skills   ************************/
.skills ul .main {
  margin-left: 0;
  color: #9654d8;
  font-size: 14px;
  text-transform: capitalize;
}
.skills ul li:not(.main) {
  margin-top: 5px;
  position: relative;
  padding-left: 20px;
  font-size: 12px;
  text-transform: initial;
  display: flex;
  align-items: center;
}
.skills ul li:not(.main)::before {
  content: "";
  position: absolute;
  left: 0;
  height: 5px;
  width: 10px;
  border-left: 3px solid #9654d8;
  border-bottom: 3px solid #9654d8;
}
/************************   pro-lang   ************************/
.pro-lang ul li {
  display: inline-block;
  background-color: #9654d8;
  color: #e4e9ed;
  padding: 4px 8px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 5px;
}
/************************   sw-skills   ************************/
.sw-skills .title {
  margin-bottom: 15px;
}
.sw-skills .skill {
  margin-bottom: 17px;
  margin-top: 3px;
  height: 19px;
  background-color: #e4e9ed;
  border: 1px solid #9654d8;
  padding: 1px;
  width: 60%;
  position: relative;
  text-align: center;
  color: #9654d8;
  overflow: hidden;
}
.sw-skills .skill .level {
  position: absolute;
  top: 1px;
  left: 1px;
  height: 15px;
  background-color: #e4e9ed;
  line-height: 15px;
  vertical-align: middle;
  text-align: center;
}
.professional {
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
/************************   lang   ************************/
.lang div span:last-of-type {
  float: right;
}
/************************   links   ************************/
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
}
</style>