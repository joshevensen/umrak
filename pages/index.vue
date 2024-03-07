<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <div>
    <div class="py-8">
      <h1 class="text-5xl font-bold text-center">Heroes of Um'rak</h1>
      <p class="text-xl text-center">
        Become the hero you've always wanted to be.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <UButton to="/rulebook">Rulebook</UButton>
        <UButton to="/lore">Lore</UButton>
      </div>
    </div>

    <div class="prose">
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
