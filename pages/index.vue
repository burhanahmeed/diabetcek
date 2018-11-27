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
                          v-model="insulin"
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
                @click="analyze"
                style="width: 200px"
              >
                <span style="color: white">Analyze</span>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-content>
    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Please fill in the blanks!</v-card-title>
        <v-card-text>We cannot diagnose if there are still blank fields.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>  
</template>

<script>
  import * as tf from '@tensorflow/tfjs'
  export default {
    data () {
      return {
        form1valid: false,
        form2valid: false,
        form3valid: false,
        loading: false,
        loader: null,
        dialog: false,
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
        age: null,
        glukose: null,
        bloodpress: null,
        insulin: null,
        pedigree: 0.20,
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
        ],
        linearModel: tf.Sequential
      }
    },
    computed: {
      bmi: function () {
        const res = this.weight / (this.height * this.height)
        return res
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
    created () {
      // this.train()
    },
    methods: {
      async train () {
        this.model = tf.sequential()
        // this.model.add(tf.layers.dense({units: 1, inputShape: [8]}))
        this.model.add(tf.layers.dense({units: 104, inputShape: 8, activation: 'tanh'}))
        this.model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}))

        // Prepare the model for training: Specify the loss and the optimizer.
        this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'})

        // Generate some synthetic data for training.
        const xs = tf.tensor([[6, 148, 72, 35, 0, 33.6, 0.627, 50], [1, 85, 66, 29, 0, 26.6, 0.351, 31], [8, 183, 64, 0, 0, 23.3, 0.672, 32], [1, 89, 66, 23, 94, 28.1, 0.167, 21], [0, 137, 40, 35, 168, 43.1, 2.288, 33], [5, 116, 74, 0, 0, 25.6, 0.201, 30], [3, 78, 50, 32, 88, 31, 0.248, 26], [10, 115, 0, 0, 0, 35.3, 0.134, 29], [2, 197, 70, 45, 543, 30.5, 0.158, 53], [5, 88, 66, 21, 23, 24.4, 0.342, 30], [1, 101, 50, 15, 36, 24.2, 0.526, 26], [1, 103, 80, 11, 82, 19.4, 0.491, 22], [7, 187, 68, 39, 304, 37.7, 0.254, 41]])
        const ys = tf.tensor([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1])
        // const xs = tf.tensor1d([3.2, 4.4, 5.5])
        // const ys = tf.tensor1d([1, 0, 1])
        // var xs = tf.tensor2d([[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 0]])
        // var ys = tf.tensor2d([[0], [1], [1], [0]])
        // for (let i = 0; i < 2; i++) {
        await this.model.fit(xs, ys, {epochs: 500})
        // }
        console.log('training Done')
      },
      analyze () {
        if (this.form1valid && this.form2valid && this.form3valid) {
          this.runML()
        } else {
          // this.dialog = true
          this.runML()
        }
      },
      runML () {
        this.loader = 'loading'
        // const output = this.model.predict(tf.tensor([[1, 103, 80, 11, 82, 19.4, 0.491, 22]]))
        // const output = this.model.predict(tf.tensor2d([5.5], [1, 1]))
        // console.log(Array.from(output.dataSync())[0])
        // console.log(this.model.predict(tf.tensor2d([[0, 1, 1]])).print())
        // console.log(tf.tensor2d([1, 0, 1, 0, 1, 0, 1, 0, 1], [9, 1], 'int32').print())
        // this.model.save('downloads://diabet-model')
        // console.log('saving done')
        tf.loadModel('http://localhost:3000/model/model.json').then(model => {
          // var output = model.predict(tf.tensor([[1, 88, 30, 42, 99, 55, 0.496, 26]]))
          var output = model.predict(tf.tensor2d([parseFloat(this.pregnancy), parseFloat(this.glukose), parseFloat(this.bloodpress), parseFloat(this.skinthick), parseFloat(this.insulin), parseFloat(this.bmi), 0.19, parseFloat(this.age)], [1, 8]))
          // var output = model.predict(tf.tensor2d(['12', '90', '', '', '', '', '', ''], [1, 8]))
          // console.log(output.print())
          // console.log(tf.tensor2d([parseFloat(this.pregnancy), parseFloat(this.glukose), parseFloat(this.bloodpress), parseFloat(this.skinthick), parseFloat(this.insulin), parseFloat(this.bmi), 0.19, parseFloat(this.age)], [1, 8]).print())
          console.log(Array.from(output.dataSync())[0])
          this.$router.push({
            name: 'result',
            params: {diagnose: 0.88}
          })
        })
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
  z-index: 99;
}
.greet {
  background-color: white;
  padding: 30px;
  padding-bottom: 15px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
}
.result {
  padding-top: 70px;
}
.result img {
  margin: 20px auto;
  display: block;
  height: 90px;
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
