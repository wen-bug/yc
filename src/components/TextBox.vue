<script setup lang='ts'>

</script>
<!-- 文本框动画 -->
<template>
    <a >思路 绝对定位full name 选中时改变full name y轴 拉起背景，背景拉起速度没有focus光标快比较突兀。</a>
    <div class="container">
        <div class="inputBox">
            <input type="text" required>
            <span>full name</span>
            <i></i>
        </div>
    </div>
</template>

<style lang='less' scoped>
*{  padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg,rgb(41, 143, 174),rgb(211, 58, 58));
}
.container{
    position: relative;
    padding: 50px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 15px 35px rgb(206, 206, 206) ;
}
.inputBox{
    width: 350px;
    position: relative;
    input{
        position: relative;
        padding: 8px 10px;
        border: none;
        outline: none;
        background:transparent;
        color: #fff;
        letter-spacing: 0.05rem;
        z-index: 2;
    }
    span{
        position: absolute; 
        left: 0;
        padding: 5px 0;
        pointer-events: none ;
        color: rgb(15, 17, 19);
        font-size: 1em;
        transition: 0.5s;
        letter-spacing: 0.05rem;
    }
    i{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(45deg,#2196f3,#ff4685);
        transition: 0.5s;
        border-radius: 4px;
        // pointer-events: none;
        z-index: 1;
    }
    
}
.inputBox input:focus ~span {
    font-size: 0.85em;
    transform: translateY(-32px);
} 
.inputBox input:focus ~i {
    height: 100%;
} 

</style>