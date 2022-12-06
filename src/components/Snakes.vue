<script setup lang='ts'>
// 贪吃蛇 根据class判断item类型
import { ref, onMounted } from 'vue';
const COL=20
const ROW=20
const me=[0,1]
//吃到食物不用消除尾部，极端情况不停的吃路径数组col*row-1
//尾部动画思路，记录路径[1]*20固定数组,使用一个头指针记录
let food:number|null =Math.floor((Math.random()*COL*ROW)) +1
let rg=ref<HTMLElement |null>(null)
let dom=null
let key:string|null=null
const initTable=(index:number)=>{
    if(me.indexOf(index)!=-1){
        return 'me'
    }else if(index==food){
        return 'food'
    }else{
        return 'item'
    }
}
document.addEventListener('keydown',(e)=>{
    key=e.key
})
// let intervalId=setInterval(()=>{
//     switch(key){
//         case 'w':;break;
//         case 's':;break;
//         case 'a':;break;
//         case 'd':;break;
//     }
//     // me.push(33)
    
// },1000)
onMounted(() => {
    dom=rg.value
})
console.log(rg);

//获取坐标
function m(e:Event){
    let event=e.target as HTMLElement
    
    console.log(event.dataset.i);
    
}

</script>

<template>
    <div id="Region" ref="rg" @click="m">
        <div v-for=" item in COL*ROW" :class="initTable(item)" :key="item" :data-i="item"></div>
    </div>
</template>

<style lang='less' scoped>
@size:20px;
@ROW:20px;
@COL: 20px;
#Region {
    display: flex;
    flex-wrap: wrap;
    width: @size*@COL;
    height: @size*@ROW;
    border:1px solid black ;
}

.item {
    width:@size;
    height: @size;
    // border:1px solid black ;
    background-color: darkgrey;

}
.me{
    .item();
    background-color: black;
}
.food{
    .item();
    background-color: burlywood;
}
</style>