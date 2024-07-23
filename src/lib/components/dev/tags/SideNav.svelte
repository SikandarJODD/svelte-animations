<script>
  import { page } from "$app/stores";
  import { navs } from "$lib";
  import { onMount } from "svelte";
  import { blur, fade, scale, slide } from "svelte/transition";

  export let examplesList = [
    {
      name: "Div Hover",
      link: "/examples/1",
    },
    {
      name: "Example 2",
      link: "/examples/2",
    },
  ];

  let mobileMenu = true;
  let isLoading = false;
  $: routeID = $page.url.pathname;
  onMount(() => {
    isLoading = true;
  });
</script>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div
    class="relative lg:hidden transition-opacity ease-linear duration-300 {mobileMenu
      ? 'opacity-0 z-10'
      : 'opacity-100 z-50 '} "
    role="dialog"
    aria-modal="true"
  >
    <div
      class="{mobileMenu
        ? '-translate-x-full'
        : 'translate-x-0'} transition-opacity ease-linear duration-300 fixed inset-0 bg-gray-900/80"
    ></div>

    <div
      class="{mobileMenu
        ? '-translate-x-full'
        : 'translate-x-0'} fixed inset-0 flex
      transition ease-in-out duration-300 transform
      "
    >
      <div
        class="{mobileMenu
          ? 'opacity-0'
          : 'opacity-100'} ease-in-out duration-300 relative mr-16 flex w-full max-w-xs flex-1"
      >
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button
            on:click={() => {
              mobileMenu = !mobileMenu;
            }}
            type="button"
            class="-m-2.5 p-2.5"
          >
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
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

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col overflow-y-auto dark:bg-slate-900 bg-white px-6 m-0 p-0"
        >
          <div
            class="flex h-16 shrink-0 items-center border-b border-primary/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-tornado"
              ><path d="M21 4H3" /><path d="M18 8H6" /><path
                d="M19 12H9"
              /><path d="M16 16h-6" /><path d="M11 20H9" /></svg
            >
            <span class="ml-2 overpass-mono mt-px">Svelte Animations</span>
          </div>
          <nav class="flex flex-1 flex-col">
            {#key mobileMenu}
              <div class="transition-all duration-150" transition:slide>
                {#each navs as item}
                  <a
                    href={item.link}
                    class="group {item.link === routeID
                      ? 'text-primary font-medium rounded-md'
                      : 'text-primary/60'} flex gap-x-3 p-2 text-sm leading-6"
                  >
                    {item.name}
                  </a>
                {/each}
              </div>
            {/key}
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2">
                  {#each examplesList as item}
                    <li>
                      <a
                        on:click={() => {
                          mobileMenu = !mobileMenu;
                        }}
                        href={item.link}
                        class="group {item.link === routeID
                          ? 'text-primary'
                          : 'text-primary/60'} flex gap-x-3 rounded-md p-2 text-sm leading-6"
                      >
                        {item.name}
                      </a>
                    </li>
                  {/each}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- in:fly={{ x: -200, duration: 600 }} -->
  <!-- Static sidebar for desktop -->
  {#if isLoading}
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col mt-16"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-0 overflow-y-auto border-r border-gray-300 dark:border-primary/40 bg-background  px-6"
      >
        <a href="/" class="mt-4 mb-0 font-semibold text-xl"
          >Svelte Animations</a
        >
        <nav class="flex flex-1 flex-col mt-2 mb-16">
          <ul role="list" class="flex flex-1 flex-col">
            <li>
              <ul role="list" class="-mx-3">
                {#each examplesList as item}
                  <a
                    href={item.link}
                    class="flex justify-between items-center transition-all duration-150 hover:text-primary px-2 rounded-md group hover:bg-gray-800/50"
                  >
                    <div
                      class="group flex {item.link == routeID
                        ? 'text-primary  font-medium'
                        : 'text-primary/60 font-thin '}  transition-all duration-150 rounded-md p-2 text-md group-hover:text-primary"
                    >
                      {item.name}
                    </div>
                    {#if item.link == routeID}
                      <svg
                        in:blur
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#A5FAC7"
                        stroke="#525252"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-circle"
                        ><circle cx="12" cy="12" r="10" /></svg
                      >
                    {/if}
                  </a>
                {/each}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  {/if}

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 dark:bg-slate-900 bg-white backdrop-blur-md px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button
      on:click={() => (mobileMenu = !mobileMenu)}
      type="button"
      class="-m-2.5 p-2.5 text-primary/70 lg:hidden"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
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
    </button>
    <div class="flex-1 text-sm font-semibold leading-6 text-primary">
      Svelte Framer Motion
    </div>
  </div>

  <main class="py-6 lg:pl-60 bg-background  min-h-screen">
    <div class="px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </main>
</div>
