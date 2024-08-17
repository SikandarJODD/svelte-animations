<script>
  // Scroll below to see the original Component code
  import Particles from "../Particles.svelte";
</script>

<div
  class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
>
  <span
    class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
  >
    Svelte Particles
  </span>
  <Particles className="absolute inset-0" refresh={true} />
</div>
