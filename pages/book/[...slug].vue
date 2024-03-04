<script setup lang="ts">
import SectionNavigation from "~/components/SectionNavigation.vue";

const { data: navigation } = await useAsyncData("book", () =>
  fetchContentNavigation(queryContent("book"))
);

const bookNavigation = JSON.parse(JSON.stringify(navigation.value))[0].children;
bookNavigation.pop();
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <nav>
      <SectionNavigation
        v-for="(section, index) in bookNavigation"
        :index="index"
        :section="section"
      />
    </nav>
    <div class="col-span-3">
      <div class="prose">
        <ContentDoc />
      </div>
    </div>
  </div>
</template>
