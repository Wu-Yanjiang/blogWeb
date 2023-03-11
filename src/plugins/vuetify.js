import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp


    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark'
        },
        ssr: true,
    })
  })