<script setup lang='ts'>
import{ref} from 'vue'
const data =ref( [
    { name: 'sdff' },
    { name: 'www' },
    { name: 'fasf' },
    { name: 'wfe' },
    { name: 'safs' },
    { name: 'ewrwe' },
    { name: 'dasgs' },
    { name: 'xcv' },
    { name: 'sdff' },
    { name: 'sd啊发射点发ff' },
    { name: '迭代' },
    { name: 'sd试点范围ff' },
    { name: '微风' },
    { name: '士大夫' },
])
const dell=()=>{
    const pNode=document.querySelector('.rollBox') as HTMLElement
    const node=document.querySelector('.item') as HTMLElement
    // data.value.splice(0,1)
    console.log(pNode.scrollTop,window.getComputedStyle(node).height.split('p')[0]);
    // pNode.scrollTop=Number(window.getComputedStyle(node).height.split('p')[0])
    pNode?.removeChild(node)

}
</script>

<template>
    <div class="rollBox">
        <div v-for="item, index in data" class="item">
            {{ item.name }} {{ index }}
        </div>
    </div>
    <button @click="dell">删除</button>
</template>

<style lang='less' scoped>
.rollBox {
    overflow-y: scroll;
    height: 100px;
}
</style>