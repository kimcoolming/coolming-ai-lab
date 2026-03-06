<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(false);
const theme = useTheme();

const nav = [
  // { title: "Home", to: "/", icon: "mdi-home-variant" },
  { title: "AI Lab", to: "/ai-lab", icon: "mdi-flask" },
  { title: "Templates", to: "/templates", icon: "mdi-view-grid" },
  { title: "Services", to: "/services", icon: "mdi-briefcase" },
  { title: "Contact", to: "/contact", icon: "mdi-email-outline" },
];

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold cursor-pointer" @click="$router.push('/')">
        Coolming AI Lab
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon variant="text" @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark" />
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item v-for="item in nav" :key="item.to" :to="item.to" :prepend-icon="item.icon" :title="item.title" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>

    <v-footer class="py-4">
      <v-container class="d-flex justify-space-between align-center">
        <div class="text-caption">© {{ new Date().getFullYear() }} Coolming AI Lab</div>
        <div class="text-caption">Vue + Vuetify</div>
      </v-container>
    </v-footer>
  </v-app>
</template>
