import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBDUs9yYF-CvemQtcwb5_wIo_Wkm9o6q7w',
    libraries: 'places'
  }
})
