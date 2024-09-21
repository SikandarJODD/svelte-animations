<script>
  import { cn } from "$lib/utils";
  let _class = "";
  export { _class as class };
</script>

<div
  class={cn(
    `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
    _class
  )}
>
  <slot></slot>
</div>
