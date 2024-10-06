<script>
  import { cn } from "$lib/utils";

  let _class = "";
  export { _class as class };
</script>

<h4 class={cn("text-zinc-100 font-bold tracking-wide mt-4", _class)}>
  <slot></slot>
</h4>
