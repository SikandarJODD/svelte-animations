<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 dark:bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:hover:border-cyan-300 dark:hover:bg-[#051a22] transition-all duration-200 cursor-pointer",
    className
  )}
>
  <slot></slot>
</div>
