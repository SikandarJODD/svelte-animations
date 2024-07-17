<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";
  import { XIcon, MenuIcon } from "lucide-svelte";
  let isOpen = false;
</script>

<div
  class={cn(
    "md:hidden px-4 pt-2",
    isOpen && "min-h-screen z-40 dark:bg-zinc-950 bg-zinc-50 size-full"
  )}
>
  <div class="fle-row pb-2">
    <Button
      variant="animated"
      class="absolute top-2 right-2"
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </Button>
  </div>
  <dailog
    open={isOpen}
    class={isOpen
      ? "animate-popover-in flex flex-col gap-3 h-full w-full pt-4 px-4 bg-inherit"
      : "hidden"}
  >
    <slot name="mobileItems"></slot>
  </dailog>
</div>
