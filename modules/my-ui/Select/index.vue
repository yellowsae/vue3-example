<script setup lang="ts">
import { reactive } from "vue"
interface selectData  {
  value: string;
  id: number;
  text: string
}
const props = defineProps<{
  data: selectData[];  // 数据项
  currentIndex: number; // 选中的行数
  callback: (index: number, item: selectData) => void;  // 传入的回调函数
}>()


// 定义当前的数据
const state = reactive({
  currIdx: props.currentIndex,
  optionsShow: false
})


// 点击展开
const openSelect = () => {
  state.optionsShow = !state.optionsShow 
}

// 点击后， 执行函数 => 函数内执行 传入的回调函数
const setOption = (index, item) => {
  state.currIdx = index
  state.optionsShow = false
  props.callback(index, item)
}
</script>
<template>
  <!-- 定义select 组件 -->
  <div class="my-select">
    <!-- 显示的文本 -->
    <div 
      @click="openSelect"
      class="result">
      {{data[state.currIdx].text}}
    </div>
    <!-- 显示 options -->
    <div 
      class="option"
      v-for="(item, index) in data"
      :key="item.id"
      @click="setOption(index, item)"
      v-show="state.optionsShow"
    >
      {{item.text}}
    <!-- 
      key: 用index 不好；什么时候 key 用 index 
          - index 其实不是所有情况不能使用的， 当数据是动态改变的，特别是删除， index就会出现问题
          - 如果本身就是 静态的，用来渲染视图，data是不会该的情况下，可以用 index
     -->
    </div>
</div>
</template>

<style>
.my-select {
  position: relative;
  width: 100px;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.result {
  width: 100%;
  height: 100%;
  line-height: 34px;
  text-align: center;
}

</style>
