<template>
  <v-app>
    <v-content>
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
                      <v-form v-model="form1valid">
                        <v-select
                          :items="sex"
                          label="Sex"
                          color="green"
                          v-model="gender"
                          item-text="label"
                          :rules="sexRules"
                        ></v-select>
                        <v-select v-if="gender===2"
                          :items="numofPreg"
                          label="Number of Pregnancies"
                          color="green"  
                          v-model="pregnancy"                   
                          :rules="pregRules"
                        ></v-select>
                         <v-text-field
                          label="Age (Years old)"
                          type="number"
                          color="green"
                          v-model="age"
                          :rules="ageRules"
                        ></v-text-field>
                      </v-form>                       
                    </v-card-text>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Physical Information</div>
                    <v-card-text>
                       <v-form v-model="form2valid">
                         <v-text-field
                          label="Height (meters)"
                          type="number"
                          color="green"
                          v-model="height"
                          :rules="heightRules"
                        ></v-text-field>
                        <v-text-field
                          label="Weight (KG)"
                          type="number"
                          color="green"
                          v-model="weight"
                          :rules="weightRules"
                        ></v-text-field>
                        <v-text-field
                          label="Skin Thickness (mm)"
                          hint="Triceps skin fold thickness"
                          type="number"
                          color="green"
                          v-model="skinthick"
                          :rules="skinRules"
                        ></v-text-field>
                       </v-form>
                    </v-card-text>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Medical Information</div>
                    <v-card-text>
                       <v-form v-model="form3valid">
                         <v-text-field
                          label="Glucose concentrate"
                          type="number"
                          hint="Plasma glucose concentration a 2 hours in an oral glucose tolerance test"
                          color="green"
                          v-model="glukose"
                          :rules="glukoseRules"
                        ></v-text-field>
                        <v-text-field
                          label="Blood Pressure (mm Hg)"
                          type="number"
                          color="green"
                          v-model="bloodpress"
                          :rules="bloodRules"
                        ></v-text-field>
                        <v-text-field
                          label="Insulin (mu U/ml)"
                          type="number"
                          color="green"
                          hint="2-Hour serum insulin"
                          v-model="insulim"
                          :rules="insulinRules"
                        ></v-text-field>
                       </v-form>
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
    </v-content>
  </v-app>  
</template>

<script>
  export default {
    data () {
      return {
        form1valid: false,
        form2valid: false,
        form3valid: false,
        loading: false,
        loader: null,
        sex: [
          {
            label: 'Male',
            value: 1
          },
          {
            label: 'Female',
            value: 2
          }
        ],
        numofPreg: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        // ----------data-------------------
        gender: null,
        pregnancy: 0,
        height: null,
        weight: null,
        skinthick: null,
        // ------------rules-----------
        sexRules: [
          v => !!v || 'Sex is required'
        ],
        pregRules: [
          v => !!v || 'Number of Pregnancy is required'
        ],
        ageRules: [
          v => !!v || 'Age is required'
        ],
        heightRules: [
          v => !!v || 'Height is required'
        ],
        weightRules: [
          v => !!v || 'Weight is required'
        ],
        skinRules: [
          v => !!v || 'Skin Thickness is required'
        ],
        glukoseRules: [
          v => !!v || 'Glukose is required'
        ],
        bloodRules: [
          v => !!v || 'Blood Pressure is required'
        ],
        insulinRules: [
          v => !!v || 'Insulin Thickness is required'
        ]
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
  padding-bottom: 60px;
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
