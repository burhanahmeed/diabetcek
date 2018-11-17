<template>
  <div xs12 sm6 offset-sm3>    
    <div class="header">
      <img src="/logo.png">
    </div>
    <div class="cutomcontainer">
      <div class="greet">
        <div>
          <h1 style="color: #1e824c"><span style="font-size: 60px">W</span>elcome</h1>
          <p>DiabetCek intent to help you to diagnose Diabetes desease as soon as posible. Let's we stick together.</p>
        </div>
      </div>
      <div class="content-box">
        <div style="border-bottom: 1px #807d7d solid; padding-bottom: 9px;">
          <h4 style="color: #807d7d">Diagnose Now</h4>
        </div>
        <div style="margin-top: 10px;">
          <v-expansion-panel style="box-shadow: none;">
            <v-expansion-panel-content>
              <div slot="header">Self Information</div>
                <v-card-text>
                   
                </v-card-text>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Medical Information</div>
                <v-card-text>
                   
                </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
        <div style="text-align: center; margin: 20px 0">
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="rgb(30, 130, 76)"
            @click="loader = 'loading'"
            style="width: 200px"
          >
            <span style="color: white">Analyze</span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        loader: null,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz']
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>

<style scoped>
.content-box {
  background-color: white;
  padding: 15px;
  padding-bottom: 15px;
  margin-left: 8px;
  margin-right: 8px;

}
h1, p, span, div {
  font-family: 'Poppins', sans-serif;
}
.cutomcontainer {
  padding-top: 58px;
}
.header img {
  height: 25px;
}
.header {
  padding: 15px;
  display: block;
  text-align: center;
  background-color: white;
  box-shadow: 0 8px 6px -6px #e6e6e6;
  position: fixed;
  width: 100%;
  left: 0;
}
.greet {
  background-color: white;
  padding: 30px;
  padding-bottom: 15px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
