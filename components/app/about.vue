<script setup lang="ts">
const aboutRef = ref();
useSectionInView(aboutRef, "关于我");
</script>

<template>
  <section
    ref="aboutRef"
    class="max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
    id="about"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
    :delay="175"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">关于我</h2>

    <p class="indent-8">
      目前掌握
      <span class="icon-[logos--vue]"></span>
      Vue全家桶从0-1搭建项目、
      <span class="icon-[logos--webpack]"></span>
      Webpack和
      <span class="icon-[logos--vitejs]"></span>
      Vite项目配置、
      <span class="icon-[logos--nuxt-icon]"></span>
      Nuxt构建SSR项目、
      <span class="icon-[logos--typescript-icon-round]"></span>
      Typescript + Eslint + Prettier规范代码、
      <span class="icon-[tabler--brand-miniprogram]"></span>
      微信小程序从0-1搭建上线全流程、Uni-app搭建多端项目、
      <span class="icon-[devicon--nodejs]"></span>
      Node(Express、Nestjs)搭建后端项目、
      <span class="icon-[logos--nginx]"></span>
      Nginx部署项目...
    </p>
  </section>
</template>
