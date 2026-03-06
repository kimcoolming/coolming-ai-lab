<script setup>
const items = [
  { title: "AppShell 만들기", summary: "AppBar + Drawer + Footer 기본 레이아웃", tags: ["vuetify", "layout"] },
  { title: "PWA 붙이기", summary: "manifest + 설치형 웹앱 기본 세팅", tags: ["pwa", "vite"] },
  { title: "홈 카드 허브", summary: "프로젝트 이동 허브 구성", tags: ["ui", "cards"] },
];
</script>

<template>
  <div class="mb-6">
    <div class="text-h5 font-weight-bold">AI Lab</div>
    <div class="text-body-2 opacity-80">바이브코딩 실험을 쌓는 공간</div>
  </div>

  <v-row>
    <v-col v-for="it in items" :key="it.title" cols="12" md="6">
      <v-card rounded="xl">
        <v-card-title class="font-weight-bold">{{ it.title }}</v-card-title>
        <v-card-text class="opacity-80">{{ it.summary }}</v-card-text>
        <v-card-text class="pt-0">
          <v-chip v-for="t in it.tags" :key="t" class="me-2" size="small" label>{{ t }}</v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
