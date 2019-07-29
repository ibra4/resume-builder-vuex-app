import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        summary: '',
        jobTitle: '',
        titleWindow: false,

        titles: {
            personal: 'personal info',
            summary: 'summary',
            education: 'education',
            work: 'work & experience',
            skills: 'skills',
            languages: 'languages',
            certificates: 'certificates',
            training: 'training',
            links: 'links'
        },
        personal: {
            firstName: 'ibrahim',
            lastName: 'ahmad',
            email: 'ibra16@itc.edu.jo',
            phone: '+962 78 0636 170',
            birthday: '14 Jul. 1995',
            address: 'Marka, Amman',
            summary: ''
        },
        education: [{
            name: 'Software Engineering',
            school: 'Hashemite University',
            start: '2018',
            end: '2021',
            grade: 'Excellent',
            disc: 'any',
        }],
        work: [{
            company: 'a',
            major: 'b',
            start: 'c',
            end: 'd',
            disc: 'e'
        }],
        skills: {},
        languages: [
            {lang: 'arabic', level: 'fluent'}
        ],
        certificates: {},
        training: {},
        links: {},
        newSections: {

        }

    },
    mutations: {
        updateTitle(state, [target, val]) {
            state.titles[target] = val
        },
        showTitleInput(state) {
            state.titleWindow = true
        },
        hideTitleInput(state) {
            state.titleWindow = false;
        },
        createObj(state, val) {
            val;
            Vue.set(state.titles, 'newProp', {num: 123})
        },

        updateObj(state, [[objName, key], val]) {
            // console.log(val);
            // console.log(key);
            state[objName][key] = val;
        },
        updateObjAry(state, [[objName, varname, index], val]) {
            state[objName][index][varname] = val
        },
        addObj(state, objName) {
            state[objName].push({});
        },
        updateVar(state, [varname, val]) {
            state[varname] = val
        }
    },
    actions: {
        expMe(state) {
            state;
            // console.log(state.state)
        },
        updateVar(state, [target, val]) {
            // console.log(target);
            if (target.includes('|')) {
                const obj = target.split('|');
                state.commit('updateObjAry', [obj, val])
            } else if (target.includes('.')) {
                // console.log('dot')
                const obj = target.split('.');
                state.commit('updateObj', [obj, val])
            } else {
                // console.log('single')
                state.commit('updateVar', [target, val])
            }
        
        }
    },
    getters: {
        getTitles: state => {
            return state.titles
        }
    }
})