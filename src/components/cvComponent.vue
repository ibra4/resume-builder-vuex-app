<template>
<div>

    <div class="cvbody" id="cvbody">
      <div class="top-line"></div>
        
        <!-- personal.vue -->
        <personal :title="titles.personal"/>

      <div class="clearer"></div>
      <div class="sections">
        <div class="section-left">
            
            <!-- education.vue -->
            <education :title="titles.education" />
            
            <!-- work.vue -->
            <work :title="titles.work" />

            <!-- languages.vue -->
            <languages :title="titles.languages"/>

            
            <div class="para projects">
              <div class="title">
                  <span><i class="fas fa-tasks"></i></span>projects
              </div>
              <div class="exp">
                <span class="proj"><b>1 - CV Creator Vue.js Application</b></span>
                <span>
                    <span class="status">Status : <p>underway</p></span>
                </span>
                <a href="https://github.com/ibra4/CV-creator-Vue-Application">
                  <div>Go to project</div>
                </a>
              </div>
              <div class="exp">
                <span class="proj"><b>2 - File Validation Ruah MVC Framework</b></span>
                <span>
                    <span class="status">Status : <p>underway</p></span>
                </span>
                <a href="https://github.com/ibra4/ruah-php-mvc-framework">
                  <div>Go to project</div>
                </a>
              </div>
            </div>
        </div>
        <div class="section-right">
          
            <skills :title="titles.skills"/>

          <div class="para pro-lang">
              <div class="title">
                  <span><i class="fas fa-code"></i></span>programming languages
              </div>
            <ul class="no-style">
              <li>PHP</li>
              <li>MYSQL</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>Jquery</li>
              <li>Vue.js</li>
              <li>JSON</li>
            </ul>
          </div>
          <div class="para sw-skills">
            <div class="title">
                <span><i class="fab fa-stack-overflow"></i></span>software skills
            </div>
            <div class="exp">
                Linux OS <div class="skill"><div class="level professional">Professional</div></div>
                Git <div class="skill"><div class="level professional">Professional</div></div>
                Dealing with web host services <div class="skill"><div class="level good">Good</div></div>
            </div>
          </div>
          
        <!-- links.vue -->
        <links :title="titles.links" />            

        </div>
      </div>

      <div class="bottom-line"></div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

import personal from './cvParts/personal.vue'
import education from './cvParts/education.vue'
import work from './cvParts/work.vue'
import languages from './cvParts/languages.vue'
import skills from './cvParts/skills.vue'
import links from './cvParts/links.vue'

export default {
    components: {
        personal,
        education,
        work,
        languages,
        skills,
        links
    },
    computed: mapState([
        'titles'
    ])
}
</script>

<style>
    

    /* 
    purple  = #9654d8;
    gray    = #e4e9ed;
*/
body {
    /* font-family: 'Source Code Pro', monospace; */

}
body * {
    box-sizing: border-box;
}
.cvbody{
    font-family: 'Josefin Sans', sans-serif;
    perspective: 1000;
    font-size: 13px;
    letter-spacing: 1px;
    word-spacing: 2px;
    /* zoom: 200%; */
    border: 1px solid #9654d8;
    width: 21cm;
    height: 29.7cm;
    box-sizing: border-box;
    position: relative;
    margin: 50px auto;
}
.top-line, .bottom-line {
    position: absolute;
    background-color: #9654d8;
    width: 100%;
    height: 20px;
}
.top-line {
    top: 0;
}
.bottom-line {
    bottom: 0
}
/************************   header   ************************/
.header {margin-top: 30px;}
.header > div, .sections > div {
    float: left;
    /* display: inline-block; */
    /* border: #f00 1px solid */
}
.header .header-left {
    width: 65%;
}
.header .header-right {
    width: 35%;
    background-color: #e4e9ed;
}
.image-container {
    height: 150px;
    width: 150px;
    margin-left: 15px;
}
.summary {
    width: 60%;
}
.image-container, .summary {
    display: inline-block;
    float: left;
    overflow: hidden;
}
.summary {
    padding-left: 20px;
}
.image-container img {width: 100%}
/************************   info   ************************/

