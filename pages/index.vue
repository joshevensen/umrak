<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Home",
});
</script>

<template>
  <div>
    <div class="py-8">
      <div class="flex justify-center mb-2">
        <img
          src="~/assets/logo-heroes-of-umrak.png"
          alt="Heroes of Um'rak logo"
          class="h-40"
        />
      </div>
      <p class="text-3xl text-center">
        Become the hero you've always wanted to be.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <UButton to="/rulebook" size="lg">Rulebook</UButton>
        <UButton to="/lore" size="lg">Lore</UButton>
        <UButton to="/lore" size="lg">Quests</UButton>
      </div>
    </div>

    <div class="prose mx-auto">
      <p>
        Heroes of Um'rak will be a casual tabletop rpg that combines aspects of
        Diablo, Dungeons and Dragons, and Choose Your Own Adventure books.
      </p>

      <p>
        Each player will create a hero of their own and through many adventures
        will go from apprentice through journeyman and become an adept in one of
        the Hero's Orders.
      </p>
    </div>
  </div>
</template>
