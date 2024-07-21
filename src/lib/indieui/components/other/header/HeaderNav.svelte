<script lang="ts">
  import { cn } from "$lib/utils";
  import { tv, type VariantProps } from "tailwind-variants";

  let headerVariants = tv({
    base: "mx-auto",
    variants: {
      variant: {
        default: "max-w-7xl ",
        centered:
          "max-w-4xl md:rounded-full mt-2 md:border shadow-lg dark:border-zinc-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });
  type Variant = VariantProps<typeof headerVariants>["variant"];

  export let sticky: boolean = true;
  export let variant: Variant = "default";
  export let headerLinks = [
    { name: "Features", href: "/header-demo/#features" },
    { name: "Pricing", href: "/header-demo/#pricing" },
    { name: "FAQs", href: "/header-demo/#faqs" },
  ];
  // Mobile Part :
  import Button from "$lib/components/ui/button/button.svelte";
  import { XIcon, MenuIcon } from "lucide-svelte";
  let isOpen = false;
  import Xsvg from "./examples/x.svg";
  import GithubSvg from "./examples/github.svg";
  import { slide } from "svelte/transition";
  //    Mobile Comps
  export let icons = [
    {
      name: "Twitter",
      icon: Xsvg,
      href: "https://twitter.com",
    },
    {
      name: "Github",
      icon: GithubSvg,
      href: "https://github.com",
    },
  ];
</script>

<header
  class="{cn(
    'w-full dark:bg-transparent  bg-zinc-50 z-40',
    sticky && variant == 'centered' && 'md:sticky top-3',
    sticky && variant == 'default' && 'md:sticky top-0 backdrop-blur'
  )} "
>
  <div
    class={cn(
      "hidden md:block z-[1000] backdrop-blur",
      headerVariants({ variant })
    )}
  >
    <div
      class="flex-row flex justify-start items-center px-6 py-3 w-full gap-2"
    >
      <slot name="Logo"></slot>
      <div class="flex justify-end grow">
        <nav class="grow flex-row flex justify-end gap-10 lg:gap-8">
          {#each headerLinks as { name, href }, i}
            <a {href}>
              {name}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
  <div
    class={cn(
      "md:hidden px-4 pt-2",
      isOpen && "min-h-screen z-40 dark:bg-zinc-950 bg-zinc-50 size-full"
    )}
  >
    <div class="flex-row flex pb-2">
      <slot name="Logo"></slot>
      <Button
        variant="animated"
        class="absolute top-1.5 right-2"
        on:click={() => (isOpen = !isOpen)}
        size="sm"
      >
        {#if isOpen}
          <XIcon strokeWidth="1.4" height={12} width={12} />
        {:else}
          <MenuIcon strokeWidth="1.4" height={12} width={12} />
        {/if}
      </Button>
    </div>
    {#if isOpen}
      <dailog
        in:slide={{ duration: 300, delay: 0 }}
        out:slide={{ duration: 300, delay: 0 }}
        open={isOpen}
        class={isOpen
          ? "animate-popover-in flex flex-col gap-3 h-full w-full pt-4 px-4 bg-inherit"
          : "hidden"}
      >
        {#each headerLinks as { name, href }, i}
          <Button
            {href}
            variant="outline"
            class="w-full rounded-xl md:rounded-none justify-center"
            >{name}</Button
          >
        {/each}
        <div
          class="flex-row justify-end w-full gap-3 border-t pt-4 border-dashed"
        >
          {#if icons}
            <div class="flex-row justify-center flex grow gap-2">
              {#each icons as item}
                <Button
                  class="rounded-full md:rounded-none text-white bg-white"
                  size="icon"
                  variant="outline"
                >
                  <img
                    src={item.icon}
                    height="20"
                    width="20"
                    alt="img"
                    class="text-white"
                  />
                </Button>
              {/each}
            </div>
          {/if}
        </div>
      </dailog>
    {/if}
  </div>
</header>
