<script setup lang='ts'>
// 根据offtop判断是向上还是向下
import { ref, reactive } from 'vue'
let start = 0
let end = 5
let size=10
let count=0
let spacing=5
const data = [
    { id: 1, name: 'sdff' },
    { id: 23, name: 'www' },
    { id: 34, name: 'fasf' },
    { id: 112, name: 'wfe' },
    { id: 333, name: 'safs' },
    { id: 121, name: 'ewrwe' },
    { id: 444, name: 'dasgs' },
    { id: 1231, name: 'xcv' },
    { id: 456, name: 'saf撒地方' },
    { id: 67, name: 'sd啊发射点发ff' },
    { id: 655, name: '迭代' },
    { id: 673, name: 'sd试点范围ff' },
    { id: 1234, name: '微风' },
    { id: 445, name: '士大夫' },
    { id: 3333, name: '个欸我' },
    { id: 243, name: '嗡嗡嗡' },
    { id: 3564, name: '反对反对' },
    { id: 1172, name: '广告位' },
    { id: 37733, name: '威威日' },
]
const nowData = reactive({ item: data.slice(start, end) })

const dell = () => {
    start += spacing
    end += spacing
    nowData.item.push(...data.slice(start, end))
    if(nowData.item.length>size){
        nowData.item=nowData.item.slice(4,nowData.item.length)
        count++
    }

}
const top=()=>{
    nowData.item.unshift({ id: 37733, name: '威威日' })
}
</script>

<template>
    <div class="rollBox">
        <div v-for="item, index in nowData.item" class="item" :key="item.name">
            {{ item.name }} {{ item.id }}
        </div>
    </div>
    <button @click="dell">下滚</button>
    <button @click="top">上滚</button>
</template>

<style lang='less' scoped>
.rollBox {
    overflow-y: scroll;
    height: 100px;
}
</style>