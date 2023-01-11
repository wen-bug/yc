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
        <div class="main">
            safsaflkjsaflkjsaflaskfjslf
        </div>
        <div class="side">asdfsafsafsfs</div>
    </div>
</template>

<style lang='less' scoped>
.m {

    --color: #fff;
    display: table;
    border-spacing: 1em 0;
    width: 100%;
    .main{
        display: table-cell;
        width: 10%;
        
    }
    .side{
        display: table-cell;
        width: 30%;
       
    }
}

p {
    color: var(--color);
}
</style>