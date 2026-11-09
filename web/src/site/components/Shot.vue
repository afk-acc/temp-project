<script setup lang="ts">
/** Кадр продукта в «чертёжной» рамке: засечки по углам и подпись-номер, как на листе проекта. */
defineProps<{ src: string; alt: string; fig?: string; ratio?: string; position?: string }>()
</script>

<template>
  <figure class="shot" :style="{ aspectRatio: ratio }">
    <img :src="src" :alt="alt" loading="lazy" decoding="async" :style="{ objectPosition: position }" />
    <figcaption v-if="fig" class="mono">{{ fig }}</figcaption>
    <i class="tick tl" /><i class="tick tr" /><i class="tick bl" /><i class="tick br" />
  </figure>
</template>

<style scoped>
.shot { position: relative; margin: 0; border: 1px solid var(--line-2); background: var(--ink-2); overflow: hidden; }
img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.6s; filter: saturate(0.92); }
.shot:hover img { transform: scale(1.025); filter: saturate(1); }
figcaption { position: absolute; left: 12px; top: 10px; padding: 4px 8px; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--paper); background: rgba(11, 12, 14, 0.72); backdrop-filter: blur(8px); }
.tick { position: absolute; width: 14px; height: 14px; border-color: var(--copper); border-style: solid; border-width: 0; pointer-events: none; }
.tl { left: -1px; top: -1px; border-left-width: 1px; border-top-width: 1px; }
.tr { right: -1px; top: -1px; border-right-width: 1px; border-top-width: 1px; }
.bl { left: -1px; bottom: -1px; border-left-width: 1px; border-bottom-width: 1px; }
.br { right: -1px; bottom: -1px; border-right-width: 1px; border-bottom-width: 1px; }
</style>
