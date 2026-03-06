<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { aiLabPosts } from "@/data/aiLabPosts";

const route = useRoute();

const postIndex = computed(() => aiLabPosts.findIndex((item) => item.id === route.params.id));

const post = computed(() => aiLabPosts[postIndex.value]);

const prevPost = computed(() => (postIndex.value > 0 ? aiLabPosts[postIndex.value - 1] : null));

const nextPost = computed(() => (postIndex.value < aiLabPosts.length - 1 ? aiLabPosts[postIndex.value + 1] : null));
</script>

<template>
  <div v-if="post">
    <div class="mb-4">
      <v-btn to="/ai-lab" variant="text" prepend-icon="mdi-arrow-left"> Back to AI Lab </v-btn>
    </div>

    <v-sheet rounded="xl" class="pa-6 pa-md-8 mb-8" color="primary" theme="dark">
      <div class="text-overline mb-2">Coolming AI Lab</div>
      <div class="text-h4 font-weight-bold mb-3">
        {{ post.title }}
      </div>
      <div class="text-body-2 opacity-80 mb-4">
        {{ post.date }}
      </div>

      <div class="mb-2">
        <v-chip
          v-for="tag in post.tags"
          :key="tag"
          class="me-2 mb-2"
          size="small"
          label
          color="white"
          variant="outlined"
        >
          {{ tag }}
        </v-chip>
      </div>

      <div class="text-subtitle-1 opacity-90">
        {{ post.summary }}
      </div>
    </v-sheet>

    <div class="detail-body mx-auto">
      <v-card rounded="xl" class="mb-8">
        <v-card-text class="pa-6 pa-md-8">
          <div class="post-content">
            {{ post.content }}
          </div>
        </v-card-text>
      </v-card>

      <v-row class="mt-2">
        <v-col cols="12" md="6">
          <v-card v-if="prevPost" rounded="xl" variant="tonal" class="h-100">
            <v-card-subtitle class="pt-4">Previous Post</v-card-subtitle>
            <v-card-title>{{ prevPost.title }}</v-card-title>
            <v-card-text class="opacity-80">
              {{ prevPost.summary }}
            </v-card-text>
            <v-card-actions>
              <v-btn :to="`/ai-lab/${prevPost.id}`" variant="text" color="primary"> Read </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card v-if="nextPost" rounded="xl" variant="tonal" class="h-100">
            <v-card-subtitle class="pt-4">Next Post</v-card-subtitle>
            <v-card-title>{{ nextPost.title }}</v-card-title>
            <v-card-text class="opacity-80">
              {{ nextPost.summary }}
            </v-card-text>
            <v-card-actions>
              <v-btn :to="`/ai-lab/${nextPost.id}`" variant="text" color="primary"> Read </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>

  <div v-else>
    <v-alert type="warning" variant="tonal"> 글을 찾을 수 없습니다. </v-alert>
  </div>
</template>

<style scoped>
.detail-body {
  max-width: 860px;
}

.post-content {
  white-space: pre-line;
  line-height: 1.95;
  font-size: 1.05rem;
}
</style>
