<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { cn } from "$lib/utils";
  export let value = 100;
  export let initial = 0;
  export let duration = 6000;
  let num = tweened(initial, {
    duration: duration,
    easing: cubicOut,
  });
  let className: any = "";
  export { className as class };
  onMount(() => {
    num.set(value);
  });
</script>

<div
  class={cn(
    "inline-block  text-black dark:text-white tracking-normal",
    className
  )}
  {...$$restProps}
>
  {$num.toFixed(0)}
</div>
