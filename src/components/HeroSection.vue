<script setup>
import { siPython, siTypescript, siVuedotjs, siTailwindcss, siPytorch, siDocker, siGit } from 'simple-icons'

const skills = [
  { name: 'Python', icon: siPython.path, color: `#${siPython.hex}` },
  { name: 'TypeScript', icon: siTypescript.path, color: `#${siTypescript.hex}` },
  { name: 'Vue.js', icon: siVuedotjs.path, color: `#${siVuedotjs.hex}` },
  { name: 'Tailwind CSS', icon: siTailwindcss.path, color: `#${siTailwindcss.hex}` },
  { name: 'PyTorch', icon: siPytorch.path, color: `#${siPytorch.hex}` },
  { name: 'Java', icon: 'M14.542 16.591a.227.227 0 0 1 .184-.132.253.253 0 0 1 .187.054c.224.238 2.052 2.046 5.378 1.488a.193.193 0 0 1 .207.112.215.215 0 0 1-.027.226c-1.848 2.375-5.467 1.543-6.136.963a.194.194 0 0 1 .207-.311zm7.147-3.056c.071.18-.047.382-.266.452a3.834 3.834 0 0 1-1.077.106 6.387 6.387 0 0 1-1.638-.288 8.868 8.868 0 0 0-4.66.079.176.176 0 0 1-.227-.148.196.196 0 0 1 .147-.234c2.502-1.026 5.867.067 7.27.067a2.235 2.235 0 0 0 .848-.157.215.215 0 0 1 .28.096v.027zm1.144 2.871a2.825 2.825 0 0 0-.256-.474 1.401 1.401 0 0 0-1.815-.55 3.013 3.013 0 0 0-.854.675 2.766 2.766 0 0 0 1.25.132c.626 0 1.428-.431 1.58-.296.229.201-.135 1.13-2.072 1.346a.35.35 0 0 0-.282.269c-.067.242.067.431.255.431 2.368.04 3.012-1.25 3.125-1.533h.013c.094-.282.027-.511-.027-.55l-.013-.013h-.013c.094 0 .094 0 .094-.013h.013v.578zm-.834.78a2.64 2.64 0 0 1-1.87 1.6 3.023 3.023 0 0 1-1.076.08 7.3 7.3 0 0 1-1.815-.363c-.31-.107-.633-.215-.983-.336a11.517 11.517 0 0 0-3.32-.485c-1.33 0-2.327.35-3.053 1.05a.17.17 0 0 1-.135.04.184.184 0 0 1-.107-.228c.35-1.022 1.656-1.547 3.324-1.547a11.114 11.114 0 0 1 3.23.472 40.54 40.54 0 0 0 2.271.646c.861.215 1.587.31 2.18.255.941-.094 1.493-.62 1.52-1.05.012-.228-.069-.376-.23-.443a.174.174 0 0 1-.093-.229.191.191 0 0 1 .228-.094c.323.134.525.43.525.794a1.705 1.705 0 0 1-.59 1.183l-.027.027zm-1.801-4.994c.053.135-.041.283-.216.323a3.527 3.527 0 0 1-1.344.027 5.674 5.674 0 0 1-1.4-.296c-1.25-.376-2.61-.59-4.008-.59a7.357 7.357 0 0 0-2.906.496.177.177 0 0 1-.215-.093.187.187 0 0 1 .094-.23c2.757-1.156 5.86-1.076 8.524.283 1.05.538 1.425.04 1.425.04s.094.04.094.134l-.048-.094zm.847 6.136c.216.202.161.472-.12.606a6.83 6.83 0 0 1-2.96.62 12.006 12.006 0 0 1-5.69-1.386.195.195 0 0 1-.095-.255.19.19 0 0 1 .256-.094 11.597 11.597 0 0 0 5.488 1.345 6.476 6.476 0 0 0 2.61-.51c.214-.108.309-.136.323-.108.107 0 .094-.04.094-.04-.041.014-.014-.014.094.04v.054a.434.434 0 0 1-.013-.269zm-10.598-6.19c-.31.026-.593-.055-.747-.215a.39.39 0 0 1-.095-.31c.148-1.062.808-1.507 1.508-1.748 1.13-.377 2.394-.43 3.578.43-1.036-.31-1.924-.04-2.543.51-.592.51-.888 1.252-1.701 1.334z', color: '#007396' },
  { name: 'Docker', icon: siDocker.path, color: `#${siDocker.hex}` },
  { name: 'Git', icon: siGit.path, color: `#${siGit.hex}` }
]
</script>

<template>
  <section class="relative overflow-hidden py-16 sm:py-20 lg:py-28">
    <!-- Background glow effects -->
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <!-- Profile image -->
        <div class="relative shrink-0 animate-fade-in-up">
          <div class="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-2 ring-border-subtle shadow-2xl shadow-glow-violet/20">
            <img
              src="/MyWebsite/images/profile.jpg"
              alt="Bennit Strack"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative ring -->
          <div class="absolute inset-0 rounded-full ring-1 ring-accent-cyan/20 scale-110 pointer-events-none"></div>
        </div>

        <!-- Text content -->
        <div class="text-center lg:text-left animate-fade-in-up" style="animation-delay: 150ms">
          <p class="text-sm sm:text-base font-medium text-accent-cyan tracking-wide uppercase mb-2">
            Welcome
          </p>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Hi, I'm <span class="text-gradient">Bennit Strack</span>
          </h1>
          <p class="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
            Business Informatics student passionate about full-stack development and deep learning.
            Currently pursuing my M.Sc. at CAU Kiel, with a focus on building innovative solutions
            that bridge AI research and modern web technologies.
          </p>

          <!-- Skill pills -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 max-w-2xl mx-auto lg:mx-0">
            <span
              v-for="skill in skills"
              :key="skill.name"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-tag-bg text-tag-text border border-border-subtle hover:border-border-hover hover:text-text-primary transition-colors duration-200"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" :fill="skill.color">
                <path :d="skill.icon" />
              </svg>
              {{ skill.name }}
            </span>
          </div>

          <!-- CTA links -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="https://github.com/Bennit99/"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="GitHub Profile Click"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white text-sm font-semibold shadow-lg shadow-glow-violet/20 hover:shadow-glow-cyan/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bennit-strack/"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="LinkedIn Profile Click"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-surface border border-border-subtle text-text-primary text-sm font-semibold hover:bg-bg-surface-hover hover:border-border-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:bennit.strack@gmail.com"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-surface border border-border-subtle text-text-primary text-sm font-semibold hover:bg-bg-surface-hover hover:border-border-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contact
            </a>
            <a
              href="/MyWebsite/Bennit_Strack_CV.pdf"
              target="_blank"
              data-umami-event="Resume Download"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-surface border border-border-subtle text-text-primary text-sm font-semibold hover:bg-bg-surface-hover hover:border-border-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
