<script setup lang="ts">
import { links } from "~/assets/data";

const activeSection = useActiveSection();
const timeOfLastClick = useTimeOfLastClick();
</script>

<template>
  <header class="z-[9999] fixed top-5 left-0 right-0" data-aos="fade-down">
    <!-- 背景层 -->
    <div
      class="w-full px-4 sm:px-0 rounded-none border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.2rem] sm:w-[31rem] sm:mx-auto sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
    >
      <!-- 导航栏 -->
      <nav
        class="flex h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full justify-center"
      >
        <ul
          class="flex flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 w-full gap-1"
        >
          <li
            class="h-3/4 flex items-center justify-center relative break-keep"
            v-for="(link, index) in links"
            :key="index"
          >
            <NuxtLink
              :to="link.hash"
              class="flex w-full items-center justify-center px-2 py-3 no-wrap hover:text-gray-950 dark:hover:text-gray-300 transition text-xs sm:text-base"
              :class="{
                'text-gray-950': activeSection === link.name,
                'dark:hover:text-gray-600': activeSection === link.name,
              }"
              @click="
                () => {
                  activeSection = link.name;
                  timeOfLastClick = Date.now();
                }
              "
            >
              {{ link.name }}
              <span
                v-if="activeSection === link.name"
                class="bg-gray-50 rounded-full absolute inset-0 -z-10"
                layoutId="activeSection"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
