<script lang="ts">
  import { Button as ButtonPrimitive } from "bits-ui";
  import { type Events, type Props, buttonVariants } from "./index.js";
  import { cn } from "$lib/utils.js";

  type $$Props = Props;
  type $$Events = Events;

  let className: $$Props["class"] = undefined;
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export let builders: $$Props["builders"] = [];
  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  on:click
  on:keydown
>
  {#if variant === "animated"}
    <span>
      <span
        class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
      />
    </span>
    <span
      class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"
    />
    <span class="z-10 text-neutral-400 text-sm font-medium">
      <slot>Button</slot>
    </span>
  {:else}
    <slot />
  {/if}
</ButtonPrimitive.Root>
