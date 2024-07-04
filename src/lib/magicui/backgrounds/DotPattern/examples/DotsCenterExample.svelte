<script>
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";
</script>

<div
  class="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
>
  <!-- Just Delete this P tag for Viewing the Dot Center Pattern -->
  <p
    class="z-10 whitespace-pre-wrap text-center text-5xl font-medium  text-black dark:text-white"
  >
    Svelte
  </p>
  <DotPattern
    class="[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
  />
</div>
