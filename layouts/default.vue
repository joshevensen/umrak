<template>
  <div>
    <header class="py-4">
      <UContainer>
        <div class="flex justify-between items-center">
          <div>
            <p>Heroes of Um'rak</p>
          </div>

          <div class="flex gap-4">
            <ULink to="/">Home</ULink>
            <ULink to="/book">Book</ULink>
            <ULink to="/lore">Lore</ULink>
          </div>
        </div>
      </UContainer>
    </header>

    <main class="py-4">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>
