<script setup lang="ts">
  import { reactive, ref } from "vue";
  import { Image } from "image-js";

  import { PixelCanvas } from "@/components";

  import defaultImageURL from "@/assets/default.png?url";

  interface PixelImage {
    width: number;
    height: number;
    pixels: Array<Array<number>>;
  }

  const startX = ref(0);
  const startY = ref(0);

  const pixelImage = reactive<PixelImage>({ width: 0, height: 0, pixels: [] });

  function handleImageChange(e: Event) {
    pixelImage.pixels = [];
    pixelImage.width = 0;
    pixelImage.height = 0;

    if (
      e.target &&
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      e.target.files[0].arrayBuffer().then((buffer) => {
        Image.load(buffer).then((image) => {
          // TODO: add getPixelsArray type declaration into image-js
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          pixelImage.pixels = image.getPixelsArray();
          pixelImage.width = image.width;
          pixelImage.height = image.height;
        });
      });
    } else {
      Image.load(defaultImageURL).then((image) => {
        // TODO: add getPixelsArray type declaration into image-js
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pixelImage.pixels = image.getPixelsArray();
        pixelImage.width = image.width;
        pixelImage.height = image.height;
      });
    }
  }
</script>

<template>
  <main>
    <PixelCanvas
      :width="pixelImage.width"
      :height="pixelImage.height"
      :pixels="pixelImage.pixels"
      :startX="startX"
      :startY="startY"
    />
    <label>
      Start Position X:
      <input
        type="number"
        min="0"
        max="1999"
        placeholder="Start Position X"
        v-model="startX"
      />
    </label>

    <label>
      Start Position Y:
      <input
        type="number"
        min="0"
        max="1999"
        placeholder="Start Position Y"
        v-model="startY"
      />
    </label>

    <br />
    <input type="file" accept="image/*" @change="handleImageChange" />
  </main>
</template>

<style>
  main {
    min-height: 80vh;

    max-width: 80vw;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
</style>
