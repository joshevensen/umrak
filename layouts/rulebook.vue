<template>
  <div>
    <div class="pt-2">
      <UContainer>
        <ULink
          to="/"
          class="flex items-center text-gray-400 hover:text-primary"
        >
          <UIcon name="i-heroicons-arrow-uturn-left-16-solid" />
          <span class="ml-2 text-sm">back</span>
        </ULink>
      </UContainer>
    </div>

    <header>
      <UContainer class="py-4 border-b border-gray-300">
        <div class="flex justify-between items-end">
          <div>
            <img
              src="~/assets/logo-heroes-of-umrak.png"
              alt="Heroes of Um'rak logo"
              class="h-32"
            />
          </div>

          <div class="text-right">
            <h2 class="text-xl font-bold text-gray-700 leading-none">
              Rulebook
            </h2>
            <p class="text-sm text-gray-600">Version 0.1</p>
          </div>
        </div>
      </UContainer>
    </header>

    <UContainer>
      <slot />
    </UContainer>
  </div>
</template>
