<script lang="ts">
  import { fly } from "svelte/transition";
  import IconLayoutNavbarCollapse from "$lib/svg/tabler/layout-navbar-collapse.svg";

  interface Item {
    title: string;
    icon: any;
    href: string;
  }

  export let items: Item[] = [];
  export let className: string = "";

  let open: boolean = false;
  const toggleOpen = (): void => {
    open = !open;
  };
</script>

<div class={`relative top-32 block md:hidden ${className}`}>
  {#if open}
    <div class="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
      {#each items as item, idx (item.title)}
        <div
          class="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
          in:fly|global={{ y: 10, delay: (items.length - idx) * 50 }}
          out:fly|global={{ y: 10, delay: idx * 50 }}
          style="transition-delay: {idx * 50}ms;"
        >
          <a href={item.href} class="h-4 w-4">
            <!-- <img
                src={item.icon}
                alt="svg_icons"
                class="h-full w-full text-neutral-500 dark:text-neutral-300"
              /> -->
            <svelte:component
              this={item.icon}
              strokeWidth={1.4}
              class="h-full w-full text-neutral-500 dark:text-neutral-300"
            />
          </a>
        </div>
      {/each}
    </div>
  {/if}
  <button
    on:click={toggleOpen}
    class="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
  >
    <img
      src={IconLayoutNavbarCollapse}
      alt="svg_icons"
      class="h-5 w-5 text-neutral-500 dark:text-neutral-300"
    />
  </button>
</div>

<style>
  .transition-delay {
    transition-delay: 0.05s;
  }
</style>
