// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  }
  // 關閉components資料夾的名稱自動化
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false
  //   }
  // ]
})
