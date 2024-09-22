<script lang="ts">
  import { fly } from "svelte/transition";
  import IconLayoutNavbarCollapse from "$lib/svg/tabler/layout-navbar-collapse.svg";
  import { spring } from "svelte/motion";

  interface Item {
    title: string;
    icon: any;
    href: string;
  }

  export let items: Item[] = [];
  export let className: string = "";

  let open: boolean = false;
  const springParams = { stiffness: 0.1, damping: 0.2 };

  const layoutId = spring(0, springParams);
  const toggleOpen = (): void => {
    open = !open;
  };
</script>

<div class={`relative block md:hidden ${className}`}>
  {#if open}
    <div
      class="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
      transition:fly|local
    >
      {#each items as item, idx (item.title)}
        <div
          class="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
          transition:fly={{ y: 10 }}
          style="transition-delay: {idx * 50}ms"
        >
          <a href={item.href} class="h-4 w-4">
            <img
              src={item.icon}
              alt="svg_icons"
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
