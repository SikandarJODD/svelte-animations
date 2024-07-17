<script lang="ts">
  import { page } from "$app/stores";
  import { navs } from "$lib";
  import SearchComp from "$lib/components/dev/searchComp/SearchComp.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  type compNavs = {
    id: number;
    heading: string;
    sub: { name: string; link: string; isNew?: boolean }[];
  };
  export let componentsNav: compNavs[] = [
    {
      id: 1,
      heading: "Getting Started",
      sub: [
        {
          name: "Browse Components",
          link: "/magic",
        },
      ],
    },
    {
      id: 5,
      heading: "Components",
      sub: [
        {
          name: "Orbiting Circles",
          link: "/magic/orbiting-circles",
        },
        {
          name: "Marquee",
          link: "/magic/marquee",
        },
        {
          name: "Bento Grid",
          link: "/magic/bento-grid",
        },
        {
          name: "Simple Cards",
          link: "/magic/simple-cards",
        },
        {
          name: "Animated Beam",
          link: "/magic/animated-beam",
          isNew: true,
        },
        {
          name: "File Tree",
          link: "/magic/file-tree",
          isNew: true,
        },
      ],
    },
    {
      id: 6,
      heading: "Special Effects",
      sub: [
        {
          name: "Meteors",
          link: "/magic/meteors",
        },
        {
          name: "Border Beam",
          link: "/magic/border-beam",
        },
      ],
    },
    {
      id: 7,
      heading: "Animations",
      sub: [
        {
          name: "Blur Fade",
          link: "/magic/blur-fade",
          isNew: true,
        },
      ],
    },
    {
      id: 2,
      heading: "Backgrounds",
      sub: [
        {
          name: "Dot Pattern",
          link: "/magic/dot-pattern",
        },
        {
          name: "Ripple",
          link: "/magic/ripple",
          isNew: true,
        },
        {
          name: "Grid Pattern",
          link: "/magic/grid-pattern",
        },
        {
          name: "Background Boxes",
          link: "/magic/bg-boxes",
        },
      ],
    },
    {
      id: 3,
      heading: "Buttons",
      sub: [
        {
          name: "Shimmer Button",
          link: "/magic/shimmer-button",
        },
      ],
    },
    {
      id: 4,
      heading: "Text Animations",
      sub: [
        {
          name: "Text Reveal",
          link: "/magic/text-reveal",
        },
        {
          name: "Number Ticker",
          link: "/magic/number-ticker",
        },
        {
          name: "Animated Gradient Text",
          link: "/magic/animated-gradient-text",
        },
        {
          name: "Animated Shiny Text",
          link: "/magic/animated-shiny-text",
        },
        {
          name: "Box Reveal",
          link: "/magic/box-reveal",
        },
        {
          name: "Flip Text",
          link: "/magic/flip-text",
        },
        {
          name: "Gradual Spacing",
          link: "/magic/gradual-spacing",
        },
        {
          name: "Letter Pull up",
          link: "/magic/letter-pull-up",
        },
        {
          name: "Words Fade In",
          link: "/magic/words-fade-in",
        },
        {
          name: "Words Pull Up",
          link: "/magic/words-pull-up",
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
              >Svelte Components</a
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
                      {#each cnavs.sub.sort((a, b) => {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (b.name > a.name) {
                          return -1;
                        }
                        return 0;
                      }) as item}
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
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col mt-6"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-0 overflow-y-auto dark:border-primary/40 dark:bg-background bg-white pl-6 pr-4"
      >
        <nav class="flex flex-1 flex-col mt-2 mb-32">
          <a href="/" class="font-bold text-xl mx-1 mt-3 mb-2 text-center"
            >Svelte Animations</a
          >
          <div class="mb-4">
            <SearchComp />
          </div>

          <ul role="list" class="flex flex-1 flex-col">
            {#each componentsNav as item}
              <li class="mb-1">
                <ul role="list">
                  <li>
                    <div
                      class="text-primary/95 font-semibold text-md leading-6 pt-2 pb-0.5"
                    >
                      {item.heading}
                    </div>
                  </li>
                  {#each item.sub.sort((a, b) => {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (b.name > a.name) {
                      return -1;
                    }
                    return 0;
                  }) as subItem}
                    <li>
                      <a
                        href={subItem.link}
                        class="group {subItem.link == routeID
                          ? 'text-primary bg-sky-100 dark:bg-neutral-900 border-border font-medium'
                          : 'text-primary/60 '} capitalize flex justify-between items-center gap-x-3 p-2  text-sm leading-6 select-none pl-3 py-[5.2px] border border-transparent rounded-sm dark:hover:bg-neutral-900 transition-all duration-300"
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
      Svelte Components
    </a>
  </div>

  <main class="py-6 lg:pl-64">
    <div class="px-4 sm:px-6 lg:px-10">
      <slot></slot>
    </div>
  </main>
</div>
