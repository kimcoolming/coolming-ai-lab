<script setup>
import { aiLabPosts } from "@/data/aiLabPosts";

const getInitial = (title) => {
  return title.charAt(0).toUpperCase();
};
</script>

<template>
  <div class="page-ai-lab">
    <!-- 페이지 헤더 -->

    <div class="page-header">
      <div class="page-title">AI Lab</div>

      <div class="page-desc">바이브코딩 실험과 기록을 쌓는 공간</div>
    </div>

    <!-- 카드 목록 -->

    <v-row>
      <v-col v-for="post in aiLabPosts" :key="post.id" cols="12" md="6" lg="4">
        <v-card class="ai-card" rounded="lg" elevation="1">
          <v-card-item>
            <!-- 아바타 -->

            <template #prepend>
              <v-avatar size="40" color="primary" class="ai-avatar">
                {{ getInitial(post.title) }}
              </v-avatar>
            </template>

            <!-- 제목 -->

            <v-card-title>
              {{ post.title }}
            </v-card-title>

            <!-- 날짜 -->

            <v-card-subtitle>
              {{ post.date }}
            </v-card-subtitle>
          </v-card-item>

          <!-- 요약 -->

          <v-card-text>
            {{ post.summary }}

            <!-- 태그 -->

            <div class="mt-3">
              <v-chip v-for="tag in post.tags" :key="tag" size="small" class="me-2 mb-2" variant="tonal">
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>

          <!-- 버튼 -->

          <v-card-actions>
            <v-btn :to="`/ai-lab/${post.id}`" color="primary" variant="flat"> Read More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
