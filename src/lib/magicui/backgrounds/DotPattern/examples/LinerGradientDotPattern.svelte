<script>
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";
</script>

<div
  class="relative flex h-52 w-full mx-3 md:mx-0 lg:w-3/5 items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
>
  <p
    class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black   dark:bg-gradient-to-br dark:from-white dark:via-neutral-400 dark:to-neutral-700 dark:text-transparent dark:bg-clip-text"
  >
    Gradient Dots
  </p>
  <DotPattern
    width={20}
    height={20}
    cx={10}
    cy={10}
    cr={1}
    class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
  />
</div>
