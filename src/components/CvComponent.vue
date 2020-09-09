<template>
  <div>
    <div class="cvbody" id="cvbody">
      <!-- personal.vue -->
      <div class="header cv-left">
        <Personal :title="titles.Personal" />
        <!-- education.vue -->
        <div key="education" class="drag-item">
          <div class="fa fa-arrows-alt handle text-muted">Move</div>
          <Education :title="titles.Education" />
        </div>

        <!-- languages.vue -->
        <div key="languages" class="drag-item">
          <div class="fa fa-arrows-alt handle text-muted">Move</div>
          <Languages key="languages" :title="titles.Languages" />
        </div>

        <!-- links.vue -->
        <div key="links" class="drag-item">
          <div class="fa fa-arrows-alt handle text-muted">Move</div>
          <Links key="links" :title="titles.Links" />
        </div>
      </div>

      <div class="cv-right">
        <draggable
          group="test"
          class="list-group"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions"
          handle=".handle"
        >
          <h1 class="name">{{personal.firstName}} {{personal.lastName}}</h1>
          <div class="para">
            <div class="title">Summary</div>
            <p class="summary">{{ summary }}</p>
          </div>
          <!-- work.vue -->
          <div key="work" class="drag-item">
            <div class="fa fa-arrows-alt handle text-muted">Move</div>
            <Work key="work" :title="titles.Work" />
          </div>

          <!-- Projects.vue -->
          <div key="projects" class="drag-item">
            <div class="fa fa-arrows-alt handle text-muted">Move</div>
            <Projects key="projects" :title="titles.Projects" />
          </div>
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
        </draggable>
      </div>
    </div>
    <button class="btn btn-primary" @click="cp()">copys</button>
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
      summary: "summary",
      personal: "Personal",
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
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNTQ5NTE1YTYwYmE4OTdkNGNlNDdjMzE1NzFkODA1ZThmYmRiNmE4ODcxZTBmMmY2MjU2YzNjYzM0Yzc2ZTE5NGEwYzhhYTRiM2NhYmJmYmIiLCJpYXQiOjE1OTk2OTA5NjgsIm5iZiI6MTU5OTY5MDk2OCwiZXhwIjoxNjMxMjI2OTY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.K2sA8SxIyBpsqiqpr44pxCEntVLxFXOnoRVg4S8DC8NIjnmymt7fYoRKEdvWos5QFUpBgHpBsIdS-mUhQA63U61cd5aDDmUrKGbur3k2yLPTkkoBJOz_omoeRhR7c-6NR8pZyG6-3I3auJABp0EwEEvHX5auvgW4Y91-4Um6YTbMP9a5G1g-dg0b4dI0Jp7OHgjaxEmt3IJfkCW6FrAPpjZ5a7WzIPlMFsH2xYXmNjr_v2QGck-MsR3Uh3n7E3qGIDroBtszrv9Ouj08GRIfAlQ_FA9xBoInOpjiaicv2F1V54oUlkTBRCwHopBVU8UYLYfRXKuXnQgX76It3aU7Zi5pF_caDvfCPZkmn6WltpVu0tTgDjrx0QGu5LK-YLwLmT5P65L-N9TISHAcUd2mN6SZiSrv8UjEKqnqHpy5rTYTUhEquK9XyY71v8jkaLNS9xVQuxEkOyBXZF2ggU8yjuRHxCeHBzTnsNem9ejhiLKwUtPJrYutg98Xl1MMf2xkG2wVJIgkl47hOn9s6zQbjvBLwmZjPHFBzQALeEdrV3B36aDoCNQeyT6vzdWAHicgHZ9r9zizeD56_kujJBzE_Q-IRcH4Yn1j6jUlqfkAi4mpcDJleRwn7Sg2U0oiAzEOluJlOtR4aW2pak3-8dKUBQBCzfTWKnAs6Nl0TkczPiI",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonData: "test",
          template_id: 2,
          user_id: 1,
          html: htmlText,
        }),
      });
      await response.json().then((data) => console.log(data));
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
/**
gray #7d7d7d

 */
.cvbody {
  width: 21cm;
  height: 29.7cm;
  border: 1px solid black;
  position: relative;
  font-size: 12px;
  background-color: #f1e7fe;
}

.name {
    text-align: center;
    color: #914188;
    padding: 10px;
    border-bottom: 3px dashed #914188;
}

.cv-left,
.cv-right {
  position: absolute;
  top: 0;
  height: 100%;
  float: left;
}
.cv-left {
  width: 30%;
  left: 0;
  border-right: 1px solid;
  background-color: #a978c1;
  color: #f1e7fe;
}
.cv-right {
  width: 70%;
  right: 0;
}
.cv-right .title {
  color: #674299;
}
.cv-right {
  color: #2e3131;
}
.sw-skills .skill {
  margin-bottom: 10px;
  margin-top: 5px;
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
  height: 100%;
  line-height: 15px;
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
.drag-item {
  position: relative;
}
.fa-arrows-alt {
  position: absolute;
  top: 15px;
  right: 5px;
  cursor: move;
}

.cv-right .para {
  padding: 10px;
  padding-bottom: 0;
}
.cv-left .exp {
  padding: 10px;
}
.cv-left .title {
  padding: 2px 10px;
  background-color: #913d88;
  color: white;
}
.para-title {
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 16px;
}
.description {
  padding-top: 5px;
}
.summary {
  padding: 10px;
  margin: 0 !important;
}
.exp {
  padding-top: 10px;
}
.skill-item {
  width: 50%;
  float: left;
}
p {
  margin-bottom: 0 !important;
}
img {
  width: 100%;
}
</style>