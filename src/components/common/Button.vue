<script setup lang="ts">
const onClick = () => console.log("Clicked on the button")
</script>

<template>
    <button
        @click="onClick"
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded uppercase text-sm">
        <slot>A button...</slot>
    </button>
</template>