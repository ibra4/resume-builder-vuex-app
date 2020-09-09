<template>
  <div class="para sw-skills">
    <div class="title">
      {{title}}
    </div>
    <div class="exp" :style="'position:relative; height: ' + (50 * BarSkills2.length) + 'px'">
      <div
        v-for="(sk, index) in BarSkills2"
        :key="index"
        class="skill-item-container"
        :style="'width:100%;height:50px;position:absolute;top:' + (index *50 + (index*3)) + 'px;left: 0px' "
      >
        <div v-for="(skill, idx) in sk" :key="idx" class="skill-item">
          {{skill.skill}}
          <div class="skill">
            <div v-bind:class="[skill.level, 'level']">{{skill.level}}</div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  methods: {
    groupBy(array, key) {
      const result = {};
      array.forEach((item) => {
        if (!result[item[key]]) {
          result[item[key]] = [];
        }
        result[item[key]].push(item);
      });
      return result;
    },
  },
  computed: {
    BarSkills2() {
      const items = this.$store.state.BarSkills;
      var current = [];
      var idx = -1;
      for (let i = 0; i < items.length; i++) {
        if (i % 2 == 0) {
          idx++;
          current[idx] = [];
        }
        current[idx].push(items[i]);
      }
      return current;
    },
    ...mapState({
      BarSkills: "BarSkills",
    }),
  },
};
</script>