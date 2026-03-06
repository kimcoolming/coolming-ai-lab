<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTheme } from "vuetify";

const drawer = ref(false);
const theme = useTheme();
const route = useRoute();
const router = useRouter();

const nav = [
  { title: "AI Lab", to: "/ai-lab", icon: "mdi-flask-outline" },
  { title: "Templates", to: "/templates", icon: "mdi-view-grid-outline" },
  { title: "Services", to: "/services", icon: "mdi-briefcase-outline" },
  { title: "Contact", to: "/contact", icon: "mdi-email-outline" },
];

const isDark = computed(() => theme.global.current.value.dark);
const isHome = computed(() => route.path === "/");

function toggleTheme() {
  theme.global.name.value = isDark.value ? "light" : "dark";
}

function goHome() {
  router.push("/");
}
</script>

<template>
  <v-app>
    <v-app-bar
      class="app-bar"
      :class="{
        'app-bar--home': isHome,
        'app-bar--dark': isDark,
      }"
      flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <div class="app-brand" @click="goHome">
        <span class="app-brand__symbol">
          <span class="app-brand__symbol-core"></span>
        </span>

        <div class="app-brand__text">
          <span class="app-brand__title">Coolming AI Lab</span>
          <span class="app-brand__sub">Build · Learn · Experiment</span>
        </div>
      </div>

      <v-spacer />

      <div class="app-bar__actions">
        <v-btn icon variant="text" class="app-bar__icon-btn" @click="toggleTheme">
          <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary class="app-drawer">
      <div class="app-drawer__top">
        <div class="app-brand app-brand--drawer" @click="goHome">
          <span class="app-brand__symbol">
            <span class="app-brand__symbol-core"></span>
          </span>

          <div class="app-brand__text">
            <span class="app-brand__title">Coolming AI Lab</span>
            <span class="app-brand__sub">AI Playground</span>
          </div>
        </div>
      </div>

      <v-list nav class="px-2">
        <v-list-item
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          rounded="xl"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>

    <v-footer class="app-footer py-4">
      <v-container class="d-flex justify-space-between align-center flex-wrap ga-2">
        <div class="text-caption">© {{ new Date().getFullYear() }} Coolming AI Lab</div>
        <div class="text-caption">Vue · Vuetify · PWA</div>
      </v-container>
    </v-footer>
  </v-app>
</template>
