<script>
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";
</script>

<div class="flex justify-center items-center h-96">
  <div
    class="relative flex h-52 w-full mx-3 md:mx-0 md:w-2/5 items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
  >
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Dot Pattern
    </p>
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
    />
  </div>
</div>
