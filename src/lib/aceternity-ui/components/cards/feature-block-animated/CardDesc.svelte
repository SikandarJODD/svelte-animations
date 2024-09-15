<script>
  import { cn } from "$lib/utils";
  let className = "";
  export { className as class };
</script>

<p
  class={cn(
    "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
    className
  )}
>
  <slot></slot>
</p>
