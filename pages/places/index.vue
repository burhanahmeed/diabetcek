<template>
  <v-app> 
    <v-content>
    	<div>
    		<div class="header">
	          <h4 @click="nearby">Find Nearby Clinic</h4>
	        </div>
	        <div class="content">
	        	<div style="z-index: 99999; right: 10; padding: 10px; position: absolute; cursor: pointer;">
	        		 <v-icon @click="geolocation">gps_fixed</v-icon>
	        	</div>
	        	<div class="maps">
 <gmap-map
    :center="center"
    v-bind:zoom="16"
    v-bind:map-type-id="mapTypeId">
    <GmapMarker
      :position="currentLocation"
      :icon="{ url: require('../../static/curr.png')}" />
      <GmapMarker
      :key="index"
      v-for="(m, index) in loc"
      :position="{lat:m.geometry.viewport.l.j, lng:m.geometry.viewport.j.l}"
      :icon="{ url: require('../../static/mhos.png')}" />

      </gmap-map>
      <div id="map"></div>
	        	</div>
	        	<div class="list">
	        		<div class="scrolling">
                <div @click="nearby" v-if="loc===null" class="btn-srch">
                  <span>Search Nearby</span>
                </div>
	        			<div v-if="loc!==null" style="cursor: pointer;" v-for="item in loc" class="block">
                  <div @click="locClick(item)">
                    <img src="/hos.png">
                    <h5>{{item.name}}</h5>
                    <span>{{(item.vicinity).substr(0,40)}}</span><br>
                  </div>
		        		</div>
	        		</div>
	        	</div>
	        </div>
    	</div>
    </v-content>
</v-app>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      center: {lat: 0, lng: 0},
      currentLocation: {lat: 0, lng: 0},
      mapTypeId: 'terrain',
      loc: null
    }
  },
  mounted: function () {
    this.geolocation()
    if (this.currentLocation.lat !== 0) {
      this.nearby()
    }
    var self = this
    setTimeout(function () { self.nearby() }, 1000)
  },
  methods: {
    geolocation: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    nearby: function () {
      var centerLoc = {lat: this.currentLocation.lat, lng: this.currentLocation.lng}
      var request = {
        location: centerLoc,
        radius: '1700',
        types: ['hospital']
      }
      var container = document.getElementById('map')
      var service = new window.google.maps.places.PlacesService(container)
      service.nearbySearch(request, callback)
      var nearby = {}
      let self = this
      function callback (results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // for (var i = 0; i < results.length; i++) {
          //   // container.innerHTML += results[i].name + '<br />';
          //   console.log(results[i].name)
          // }
          // console.log(results)
          // const loc = this.loc
          nearby = results
          self.loc = nearby
        }
      }
      // console.log(nearby)
    },
    locClick (item) {
      this.center = {
        lat: item.geometry.viewport.l.j,
        lng: item.geometry.viewport.j.l
      }
    }
  }
}
</script>

<style type="text/css" scoped>
	h1, h4, p, span, div {
	  font-family: 'Poppins', sans-serif;
	}
	.header {
	  padding: 15px;
	  display: block;
	  text-align: center;
	  background-color: white;
	  box-shadow: 0 8px 6px -6px #e6e6e6;
	  position: fixed;
	  width: 100%;
    z-index: 999;
	  left: 0;
	}
	.content {
		/*background-color: brown;*/
		width: 100%;
	}
	.maps {
		height: 100vh;
		/*background-color: grey;*/
	}
	.list {
		position: relative;
	    bottom: 220px;
	    height: 0
	}
	.scrolling {
		overflow-x: scroll;
		  overflow-y: hidden;
		  /*white-space: nowrap;*/
		  display: flex;
	}
	.block {
		text-align: center;
		background-color: white;
		padding: 10px;
		border-radius: 10px;
		-webkit-box-shadow: 0px -4px 12px -8px #000000; 
		box-shadow: 0px -4px 12px -8px #000000;
		display: inline-block;
		margin: 5px;
		flex: 0 0 auto;
    max-width: 200px;
    min-width: 200px;
	}
	.block img {
		height: 50px;
	}
	.vue-map-container {
	  height: 100vh;
	  max-width: 992px;
	  width: 100%;
	}
  .btn-srch{
    background-color: #009688;
    color: white;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 10px;
    box-shadow: 1px 7px 8px -3px #888888;
    cursor: pointer;
    margin: 15px auto;
  }
</style>


