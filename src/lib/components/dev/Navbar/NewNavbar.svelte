<script>
  import GithubSvg from "$lib/svg/web/github.svg";
  import TwitterSvg from "$lib/svg/web/x.svg";
  import { page } from "$app/stores";
  import SearchComp from "../searchComp/SearchComp.svelte";
  import { fade } from "svelte/transition";

  export let mainNavs = [
    { link: "/", name: "Home" },
    { link: "/", name: "Components" },
    { link: "/changelog", name: "Changelog" },
    { link: "/templates/developer-portfolio", name: "Templates" },
  ];
  let miniNav = [
    { link: "/magic", name: "Magic UI" },
    { link: "/in", name: "Indie UI" },
    { link: "/examples", name: "Examples" },
    { link: "/luxe", name: "Luxe Components" },
  ];
  import * as HoverCard from "$lib/components/ui/hover-card";
  import { cn } from "$lib/utils";
  import { navs } from "$lib";
  import { slide } from "svelte/transition";
  import Button from "$lib/components/ui/button/button.svelte";
  let ismobileMenuOpen = false;
  let openComponents = false;
  $: routeId = $page.url.pathname;
</script>

<nav class="bg-background/50 border-b sticky top-0 z-50 backdrop-blur-md">
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
                  <HoverCard.Content class="z-50 w-fit">
                    <div class="w-fit">
                      <div class="grid md:grid-cols-6 gap-2.5">
                        {#each miniNav as item, i}
                          <div
                            class={cn(
                              "rounded-lg h-20 ",
                              i == 0 && "md:col-span-4 md:row-span-4 md:h-full",
                              i == 1 && "md:col-span-2",
                              i == 2 && "md:col-span-2 md:row-span-3",
                              i == 3 && "md:col-span-6"
                            )}
                          >
                            <a
                              on:click={() => (openComponents = false)}
                              href={item.link}
                              class="relative size-full rounded-lg flex justify-center items-center bg-zinc-200 dark:bg-zinc-950 border text-md px-6 dark:hover:bg-zinc-900/70 transition-all duration-200 {i ==
                              3
                                ? 'shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]'
                                : ''}  "
                            >
                              {#if i === 3}
                                <span>
                                  <span
                                    class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
                                  />
                                </span>
                                <span
                                  class="backdrop absolute inset-px rounded-[11px] bg-zinc-950 transition-colors duration-200"
                                />
                              {/if}
                              <span class="z-50">
                                {item.name}
                              </span>
                            </a>
                          </div>
                        {/each}
                      </div>
                    </div>
                  </HoverCard.Content>
                </HoverCard.Root>
              {:else}
                <a
                  href={link}
                  class="rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/20 transition-all duration-200 hover:text-white"
                  >{name}</a
                >
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
          class="w-full max-w-lg lg:max-w-80 flex justify-center items-center gap-3"
        >
          <SearchComp />
          <Button
            variant="link"
            href="https://github.com/SikandarJODD/svelte-animations?tab=readme-ov-file#simple-components"
            target="_blank"
            size="icon"
            class='hidden sm:block'
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
