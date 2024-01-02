<template>
  <div
    class="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-opacity-80 px-6 py-2 shadow-lg backdrop-blur-lg backdrop-filter sm:px-9 lg:px-12"
  >
    <ul class="flex gap-6">
      <li class="flex items-center">
        <img src="/favicon-32x32.png" alt="favicon" />
      </li>
      <li class="flex items-center">
        <a href="/">
          <p class="text-xl font-bold text-gray-700">NF SHOP</p>
        </a>
      </li>
    </ul>
    <ul class="flex gap-6">
      <li class="flex items-center opacity-70 hover:opacity-100">
        <button>
          <Icon name="ic:outline-search" color="#000000" size="32" />
        </button>
      </li>
      <li class="flex items-center justify-center opacity-70 hover:opacity-100">
        <button>
          <Icon name="material-symbols:shopping-cart-outline" color="#000000" size="32" />
        </button>
      </li>
      <li class="flex items-center justify-center opacity-70 hover:opacity-100">
        <a href="" class="rounded-md">
          <span class="text-lg font-bold text-black">Sign in</span>
        </a>
      </li>
    </ul>
  </div>
</template>
