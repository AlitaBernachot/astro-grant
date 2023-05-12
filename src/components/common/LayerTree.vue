
<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import { testLayers as tree } from "../../fixtures/testLayers";

const props = defineProps<{
  tree: any
}>()
</script>

<template>
  <TreeItem :tree="tree">
  </TreeItem>

  Number of layers: {{ tree.n_items }}
</template>
