<script>
//   Previous Components
  // Modify these
  export let MAIN_CIRCLE_SIZE = 180;
  export let MAIN_CIRCLE_OPACITY = 0.24;
  export let NUM_CIRCLES = 5;
  export let HEIGHT = 60;
  export let WIDTH = 60;
</script>

<div class="absolute left-1/2 top-1/2 h-[50%] w-[50%] overflow-visible">
  {#each { length: NUM_CIRCLES } as item, i}
    <div
      class="absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-neutral-100"
      style="
            width: {MAIN_CIRCLE_SIZE + i * HEIGHT}px;
            height: {MAIN_CIRCLE_SIZE + i * WIDTH}px;
            opacity: {MAIN_CIRCLE_OPACITY - i * 0.04};
            animationDelay: {i * 0.06}s"
    ></div>
  {/each}
</div>
