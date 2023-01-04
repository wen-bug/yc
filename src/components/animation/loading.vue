<script setup lang='ts'>
// 加载动画
</script>

<template>
    <div class="box">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>

<style lang='less' scoped>
.box{
    display: flex;
    column-gap: 10px;
    height: 100vh;
    align-items: center;
    justify-content: center;
}
.box .dot{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: blue;
    box-shadow: 0 0 5px  rgb(185, 185, 185);
    animation: loading 1s ease-out  infinite alternate ;
}
.dot:nth-child(2){
    background-color: antiquewhite;
    animation-delay: -0.25s;
}
.dot:nth-child(3){
    background-color:rgb(175, 188, 64);
    animation-delay: -0.5s;
}
.dot:nth-child(4){
    background-color: rgb(222, 144, 41);
    animation-delay: -0.75s;
}
@keyframes loading {
    0%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(3px);
    }
}

</style>