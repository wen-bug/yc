<script setup lang='ts'>
// 烟花
import {onMounted} from 'vue'
let canvas: HTMLCanvasElement,ctx: CanvasRenderingContext2D | null
onMounted(()=>{
    canvas=document.getElementById('cv') as HTMLCanvasElement
    ctx=canvas?.getContext('2d')
})

function resizeCanvas(){
    if(canvas){
        canvas.width=window.innerWidth
        canvas.height=window.innerHeight
    }
    
}
resizeCanvas()
window.addEventListener("resize", resizeCanvas)

function clickSite(e:MouseEvent){
    let x=e.clientX
    let y=e.clientY
    addFires(x,y)
    
}
function addFires(x:number,y:number){
    let count=10
    let r=20
    if(ctx)
    for (let index = 0; index < count; index++) {
        // 计算角度
        let angle=360/count*index
        // 转弧度
        let radians=angle*Math.PI/180
        // cos 求出当前弧度x坐标*半径+x等于实际坐标
        // !四舍五入可能会导致实际点位漂移
        let moveX = x + Math.cos(radians) * r
        let moveY = y + Math.sin(radians) * r
        
        // 开始路径
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.arc(moveX, moveY, 1,0, Math.PI * 2,false);
        ctx.fill();
        ctx.closePath();
    }
}
// document.addEventListener('click', clickSite);
</script>

<template>
    <div>
        <canvas @click="clickSite" id="cv" width="1000" height="1000"></canvas>
    </div>
</template>

<style lang='less' scoped>
canvas {
            position: absolute;
            z-index: 0;
            background-color:bisque;
            // width: 1000px;
            // height: 1000px;
        }
</style>