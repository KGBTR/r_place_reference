<script setup lang="ts">
  const props = defineProps({
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "#0ef",
    },
  });
</script>

<template>
  <a
    class="pixel"
    :href="`https://reddit.com/r/place/?cx=${props.x}&amp;cy=${props.y}&amp;px=0&amp;py=0`"
    target="_blank"
    :v-tooltip="`[${props.x}, ${props.y}]`"
  ></a>
</template>

<style>
  .pixel {
    min-width: 0.625rem;
    min-height: 0.625rem;
    max-width: 0.625rem;
    max-height: 0.625rem;

    aspect-ratio: 1 / 1;

    background-color: v-bind(color);
  }
  .pixel:hover {
    z-index: 1;
    border: 2px solid black;
    border-radius: 2px;
    outline: 2px solid whitesmoke;
  }
</style>
