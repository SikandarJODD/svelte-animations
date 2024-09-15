<script>
  import { spring } from "svelte/motion";

  const variants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
    },
  };
  let variantOne = spring(
    {
      x: 0,
      rotate: 0,
    },
    {
      stiffness: 0.2,
      damping: 0.9,
    }
  );
  let variantTwo = spring(
    {
      x: 0,
      rotate: 0,
    },
    {
      stiffness: 0.2,
      damping: 0.8,
    }
  );
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    variantOne.set(variants.animate);
    variantTwo.set(variantsSecond.animate);
  }}
  on:mouseleave={() => {
    variantOne.set(variants.initial);
    variantTwo.set(variantsSecond.initial);
  }}
  class="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
>
  <div
    style="transform: rotate({$variantOne.rotate}deg) translateX({$variantOne.x}px);"
    class="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
  >
    <div
      class="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
    />
    <div class="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
  </div>
  <div
    style="transform: rotate({$variantTwo.rotate}deg) translateX({$variantTwo.x}px);"
    class="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
  >
    <div class="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
    <div
      class="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
    />
  </div>
  <div
    style="transform: rotate({$variantOne.rotate}deg) translateX({$variantOne.x}px);"
    class="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
  >
    <div
      class="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
    />
    <div class="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
  </div>
</div>
