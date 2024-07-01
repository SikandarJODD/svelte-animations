<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import DotBackground from "$lib/components/ui/GridDotBg/DotBackground.svelte";
  import GridAndDotBg from "$lib/components/ui/GridDotBg/GridAndDotBg.svelte";
  import Spotlight from "$lib/components/ui/spotlight/Spotlight.svelte";
  import ButtonAnimatedBorder from "$lib/luxe/buttons/ButtonAnimatedBorder.svelte";
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
        Svelte Tailwind Components
      </h2>
      <p
        class="mx-auto mt-4 max-w-lg text-center text-base md:text-lg font-normal text-neutral-300"
      >
        Components are build using Tailwind CSS,Tweened, Spring and <a
          href="https://svelte-motion.gradientdescent.de"
          class=" text-teal-300">Svelte Motion</a
        >
      </p>
      <div class="flex justify-center items-center mt-6 gap-3 flex-wrap">
        <Button href="/examples">Components</Button>
        <Button href="/learnings">Framer Motion</Button>
      </div>
      <div class="flex justify-center items-center mt-4 flex-wrap">
        <ButtonAnimatedBorder href="/luxe">Luxe Component</ButtonAnimatedBorder>
        <!-- <Button href="/luxe"  variant="secondary"
          >Luxe Components</Button
        > -->
      </div>
    </div>
  </div>
</DotBackground>
