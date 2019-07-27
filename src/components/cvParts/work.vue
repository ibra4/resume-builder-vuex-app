<template>
<div class="para">
  <div class="title">
      <span><i class="fas fa-briefcase"></i></span>{{ title }}
  </div>
  <div v-for="(w, index) in work" :key="index" class="exp" :class="{first : index == 0}">
    <div>{{ w.start }} - {{ w.end }}</div>
    <div>{{ w.company }}</div>
    <div class="clearer"></div>
    <div class="spec">{{ w.major }}</div>
    <ul class="work-list">
      <li>Reviewed code, debugged problems and corrected issus</li>
      <li>Making a creative MVC PHP Frameworks</li>
      <li>Create and design responsive user interfaces</li>
    </ul>
  </div>
</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
    props: [
        'title'
    ],
    computed:{
        ...mapState({
            work: 'work'
        })
    }
}
</script>