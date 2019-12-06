import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
        summary: 'Experienced full stack web developer with 3+ years of experience in designing and developing dynamic web application / software. Capable of understanding client requirements and translating into code to add new features or modifications for existing products',
        jobTitle: 'Full stack web developer',

        titles: {
            personal: 'personal info',
            summary: 'summary',
            education: 'education',
            work: 'work & experience',
            skills: 'skills',
            language: 'languages',
            links: 'links'
        },
        personal: {
            firstName: 'ibrahim',
            lastName: 'ahmad',
            email: 'ibra16@itc.edu.jo',
            phone: '+962 78 0636 170',
            birthday: '14 Jul. 1995',
            address: 'Marka, Amman'
        },
        education: [{
            id: 0,
            name: 'Software Engineering',
            school: 'Hashemite University',
            start: '2018',
            end: '2021',
            grade: 'Excellent',
            disc: 'any',
        }],
        work: [{
            id: 0,
            company: 'a',
            major: 'b',
            start: 'c',
            end: 'd',
            disc: 'e'
        }],
        skills: [{
            id: 0, skill: '',
        }],
        languages: [
            {id: 0, lang: 'arabic', level: 'fluent'}
        ],
        linksList: [
            {type: 'facebook', icon: 'facebook-square', username: ''},
            {type: 'Instagram', icon: 'instagram', username: ''},
            {type: 'Twitter', icon: 'twitter', username: ''},
            {type: 'Snapchat', icon: 'snapchat-square', username: ''},
            {type: 'YouTube', icon: 'youtube', username: ''},
            {type: 'Whatsapp', icon: 'whatsapp', username: ''},
            {type: 'WeChat', icon: 'weixin', username: ''},
            {type: 'Pinterest', icon: 'pinterest-square', username: ''},
            {type: 'Tumblr', icon: 'tumblr-square', username: ''},
            {type: 'SoundCloud', icon: 'soundcloud', username: ''},
            {type: 'Spotify', icon: 'spotify', username: ''},
            {type: 'LinkedIn', icon: 'linkedin', username: ''},
            {type: 'Skype', icon: 'skype', username: ''},
            {type: 'Github', icon: 'github-square', username: ''},
            {type: 'Bitbucket', icon: 'bitbucket', username: ''},
            {type: 'StackOverflow', icon: 'stack-overflow', username: ''},
            {type: 'JsFiddle', icon: 'jsfiddle', username: ''},
        ],
        links: [
            {id: 0, type: 'Instagram', username: ''},
        ],
        certificates: {},
        training: {},
        newSections: {

        }

    },
    mutations: {
        SET_OBJ: (state, objName) => (state.objName = objName),
        ADD_OBJ(state, objName) {
            const lastElem = state[objName][state[objName].length - 1]
            const id = lastElem.id
            const obbj = Object.keys(lastElem)
            state[objName].push({})
            obbj.forEach(elem => {
                if (elem != 'id')
                Vue.set(state[objName][state[objName].length - 1], elem, '')
            });
            state[objName][state[objName].length - 1].id = id + 1
        },
        REMOVE_OBJ(state, [id,objName]) {
            state[objName].splice(state[objName].findIndex(e => e.id === id),1);
        },
        UPDATE_ARR_OBJ(state, [target, value]) {
            const ary = target.split('|');
            const objName = ary[0];
            const prop = ary[1];
            const id = ary[2];
            let item = state[objName].find(obj => obj.id == id);
            item[prop] = value
        },
        UPDATE_OBJ(state, [[objName, key], val]) {
            state[objName][key] = val;
        },
        UPDATE_VAR(state, [varname, val]) {
            state[varname] = val
        }
    },
    actions: {
        addObj(state, objName) {
            state.commit('ADD_OBJ', objName);
        },
        deleteObj(state, [id, objName]) {
            state.commit('REMOVE_OBJ', [id, objName]);
        },
        fetchObject(state, name) {
            state.commit('SET_OBJ', name);
        },
        updateVar(state, [target, val]) {
            if (target.includes('|')) {
                //Array of Objects
                state.commit('UPDATE_ARR_OBJ', [target, val])
            } else if (target.includes('.')) {
                //Object
                const obj = target.split('.');
                state.commit('UPDATE_OBJ', [obj, val])
            } else {
                //Variable
                state.commit('UPDATE_VAR', [target, val])
            }
        }
    }
})