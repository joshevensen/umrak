<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => `${title} | Heroes of Um'rak`,
  htmlAttrs: {
    class: "h-full bg-gray-200",
  },
  link: [
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#e55807" },
  ],
  meta: [
    { name: "apple-mobile-web-app-title", content: "Um'rak" },
    { name: "application-name", content: "Um'rak" },
    { name: "msapplication-TileColor", content: "#e55807" },
    { name: "theme-color", content: "#e55807" },
  ],
});

useSeoMeta({
  title: "Heroes of Um'rak",
  description: "This is my amazing site, let me tell you all about it.",
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
