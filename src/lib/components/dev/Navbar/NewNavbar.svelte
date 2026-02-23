<script>
  import GithubSvg from "$lib/svg/web/github.svg";
  import TwitterSvg from "$lib/svg/web/x.svg";
  import { page } from "$app/stores";
  import SearchComp from "../searchComp/SearchComp.svelte";
  import { fade } from "svelte/transition";
  import {
    Sparkles,
    Layers,
    Grid2x2,
    Gem,
    Code2,
    BookOpen,
    Bot,
    Megaphone,
    FileText,
    ExternalLink,
  } from "lucide-svelte";

  export let mainNavs = [
    { link: "/", name: "Home" },
    { link: "/", name: "Components" },
    { link: "/changelog", name: "Changelog" },
    { link: "/", name: "Projects" },
    { link: "/templates/saas-template", name: "Templates" },
  ];
  let miniNav = [
    {
      link: "/magic",
      name: "Magic UI",
      desc: "Animated effects, components, and backgrounds.",
      icon: Sparkles,
    },
    {
      link: "/a",
      name: "Svelte Aceternity UI",
      desc: "Modern UI blocks ported for Svelte projects.",
      icon: Layers,
    },
    {
      link: "/in/cards-simple",
      name: "Indie UI",
      desc: "Clean components with practical patterns.",
      icon: Grid2x2,
    },
    {
      link: "/luxe",
      name: "Luxe Components",
      desc: "Premium style components and effects.",
      icon: Gem,
    },
    {
      link: "/examples/1",
      name: "Examples",
      desc: "Ready-to-run usage examples and demos.",
      icon: Code2,
    },
    {
      link: "/learnings",
      name: "Framer Learnings",
      desc: "Framer-motion inspired learning resources.",
      icon: BookOpen,
    },
  ];
  let projectsNav = [
    {
      name: "Svelte AI Elements",
      link: "https://svelte-ai-elements.vercel.app",
      desc: "AI-ready UI elements built for modern Svelte apps.",
      icon: Bot,
      accent: "emerald",
    },
    {
      name: "Svelte Marketing Components",
      link: "https://sv-blocks.vercel.app",
      desc: "Marketing-focused sections and conversion-ready blocks.",
      icon: Megaphone,
      accent: "amber",
    },
    {
      name: "Svelte Form Builder",
      link: "https://svelte-form-builder.vercel.app",
      desc: "Build and manage forms quickly with a Svelte-first workflow.",
      icon: FileText,
      accent: "rose",
    },
  ];
  import * as HoverCard from "$lib/components/ui/hover-card";
  import { navs } from "$lib";
  import { slide } from "svelte/transition";
  import Button from "$lib/components/ui/button/button.svelte";
  let ismobileMenuOpen = false;
  let openComponents = false;
  let openProjects = false;
  $: routeId = $page.url.pathname;
</script>

