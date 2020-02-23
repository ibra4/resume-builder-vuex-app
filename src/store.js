import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    summary:
      "of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    jobTitle: "is simply dummy",

    titles: {
      Personal: "personal info",
      Summary: "summary",
      Education: "education",
      Work: "work & experience",
      Skills: "skills",
      BarSkills: "bar skills",
      Language: "languages",
      Links: "links",
      Blocks: "Blocks",
      Projects: "Projects"
    },
    Personal: {
      firstName: "Lorem",
      lastName: "Ipsum",
      email: "ibra16@itc.edu.jo",
      phone: "+962 78 0636 170",
      birthday: "14 Jul. 1995",
      address: "Canada"
    },
    Education: [
      {
        id: 0,
        name: "Software Engineering",
        school: "Hashemite University",
        start: "2018",
        end: "2021",
        grade: "Excellent",
        disc:
          "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum"
      }
    ],
    Work: [
      {
        id: 0,
        company: "first true generator",
        major: "predefined chunks",
        start: "2004",
        end: "2010",
        disc:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"
      },
      {
        id: 1,
        company: "Bonorum et Malorum",
        major: "predefined chunks",
        start: "2016",
        end: "2020",
        disc:
          "Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      }
    ],
    Skills: [
      { id: 0, skill: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
      { id: 1, skill: "Donec mattis lacus nec lectus venenatis" },
      { id: 2, skill: "In tincidunt purus rhoncus risus malesuada tristique" }
    ],
    Blocks: [
      { id: 0, title: "Lorem" },
      { id: 1, title: "Hampden Sydney" },
      { id: 2, title: "Virginia" },
      { id: 3, title: "looked up one" },
      { id: 4, title: "obscure" }
    ],
    BarSkills: [
      { id: 0, skill: "mistaken idea", level: "weak" },
      { id: 1, skill: "actual teachings", level: "medium" },
      { id: 2, skill: "Nor again", level: "professional" }
    ],
    Projects: [
      {
        id: 0,
        title: "Rackham",
        description:
          "but because occasionally circumstances occur in which toil and pain"
      },
      {
        id: 1,
        title: "But I must",
        description: "except to obtain some advantage from it"
      },
      {
        id: 2,
        title: "Bonorum",
        description:
          "or one who avoids a pain that produces no resultant pleasure"
      }
    ],
    Languages: [
      { id: 0, lang: "Arabic", level: "fluent" },
      { id: 1, lang: "English", level: "Excelent" },
      { id: 2, lang: "German", level: "Good" }
    ],
    LinksList: [
      { type: "facebook", icon: "facebook-square", username: "" },
      { type: "Instagram", icon: "instagram", username: "" },
      { type: "Twitter", icon: "twitter", username: "" },
      { type: "Snapchat", icon: "snapchat-square", username: "" },
      { type: "YouTube", icon: "youtube", username: "" },
      { type: "Whatsapp", icon: "whatsapp", username: "" },
      { type: "WeChat", icon: "weixin", username: "" },
      { type: "Pinterest", icon: "pinterest-square", username: "" },
      { type: "Tumblr", icon: "tumblr-square", username: "" },
      { type: "SoundCloud", icon: "soundcloud", username: "" },
      { type: "Spotify", icon: "spotify", username: "" },
      { type: "LinkedIn", icon: "linkedin", username: "" },
      { type: "Skype", icon: "skype", username: "" },
      { type: "Github", icon: "github-square", username: "" },
      { type: "Bitbucket", icon: "bitbucket", username: "" },
      { type: "StackOverflow", icon: "stack-overflow", username: "" },
      { type: "JsFiddle", icon: "jsfiddle", username: "" }
    ],
    SkillsList: [
      { level: "weak", label: "Weak" },
      { level: "meduim", label: "Medium" },
      { level: "professional", label: "Professional" }
    ],
    Links: [
      { id: 0, type: "", username: "test_insta65649" },
      { id: 1, type: "", username: "test_fb65649" }
    ],
    Certificates: {},
    Training: {},
    NewSections: {}
  },
  mutations: {
    SET_OBJ: (state, objName) => (state.objName = objName),
    ADD_OBJ(state, objName) {
      const lastElem = state[objName][state[objName].length - 1];
      const id = lastElem.id;
      const obbj = Object.keys(lastElem);
      state[objName].push({});
      obbj.forEach(elem => {
        if (elem != "id")
          Vue.set(state[objName][state[objName].length - 1], elem, "");
      });
      state[objName][state[objName].length - 1].id = id + 1;
    },
    REMOVE_OBJ(state, [id, objName]) {
      state[objName].splice(
        state[objName].findIndex(e => e.id === id),
        1
      );
    },
    UPDATE_ARR_OBJ(state, [target, value]) {
      const ary = target.split("|");
      const objName = ary[0];
      const prop = ary[1];
      const id = ary[2];
      let item = state[objName].find(obj => obj.id == id);
      item[prop] = value;
    },
    UPDATE_OBJ(state, [[objName, key], val]) {
      state[objName][key] = val;
    },
    UPDATE_VAR(state, [varname, val]) {
      state[varname] = val;
    }
  },
  actions: {
    addObj(state, objName) {
      state.commit("ADD_OBJ", objName);
    },
    deleteObj(state, [id, objName]) {
      state.commit("REMOVE_OBJ", [id, objName]);
    },
    fetchObject(state, name) {
      state.commit("SET_OBJ", name);
    },
    updateVar(state, [target, val]) {
      if (target.includes("|")) {
        //Array of Objects
        state.commit("UPDATE_ARR_OBJ", [target, val]);
      } else if (target.includes(".")) {
        //Object
        const obj = target.split(".");
        state.commit("UPDATE_OBJ", [obj, val]);
      } else {
        //Variable
        state.commit("UPDATE_VAR", [target, val]);
      }
    }
  }
});
