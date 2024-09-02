<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { page } from "$app/stores";
  import { navs } from "$lib";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  type compNavs = {
    id: number;
    heading: string;
    sub: {
      name: string;
      link: string;
      isNew?: boolean;
      target_blank?: boolean;
    }[];
  };
  export let componentsNav: compNavs[] = [
    {
      id: 1,
      heading: "Follow for Updates",
      sub: [
        {
          name: "Twitter @Sikandar_Bhide",
          link: "https://twitter.com/Sikandar_Bhide",
          target_blank: true,
        },
      ],
    },
    {
      id: 2,
      heading: "Installation",
      sub: [
        {
          name: "Install Sveltekit",
          link: "/a/install-sveltekit",
        },
        {
          name: "Install Tailwind CSS",
          link: "/a/install-tailwindcss",
        },
        {
          name: "Add Utilities",
          link: "/a/add-utilities",
        },
      ],
    },
    {
      id: 3,
      heading: "Components",
      sub: [
        {
          name: "Lens",
          link: "/a/components/lens",
        },
        {
          name: "Bento Grid",
          link: "/a/components/bento-grid",
        },
      ],
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
        : 'translate-x-0'} transition-opacity ease-linear duration-300 fixed inset-0 dark:bg-background"
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
        <div class="flex grow flex-col overflow-y-auto px-6 m-0 p-0">
          <div
            class="flex h-14 shrink-0 items-center border-b border-primary/50"
          >
            <a href="/" class="ml-2 mt-px text-xl font-semibold"
              >Svelte Aceternity UI</a
            >
          </div>
          <nav class="flex flex-1 flex-col">
            {#key mobileMenu}
              <div
                class="transition-all duration-150 bg-[#161616dc] px-3"
                transition:slide
              >
                {#each navs as item}
                  <a
                    href={item.link}
                    class="group {item.link === routeID
                      ? 'text-primary font-medium rounded-md bg-background/80'
                      : 'text-primary/60'} flex gap-x-3 p-2 text-sm leading-6"
                  >
                    {item.name}
                  </a>
                {/each}
              </div>
            {/key}
            <ul role="list" class="flex flex-1 flex-col gap-y-7 mt-4">
              <li>
                <ul role="list" class="-mx-2">
                  {#each componentsNav as cnavs}
                    <div class="mb-3">
                      <div class="font-medium mb-0.5">
                        {cnavs.heading}
                      </div>
                      {#each cnavs.sub as item}
                        <li>
                          <a
                            on:click={() => {
                              mobileMenu = !mobileMenu;
                            }}
                            href={item.link}
                            class="group {item.link === routeID
                              ? 'text-primary  bg-gray-600/20'
                              : 'text-primary/60'} flex gap-x-3 rounded-md py-[6px] px-3 text-sm leading-6"
                          >
                            {item.name}
                          </a>
                        </li>
                      {/each}
                    </div>
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
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col mt-[57.9px]"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-0 overflow-y-auto dark:border-primary/20 border-r dark:bg-background bg-white pl-6 pr-4"
      >
        <nav class="flex flex-1 flex-col mt-2 mb-32">
          <a href="/" class="font-bold text-xl mx-1 mt-3 mb-2"
            >Svelte Aceternity UI</a
          >
          <ul role="list" class="flex flex-1 flex-col">
            {#each componentsNav as item}
              <li class="mb-1">
                <ul role="list">
                  <li>
                    <div
                      class="text-primary/95 font-semibold text-md leading-6 pt-2 pb-1"
                    >
                      {item.heading}
                    </div>
                  </li>
                  {#each item.sub as subItem}
                    <li>
                      <a
                        href={subItem.link}
                        target={subItem.target_blank ? "_blank" : ""}
                        class="group {subItem.link == routeID
                          ? 'text-primary  border-border font-medium'
                          : 'text-primary/60 '} capitalize flex justify-between items-center gap-x-2.5 p-2 text-sm leading-6 select-none pl-3 py-[5.2px] border border-transparent rounded-sm hover:translate-x-1.5 hover:text-emerald-500 tracking-normal transition-all duration-200"
                      >
                        {subItem.name}
                        {#if subItem?.isNew}
                          <Badge variant="success">New</Badge>
                        {/if}
                      </a>
                    </li>
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  {/if}

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 dark:bg-background border-b bg-white backdrop-blur-md px-4 py-4 shadow-sm sm:px-6 lg:hidden"
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
    <a href="/" class="flex-1 text-sm font-semibold leading-6 text-primary">
      Svelte Animations
    </a>
  </div>

  <main class="py-6 lg:pl-64">
    <div class="px-4 sm:px-6 lg:px-10">
      <slot></slot>
    </div>
  </main>
</div>
