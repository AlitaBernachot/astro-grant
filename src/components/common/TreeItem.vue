<script setup lang="ts">
const props = defineProps<{
  tree: any
}>()
</script>

<template>
  <div v-if="tree.label">
    {{ tree.label }}
  </div>
  <ul v-if="tree && tree.children" class="ml-6">
    <li v-for="child in tree.children">
      <TreeItem :tree="child"></TreeItem>
    </li>
  </ul>
</template>
