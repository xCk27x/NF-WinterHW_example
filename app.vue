<template>
  <div>
    <ClientOnly fallback="網頁加載中">
      <!-- [nuxt] Your project has layouts but the `<NuxtLayout />` component has not been used.  -->
      <!-- This is an issue for nuxt 3.9 -->
      <NuxtLayout name="default">
        <div>
          <NuxtLoadingIndicator />
          <NuxtPage />
        </div>
      </NuxtLayout>
      <template #fallback>
        <p class="my-6 flex justify-center">[IronManWelcome] 載入中...</p>
      </template>
    </ClientOnly>
  </div>
</template>
