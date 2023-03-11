<template id="app">
  <div>
    <!-- <ClientOnly fallback-tag="span" fallback="Loading comments...">
    </ClientOnly> -->
    <!-- <NuxtWelcome /> -->
    <Index></Index>
  </div>
</template>

<script setup>
import { createApp } from 'vue'
import Index from './src/pages/Index'
import vuetify from 'vuetify'

const app = createApp('#app')
app.use(vuetify)
</script>


