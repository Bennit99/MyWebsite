<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  url: { type: String, default: '#' },
  delay: { type: Number, default: 0 }
})
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block rounded-2xl bg-bg-surface border border-border-subtle overflow-hidden transition-all duration-300 ease-out hover:bg-bg-surface-hover hover:border-border-hover hover:shadow-2xl hover:shadow-glow-violet/10 hover:-translate-y-1 border-gradient animate-fade-in-up"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <!-- Image container -->
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="image"
        :alt="`Screenshot of ${title}`"
        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content -->
    <div class="p-5 sm:p-6">
      <h3 class="text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-tag-bg text-tag-text border border-border-subtle transition-colors duration-200 group-hover:border-border-hover"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>
