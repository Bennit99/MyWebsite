<script setup>
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: { type: Array, required: true }
})
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          My <span class="text-gradient">Projects</span>
        </h1>
        <p class="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of software projects I've built — from full-stack web apps to developer tools.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tags="project.tags"
          :url="project.url"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>
