<script>
  import BorderBeam from "$lib/magicui/SpecialEffects/BorderBeam/BorderBeam.svelte";
</script>

<article
  class="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
>
  <BorderBeam size={150} duration={12} />
  <div class="flex items-center gap-x-4 text-xs">
    <time datetime="2020-03-16" class="text-gray-300">June 7, 2024</time>
    <a
      href="https://github.com/SikandarJODD"
      class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-gray-200 border border-gray-100"
      >Svelte-Components</a
    >
  </div>
  <div class="group relative">
    <h3
      class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50"
    >
      <a href="/">
        <span class="absolute inset-0"></span>
        Animation Svelte
      </a>
    </h3>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
      Welcome to Svelte Animation website. This website includes Qualtiy
      Tailwind CSS and Framer Motion Components. Inspired from <span
        class="text-gray-300 underline underline-offset-2">Magic UI</span
      >
      and <span class="text-gray-300 underline underline-offset-2">Luxe</span>
      Componenets.
    </p>
  </div>
  <div class="relative mt-8 flex items-center gap-x-4">
    <img
      src="https://avatars.githubusercontent.com/u/93428946?v=4"
      alt="bhide"
      class="h-10 w-10 rounded-full bg-gray-50"
    />
    <div class="text-sm leading-5">
      <p class="font-semibold text-white">
        <a href="https://github.com/SikandarJODD">
          <span class="absolute inset-0"></span>
          Sikandar Bhide
        </a>
      </p>
      <p class="text-gray-500">Svelte Developer</p>
    </div>
  </div>
</article>
