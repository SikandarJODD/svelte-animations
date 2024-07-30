<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  export let text: string = "Typing Animation";
  export let duration: number = 200;
  let className: string = "";
  export { className as class };
  
  let displayedText = "";
  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        displayedText = text.slice(0, i + 1);
        i++;
      } else {
        clearInterval(interval);
      }
    }, duration);
    return () => clearInterval(interval);
  });
</script>

<h1
  class={cn(
    "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm transition-all",
    className
  )}
>
  {displayedText ? displayedText : text}
</h1>
