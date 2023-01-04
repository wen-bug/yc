<script setup lang='ts'>
// #旋转双面卡片
</script>

<template>
    <div class="box">
        <div class="card">
            <div class="front">
                <p>
                    我是正面
                </p>
            </div>
            <div class="back">
                <p> 我是反面</p>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.card {
    width: 100px;
    height: 200px;
    justify-content: center;
    box-shadow: 0 0 10px rgb(192, 192, 192);
    position: relative;
    transition: 1s ease-in-out;

    .front {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 1s ease-in-out;
    }

    .back {
        width: 100%;
        height: 100%;
        position: absolute;
        transform: rotateY(180deg);
        transition: 1s ease-in-out;
        opacity: 0;
    }
}

.card:hover .front {
    transform: rotateY(180deg);
    opacity: 0;

}

.card:hover .back {
    transform: rotateY(0deg);
    opacity: 1;
    background-color: rgb(110, 86, 54);

}
</style>