<script setup lang="ts">
import SectionNavigation from "~/components/SectionNavigation.vue";

definePageMeta({ layout: "rulebook" });

const { data: navigation } = await useAsyncData("rulebook", () =>
  fetchContentNavigation(queryContent("rulebook"))
);

const rulebookNavigation = JSON.parse(JSON.stringify(navigation.value))[0]
  .children;
rulebookNavigation.pop();
</script>

<template>
  <div class="grid grid-cols-4 gap-6">
    <nav class="pt-4 border-r border-gray-300 pr-6">
      <SectionNavigation
        v-for="(section, index) in rulebookNavigation"
        :index="index"
        :section="section"
      />
    </nav>
    <div class="col-span-2 pt-4">
      <div class="prose">
        <ContentDoc />
      </div>
    </div>
  </div>
</template>
