module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DiabetCek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DiabetCek' },
      { name: 'dicoding:email', content:"burhanahmeed@gmail.com" },
      { name: 'mobile-web-app-capable', content:"true" },
      { name: 'lang', content:"en" },
      { name: 'theme-color', content: '#7bc703'}
    ],
    link: [
      { rel: 'manifest', href: 'manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins' }
    ],
    script: [
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
    /*
  ** Load Vuetify into the app
  */
  plugins: ['~/plugins/vuetify.js'],
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/css/app.styl'],

  modules: [
    '@nuxtjs/pwa',
  ],
  workbox: {
    importScripts: [
        'serviceworker.js'
    ],
  }
  
}

