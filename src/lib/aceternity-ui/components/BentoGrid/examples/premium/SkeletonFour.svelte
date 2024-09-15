<script>
  import { spring } from "svelte/motion";

  let first = {
    initial: {
      x: 28,
      rotate: -6,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  let second = {
    initial: {
      x: -28,
      rotate: 6,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  let variantOne = spring(first.initial, {
    stiffness: 0.2,
    damping: 1,
  });

  let variantTwo = spring(second.initial, {
    stiffness: 0.2,
    damping: 1,
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    variantOne.set(first.hover);
    variantTwo.set(second.hover);
  }}
  on:mouseleave={() => {
    variantOne.set(first.initial);
    variantTwo.set(second.initial);
  }}
  class="flex flex-1 w-full h-full min-h-[11.6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
>
  <div
    style="transform: translateX({$variantOne.x}px) rotate({$variantOne.rotate}deg);"
    class="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
  >
    <img
      src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
      alt="avatar"
      height="100"
      width="100"
      class="rounded-full h-10 w-10"
    />
    <p
      class="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4"
    >
      Just code in Vanilla Javascript
    </p>
    <p
      class="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4"
    >
      Delusional
    </p>
  </div>
  <div
    class="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
  >
    <img
      src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
      alt="avatar"
      height="100"
      width="100"
      class="rounded-full h-10 w-10"
    />
    <p
      class="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4"
    >
      Tailwind CSS is cool, you know
    </p>
    <p
      class="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4"
    >
      Sensible
    </p>
  </div>
  <div
    style="transform: translateX({$variantTwo.x}px) rotate({$variantTwo.rotate}deg);"
    class="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
  >
    <img
      src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
      alt="avatar"
      height="100"
      width="100"
      class="rounded-full h-10 w-10"
    />
    <p
      class="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4"
    >
      I love angular, RSC, and Redux.
    </p>
    <p
      class="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4"
    >
      Helpless
    </p>
  </div>
</div>
