<script lang="ts" setup>
const props = defineProps<{
  href: string;
  type: string;
  target?: string;
}>();
</script>
<template>
  <a :href="href" :class="['my-link', type]" :target="target">
    <slot></slot>
  </a>
</template>


<style>
.my-link {
  color: #222;
  font-size: 14px;
  text-decoration: none;
}
.primary {
  color: #409eff;
}
.success {
  color: #67c23a;
}
.warning {
  color: #e6a23c;
}
.danger {
  color: #f56c6c;
}

</style>
