<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "h-full bg-gray-200",
  },
});

useSeoMeta({
  title: "Heroes of Um'Rak",
  description: "This is my amazing site, let me tell you all about it.",
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
