<script>
  import { cn } from "$lib/utils";
  let className = "";
  export { className as class };
</script>

<h3
  class={cn(
    "text-lg font-semibold text-gray-800 dark:text-white py-2",
    className
  )}
>
  <slot></slot>
</h3>
