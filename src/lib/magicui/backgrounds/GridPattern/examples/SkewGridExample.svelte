<script>
  import { cn } from "$lib/utils";
  import GridPattern from "../GridPattern.svelte";
</script>

<div
  class="relative flex h-fit w-full max-w-[36rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
>
  <p
    class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
  >
    Grid Pattern
  </p>
  <GridPattern
    squares={[
      [4, 4],
      [5, 1],
      [8, 2],
      [6, 6],
      [10, 5],
      [13, 3],
    ]}
    class={cn(
      "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
    )}
    fillColor="rgb(156 163 175 / 0.3)"
  />
</div>
