<template>
    <div class="para skills-with-bar">
      <div class="title">
          <span class="first-right"><i class="fas fa-swimmer"></i></span>{{ title }}
      </div>
        <ul class="no-style">
          <li v-for="(sk, index) in BarSkills" :key="index">
              {{ sk.skill }}
          </li>
        </ul>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    props: ['title'],
    computed: {
        ...mapState({
            BarSkills: 'BarSkills'
        })
    }
}
</script>