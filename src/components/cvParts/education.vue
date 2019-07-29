<template>
<div class="para edu">
  <div class="title">
    <span><i class="fas fa-graduation-cap"></i></span>{{ title }}
  </div>
  <div v-for="(edu, index) in education" :key="index" class="exp" :class="{first : index == 0}">
    <div>{{ edu.start }} - {{ edu.end }}</div>
    <div>{{ edu.school }}</div>
    <div class="clearer"></div>
    <div class="spec">{{ edu.name }}</div>
    <p>degree : {{ edu.grade }}</p>
    <p> {{ edu.disc }} </p>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: [
        'title'
    ],
    computed: {
        ...mapState({
            education: 'education'
        })
    }
}
</script>