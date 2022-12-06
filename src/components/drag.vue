<script setup lang='ts'>
import { onMounted, ref } from 'vue'
// 拖拽
const dta = [
    { id: 1, name: 'dfdf' },
    { id: 2, name: 'ww' },
    { id: 3, name: 'dffwwfwdf' },
    { id: 3, name: 'asfd' },
    { id: 3, name: 'dffwwsafsfwdf' }
]
let show = ref(false)
let left = 0, top = 0, lastLeft = 0, lastTop = 0
interface NodeList {
    x: number
    y: number
    t:string
    width:string
    height:string
}
let curtain: HTMLElement, onDown = ref(false), nodeList: [NodeList | null] = [null]
const getIndex = (e: MouseEvent) => {
    show.value = true
    onDown.value = true
    curtain = document.querySelector('.curtain') as HTMLElement
    left = e.offsetX
    top = e.offsetY
    curtain.style.top = top + 'px'
    curtain.style.left = left + 'px'
    console.log('点击');

}
const up = () => {
    if (onDown.value) {
        console.log('宋');

        onDown.value = false
        show.value = false
        curtain.style.width = 0 + 'px'
        curtain.style.height = 0 + 'px'

        for (const iterator of nodeList) {
            if(iterator)
            if (iterator.x <= lastLeft && iterator.x >= left) {
                if (iterator.y <= lastTop && iterator.y >= top) {
                    console.log(iterator);
                }
            }


        }
        console.log('new',lastLeft,lastTop);
        
        console.log('old',left,top);
        
        console.log(nodeList);
    }


}
const move = (e: MouseEvent) => {
    if (onDown.value) {
        //获得幕布宽度
        const x=e.offsetX - left
        const y=e.offsetY - top
        // 获得最后的坐标
        lastLeft = e.offsetX 
        lastTop = e.offsetY
        curtain.style.width = x + 'px'
        curtain.style.height = y + 'px'
    } else {
    }

}
onMounted(() => {
    const dom = document.querySelectorAll('.a1')
    for (const iterator of dom) {
        let node=iterator as HTMLElement
        let style=window.getComputedStyle(iterator)
        console.log(window.getComputedStyle(iterator).width,node.offsetLeft);
        nodeList.push({ x: node.offsetLeft, y: node.offsetTop ,t:iterator.innerHTML,width:style.width,height:style.height})
    }
})
</script>

<template>
    dom坐标存储方案
    1，dom渲染是计算dom坐标
    2，区块选中时动态获取dom坐标计算
    记录每个dom x范围 存入 x[[1-10,node],[11-20,node]] 左指针与右指针确定范围取出node 进入 weakMap(存储node)然后再判断y轴同时满足就相交
    O(n) 怎么样快速锁定靠近幕布的dom？
    <div class="listBox" @mousedown="getIndex" @mousemove="move" @mouseup="up" @mouseleave="up">
        <div class="curtain" v-show="show"></div>
        <div class="a1" v-for="item in dta" :data-i="item.id">{{ item.name }}</div>
    </div>
    <!-- <button @click="pto">to</button> -->

</template>

<style lang='less' scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.listBox {
    position: relative;
    z-index: 1;
    display: flex;
    user-select: none;
    // width: 100px;
    flex-wrap: wrap;
    // padding: 5px;
}

.a1 {
    pointer-events: none;
    margin: 5px;
    border: 1px solid black;
}

.curtain {
    position: absolute;
    background-color: aqua;
    z-index: 2;
    opacity: 0.5;


}
</style>