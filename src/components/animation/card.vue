<script setup lang='ts'>
// 身份卡片
</script>

<template>
    <div>
        <div class="card">
            <p class="name">定风波</p>
            <p class="tips">华友拉萨扩大解放撒罗尼法拉盛</p>
        </div>
    </div>
</template>

<style lang='less' scoped>
.card{
    background-image: url(../../assets/author.jpg);
    background-size: cover;
    width: 100px;
    height: 100px;
    overflow: hidden;
    .name{
        position: relative;
        left: -10em;
        transition: 1s;
    }
    .tips{
        position: relative;
        bottom: -5em;
        transition: 1s;
    }
}
.card:hover .name {
    left: 0;
}
.card:hover .tips{
    bottom: 0;
}
</style>