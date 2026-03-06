<script setup>
import { aiLabPosts } from "@/data/aiLabPosts";

const latestPosts = aiLabPosts.slice(0, 3);

const getInitial = (title) => {
  return title.charAt(0).toUpperCase();
};

const techStack = ["Vue 3", "Vuetify", "SCSS", "PWA", "Vite", "GitHub Pages"];
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="home-hero__grid"></div>
      <div class="home-hero__glow home-hero__glow--one"></div>
      <div class="home-hero__glow home-hero__glow--two"></div>

      <div class="home-hero__inner">
        <div class="home-hero__badge">
          <span class="home-hero__badge-dot"></span>
          Coolming AI Lab
        </div>

        <h1 class="home-hero__title">
          Build with AI.<br />
          <span class="home-hero__title--gradient">Learn with AI.</span><br />
          Experiment with AI.
        </h1>

        <p class="home-hero__desc">
          AI와 함께 만들고, 기록하고, 확장하는 쿨밍의 실험실. 바이브코딩, PWA, UI 시스템, 그리고 실전형 프론트엔드
          기록을 차곡차곡 쌓아가는 공간.
        </p>

        <div class="home-hero__actions">
          <v-btn to="/ai-lab" color="primary" size="x-large" rounded="pill" variant="flat"> Explore AI Lab </v-btn>

          <v-btn to="/contact" size="x-large" rounded="pill" variant="outlined" class="home-hero__outline-btn">
            Contact
          </v-btn>
        </div>

        <div class="home-hero__chips">
          <v-chip v-for="tech in techStack" :key="tech" size="small" variant="outlined" class="home-hero__chip">
            {{ tech }}
          </v-chip>
        </div>

        <div class="home-hero__stats">
          <div class="hero-stat-card">
            <div class="hero-stat-card__icon">
              <v-icon size="18">mdi-flask-outline</v-icon>
            </div>
            <div class="hero-stat-card__label">Project</div>
            <div class="hero-stat-card__value">Coolming AI Lab</div>
            <div class="hero-stat-card__sub">AI 실험과 기록</div>
          </div>

          <div class="hero-stat-card">
            <div class="hero-stat-card__icon">
              <v-icon size="18">mdi-layers-outline</v-icon>
            </div>
            <div class="hero-stat-card__label">Stack</div>
            <div class="hero-stat-card__value">Vue · Vuetify · PWA</div>
            <div class="hero-stat-card__sub">구조부터 배포까지</div>
          </div>

          <div class="hero-stat-card">
            <div class="hero-stat-card__icon">
              <v-icon size="18">mdi-rocket-launch-outline</v-icon>
            </div>
            <div class="hero-stat-card__label">Focus</div>
            <div class="hero-stat-card__value">Vibe Coding</div>
            <div class="hero-stat-card__sub">만들면서 배우는 흐름</div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section">
      <div class="section-title">Latest AI Lab</div>

      <v-row>
        <v-col v-for="post in latestPosts" :key="post.id" cols="12" md="4">
          <v-card class="ai-card latest-card" :to="`/ai-lab/${post.id}`" rounded="xl">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" size="44" class="latest-card__avatar">
                  {{ getInitial(post.title) }}
                </v-avatar>
              </template>

              <v-card-title>
                {{ post.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ post.date }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="latest-card__summary">
              {{ post.summary }}
            </v-card-text>

            <v-card-actions>
              <v-btn :to="`/ai-lab/${post.id}`" variant="text" color="primary"> Read Article </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="home-section">
      <div class="section-title">Explore</div>

      <v-row>
        <v-col cols="12" md="4">
          <v-card class="feature-card" to="/ai-lab" rounded="xl">
            <v-card-item>
              <template #prepend>
                <div class="feature-card__icon">
                  <v-icon size="28">mdi-flask-outline</v-icon>
                </div>
              </template>

              <v-card-title>AI Lab</v-card-title>
            </v-card-item>

            <v-card-text> AI 실험과 바이브코딩 기록을 차근차근 정리하는 공간 </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card" to="/templates" rounded="xl">
            <v-card-item>
              <template #prepend>
                <div class="feature-card__icon">
                  <v-icon size="28">mdi-view-grid-outline</v-icon>
                </div>
              </template>

              <v-card-title>Templates</v-card-title>
            </v-card-item>

            <v-card-text> 앞으로 확장할 UI 템플릿과 구조 자산을 모아둘 공간 </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card" to="/services" rounded="xl">
            <v-card-item>
              <template #prepend>
                <div class="feature-card__icon">
                  <v-icon size="28">mdi-robot-outline</v-icon>
                </div>
              </template>

              <v-card-title>AI Tools</v-card-title>
            </v-card-item>

            <v-card-text> AI 개발 흐름, 도구, 실전 활용 아이디어를 정리하는 영역 </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
