<template>
  <section id="signIn" class="relative flex h-dvh items-center justify-center">
    <img
      src="/signin/bg-2.jpg"
      alt="bg"
      class="absolute h-full w-full bg-cover bg-center bg-no-repeat"
    />
    <div
      id="signInBox"
      class="w-80 scale-100 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 border-2 border-slate-400 p-8 text-white shadow-lg md:scale-110 xl:scale-150 "
    >
      <form action="" class="">
        <h1 id="signInTitle" class="p-8 text-center text-3xl">Sign In</h1>
        <div id="input_box-1" class="relative mb-4 h-10 w-full">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            class="h-full w-full rounded-full px-4"
            required
          />
          <Icon
            name="material-symbols:person"
            color="rgba(51 65 82)"
            size="24"
            class="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>
        <div id="input_box-2" class="relative mb-4 h-10 w-full">
          <input
            type="text"
            name="Password"
            placeholder="Password"
            class="h-full w-full rounded-full px-4"
            required
          />
          <Icon
            name="material-symbols:lock-open-rounded"
            color="rgba(51 65 82)"
            size="24"
            class="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>
        <div id="rememberMe" class="mb-2 flex items-center">
          <input type="checkbox" name="Remember Me" />
          <label for="Remember Me" class="ml-1">Remember Me</label>
        </div>
        <div id="signInBtn" class="mb-4 flex justify-center">
          <button
            type="submit"
            class="w-full rounded-full bg-slate-300 px-4 py-2 font-bold text-slate-800"
          >
            Sign In
          </button>
        </div>
        <div id="register" class="mb-4">
          <span>Don't have an account?</span>
          <a href="/register" class="ml-2 font-bold">Register</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
