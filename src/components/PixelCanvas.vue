<script setup lang="ts">
  import type { PropType } from "vue";

  import { Pixel } from "@/components";

  defineProps({
    startX: {
      type: Number,
      required: true,
    },
    startY: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    pixels: {
      type: Array as PropType<Array<Array<number>>>,
      required: true,
    },
  });
</script>

<template>
  <div data-v-canvas>
    <Pixel
      v-for="(px, i) in pixels"
      :key="i"
      :x="startX + Math.floor(i / height)"
      :y="startY + Math.round(i % width)"
      :color="`rgba(${px[0]}, ${px[1]}, ${px[2]})`"
    />
  </div>
</template>

<style>
  [data-v-canvas] {
    width: min-content;
    height: min-content;

    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: auto;

    display: grid;
    grid-template-columns: repeat(v-bind(width), 1fr);
    grid-template-rows: repeat(v-bind(height), 1fr);
  }
</style>
