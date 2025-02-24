<script>
  import { cn } from "$lib/utils";

  export let shadowColor = "white";
  let className = "";
  export { className as class };
</script>

<span
  style="--shadow-color: {shadowColor}"
  class={cn(
    "relative z-0 inline-flex",
    "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
    "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
    "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
    "after:animate-line-shadow",
    className
  )}
>
  <slot></slot>
</span>
