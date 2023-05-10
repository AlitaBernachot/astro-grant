<script>
export default {
  name: 'TreeItem',
  props: {
    tree: Object
  },
};
</script>

<template>
  <div v-if="tree.label">
    {{ tree.label }}
  </div>
  <ul v-if="tree && tree.children">
    <li v-for="child in tree.children" style="list-style:auto">
      <TreeItem :tree="child"></TreeItem>
    </li>
  </ul>
</template>
