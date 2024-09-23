<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut, linear } from "svelte/easing";

  export let containerClassName = "";
  export let className = "";
  export let duration = 1;
  export let clockwise = true;
  export let as = "button";

  let hovered = false;

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };
  let values1 = [20.7, 50, 50, 0, 0, 0, 100];
  let values2 = [16.6, 43.1, 0, 50, 0, 0, 100];
  let values3 = [20.7, 50, 50, 100, 0, 0, 100];
  let values4 = [16.2, 41.199999999999996, 100, 50, 0, 0, 100];
  let allValues = [values1, values2, values3, values4];

  let t1 = tweened(0, { duration: 1000, easing: linear });
  let t2 = tweened(0, { duration: 1000, easing: linear });
  let t3 = tweened(0, { duration: 1000, easing: linear });
  let t4 = tweened(0, { duration: 1000, easing: linear });

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";
  let index = 0;

  let hightlightValues = [75, 181.15942028985506, 50, 50, 0, 0, 100];
  let hl1 = tweened(0, { duration: 1000, easing: cubicOut });
  let hl2 = tweened(0, { duration: 1000, easing: cubicOut });

  onMount(() => {
    let interval;
    if (!hovered) {
      interval = setInterval(() => {
        if (clockwise) {
          if (index === 0) {
            index = 3;
          } else {
            index--;
          }
        } else {
          if (index === 3) {
            index = 0;
          } else {
            index++;
          }
        }
        t1.set(allValues[index][0]);
        t2.set(allValues[index][1]);
        t3.set(allValues[index][2]);
        t4.set(allValues[index][3]);
      }, duration * 1000);
    }
    return () => clearInterval(interval);
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={as}
  on:mouseenter={() => {
    hovered = true;
    hl1.set(hightlightValues[0]);
    hl2.set(hightlightValues[1]);
  }}
  on:mouseleave={() => {
    hl1.set(0);
    hl2.set(0);
  }}
  class={`relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit ${containerClassName}`}
  {...$$props}
>
  <div
    class={`w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit] ${className}`}
  >
    <slot />
  </div>
  <div
    class="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
    style="filter: blur(2px); position: absolute; width: 100%; height: 100%;
        background : {hovered
      ? `radial-gradient(${$t1}% ${$t2}% at ${$t3}% ${$t4}%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(${$hl2}% ${$hl1}% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)`
      : `radial-gradient(${$t1}% ${$t2}% at ${$t3}% ${$t4}%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)`};
      "
  ></div>
  <div
    class="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
  ></div>
</svelte:element>
