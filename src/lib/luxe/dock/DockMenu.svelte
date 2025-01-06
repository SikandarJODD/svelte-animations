<script lang="ts">
  import {
    Motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "svelte-motion";
  import { writable } from "svelte/store";
  import { cn } from "$lib/utils";

  export const dockItemPositions = writable({});

  export let listDockApps: {
    id: string;
    icon: string;
  }[] = [];

  const activeViewStore = writable(listDockApps?.[0]?.id);
  export let handleAppDockClick = null;

  activeViewStore.subscribe((value) => {
    handleAppDockClick(value);
  });

  export let side: "top" | "bottom" = "top";
  export let size: number = 64;
  export let className: string;
  export { className as class };

  const mouseX = useMotionValue(Infinity);
  const containerX = useMotionValue(0);
  let containerRef: HTMLDivElement;
  let dockItems: HTMLDivElement[] = [];

  // update dock item positions
  function updateDockItemPosition(index: number, x: number) {
    dockItemPositions.update((positions) => ({
      ...positions,
      [listDockApps[index].id]: x,
    }));
  }

  //  create distance transform for each item
  function createDistanceTransform(index: number) {
    return useTransform(mouseX, (val) => {
      const bounds = dockItems[index]?.getBoundingClientRect() ?? {
        x: 0,
        width: 0,
        left: 0,
      };

      const XDiffToContainerX = bounds?.x - containerX.get();
      const distance = val - bounds?.width / 2 - XDiffToContainerX;

      // Update position in store
      updateDockItemPosition(index, bounds.x);

      return distance;
    });
  }
</script>

<div
  style="user-select: none;"
  class={cn("bottom-4", className)}
  {...$$restProps}
>
  <Motion let:motion>
    <div
      use:motion
      bind:this={containerRef}
      role="toolbar"
      aria-orientation="horizontal"
      aria-label="Dock Menu"
      style="user-select: none;"
      tabindex="0"
      class="h-16 items-end gap-4 rounded-full bg-[#DED8C4] border border-[#DED8C4] px-3 pb-2 flex shadow-inner shadow-neutral-300/5"
      on:mouseleave={() => mouseX.set(Infinity)}
      on:mousemove={(e) => {
        const rect = containerRef.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - rect.left);
          containerX.set(rect.x);
        }
      }}
      on:touchmove={(e) => {
        const rect = containerRef.getBoundingClientRect();
        if (rect && e.touches.length > 0) {
          mouseX.set(e.touches[0].clientX - rect.left);
          containerX.set(rect.x);
        }
      }}
      on:touchend={() => mouseX.set(Infinity)}
    >
      {#each listDockApps as dockItem, index (dockItem.id)}
        {@const distance = createDistanceTransform(index)}
        {@const widthSync = useTransform(
          distance,
          [-125, 0, 125],
          [44, 85, 44],
        )}
        {@const width = useSpring(widthSync, { stiffness: 400, damping: 25 })}
        <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
        <div
          role="button"
          tabindex={index}
          on:click={() => activeViewStore.set(dockItem.id)}
        >
          <Motion
            let:motion
            style={{ width }}
            transition={{
              bounceDamping: 300,
              bounceStiffness: 800,
              bounce: 0.3,
              duration: 0.8,
            }}
          >
            <div
              role="button"
              bind:this={dockItems[index]}
              use:motion
              class="{$activeViewStore === dockItem.id
                ? 'active ring-1 ring-slate-300'
                : ''} 
                group relative p-0.5 flex aspect-square items-center justify-center overflow-hidden rounded-full
                transition active:-translate-y-10 duration-500
                bg-[#DED8C4]
                hover:bg-[#E5DFC9]
                shadow-md
                before:absolute before:inset-0 before:rounded-full
                before:bg-gradient-to-tl
                before:from-white/40
                before:to-transparent
                before:opacity-100
                after:absolute after:inset-0 after:rounded-full
                after:bg-gradient-to-br
                after:from-transparent
                after:to-black/10
                active:duration-4000 active:ease-out
                [&.active]:before:from-white/70
                [&.active]:shadow-lg
                [&.active]:bg-[linear-gradient(110deg,#DED8C4,45%,#EDE8D5,55%,#DED8C4)]
                [&.active]:bg-[length:200%_100%]
                [&.active]:animate-shine"
            >
              <div
                class="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/30 to-black/5 opacity-50
                group-[:has(.active)]:from-white/50"
              ></div>

              <div
                class="relative z-10 transition-colors duration-300 text-neutral-600 group-hover:text-neutral-800"
              >
                {#if dockItem?.icon}
                  <div
                    class="flex flex-col items-center transition-opacity duration-300 {$activeViewStore ===
                    dockItem.id
                      ? 'opacity-100'
                      : 'opacity-60'}"
                  >
                    <img
                      src={dockItem.icon}
                      class="h-8 w-10"
                      alt={dockItem.id}
                    />
                  </div>
                {/if}
              </div>
            </div>
          </Motion>
        </div>
      {/each}
    </div>
  </Motion>
</div>

<style>
  @keyframes shine {
    0%,
    85% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  :global(.animate-shine) {
    animation: shine 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
</style>
