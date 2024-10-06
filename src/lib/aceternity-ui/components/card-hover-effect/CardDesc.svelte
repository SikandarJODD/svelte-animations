<script>
  import { cn } from "$lib/utils";

  let _class = "";
  export { _class as class };
</script>

<p
  class={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", _class)}
>
  <slot></slot>
</p>
