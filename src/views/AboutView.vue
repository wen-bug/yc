<script setup lang="ts">
import {onMounted} from 'vue'
const a=()=>{
  console.log(1);
  
}
const b=()=>{
  console.log(2);
  
}
let dom:HTMLElement
onMounted(()=>{
  dom=document.getElementsByClassName('about')[0] as HTMLElement
  dom.addEventListener('click',b)
dom.addEventListener('click',a)
dom.addEventListener('click',b)
})

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
