<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Snakes from './components/Snakes.vue'
import tbox from './components/animation/TextBox.vue'
import drag from './components/drag.vue'
import {useStore} from './store/index'
const store=useStore()

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->

    <!-- <Snakes></Snakes> -->
<!-- <tbox></tbox>
    <drag></drag> -->

</template>

<style scoped>

</style>
