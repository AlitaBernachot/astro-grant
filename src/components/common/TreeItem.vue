<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
const props = defineProps<{
  tree: any
  level: string
}>()

function click_item() {
  console.log(props.tree)
  console.log('youpi')
}
</script>

<template>
  
  <Disclosure v-if="tree && tree.children" defaultOpen as="div" :key="tree.label" v-slot="{ open }">
    <DisclosureButton class="w-full justify-between rounded-lg bg-orange-100 px-2 py-2 text-left text-sm font-medium text-purple-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
    >
      <div v-if="tree.label">
        {{ tree.label }}
      </div>
      <ChevronUpIcon
        :class="open ? 'rotate-180 transform' : ''"
        class="h-5 w-5 text-purple-500"
      />
    </DisclosureButton>
    <DisclosurePanel class="pl-4 pb-2 pt-4 text-sm text-gray-500">
        <div v-for="child in tree.children">
          <TreeItem :tree="child" :level="String(parseInt(level)+1)"></TreeItem>
        </div>
    </DisclosurePanel>
  </Disclosure>
  <button v-else class="w-full justify-between rounded-lg bg-blue-100 px-2 py-2 mb-1 text-left text-sm font-medium text-purple-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75" @click="click_item">{{ tree.label }} level: {{ level }}</button>
</template>
