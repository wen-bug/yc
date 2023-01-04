<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue'
const num = ref<number>(0)
const fileList: object[] = reactive([])
let file: HTMLInputElement, uid: number = -1
onMounted(() => {
    file = document.getElementById('file-input') as HTMLInputElement
})
const upNum = () => {
    num.value = file.files?.length || 0
    uid++
    let f = file.files?.item(0)
    let name = f?.name
    let size = f?.size
    fileList.push({ name: name, size: (size/ 1024).toFixed() + 'KB', uid: uid })
}
const delFile = (index: number) => {
    fileList.splice(index, 1)
    num.value = file.files?.length || 0
}
</script>

<template>
    <div class="box">
        <input type="file" id="file-input" @change="upNum" multiple>
        <label for="file-input">
            <svg class="w-6 h-6" width="1em" height="1em" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
            选择文件
        </label>
        <div id="num-file">{{ num > 0 ? num + '个文件' : '没有选择文件' }}</div>
        <ul id="files-list">
            <li @click="delFile(item.uid)" v-for="item in fileList" :key="item.uid">
                <p> {{ item.name }}</p>
                <p>{{ item.size }}</p>
            </li>
        </ul>
    </div>
</template>

<style lang='less' scoped>
.box {
    width: 90%;
    border-radius: 1em;
    padding: 1em;
    box-shadow: 0 1em 1.5em rgb(202, 202, 202);

    .w-6 {
        position: relative;
        bottom: -0.125em;
    }
}

input[type="file"] {
    display: none;
}

label {
    display: block;
    background-color: #025bee;
    color: white;
    font-size: 1.2em;
    text-align: center;
    width: 10em;
    padding: 0.5em;
    border-radius: 0.4em;
    cursor: pointer;
    margin: auto;
}

#num-file {
    text-align: center;
    margin-top: 0.6em;
}

ul {
    list-style-type: none;

    li {
        background-color: antiquewhite;
        display: flex;
        justify-content: space-between;
        padding: 0 1em;
        color: #025bee;
    }
}
</style>