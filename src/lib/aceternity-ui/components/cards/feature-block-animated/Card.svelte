<script>
  import { cn } from "$lib/utils";
  let className = "";
  export { className as class };
</script>

<div
  class={cn(
    "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
    className
  )}
>
  <slot></slot>
</div>