.header .information {
    padding: 15px;
    background-color: #e4e9ed !important;

}
.information > div {
    margin-top: 10px;
    margin-left: 10px;
}
.information i {
    color: #e4e9ed;
    background-color: #9654d8;
    padding: 5px;
    border-radius: 50%;
}
.information span {
    color: #212529;
}
.information h3 {margin-left: 5px;}
/************************   global   ************************/
.title {
    text-transform: uppercase;
    letter-spacing: 1px;
}
h1.title {
    font-size: 20px;
}
h2.title {
    font-size: 18px
}
h3.title {
    font-size: 16px
}
.clearer {clear: both;}
.no-style {list-style: none}
a, a:hover {
    color: inherit;
    text-decoration: none;
}
/************************   sections   ************************/
.sections > div {
    /* display: inline-block; */
    float: left;
    width: 50%;
}
.sections .para {position: relative;}
.title span {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    font-size: 16px;
}
.section-left .title span {
    color: #e4e9ed;
    background-color: #9654d8;
}
.section-right .title span {
    color: #9654d8;
    /* border-left: #9654d8 2px solid; */
}
.section-right .title span:not(.first-right) {
    border-left: #9654d8 2px solid;
}
.sections .para .title {
    padding-left: 35px;
    display: inline-block;
}
/************************   para (work and education)   ************************/
.para {
    padding-right: 5px;
    margin-top: 10px;
}
.para .title {
    border-bottom: 2px solid #9654d8;
    width: 100%;
    line-height: 30px;
    vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
}
.para .exp.first {
    background-color: #e4e9ed;
}
.para .exp {
    padding: 10px 10px;
    /* margin-right: 20px; */
}
.edu .exp div:first-of-type {
    font-size: 12px;
    color: #2e3131;
    font-weight: bold;
}
.edu .exp div:nth-of-type(2) {
    font-weight: bold;
    margin-top: 3px;
}
.edu .exp div:nth-of-type(2), .para .exp .spec {
    text-transform: capitalize;
}
.para .exp .spec {
    border-bottom: 1px solid #9654d8;
    color: #9654d8;
    display: inline-block;
    font-weight: bold;
}
.edu .exp p {
    color: #2e3131;
    font-size: 12px;
    margin-top:2px
}
.para .work-list {
    list-style: circle;
    margin-top: 10px;
}
.para .work-list li {
    margin-top: 5px;
}
/************************   skills   ************************/
.skills ul .main {
    margin-left: 0;
    color: #9654d8;
    font-size: 14px;
    text-transform: capitalize;
}
.skills ul li:not(.main) {
    margin-left: 35px;
    margin-top: 5px;
    position: relative;
    padding-left: 20px;
    font-size: 12px;
    text-transform: initial
}
.skills ul li:not(.main)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 10px;
    border-left: 3px solid #9654d8;
    border-bottom: 3px solid #9654d8;
}
/************************   pro-lang   ************************/
.pro-lang ul li{
    display: inline-block;
    background-color: #9654d8;
    color: #e4e9ed;
    padding: 4px 8px;
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 5px;
}
/************************   sw-skills   ************************/
.sw-skills .title{
    margin-bottom: 15px;
}
.sw-skills .skill {
    margin-bottom: 17px;
    margin-top: 3px;
    height: 19px;
    background-color: #e4e9ed;
    border: 1px solid #9654d8;
    padding: 1px;
    width: 60%;
    position: relative;
    text-align: center;
    color: #9654d8;
}
.sw-skills .skill .level {
    position: absolute;
    top: 1px;
    left: 1px;
    height: 15px;
    background-color: #e4e9ed;
    line-height: 15px;
    vertical-align: middle
}
.professional {
    width: 95%;
    background-color: #8ddc5d !important;
}
.good {
    width: 70%;
    background-color: #cddc5d !important;
}
/************************   lang   ************************/
.lang div span:last-of-type {
    float: right;
}
/************************   links   ************************/
.links .exp {
    text-align: center;
}
.links .link {
    display: inline-block;
    margin: 10px 25px;
}
.links .link p:first-of-type {
    border-bottom: #9654d8 1px solid;
}
.links .link p:last-of-type {
    margin-top: -10px;
}
.links svg {
    font-size: 30px
}
/************************   projects   ************************/
.projects span:not(.proj) {
    float: right;
}
.projects .status {
    color: 	#22bb33;
    font-weight: bold;
}
.projects .exp div:last-of-type {
    margin-top: 10px;
    margin-left: 10px;
    color: #9654d8;
    font-weight: bold;
}
.logout {
    float: right;
}
</style>