<script lang="ts">
  import {
    useTransform,
    useSpring,
    useMotionValue,
    AnimatePresence,
  } from "svelte-motion";
  import { writable } from "svelte/store";
  import { Motion } from "svelte-motion";
  import type { MotionValue } from "svelte-motion";
  import { fade } from "svelte/transition";

  export let containerX: MotionValue<number>;
  export let mouseX: MotionValue<number>;
  export let title;
  export let icon;
  export let href;

  let ref: HTMLElement;

  let distance = useTransform(mouseX, (val) => {
    const bounds = ref?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
      left: 0,
    };

    const XDiffToContainerX = bounds?.x - containerX.get();

    return val - bounds?.width / 2 - XDiffToContainerX;
  });
  let widthSync = useTransform(distance, [-110, 0, 110], [40, 80, 40]);
  //   Adjust stiffness and damping as per needs
  let width = useSpring(widthSync, { stiffness: 400, damping: 25 });

  let hovered = writable(false);

  function handleMouseEnter() {
    hovered.set(true);
  }

  function handleMouseLeave() {
    hovered.set(false);
  }
</script>

<a {href}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <Motion
    let:motion
    style={{
      width: width,
    }}
    transition={{
      bounceDamping: 300,
      bounceStiffness: 800,
      bounce: 0.3,
      duration: 0.8,
    }}
  >
    <div
      use:motion
      bind:this={ref}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      class="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative group"
    >
      {#if $hovered}
        <div
          in:fade
          out:fade
          class="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
        >
          {title}
        </div>
      {/if}
      <div class="flex items-center  justify-center group-hover:scale-125 transition-all duration-200">
        <svelte:component
          this={icon}
          strokeWidth={1.4}
          class=" text-neutral-500 dark:text-neutral-300"
        />
      </div>
    </div>
  </Motion>
</a>
