<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;
  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<div
  class={cn(
    "p-3 md:p-8 min-h-[250px] flex items-center justify-center shadow border border-neutral-900 rounded-xl touch-none",
    className
  )}
  {...$$restProps}
>
  <slot></slot>
</div>
