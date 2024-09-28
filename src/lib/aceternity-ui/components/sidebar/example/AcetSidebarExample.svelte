<script lang="ts">
  import {
    ArrowLeft,
    Bolt,
    Home,
    Settings,
    UserCircle2,
    Squircle,
  } from "lucide-svelte";
  import { slide } from "svelte/transition";

  // Checkout Installation Guide for more details regarding the following imports
  import SidebarBody from "../SidebarBody.svelte";
  import { vopen } from "../svelteContent";
  import SidebarLink from "../SidebarLink.svelte";

  interface LinkItem {
    label: string;
    href: string;
    icon: any;
  }

  const links: LinkItem[] = [
    { label: "Dashboard", href: "#", icon: Home },
    { label: "Profile", href: "#", icon: UserCircle2 },
    { label: "Settings", href: "#", icon: Settings },
    { label: "Logout", href: "#", icon: ArrowLeft },
  ];
</script>

<div class="flex justify-center items-center h-[90vh] w-64 md:w-[50rem]">
  <div
    class="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-[60vh]"
  >
    <SidebarBody class="justify-between gap-10">
      <div class="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {#if $vopen}
          <a
            href="/"
            class="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
          >
            <div
              class="h-5 w-5 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"
            ></div>
            <span
              in:slide={{ axis: "x" }}
              class="font-medium text-black dark:text-white whitespace-pre"
            >
              Bhide Labs
            </span>
          </a>
        {:else}
          <a
            href="/"
            class="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
          >
            <div
              class="h-5 w-5 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"
            ></div>
          </a>
        {/if}
        <div class="mt-8 flex flex-col gap-2">
          {#each links as link}
            <SidebarLink {link} />
          {/each}
        </div>
      </div>
      <div>
        <SidebarLink
          link={{
            label: "Sikandar Bhide",
            href: "#",
            icon: Squircle,
          }}
        />
      </div>
    </SidebarBody>

    <!-- Dashboard -->
    <div class="flex flex-1">
      <div
        class="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full"
      >
        <div class="flex gap-2">
          {#each { length: 4 } as _, i}
            <div
              class="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse {i <=
              2
                ? 'hidden sm:block'
                : 'block'}"
            ></div>
          {/each}
        </div>
        <div class="flex gap-2 flex-1">
          {#each { length: 2 } as _, i}
            <div
              class="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse {i <
              1
                ? 'hidden sm:block'
                : 'block'}"
            ></div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
