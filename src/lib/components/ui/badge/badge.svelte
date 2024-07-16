<script lang="ts">
  import { type Variant, badgeVariants } from "./index.js";
  import { cn } from "$lib/utils.js";

  let className: string | undefined | null = undefined;
  export let href: string | undefined = undefined;
  export let variant: Variant = "default";
  export { className as class };
</script>

<svelte:element
  this={href ? "a" : "span"}
  {href}
  class={cn(badgeVariants({ variant, className }))}
  {...$$restProps}
>
  <!-- {#if variant === "animated"}
    <span>
      <span
        class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
      />
    </span>
    <span
      class="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200"
    />
    <span class="z-10 text-neutral-400 text-xs font-medium">
      <slot>Badge</slot>
    </span>
  {:else if variant === "rotate_shine"}
    <div class="relative inline-flex overflow-hidden rounded-full p-px">
      <span
        class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"
      />
      <span
        class="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl"
      >
        <slot>Badge</slot>
        </span>
        </div>
        {:else} -->
  <slot>Badge</slot>
  <!-- {/if} -->
</svelte:element>
