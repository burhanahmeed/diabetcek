<template>
	<div>
   <div class="header">
     <nuxt-link to="/">
      <v-icon style="padding: 15px; color: white;">arrow_back</v-icon>
     </nuxt-link>
     <h3 style="text-align: center; margin-top: 20px">Results</h3>
   </div> 
   <div class="card-content">
     <div class="title">
       <img src="/result.png">
       <span>Diabetes Diagnose Results</span>
     </div>
     <div class="result">
      <div style="margin-top: 10px;">
        <span>Status</span>
        <span class="status good" v-if="this.result < 0.3">ACCEPTABLE</span>
        <span class="status warn" v-if="this.result >= 0.3 && this.result < 0.65">WARNING</span>
        <span class="status bad" v-if="this.result > 0.66">DANGER</span>
      </div>
       <div style="margin-top: 15px;">
          <span style="vertical-align: middle;">Diagnose Result</span>
          <span class="status" style="font-size: 16px;">{{this.rounded}}%</span>
       </div>
       <div class="summary">
         DiabetCek diagnose that your susceptibility to diabetes is {{this.rounded}}%.
       </div>
     </div>
   </div>
   <div class="-" style="padding: 15px; margin-top: -10px">
     <span style="text-align: center; display: block;">you can go to the nearest place to take further action</span>
     <nuxt-link style="background-color: #009688; padding: 5px 10px; margin: 10px; color: white; text-align: center; display: block;text-decoration: none;" to="/places">Get Nearby Clinic</nuxt-link>
   </div>
  </div>
</template>

<script type="text/javascript">
export default {
  layout: 'fullpage',
  data () {
    return {
      result: this.$route.params.diagnose
    }
  },
  computed: {
    rounded: function () {
      const round = this.result.toFixed(4)
      return round * 100
    }
  }
}
</script>

<style type="text/css" scoped>
.summary {
  margin-top: 10px;
  font-size: 12px;
  border-top: 1px solid grey;
}
.good {
  background-color: green;
  color: white;
  padding: 5px 10px;
}
.warn {
  background-color: orange;
  color: white;
  padding: 5px 10px;
}
.bad {
  background-color: red;
  color: white;
  padding: 5px 10px;
}
.status {
  font-size: 10px;
  border-radius: 10px;  
  float: right;
}
.result {
  margin-top: 10px;
}
.title img {
  height: 25px;
}
.title span{
  font-size: 14px;
  margin-left: 10px;
  vertical-align: super;
  font-weight: bold;
}
  .header {
        height: 170px;
    /*background-color: grey;*/
    /*padding: 20px;*/
    /*padding-top: 50px;*/
    color: white;
    background-image: url('/bg.jpg');
    background-size: cover;
  }
  h1, p, h3, span, div {
    font-family: 'Poppins', sans-serif;
  }
  .card-content{
    /*height: 100px;*/
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    border-radius: 10px;
     box-shadow: 1px 7px 8px -3px #888888;
     position: relative;
    top: -35px;
    padding: 15px;
  }
</style>