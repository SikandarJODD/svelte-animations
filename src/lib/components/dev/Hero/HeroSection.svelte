<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import DotBackground from "$lib/components/ui/GridDotBg/DotBackground.svelte";
  import GridAndDotBg from "$lib/components/ui/GridDotBg/GridAndDotBg.svelte";
  import Spotlight from "$lib/components/ui/spotlight/Spotlight.svelte";
</script>

<DotBackground>
  <div
    class="relative flex h-[50vh] md:h-[100vh] overflow-hidden rounded-md px-8 antialiased md:items-center md:justify-center lg:px-32"
  >
    <!-- <Spotlight className="-top-40 left-0 md:left-72 md:-top-32" fill="#BAFAFF" /> -->
    <div class=" relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
      <h2
        class="bg-opacity-50 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
      >
        Svelte Animations
      </h2>
      <p
        class="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"
      >
        Simple Svelte animations for your projects build using Spring, Tweened,
        and <a
          href="https://svelte-motion.gradientdescent.de"
          class="underline underline-offset-2">Svelte Motion</a
        >
      </p>
      <div class="flex justify-center items-center mt-6 gap-3 flex-wrap">
        <Button href="/examples" size="sm">Components</Button>
        <Button href="/learnings" size="sm">Framer Motion</Button>
      </div>
      <div class="flex justify-center items-center mt-2 flex-wrap">
        <Button href='/luxe' size="sm" variant='secondary'>Luxe Components</Button>
      </div>
    </div>
  </div>
</DotBackground>
