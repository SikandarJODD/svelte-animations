<script lang="ts">
  import { cn } from "$lib/utils";
  let className: any = "";
  export { className as class };
</script>

<div class={cn("grid w-full auto-rows-[20rem] grid-cols-3 gap-4", className)}>
  <slot></slot>
</div>
