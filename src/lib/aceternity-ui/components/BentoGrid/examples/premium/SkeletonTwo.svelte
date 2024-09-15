<script>
  import { spring} from "svelte/motion";

  let initial = 0;
  let animate = 100;
  let variantOne = spring(initial, {
    stiffness: 0.8,
    damping: 1.2,
  });

  let getRandom = () => {
    return Math.random() * (100 - 40) + 40;
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    variantOne.set(animate);
  }}
  on:mouseleave={() => {
    variantOne.set(initial);
  }}
  class="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
>
  {#each { length: 6 } as item}
    <div
      style="
        width : {$variantOne}%;
        max-width: {getRandom()}%;
      "
      class="transition-all duration-300 flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-gradient-to-r from-black to-zinc-950 w-full h-4"
    ></div>
  {/each}
</div>
