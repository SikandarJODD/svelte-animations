<script lang="ts">
  import { slide } from "svelte/transition";
  import { vopen } from "./svelteContent";
  import { Menu, X } from "lucide-svelte";
  export let className = "";
</script>

<div
  class="h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-fit"
>
  <button
    on:click={() => {
      vopen.update((v) => !v);
      console.log("open");
    }}
    class="flex justify-end z-50 w-full"
  >
    <Menu class="text-neutral-800 dark:text-neutral-200" />
  </button>

  {#if $vopen}
    <div
      transition:slide={{ axis: "x", duration: 300 }}
      class="fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[400] flex flex-col justify-between {className}"
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
        on:click={() => {
          vopen.update((v) => !v);
        }}
      >
        <X />
      </div>
      <slot></slot>
    </div>
  {/if}
</div>
