<script setup lang="ts">
const props = defineProps<{
  href?: string
  title?: string
  active?: boolean
}>()
</script>

<template>
    <a :href="props.href" 
      :title="props.title"
      :class="props.active === true ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white'"
      class="text-white rounded-md px-3 py-2 text-sm font-medium">
        <slot>A header link...</slot>
    </a>
</template>