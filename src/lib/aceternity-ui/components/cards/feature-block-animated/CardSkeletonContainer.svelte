<script>
  import { cn } from "$lib/utils";
  export let showGradient = false;
  export let className = "";
</script>

<div
  class={cn(
    "h-[15rem] md:h-[20rem] rounded-xl z-40",
    className,
    showGradient &&
      "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
  )}
>
  <slot></slot>
</div>
