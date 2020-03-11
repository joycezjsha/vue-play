<template>
    <div class="case-main">
      <div class="case__title">{{demoTitle}}</div>
      <div class="case__body">
        <div class="case_menu">
          <ul>
            <li v-for="item in menuData" @click="showCase($event,item)">{{item.title}}</li>
          </ul>
        </div>
        <div class="case_item" v-if="!isCase">
          <my-map mapId="map_1" style_param='display: flex;'></my-map>
        </div>
        <div class="case_item" v-else>
          <main-case v-if="singleCase" :data="case_http"></main-case>
          <multiple-case v-else :data="case_http"></multiple-case>
        </div>
      </div>
    </div>
</template>

<script>
  import mainCase from "./case.vue";
  import multipleCase from "./multipleCase.vue";
import httpConnect from '../httpUtil'
    export default {
      components: {mainCase,multipleCase},
      name: "Case",
      props:{
          demoTitle:{
              type:String,
            default:'陕西省公安厅交通警察总队集成指挥平台地图大数据项目'
          }
      },
      data(){
          return {
            case_http:null,
            menuData:[],
            singleCase:true,
            isCase:false
          }
      },
      mounted(){
        httpConnect.httpConnect("GET","./static/data/case/data.json",{},(response) => {
          if (response) {
            this.menuData=response.data;
          }
        })
      },
      methods:{
        returnManage() {
//          this.$router.back();
        },
        showCase(e,data){
            this.isCase=true;
            let actives=document.getElementsByClassName("_active");
            if(actives.length>0){
              actives[0].classList.remove('_active');
            }
          e.target.classList.add('_active');
            if(data.https instanceof Array){
                  this.singleCase=false;
                  this.case_http=data.https;

            }else{
                this.singleCase=true;
                console.log(data.https);
                this.case_http=data.https;
            }

        }
      }
    }
</script>

<style scoped>
@charset "UTF-8";
.case-main {
  width: 100%;
  height: 100%;
  margin: 0 auto; }
.case-main .case__title {
    width: 100%;
    height: 80px;
    color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    background: #000; }
.case-main .case__body {
    margin-top: .1vw;
    width: 100%;
    height: calc(99.8vh - 80px);
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
.case-main .case__body .case_menu {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 15%;
      min-width: 250px;
      height: 100%;
      background: #000;
      margin-top: .2vw;
      border-right: 0.1vw #fff solid; }
.case-main .case__body .case_menu ul {
        padding: 20px 0;
        margin: 0;
        width: 100%; }
.case-main .case__body .case_menu ul ,.case_menu ul li {
          width: 80%;
          height: 3vw;
          padding: 0;
          margin: 1vw auto;
          background-color: #fff;
          border-radius: .2vw;
          font-family: Avenir,Helvetica,Arial,sans-serif;
          font-size: 18px;
          cursor: pointer;
          color: #000;
          line-height: 3vw; }
.case-main .case__body .case_menu ul li._active, .case-main .case__body .case_menu ul li:hover{
          background: #099;list-style: none;
          color: #fff; }
.case-main .case__body .case_menu ul ,.case_menu ul li:nth-child(1) {
          margin: 0 auto 1vw auto; }
.case-main .case__body .case_item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 85%;
      height: 100%;
      margin-top: .2vw;
      margin-left: .1vw;
      position: relative; }
.case-main .case__body .case_item .case-multiple {
        height: 100%; width:100%;}
.case-main .case__body .case_item .case-multiple .case-multiple ul li {
          float: left;
          width: 23%;
          list-style: none;
          height: auto;
          -webkit-box-shadow: 0 0 10px #ccc;
                  box-shadow: 0 0 10px #ccc;
          overflow: hidden;
          margin-right: 2%;
          margin-left: 0;
          min-width: 300px; }
.case-main .case__body .case_item .case-multiple .case-multiple ul li .case-img-box {
            width: 100%;
            height: 22vh;
            cursor: pointer;
            overflow: hidden;
            padding: 5px; }
.case-main .case__body .case_item .case-multiple .case-multiple ul li .case-img-box .case-image {
              -webkit-transition: all .5s ease;
              transition: all .5s ease;
              width: 100%;
              height: 100%; }
.case-main .case__body .case_item .case-multiple .case-multiple ul li .case-img-box .case-image:hover {
              -webkit-transform: scale(1.1);
                      transform: scale(1.1);
              /* 放大1.2倍 */ }
.case-main .case__body .case_item .case-multiple .part-btn {
          position: absolute;
          z-index: 1004;
          top: 8%;
          right: 3%;
          height: 34px;
          width: 50px;
          line-height: 34px;
          cursor: pointer;
          text-align: right; }
.case-main .case__body .case_item .case-item {
        width: 100%;
        height: 100%; }
.case-main .case__body .case_item .case-item .case-item-content {
          height: 100%;
          z-index: 1003;
          top: 0;
          left: 12%;
          -webkit-transition: width 0.3s;
          transition: width 0.3s; }

</style>>