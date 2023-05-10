
<script setup lang="ts">
import {map} from '../../pages/map.astro'
import {testLayers} from '../../fixtures/testLayers'
import { ref, Ref } from 'vue'
import TreeItem from './TreeItem.vue'

function visitoggle() {
  visi.value = !visi.value
  console.log("hello")
}
const ll = ref(testLayers);

</script>

<template>
  <!-- {{testLayers}} -->
  <TreeItem :tree="testLayers">
  </TreeItem>
  Number of nodes: {{ testLayers.n_items }}
</template>
