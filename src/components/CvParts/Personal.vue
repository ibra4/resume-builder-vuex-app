<template>
  <div>
    <div class="header-left">
      <div class="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt
        />
      </div>
      <!-- <div class="summary">
        <h1 class="title full-name">{{ fullName }}</h1>
        <h2 class="title">- {{ jobTitle }}</h2>
      </div>-->
    </div>
    <div class="para">
      <h3 class="title">{{ title }}</h3>
      <div class="exp">
        <div>
          <span>
            <b>Address:</b>
            {{ Personal.address }}
          </span>
        </div>
        <div>
          <span>
            <b>Birthday:</b>
            {{ Personal.birthday }}
          </span>
        </div>
        <div>
          <span>
            <b>Email:</b>
            {{ Personal.email }}
          </span>
        </div>
        <div>
          <span>
            <b>Phone:</b>
            {{ Personal.phone }}
          </span>
        </div>
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
      jobTitle: "jobTitle",
    }),
    fullName() {
      return this.Personal.firstName + " " + this.Personal.lastName;
    },
  },
};
</script>