<nav class="bg-background/50 border-b sticky top-9 z-[100] backdrop-blur-md">
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <div class="relative flex h-14 items-center justify-between">
      <div class="flex items-center px-2 lg:px-0">
        <a href="/" class="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-tab-slash"
            ><path d="m14.5 9.5-5 5" /><path
              d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
            /><path d="M22 20H2" /></svg
          >
        </a>
        <div class="hidden lg:ml-6 lg:block">
          <div class="flex space-x-3">
            {#each mainNavs as { link, name }}
              {#if name === "Components"}
                <HoverCard.Root
                  open={openComponents}
                  openDelay={150}
                  closeDelay={200}
                  onOpenChange={(isOpen) => (openComponents = isOpen)}
                >
                  <HoverCard.Trigger
                    class="flex gap-0.5 items-center rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/20 transition-all duration-200 hover:text-white"
                    >Components
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide transition-all duration-200 lucide-chevron-right mt-0.5 {openComponents
                        ? 'rotate-90 '
                        : ''}"><path d="m9 18 6-6-6-6" /></svg
                    >
                  </HoverCard.Trigger>
                  <HoverCard.Content
                    class="z-50 w-[34rem] border-none bg-zinc-950 p-0 shadow-2xl"
                  >
                    <div
                      class="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-1"
                    >
                      <div
                        class="rounded-xl border border-zinc-800/80 bg-zinc-950/90 px-4 py-3"
                      >
                        <p class="text-base font-semibold text-zinc-100">
                          Component Sections
                        </p>
                        <p class="text-sm text-zinc-400">
                          Browse UI libraries and learning resources.
                        </p>
                      </div>

                      <div class="mt-1 grid grid-cols-1 gap-1 md:grid-cols-2">
                        {#each miniNav as item}
                          <a
                            on:click={() => (openComponents = false)}
                            href={item.link}
                            class="group rounded-xl border border-zinc-800/80 bg-zinc-950/90 p-3 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900"
                          >
                            <div class="flex items-start gap-3">
                              <div
                                class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm border border-zinc-700 bg-zinc-900 text-zinc-300 group-hover:border-zinc-500 group-hover:text-zinc-100"
                              >
                                <svelte:component
                                  this={item.icon}
                                  class="size-4"
                                  strokeWidth={1.8}
                                />
                              </div>
                              <div class="min-w-0">
                                <p
                                  class="text-sm font-semibold leading-5 text-zinc-100"
                                >
                                  {item.name}
                                </p>
                                <p
                                  class="mt-0.5 text-xs leading-5 text-zinc-400"
                                >
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </a>
                        {/each}
                      </div>

                      <a
                        on:click={() => (openComponents = false)}
                        href="/templates/saas-template"
                        class="group relative mt-1 block overflow-hidden rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-600/20 via-emerald-500/10 to-emerald-600/20 p-3 transition-all duration-300 hover:border-emerald-400/60 hover:from-emerald-500/25 hover:to-emerald-500/25"
                      >
                        <span
                          class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <span
                            class="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[230%]"
                          />
                        </span>
                        <div
                          class="relative flex items-center justify-between gap-3"
                        >
                          <div>
                            <p class="text-sm font-semibold text-emerald-100">
                              Premium Startup Template
                            </p>
                            <p class="text-xs text-emerald-200/90">
                              Use code <span class="font-mono font-semibold"
                                >ILOVESVELTE</span
                              > for 30% Off
                            </p>
                          </div>
                          <span
                            class="rounded-md border border-emerald-300/40 bg-emerald-500/20 px-2 py-1 text-[11px] font-semibold text-emerald-100"
                          >
                            30% OFF
                          </span>
                        </div>
                      </a>
                    </div>
                  </HoverCard.Content>
                </HoverCard.Root>
              {:else if name === "Projects"}
                <HoverCard.Root
                  open={openProjects}
                  openDelay={150}
                  closeDelay={200}
                  onOpenChange={(isOpen) => (openProjects = isOpen)}
                >
                  <HoverCard.Trigger
                    class="flex gap-0.5 items-center rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/20 transition-all duration-200 hover:text-white"
                    >Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide transition-all duration-200 lucide-chevron-right mt-0.5 {openProjects
                        ? 'rotate-90 '
                        : ''}"><path d="m9 18 6-6-6-6" /></svg
                    >
                  </HoverCard.Trigger>
                  <HoverCard.Content
                    class="z-50 w-[34rem] border-none bg-zinc-950 p-0 shadow-2xl"
                  >
                    <div
                      class="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-1"
                    >
                      <div
                        class="rounded-xl border border-zinc-800/80 bg-zinc-950/90 px-4 py-3"
                      >
                        <p class="text-base font-semibold text-zinc-100">
                          Svelte Project Ecosystem
                        </p>
                        <p class="text-sm text-zinc-400">
                          Explore my production-ready Svelte projects.
                        </p>
                      </div>

                      <div class="mt-1 grid grid-cols-1 gap-1 md:grid-cols-2">
                        {#each projectsNav as item, i}
                          <a
                            on:click={() => (openProjects = false)}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            class="group rounded-xl border border-zinc-800/80 bg-zinc-950/90 p-3 transition-all duration-200 {i ===
                            2
                              ? 'md:col-span-2'
                              : ''} {item.accent === 'emerald'
                              ? 'hover:border-emerald-500/70 hover:bg-emerald-500/10 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2)]'
                              : item.accent === 'amber'
                                ? 'hover:border-amber-500/70 hover:bg-amber-500/10 hover:shadow-[0_0_0_1px_rgba(245,158,11,0.2)]'
                                : 'hover:border-rose-500/70 hover:bg-rose-500/10 hover:shadow-[0_0_0_1px_rgba(244,63,94,0.2)]'}"
                          >
                            <div class="flex items-start justify-between gap-3">
                              <div class="flex min-w-0 items-start gap-3">
                                <div
                                  class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 group-hover:border-zinc-500 group-hover:text-zinc-100"
                                >
                                  <svelte:component
                                    this={item.icon}
                                    class="size-4"
                                    strokeWidth={1.8}
                                  />
                                </div>
                                <div class="min-w-0">
                                  <p
                                    class="text-sm font-semibold leading-5 text-zinc-100"
                                  >
                                    {item.name}
                                  </p>
                                  <p
                                    class="mt-0.5 text-xs leading-5 text-zinc-400"
                                  >
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                              <ExternalLink
                                class="mt-0.5 size-3.5 shrink-0 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-200"
                                strokeWidth={1.8}
                              />
                            </div>
                          </a>
                        {/each}
                      </div>
                    </div>
                  </HoverCard.Content>
                </HoverCard.Root>
              {:else}
                <a
                  href={link}
                  class="rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/20 transition-all duration-200 hover:text-white {name ===
                  'Templates'
                    ? 'bg-zinc-800/90 text-primary'
                    : ''}"
                  >{name}
                </a>
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <div
        transition:fade
        class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end items-center"
      >
        <div
          class="w-full max-w-lg lg:max-w-80 flex justify-center items-center gap-1 md:gap-3"
        >
          <SearchComp />
          <Button
            variant="link"
            href="https://github.com/SikandarJODD/svelte-animations?tab=readme-ov-file#simple-components"
            target="_blank"
            size="icon"
            class="hidden sm:flex"
          >
            <img src={GithubSvg} alt="twitter_logo" class="size-6" />
          </Button>
          <Button
            variant="link"
            href="https://twitter.com/Sikandar_Bhide"
            target="_blank"
            size="icon"
          >
            <img src={TwitterSvg} alt="twitter_logo" class="size-5" />
          </Button>
        </div>
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => (ismobileMenuOpen = !ismobileMenuOpen)}
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
          <svg
            class="{ismobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
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
          <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
          <svg
            class="{ismobileMenuOpen ? 'block' : 'hidden'}  h-6 w-6"
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
  {#key ismobileMenuOpen}
    <div
      class="lg:hidden {ismobileMenuOpen ? 'flex' : 'hidden'}"
      id="mobile-menu"
    >
      <div class="space-y-1 px-2 pb-3 pt-2" transition:slide>
        {#each navs as { link, name }}
          <a
            on:click={() => (ismobileMenuOpen = false)}
            href={link}
            class="block rounded-md px-3 py-1.5 text-base text-gray-300 transition-all duration-200"
            >{name}</a
          >
        {/each}
      </div>
    </div>
  {/key}
</nav>
