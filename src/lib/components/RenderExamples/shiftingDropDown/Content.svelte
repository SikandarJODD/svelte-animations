<script>
	import Nub from './../../../../routes/motion/Nub.svelte';
    import { Motion } from "svelte-motion";
    import Products from "./Products.svelte";
    import Pricing from "./Pricing.svelte";
    import Blog from "./Blog.svelte";
    export let selected, dir;
    const TABS = [
      {
        title: "Products",
        Component: Products,
      },
      {
        title: "Pricing",
        Component: Pricing,
      },
      {
        title: "Blog",
        Component: Blog,
      },
    ].map((n, idx) => ({ ...n, id: idx + 1 }));
  </script>
  
  <Motion
    initial={{
      opacity: 0,
      y: 8,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      y: 8,
    }}
    let:motion
  >
    <div
      id="overlay-content"
      class="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      use:motion
    >
      <div class="absolute -top-[24px] left-0 right-0 h-[24px]" />
      <Nub {selected} />
      {#each TABS as item (item)}
        <div class="overflow-hidden">
          {#if selected === item.id}
            <Motion
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              let:motion
            >
              <div use:motion>
                <svelte:component this={item.Component} />
              </div>
            </Motion>
          {/if}
        </div>
      {/each}
    </div>
  </Motion>
  