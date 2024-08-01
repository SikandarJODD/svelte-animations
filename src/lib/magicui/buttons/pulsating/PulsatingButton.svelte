<script lang="ts">
  import { cn } from "$lib/utils";

  export let pulseColor: string = "#0096ff";
  export let duration: string = "1.5s";
  let className: string = "";
  export { className as class };
</script>

<button
  class={cn(
    "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
    className
  )}
  style:--pulse-color={pulseColor}
  style:--duration={duration}
>
  <div class="relative z-10">
    <slot>Button</slot>
  </div>
  <div
    class="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2"
  />
</button>
