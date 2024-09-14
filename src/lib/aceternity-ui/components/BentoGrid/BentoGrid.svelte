<script>
  import { cn } from "$lib/utils";

  let _class = "";
  export { _class as class };
</script>

<div
  class={cn(
    "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
    _class
  )}
>
  <slot></slot>
</div>
