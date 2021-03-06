export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fakebook',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', integrity: 'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  stylelint: {
    fix: true,
    configFile: './stylelint.config.js'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources'
  ],

  // Style resourses configuration: https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: '@/assets/scss/variables/_responsive.scss'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
