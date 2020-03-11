<template>
  <div class="container">
    <div :id="mapId" style="width: 100%;height:100%">
    </div>
  </div>
</template>

<script>
  export default
  {
      name:'MyMap',
    data (){
      return {
        map: {},
        currentMarkDiv: {},
        markerPosition:{},
        trafficArr:[]
      }
    },
    props: {
      mapId:{
        type:String,
        default: 'map'
      },
      BASE_URL: {
        type: String,
        default: 'https://map.xianjiaojing.com'
      },
      DOMAIN_URL: {
        type: String,
        default: 'https://map.xianjiaojing.com'
      },
      SOLUTION: {
        type: String,
        default: '3492'
      },
      ACCESS_TOKEN: {
        type: String,
        default: '18f589098bf14f5bac790331c60a37ae'
      },
      DEFAULT_CENTER:{
        type: String,
        default: '108.947368,34.288634'
      },
      DEFAULT_ZOOM:{
        type: String,
        default: '10'
      },
      DEFAULT_PITCH:{
        type: String,
        default: '0'
      },
      MAX_ZOOM:{
        type:String,
        default: '17.5'
      },
      showScale:{
        type:Boolean,
        default:false
      }
    },
    mounted()
    {
      let _this=this;
      _this.initMap()
    },
    computed:{
    },
    methods: {
      initMap(){
          let _this=this;
        minemap.domainUrl = _this.BASE_URL;
        minemap.dataDomainUrl = _this.DOMAIN_URL;   
        minemap.serviceUrl = _this.BASE_URL + '/service';
        minemap.accessToken = _this.ACCESS_TOKEN;
        minemap.solution =_this.SOLUTION;
        this.map = new minemap.Map({
          container: _this.mapId,
          style: _this.BASE_URL + "/service/solu/style/id/" + _this.SOLUTION,
          center: _this.DEFAULT_CENTER.split(','),
          zoom: _this.DEFAULT_ZOOM,
          pitch: _this.DEFAULT_PITCH,
          maxZoom: _this.MAX_ZOOM
        });
        if(this.showScale) this.map.addControl(new minemap.Scale(),"bottom-left");
        this.map.resize();
        // window.sessionStorage.setItem("map",this.map);
        this.map.on('load',function(e){
          _this.map.resize();
        })
      }
    },
    destroyed: function () {
      console.log('destroyed is Map')
    }

  }
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  /*进入规划页面的样式*/
  #route {
    position: absolute;
    top: 2rem;
    right: 5vw;
    background-color: white;
    border-radius: 10px;
    z-index: 1;
  }

  #map #map-style-button{
    position: absolute;
    bottom: -30%;
    right: 1%;
    width:90px;
    height:50px;
    background-color:#124aa7 ;
    border-radius: 8px;
  }
  #map #map-style-button:hover{width:180px;}
  #map #map-style-button img{cursor: pointer;margin-right:0.5vw;height: 3vh;}
  #map #map-style-button ul{display: block;width:100%;height:100%;padding:5px;overflow: hidden;}
  #map #map-style-button ul li{float:left;width:80px;height:100%;cursor: pointer;border-radius: 10px;}
  #map #map-style-button ul li.active,  #map-ctrl #map-style-button ul li:hover{
    border:1.5px solid #00c6ff;
  }
  #map-ctrl #map-style-button ul li.active,  #map-ctrl #map-style-button ul li:nth-child(1){margin-right:4%;margin-bottom: 5px;}
.minemap-canvas{left:0;}
</style>

