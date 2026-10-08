<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import AppFooter from './components/AppFooter.vue'
import { projects } from './data/projects.js'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    <main class="flex-1">
      <HeroSection />
      <ProjectGrid :projects="projects" />
    </main>
    <AppFooter />
  </div>
</template>
