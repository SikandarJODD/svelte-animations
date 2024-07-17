<script>
  import { cn } from "$lib/utils";

  let className = "";
  export { className as class };
</script>

<div
  class={cn(
    "h-px w-full via-zinc-400 from-[1%] from-zinc-200 to-zinc-600 absolute -z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500",
    className
  )}
></div>
