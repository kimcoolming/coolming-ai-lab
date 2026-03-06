<script setup>
const cards = [
  { title: "AI Lab", desc: "바이브코딩 실험 기록", to: "/ai-lab", icon: "mdi-flask" },
  { title: "Templates", desc: "템플릿 (Coming soon)", to: "/templates", icon: "mdi-view-grid" },
  { title: "Services", desc: "패키지 (Coming soon)", to: "/services", icon: "mdi-briefcase" },
  { title: "Contact", desc: "문의 / 협업", to: "/contact", icon: "mdi-email-outline" },
];
</script>

<template>
  <v-sheet rounded="xl" class="pa-8 mb-8" color="primary" theme="dark">
    <div class="text-h4 font-weight-bold">Coolming AI Lab</div>

    <div class="text-subtitle-1 mt-2">Vibe Coding Experiments by Coolming</div>

    <v-btn class="mt-4" color="white" variant="flat" to="/ai-lab"> Explore AI Lab </v-btn>
  </v-sheet>
  <div class="mb-6">
    <div class="text-h4 font-weight-bold">Coolming AI Lab</div>
    <div class="text-subtitle-1 opacity-80">AI로 만들고, 기록하고, 확장한다.</div>
  </div>

  <v-row>
    <v-col v-for="c in cards" :key="c.to" cols="12" sm="6" md="4">
      <v-card class="h-100" rounded="xl" variant="tonal">
        <v-card-title class="d-flex align-center ga-2">
          <v-icon :icon="c.icon" />
          <span class="font-weight-bold">{{ c.title }}</span>
        </v-card-title>
        <v-card-text class="opacity-80">{{ c.desc }}</v-card-text>
        <v-card-actions>
          <v-btn :to="c.to" color="primary" variant="flat" rounded="lg">Open</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
