<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border-subtle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-text-muted">
          &copy; {{ currentYear }} Bennit. All rights reserved.
        </p>
        <p class="text-sm text-text-muted">
          Built with
          <span class="text-gradient font-medium">Vue.js</span>
          &
          <span class="text-gradient font-medium">Tailwind CSS</span>
        </p>
      </div>
    </div>
  </footer>
</template>
