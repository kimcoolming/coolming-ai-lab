<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 200;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <div v-if="visible" class="scroll-to-top">
    <v-btn class="scroll-to-top__btn" icon @click="scrollTop">
      <v-icon icon="mdi-arrow-up" />
    </v-btn>
  </div>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 20px;
  bottom: 24px;
  z-index: 9999;
}

.scroll-to-top__btn {
  background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #f472b6 100%);
  color: #fff;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.18);
}

@media (max-width: 600px) {
  .scroll-to-top {
    right: 14px;
    bottom: 18px;
  }
}
</style>
