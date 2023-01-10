<script setup lang='ts'>
const m = () => {
    let dom = document.getElementsByClassName('m')[0] as HTMLElement
    let styles = getComputedStyle(dom)
    // let color = styles.getPropertyValue('--color')
    styles.setProperty('--color','#999')
    
    console.log(dom.style.getPropertyValue('--color'));

}   
</script>

<template>
    <div class="m">
        <p>sfwfwef</p>
        <button @click="m">dd</button>
    </div>
</template>

<style lang='less' scoped>
.m {
    --color: #fff;
}

p {
    color: var(--color);
}
</style>