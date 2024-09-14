<script>
  import { spring } from "svelte/motion";

  const one = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
    },
  };
  const two = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
    },
  };

  let variantOne = spring(one.initial, {
    stiffness: 0.2,
    damping: 1,
  });

  let variantTwo = spring(two.initial, {
    stiffness: 0.2,
    damping: 1,
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    variantOne.set(one.animate);
    variantTwo.set(two.animate);
  }}
  on:mouseleave={() => {
    variantOne.set(one.initial);
    variantTwo.set(two.initial);
  }}
  class="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
>
  <div
    style="transform: translateX({$variantOne.x}px) rotate({$variantOne.rotate}deg);"
    class="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
  >
    <img
      src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
      alt="avatar"
      height="100"
      width="100"
      class="rounded-full h-10 w-10"
    />
    <p class="text-xs text-neutral-500">
      There are a lot of cool framerworks out there like React, Angular, Vue,
      Svelte that can make your life ....
    </p>
  </div>
  <div
    style="transform: translateX({$variantTwo.x}px) rotate({$variantTwo.rotate}deg);"
    class="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
  >
    <p class="text-xs text-neutral-500">Use PHP.</p>
    <div
      class="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
    />
  </div>
</div>
