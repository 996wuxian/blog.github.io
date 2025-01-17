<script setup lang="ts">
import { skillsData } from "~/assets/data";

const skillsRef = ref();
useSectionInView(skillsRef, "我的技能");

// 将技能数据分成三行
const row1 = computed(() => skillsData.slice(0, 8)); // HTML到Vue3
const row2 = computed(() => skillsData.slice(8, 16)); // Node到Sass
const row3 = computed(() => skillsData.slice(16)); // less到UniApp

// 为了实现无缝滚动，我们需要复制一份数据
const duplicateArray = (arr: string[]) => [...arr, ...arr];
</script>

<template>
  <section
    ref="skillsRef"
    class="max-w-[53rem] scroll-mt-28 text-center mb-28 overflow-hidden"
    id="skills"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">我的技能</h2>

    <!-- 第一行：向右滚动 -->
    <div class="scroll-container mb-4">
      <div class="scroll-right">
        <ul class="flex space-x-4 animate-scroll-right">
          <li
            v-for="(skill, index) in duplicateArray(row1)"
            :key="`row1-${index}`"
            class="flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 第二行：向左滚动 -->
    <div class="scroll-container mb-4">
      <div class="scroll-left">
        <ul class="flex space-x-4 animate-scroll-left">
          <li
            v-for="(skill, index) in duplicateArray(row2)"
            :key="`row2-${index}`"
            class="flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 第三行：向右滚动 -->
    <div class="scroll-container">
      <div class="scroll-right">
        <ul class="flex space-x-4 animate-scroll-right">
          <li
            v-for="(skill, index) in duplicateArray(row3)"
            :key="`row3-${index}`"
            class="flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.scroll-right,
.scroll-left {
  display: inline-block;
  white-space: nowrap;
  padding: 10px 0;
}

.animate-scroll-right {
  animation: scrollRight 30s linear infinite;
}

.animate-scroll-left {
  animation: scrollLeft 30s linear infinite;
}

@keyframes scrollRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 鼠标悬停时暂停动画 */
.scroll-container:hover .animate-scroll-right,
.scroll-container:hover .animate-scroll-left {
  animation-play-state: paused;
}
</style>
