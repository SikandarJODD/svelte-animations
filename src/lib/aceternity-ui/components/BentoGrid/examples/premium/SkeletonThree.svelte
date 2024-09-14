<script>
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  let colorChange = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    colorChange.set(100);
  }}
  on:mouseleave={() => {
    colorChange.set(0);
  }}
  class="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
  style="
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    background-position: {$colorChange}% 50%;
    "
>
  <div class="h-full w-full rounded-lg"></div>
</div>
