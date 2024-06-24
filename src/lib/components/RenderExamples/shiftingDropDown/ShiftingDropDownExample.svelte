<script lang="ts">
    import Blog from "./Blog.svelte";
    import { Motion, AnimatePresence } from "svelte-motion";
    import Products from "./Products.svelte";
    import Pricing from "./Pricing.svelte";
    let selected = 0;
    let dir: any;
    let handleSetSelected = (val: any) => {
      // console.log({ val, selected });
      if (typeof selected === "number" && typeof val === "number") {
        dir = selected > val ? "r" : "l";
      } else if (val === null) {
        dir = null;
      }
      selected = val;
      moveNub();
    };
    let TABS = [
      {
        id: 1,
        title: "Products",
        component: Products,
      },
      {
        id: 2,
        title: "Pricing",
        component: Pricing,
      },
      {
        id: 3,
        title: "Blog",
        component: Blog,
      },
    ];
  
    let left: any;
    let moveNub = (node: HTMLElement) => {
      // console.log(selected, "Selected ID");
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");
  
        if (!hoveredTab || !overlayContent) return;
        console.log(hoveredTab, overlayContent, "Hovered Tab");
  
        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();
  
        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
  
        //   setLeft(tabCenter);
        left = tabCenter;
      }
    };
  </script>
  
  <div
    class="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:mouseleave={() => handleSetSelected(null)}
      class="relative flex h-fit gap-2"
    >
      {#each TABS as item (item)}
        <button
          id="shift-tab-{item.id}"
          on:click={() => handleSetSelected(item.id)}
          on:mouseenter={() => handleSetSelected(item.id)}
          class={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
            selected === item.id
              ? " bg-neutral-800 text-neutral-100"
              : "text-neutral-400"
          }`}
        >
          <span>
            {item.title}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={`transition-transform ${selected === item.id ? "rotate-180" : ""}`}
            ><path d="m6 9 6 6 6-6" /></svg
          >
        </button>
      {/each}
      <AnimatePresence
        let:item
        list={[
          { key: 1, component: Products, id: 1 },
          { key: 2, component: Pricing, id: 2 },
          { key: 3, component: Blog, id: 3 },
        ]}
      >
        {#if selected}
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
              class="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 z-40"
              use:motion
            >
              <div class="absolute -top-[24px] left-0 right-0 h-[80px]" />
              <Motion
                animate={{ left }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                let:motion
              >
                <span
                  style="clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);"
                  class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
                  use:motion
                  use:moveNub
                >
                </span>
              </Motion>
              {#each TABS as item}
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
                        <svelte:component this={item.component} />
                      </div>
                    </Motion>
                  {/if}
                </div>
              {/each}
            </div>
          </Motion>
        {/if}
      </AnimatePresence>
    </div>
  </div>
  