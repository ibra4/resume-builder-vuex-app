<template>
    <div class="para skills">
      <div class="title">
          <span class="first-right"><i class="fas fa-swimmer"></i></span>{{ title }}
      </div>
        <ul class="no-style">
          <li v-for="(sk, index) in skills" :key="index">
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
            skills: 'skills'
        })
    }
}
</script>