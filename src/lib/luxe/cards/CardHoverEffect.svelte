<script lang="ts">
  import { Motion, AnimatePresence, AnimateSharedLayout } from "svelte-motion";
  import { cn } from "$lib/utils";

  let hoverdIdx = 0;
  const items = [
    {
      id: 1,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
    {
      id: 2,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
    {
      id: 3,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
  ];
  export let containerClassName = "";
  export let hoveredItemClassName = "";
  export let itemClassName = "";
</script>

<div class={cn("grid md:grid-cols-3 px-32 py-32", containerClassName)}>
  {#each items as one}
    <a
      href={one.href}
      target="_blank"
      on:mouseenter={() => (hoverdIdx = one.id)}
      on:mouseleave={() => (hoverdIdx = 0)}
      class="relative flex flex-col gap-3 p-4"
    >
      <AnimatePresence let:item list={[{ key: 1 }, { key: 2 }, { key: 3 }]}>
        {#if hoverdIdx === one.id}
          <Motion
            layoutId="cardHoverEffect"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
            let:motion
          >
            <span
              use:motion
              class="absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-900 cardHoverEffect"
            >
            </span>
          </Motion>
        {/if}
      </AnimatePresence>
      <div class="z-[1] space-y-3">
        <h1 class="font-medium text-white">{one.title}</h1>
        <p class="text-neutral-400">{one.description}</p>
      </div>
    </a>
  {/each}
</div>
