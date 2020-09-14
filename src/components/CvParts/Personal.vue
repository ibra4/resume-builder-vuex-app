<template>
  <div class="header">
    <div class="header-left">
      <div class="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU" alt />
      </div>
      <div class="summary" id="Summary">
        <h1 class="title full-name">{{ fullName }}</h1>
        <h2 class="title">- {{ jobTitle }}</h2>
        <p>{{ summary }}</p>
      </div>
    </div>
    <div class="header-right information">
      <h3 class="title">{{ title }}</h3>
      <div>
        <i class="fas fa-map-marker-alt"></i>
        <span><b>Address: </b>{{ Personal.address }}</span>
      </div>
      <div>
        <i class="fas fa-birthday-cake"></i>
        <span><b>Birthday: </b>{{ Personal.birthday }}</span>
      </div>
      <div>
        <i class="fas fa-envelope-open"></i>
        <span>Email: {{ Personal.email }}</span>
      </div>
      <div>
        <i class="fas fa-phone"></i>
        <span>Phone: {{ Personal.phone }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      Personal: "Personal",
      summary: "summary",
      jobTitle: "jobTitle"
    }),
    fullName() {
      return this.Personal.firstName + " " + this.Personal.lastName;
    }
  }
};
</script>