<script setup lang="ts">
// 导入组件
import MySelect from "../modules/my-ui/Select/index.vue"
import MyLink from "../modules/my-ui/Link/index.vue"
import { ref } from "vue"
interface selectData  {
  value: string;
  id: number;
  text: string
}
let currIdx = ref<number>(1)
// 传入的数据项
const data:selectData[] = [
  {
    id: 1,
    value: 'orange',
    text: '🍊'
  },
  {
    id: 2,
    value: 'apple',
    text: '🍎'
  },
  {
    id: 3,
    value: 'banana',
    text: '🍌'
  }
]
let setOption = (index:number, item:selectData) => {
  // 回调函数
  // 把 选中的index传出来 
  // item 选中的数据项  
  console.log(index, item)
  // 这里就可以执行异步请求 等操作
}
</script>

<template>
  <div>
    <!-- 定义的 select 组件 -->
    <!-- 
      data： 传给 select 的可选数据 
      currentIndex ：选中的 行数 
      callback： 选中后的回调函数
     -->
    <my-select
      :data="data"  
      :currentIndex="currIdx"
      :callback="setOption"
    ></my-select>
    <hr />

    <my-link
      href="https://cn.bing.com/"
      type="primary"
      target="_blank">
      必应
    </my-link>
    <br>
    <my-link
      href="https://cn.bing.com/"
      type="success"
      >
      必应
    </my-link>
    <br>
    <my-link
      href="https://cn.bing.com/"
      type="warning"
      target="_blank">
      必应
    </my-link>
    <br>
    <my-link
      href="https://cn.bing.com/"
      type="danger"
      target="_blank">
      必应
    </my-link>
  </div>
</template>

