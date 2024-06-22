<script>
  import { onMount } from "svelte";
  import { draw, slide } from "svelte/transition";

  let navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Examples",
      link: "/examples",
    },
    {
      name: "Framer Motion",
      link: "/learnings",
    },
  ];
  let loading = false;
  onMount(() => {
    loading = true;
  });

  let paths = ["M21 4H2", "M18 8H6", "M19 12H9", "M16 16h-6", "M11 20H9"];

  let mobileMenu = false;
</script>

<nav
  class="border-b border-primary/20 sticky top-0 bg-white/40 backdrop-blur-md"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-14 items-center justify-between">
      <div class="flex items-center w-full">
        <div class="flex-shrink-0">
          {#if loading}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-tornado"
              ><path transition:draw={{ delay: 1200 }} d={paths[0]} /><path
                transition:draw={{ delay: 800 }}
                d={paths[1]}
              /><path transition:draw={{ delay: 500 }} d={paths[2]} /><path
                transition:draw={{ delay: 400 }}
                d={paths[3]}
              /><path transition:draw d={paths[4]} /></svg
            >
          {/if}
        </div>
        <div class="hidden sm:ml-6 sm:block w-full mt-1.5">
          <div class="flex justify-center items-center">
            {#each navs as item}
              <a
                href={item.link}
                class="rounded-md px-3 py-2 text-sm overpass-mono"
                >{item.name}</a
              >
            {/each}
          </div>
        </div>
      </div>

      <div class="-mr-2 flex sm:hidden">
        <!-- Mobile menu button -->
        <button
          on:click={() => (mobileMenu = !mobileMenu)}
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-primary/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>

          <svg
            class="{mobileMenu ? 'hidden' : 'block'} h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            class="{mobileMenu ? 'block' : 'hidden'} h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#key mobileMenu}
    <div class="{mobileMenu ? 'flex' : 'hidden'} sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2" transition:slide>
        {#each navs as item}
          <a
            on:click={() => (mobileMenu = false)}
            href={item.link}
            class="block rounded-md px-3 py-2 text-sm overpass-mono"
            >{item.name}</a
          >
        {/each}
      </div>
    </div>
  {/key}
</nav>

<style>
</style>
