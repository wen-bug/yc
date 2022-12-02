<script setup lang='ts'>
// 拖拽
const pto=(e:Event)=>{
    const dom=e.target as HTMLElement
    // console.log(dom);
    
    console.log(dom.dataset.i);
    
}
</script>

<template>
    <div @click="pto">
        <div class="a1" data-i="1">1</div>
        <div class="a2" data-i="2">2</div>
        <div class="a3" data-i="3">3</div>
    </div>
    <!-- <button @click="pto">to</button> -->
</template>

<style lang='less' scoped>

</style>