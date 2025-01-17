<template>
  <Transition
    enter-active-class="transition duration-300 transform"
    enter-from-class="opacity-0 translate-y-8"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-8"
  >
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-20 right-0 p-3 rounded-full bg-primary/80 hover:bg-primary dark:bg-primary/90 dark:hover:bg-primary text-white shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110 group"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const showButton = ref(false);

// 使用节流函数来优化滚动事件
const handleScroll = useThrottleFn(() => {
  showButton.value = window.scrollY > 300;
}, 200);

// 监听滚动事件
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
