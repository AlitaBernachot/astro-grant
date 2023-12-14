
<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import { testLayers as tree } from "../../fixtures/testLayers";

const props = defineProps<{
  tree: any
  level: text
}>()
</script>

<template>
  <TreeItem :tree="tree" :level="level">
  </TreeItem>

  Number of layers: {{ tree.n_items }}
</template>
